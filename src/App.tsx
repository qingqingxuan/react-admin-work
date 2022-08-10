import {
  Suspense,
  lazy,
  LazyExoticComponent,
  ComponentType,
  useReducer,
} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.less";
import Layout from "./components/Layout";
import LazyLoading from "./components/lazy";
import {
  initUserInfo,
  UserInfoContext,
  userInfoReducer,
} from "./store/redux/user";

const asyncLoadFile = import.meta.glob("/src/views/**/*.tsx");

const asyncComponents = Object.keys(asyncLoadFile).reduce((pre, cur) => {
  pre[cur.split(".")[0]] = lazy(
    asyncLoadFile[cur] as () => Promise<{ default: ComponentType }>
  );
  return pre;
}, {} as Record<string, LazyExoticComponent<ComponentType>>);

function lazyComponent(
  AsyncComponent: LazyExoticComponent<ComponentType>,
  fallback = <LazyLoading />
) {
  return (
    <Suspense fallback={fallback}>
      <AsyncComponent />
    </Suspense>
  );
}

function App() {
  const [userInfo, dispatch] = useReducer(userInfoReducer, initUserInfo);
  return (
    <UserInfoContext.Provider value={{ userInfo, dispatch }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* <Route path="/test" element={<Test />}></Route>
          <Route path="/test2" element={<Test2 />}></Route> */}
          </Route>
          <Route
            path="/login"
            element={lazyComponent(asyncComponents["/src/views/login/index"])}
          ></Route>
        </Routes>
      </BrowserRouter>
    </UserInfoContext.Provider>
  );
}

export default App;
