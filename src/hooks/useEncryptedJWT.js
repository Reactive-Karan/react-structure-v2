import { useState, useEffect } from "react";
import CryptoJS from "crypto-js";
import { encrypter } from "../constants";

// Custom hook to manage encrypted JWT in local storage
const useEncryptedJWT = (key) => {
  const [token, setTokenInternal] = useState(null);

  // Retrieve the token from local storage on initial load
  useEffect(() => {
    const storedToken = localStorage.getItem(key);
    if (storedToken) {
      // Decrypt the token and set the state
      const decryptedToken = decryptToken(
        storedToken,
        encrypter.LS_ENCRYPTION_KEY
      );
      setTokenInternal(decryptedToken);
    }
  }, [key]);

  // Function to encrypt and set the token in local storage
  const setToken = (newToken) => {
    const encryptedToken = encryptToken(newToken, encrypter.LS_ENCRYPTION_KEY);
    localStorage.setItem(key, encryptedToken);
    setTokenInternal(newToken);
  };

  // Function to remove the token from local storage
  const removeToken = () => {
    localStorage.removeItem(key);
    setTokenInternal(null);
  };

  // Function to encrypt the token
  const encryptToken = (token, key) => {
    return CryptoJS.AES.encrypt(token, key).toString();
  };

  // Function to decrypt the token
  const decryptToken = (encryptedToken, key) => {
    const bytes = CryptoJS.AES.decrypt(encryptedToken, key);
    return bytes.toString(CryptoJS.enc.Utf8);
  };

  return [token, setToken, removeToken];
};

export default useEncryptedJWT;
