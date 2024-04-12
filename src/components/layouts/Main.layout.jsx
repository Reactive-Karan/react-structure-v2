import { useState } from "react";
import {
  RightOutlined,
  LeftOutlined,
  PieChartOutlined,
  DesktopOutlined,
  FileOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button } from "antd";
import { SiderBarlogoCollapsed, SiderTopHead } from "../../assets/svg";

const { Header, Sider, Content } = Layout;

const layoutStyle = {
  height: "100vh",
  overflow: "hidden",
};

const smSiderTrigger = {
  fontSize: "16px",
  width: 44,
  height: 44,
  backgroundColor: "white",
  border: "1px solid gray",
  borderRadius: "36px",
  position: "absolute",
  zIndex: 1,
};

const getItem = (label, key, icon, children, disabled = false) => ({
  key,
  icon,
  children,
  label,
  disabled,
});

const menuItems = [
  getItem("OVERVIEW", "11", <></>),
  getItem("Home", "1", <PieChartOutlined />),
  getItem("Dashboard", "2", <DesktopOutlined />),
  getItem("My Patients", "3", <TeamOutlined />),
  getItem("My Requests", "5", <FileOutlined />),
  getItem("Directory", "4", <FileOutlined />),
  getItem("MENU", "11", <></>),
  getItem("My Community", "6", <FileOutlined />),
  getItem("My Library", "7", <FileOutlined />),
  getItem(<span>ACCOUNT</span>, "9", <></>),
  getItem("Settings", "8", <FileOutlined />),

  //   getItem("My Requests", "sub1", null, [
  //     getItem("Tom", "3"),
  //     getItem("Bill", "4"),
  //     getItem("Alex", "5"),
  //   ]),
  //   getItem("My Patients", "sub2", <TeamOutlined />, [
  //     getItem("Team 1", "6"),
  //     getItem("Team 2", "8"),
  //   ]),
];

const MainLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [collapsedWidth, setCollapsedWidth] = useState(80);
  const [openKeys] = useState(["sub1", "sub2"]);

  // Function to handle sidebar collapse and expansion
  const handleCollapseToggle = () => {
    setCollapsed(!collapsed);
  };

  // Function to handle breakpoint for collapsed width
  const handleBreakpointChange = (isBreakPoint) => {
    setCollapsedWidth(isBreakPoint ? 0 : 80);
  };

  // Trigger position styles
  const triggerPositionStyles = {
    ...smSiderTrigger,
    right: collapsedWidth === 0 ? -70 : -25,
    top: collapsedWidth === 0 ? 5 : 50,
  };

  // Sidebar width styles
  const sidebarWidth = collapsedWidth === 0 ? "50%" : "15%";

  return (
    <Layout style={layoutStyle}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        breakpoint="sm"
        onBreakpoint={handleBreakpointChange}
        collapsedWidth={collapsedWidth}
        width={sidebarWidth}
      >
        <Button
          type="text"
          icon={collapsed ? <RightOutlined /> : <LeftOutlined />}
          onClick={handleCollapseToggle}
          style={triggerPositionStyles}
        />

        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: collapsed ? 100 : 140,
            display: "flex",
          }}
        >
          {collapsed ? <SiderBarlogoCollapsed /> : <SiderTopHead />}
        </div>

        <Menu
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={menuItems}
          expandIcon={null}
          inlineCollapsed={collapsed}
          openKeys={openKeys}
          className="side-menu-dropdown"
        />
      </Sider>

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

export default MainLayout;
