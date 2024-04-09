export const routes = {
  DEFAULT_BASE_REDIRECT: "/*",
  ROOT: "/web-app",
  DEFAULT_THROW: "/login",
  DEFAULT_WEB_REDIRECT: "web-app/*",
  SIGN_IN: "/login",
  SIGN_UP: "/signup",
  FORGOT_PASSWORD: "/forgot-password",
  LOGOUT: "/logout",
  FORGOT_PASSWORD_VERIFICATION: "/forgot-password-verification",
  OTP_VERIFICATION: "/otp-verification",
  OTP_VERIFICATION_EMAIL: "/otp-verification-email",
  OTP_VERIFICATION_PHONE: "/otp-verification-phone",
  SET_NEW_PASSWORD: "/set-new-password",
  RESET_PASSWORD: "/reset-password",
};

export const baseRouteMaker = (route) => {
  return routes.ROOT + route;
};

export const baseRouteMakerForSuperAdmin = (route) => {
  return routes.SUPER_ADMIN_ROOT + route;
};
