import { Spin } from "antd";
import { FC } from "react";

const LazyLoading: FC = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Spin tip="加载中…"></Spin>
    </div>
  );
};

export default LazyLoading;
