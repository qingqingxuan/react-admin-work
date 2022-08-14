import { post } from "@/api/http";
import { login } from "@/api/url";
import {
  jumpLoginPageAction,
  saveInfoAction,
  UserInfoContext,
} from "@/store/redux/user";
import { UserInfoType } from "@/types";
import { Button } from "antd";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import style from "./index.module.less";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(UserInfoContext);
  useEffect(() => {
    dispatch(jumpLoginPageAction());
  }, []);
  async function onLogin() {
    const result = await post<UserInfoType>({
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
          isLogined: true,
        })
      );
      navigate("/dashborad/home", { replace: true });
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
