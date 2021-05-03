import ApiClient from "../apiClient";
import ApiUrl from "../apiUrl";
import Header from "../header";

export default class ContactRepo {
  static async getContact() {
    const response = await ApiClient.get(ApiUrl.CONTACT, Header.getHeader());
    return response;
  }
}
