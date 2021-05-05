import ApiClient from "../apiClient";
import ApiUrl from "../apiUrl";
import Header from "../header";

export default class ContactRepo {
  static async getContact() {
    const response = await ApiClient.get(ApiUrl.CONTACT, Header.getHeader());
    return response;
  }

  static async addContact(data) {
    const response = await ApiClient.post(
      ApiUrl.CONTACT,
      Header.getHeader(),
      data
    );
    return response;
  }

  static async updateContact(data) {
    var id = data.id;
    delete data.id;
    const response = await ApiClient.put(
      ApiUrl.CONTACT + "/" + id,
      Header.getHeader(),
      data
    );
    return response;
  }

  static async deleteContact(id) {
    const response = await ApiClient.del(
      ApiUrl.CONTACT + "/" + id,
      Header.getHeader()
    );
    return response;
  }
}
