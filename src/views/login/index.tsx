import { saveInfoAction, UserInfoContext } from "@/store/redux/user";
import { Button } from "antd";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import style from "./index.module.less";
const Login: React.FC = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(UserInfoContext);
  function onLogin() {
    dispatch(saveInfoAction({ isLogined: true, userName: "admin" }));
    navigate("/", { replace: true });
  }
  return (
    <>
      <div className={style["login-wrapper"]}>
        <Button onClick={onLogin}>登录</Button>
      </div>
    </>
  );
};

export default Login;
