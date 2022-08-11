import { post } from "@/api/http";
import { login } from "@/api/url";
import { saveInfoAction, UserInfoContext } from "@/store/redux/user";
import { Button } from "antd";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import style from "./index.module.less";
const Login: React.FC = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(UserInfoContext);
  async function onLogin() {
    const result = await post({
      url: login,
      data: {
        username: "admin",
        password: "12346",
      },
    });
    if (result.code === 200) {
      const data = result.data;
      dispatch(
        saveInfoAction({
          userName: data.userName,
          nickName: data.nickName,
          roleId: data.roleId,
          userId: data.userId,
          token: data.token,
        })
      );
      navigate("/", { replace: true });
    }
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
