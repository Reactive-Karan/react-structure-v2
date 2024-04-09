import { useState } from "react";

const useUserToken = (key) => {
  const [userToken, setUserTokenInternal] = useState(() => {
    const tempToken = localStorage.getItem(key);
    return tempToken ? tempToken : null;
  });

  /* function definition to update the token value */
  const setUserToken = (newToken) => {
    localStorage.setItem(key, newToken);
    setUserTokenInternal(newToken);
  };
  /* function definition to update the token value */

  return [userToken, setUserToken];
};

export default useUserToken;
