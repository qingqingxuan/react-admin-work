import {
  FullscreenOutlined,
  BellOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import { Avatar, Badge, List, Popover, Space } from "antd";
import { useRef } from "react";
import { useFullscreen, useToggle } from "react-use";
import ToolbarStyle from "./index.module.less";

const data = [
  {
    title: "标题 1",
    desc: "这是描述",
  },
  {
    title: "标题 2",
    desc: "这是描述这是描述这是描述",
  },
  {
    title: "标题 3",
    desc: "这是描述",
  },
  {
    title: "标题 4",
    desc: "这是描述这是描述这是描述",
  },
];

const PopoverContent = (
  <>
    <div className={ToolbarStyle["content-title-wrapper"]}>
      <span className={ToolbarStyle.title}>消息列表</span>
    </div>
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
            title={<a href="https://ant.design">{item.title}</a>}
            description={item.desc}
          />
        </List.Item>
      )}
    />
  </>
);

const Toolbar: React.FC = () => {
  const ref = useRef(document.documentElement);
  const [show, toggle] = useToggle(false);
  const isFullscreen = useFullscreen(ref, show, {
    onClose: () => toggle(false),
  });
  function onFullscreenClick() {
    toggle(!isFullscreen);
  }
  function onReloadClick() {
    window.location.reload();
  }
  return (
    <Space size={"large"}>
      <FullscreenOutlined
        className={ToolbarStyle["icon-style"]}
        onClick={onFullscreenClick}
      />
      <ReloadOutlined
        className={ToolbarStyle["icon-style"]}
        onClick={onReloadClick}
      />
      <Popover content={PopoverContent}>
        <Badge count={5}>
          <BellOutlined className={ToolbarStyle["icon-style"]} />
        </Badge>
      </Popover>
    </Space>
  );
};

export default Toolbar;
