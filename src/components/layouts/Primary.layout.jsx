import { Layout } from "antd";

const { Header, Content } = Layout;

const layoutStyle = {
  height: "100vh",
  overflow: "hidden",
};

const PrimaryLayout = ({ children }) => {
  return (
    <Layout style={layoutStyle}>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: "#fff", // Use appropriate color
          }}
        ></Header>

        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: "#fff", // Use appropriate color
            borderRadius: "8px", // Use appropriate radius
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default PrimaryLayout;
