import { Card, Layout, Space } from "antd";

const { Content } = Layout;

const contentStyle = {
  textAlign: "center",
  minHeight: 120,
  color: "black",
  backgroundColor: "#F8F9FA",
};

const layoutStyle = {
  height: "100vh",
};

const cardStyle = {
  minWidth: 300,
  minHeight: 300,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const AuthSecondaryLayout = ({
  children,
  isBack = true,
  languagaeButton = false,
}) => {
  return (
    <Layout style={layoutStyle}>
      <Layout>
        <Content style={contentStyle}>
          <Space direction="vertical" size={20}>
            {/* Todo : Add Back Header component */}
            {isBack && <h1>{`< Back`} </h1>}
            {children && <Card style={cardStyle}>{children}</Card>}
          </Space>
        </Content>
        {/* Todo : Add language dropper component */}
        {languagaeButton && <h1>Language</h1>}
      </Layout>
    </Layout>
  );
};

export default AuthSecondaryLayout;
