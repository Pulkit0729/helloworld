
export class Validate {
  static isEmail(email) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) { //regex exp for email
      return true;
    } else return false;
  }
  static isPhone(phone) {
    if (!isNaN(phone) && phone.length == 10) {
      return true;
    } else return false;
  }
  static checkPassword(password) {
    if (password.length >= 6) {
      return true;
    } else return false;
  }

  static isFileImage(file) {
    return file && file['type'].split('/')[0] === 'image';
  }
  static isFileVideo(file) {
    return file && file['type'].split('/')[0] === 'video';
  }

}