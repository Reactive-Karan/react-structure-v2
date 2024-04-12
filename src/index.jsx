import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import store from "./redux/store/store";
import App from "./app/App";
import { Provider } from "react-redux";
import { ConfigProvider, Spin } from "antd";
import axios from "axios";
import "./axios/axiosInstance";
import "./assets/styles/reset-css.scss";
import "./assets/styles/variables.scss";
import "./index.scss";
import LanguageProvider from "./context/LanguageProvider";
import generateAntdTheme from "./assets/styles/theming/theme";
import { BASE_URL } from "./constants";
import { HelmetProvider } from "react-helmet-async";
// import { SplashScreen } from "./assets/svg/splash_logo";
import gif from "./assets/synapp_360.gif";

axios.defaults.baseURL = BASE_URL;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LanguageProvider>
      <Provider store={store}>
        <ConfigProvider theme={generateAntdTheme()}>
          <HelmetProvider>
            <Suspense
              fallback={
                <Spin
                  fullscreen
                  indicator={<img src={gif} className="pulse" />}
                />
              }
            >
              <App />
            </Suspense>
          </HelmetProvider>
        </ConfigProvider>
      </Provider>
    </LanguageProvider>
  </React.StrictMode>
);
