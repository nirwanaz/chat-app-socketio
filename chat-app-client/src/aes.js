let crypto = require("crypto-js");
let key = "ourejhufhue2349ueir9bforrw";

export const DoEncrypt = (text) => {
  let encrypted = crypto.AES.encrypt(text, key)
  return encrypted
}

export const DoDecrypt = (cipher, username) => {
  if (cipher.startsWith("Welcome")) {
    return cipher
  }

  if (cipher.startsWith(username)) {
    return cipher
  }

  let decrypted = crypto.AES.decrypt(cipher, key)
  return decrypted
}