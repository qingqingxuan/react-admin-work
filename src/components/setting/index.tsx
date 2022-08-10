import { Drawer } from "antd";

const AppSetting: React.FC<{
  visible: boolean;
  setVisible: (visible: boolean) => void;
}> = ({ visible, setVisible }) => {
  return (
    <>
      <Drawer
        title="Basic Drawer"
        placement="right"
        onClose={() => {
          setVisible(false);
        }}
        visible={visible}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};

export default AppSetting;
