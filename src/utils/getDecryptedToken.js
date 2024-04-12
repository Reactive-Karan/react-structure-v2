import CryptoJS from "crypto-js";
import { encrypter } from "../constants";

export const getDecryptedToken = (storageKey) => {
  // Get the encrypted token from local storage
  const encryptedToken = localStorage.getItem(storageKey);

  if (encryptedToken) {
    // Decrypt the token using AES encryption
    const decryptedToken = CryptoJS.AES.decrypt(
      encryptedToken,
      encrypter.LS_ENCRYPTION_KEY
    ).toString(CryptoJS.enc.Utf8);
    return decryptedToken;
  }

  return null;
};
