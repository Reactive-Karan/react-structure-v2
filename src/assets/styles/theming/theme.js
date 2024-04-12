// theme.js

const generateAntdTheme = () => {
  return {
    token: {
      colorPrimary: "#1A64AF",
      // fontFamily: "Poppins",
      colorLink: "#1A64AF",
    },
    components: {
      Typography: {
        fontSizeHeading1: 35,
        fontSizeHeading2: 20,
        fontSizeHeading3: 16,
        fontSizeHeading4: 14,
        fontSizeHeading5: 12,
        titleMarginBottom: "0",
        fontWeightStrong: 600,
        colorTextDisabled: "rgb(159, 199, 255)",
      },
      Layout: {
        siderBg: "rgb(0, 74, 84)",
        zeroTriggerWidth: 50,
        zeroTriggerHeight: 60,
      },
      Input: {
        fontSize: 12,
        controlHeight: 40,
      },
      InputNumber: {
        fontSize: 12,
        controlHeight: 37,
      },
      Form: {
        fontSize: 12,
        labelFontSize: 12,
        marginLG: 15,
      },
      Select: {
        fontSize: 12,
        controlHeight: 37,
        boxShadowSecondary:
          "0 6px 10px 0 rgba(0, 0, 0, 0.02), 0 3px 6px -4px rgba(0, 0, 0, 0.02), 0 9px 28px 8px rgba(0, 0, 0, 0.02)",
      },
      Button: {
        controlHeight: 46,
        colorBgContainerDisabled: "rgb(159, 199, 255)",
        colorTextDisabled: "rgb(255, 255, 255)",
        colorPrimaryHover: "#134e8a",
      },
      Menu: {
        itemMarginBlock: 20,
        itemSelectedColor: "rgb(243, 248, 251)",
        itemHoverBg: "rgb(243, 248, 251)",
        itemHoverColor: "rgb(0, 74, 84)",
        itemColor: "rgb(204, 219, 221)",
        itemActiveBg: "rgb(2, 65, 74)",
        itemBg: "rgb(0, 74, 84)",
        itemMarginInline: 15,
        itemSelectedBg: "rgb(2, 65, 74)",
      },
      Table: {
        borderColor: "rgb(255, 255, 255)",
        headerBg: "rgb(255, 255, 255)",
        colorBorderSecondary: "rgb(255, 255, 255)",
        colorTextHeading: "#464748",
        colorText: "#9C9FA6",
        fontSize: "12px",
        rowHoverBg: "#FFFFFF",
        padding: 8,
      },
      DatePicker: {
        controlHeight: 40,
        fontSize: 12,
      },
      Card: {
        paddingLG: 24,
      },
      List: {
        lineType: "none",
      },
    },
  };
};

export default generateAntdTheme;
