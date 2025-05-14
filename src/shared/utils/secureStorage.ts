import CryptoJS from 'crypto-js'

export const encrypt = (data: string) => {
  return CryptoJS.AES.encrypt(data, process.env.REACT_APP_SECRET_KEY as string).toString()
}

export const decrypt = (cipher: string) => {
  try {
    const bytes = CryptoJS.AES.decrypt(cipher, process.env.REACT_APP_SECRET_KEY as string)
    return bytes.toString(CryptoJS.enc.Utf8)
  } catch (e) {
    return ''
  }
}
