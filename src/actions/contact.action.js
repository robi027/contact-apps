import ContactRepo from "../data/remote/repository/ContactRepo";

export const CONTACT_REQUEST = "CONTACT_REQUEST";
export const CONTACT_SUCCESS = "CONTACT_SUCCESS";
export const CONTACT_FAILED = "CONTACT_FAILED";

function onRequestContact() {
  return {
    type: CONTACT_REQUEST,
  };
}

function onFailureContact(err) {
  return {
    type: CONTACT_FAILED,
    message: err.message,
  };
}

function onSuccessGetContact(data) {
  return {
    type: CONTACT_SUCCESS,
    data: data,
  };
}

export function getContact() {
  return async (dispatch) => {
    dispatch(onRequestContact());
    return ContactRepo.getContact()
      .then((res) => {
        dispatch(onSuccessGetContact(res));
        return res;
      })
      .catch((err) => {
        console.log("err");
        dispatch(onFailureContact(err));
        return err;
      });
  };
}
