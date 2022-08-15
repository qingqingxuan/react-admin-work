import { Card } from "antd";

export interface PageIntroProps {
  title?: string;
  message?: string;
}

const PageIntro: React.FC<PageIntroProps> = ({
  title = "页面标题",
  message = "页面描述",
}: PageIntroProps) => {
  return (
    <Card
      title={title}
      bordered={false}
      headStyle={{ border: "none", padding: "0px 10px" }}
      bodyStyle={{ padding: "0 10px 10px 10px" }}
    >
      {message}
    </Card>
  );
};

export default PageIntro;
