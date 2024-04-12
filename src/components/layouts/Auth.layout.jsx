import { Layout } from "antd";
import Sider from "antd/es/layout/Sider";
import { Carousel } from "antd";
import { AuthCarousalImage1 } from "../../assets/svg";

const { Content } = Layout;
const contentCarousalStyle = {
  height: "100vh",
  color: "#fff",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  background: "#364d79",
};

const contentStyle = {
  textAlign: "center",
  minHeight: 120,
  color: "#black",
  backgroundColor: "#F8F9FA",
};

const layoutStyle = {
  height: "100vh",
};

const siderStyle = {
  textAlign: "center",
  color: "black",
};
const AuthLayout = ({ children, isBack = true, languagaeButton = true }) => {
  return (
    <Layout style={layoutStyle}>
      <Sider width="50%" style={siderStyle}>
        <Carousel autoplay speed={1000} fade>
          <div>
            <h3 style={contentCarousalStyle}>
              <AuthCarousalImage1 />
            </h3>
          </div>
          <div>
            <h3 style={contentCarousalStyle}>2</h3>
          </div>
          <div>
            <h3 style={contentCarousalStyle}>3</h3>
          </div>
          <div>
            <h3 style={contentCarousalStyle}>4</h3>
          </div>
        </Carousel>
      </Sider>
      <Layout>
        <Content style={contentStyle}>
          {isBack && <h1>{`< Back`} </h1>}
          {children}
        </Content>
        {languagaeButton && <h1>Language</h1>}
      </Layout>
    </Layout>
  );
};

export default AuthLayout;
