import { useReducer } from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useRoutes,
} from "react-router-dom";
import "./App.less";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import {
  initPermissionState,
  PermissionContext,
  permissionReducer,
  RouteItemType,
} from "./store/redux/permission";
import {
  initUserInfo,
  UserInfoContext,
  userInfoReducer,
} from "./store/redux/user";
import Home from "./views/dashborad/home";
import WorkPlace from "./views/dashborad/work-place";
import Login from "./views/login";

function App() {
  const [userInfo, dispatch] = useReducer(userInfoReducer, initUserInfo);
  const [permissionState, permissionDispath] = useReducer(
    permissionReducer,
    initPermissionState
  );
  return (
    <UserInfoContext.Provider value={{ userInfo, dispatch }}>
      <PermissionContext.Provider
        value={{ state: permissionState, dispath: permissionDispath }}
      >
        <BrowserRouter>
          <Auth />
          <Routes>
            <Route
              path="/"
              element={<Navigate to={"/dashborad/work-place"} />}
            ></Route>
            <Route path="/login" element={<Login />}></Route>
          </Routes>
        </BrowserRouter>
      </PermissionContext.Provider>
    </UserInfoContext.Provider>
  );
}

export default App;
