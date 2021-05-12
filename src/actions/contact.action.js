import { Alert } from "react-native";
import VAlert from "../components/VAlert";
import ContactRepo from "../data/remote/repository/ContactRepo";

export const CONTACT_REQUEST = "CONTACT_REQUEST";
export const CONTACT_GET_SUCCESS = "CONTACT_GET_SUCCESS";
export const CONTACT_ADD_SUCCESS = "CONTACT_ADD_SUCCESS";
export const CONTACT_UPDATE_SUCCESS = "CONTACT_UPDATE_SUCCESS";
export const CONTACT_DELETE_SUCCESS = "CONTACT_DELETE_SUCCESS";
export const CONTACT_FAILED = "CONTACT_FAILED";
export const CONTACT_SEARCH_SUCCESS = "CONTACT_SEARCH_SUCCESS";

function onRequestContact() {
  return {
    type: CONTACT_REQUEST,
  };
}

function onFailureContact(err) {
  VAlert.error(err.message);
  return {
    type: CONTACT_FAILED,
    message: err.message,
  };
}

function onSuccessGetContact(data) {
  return {
    type: CONTACT_GET_SUCCESS,
    data: data,
  };
}

export function getContact(dispatch) {
  if (dispatch == null) {
    return async (dispatch) => {
      dispatch(onRequestContact());
      return ContactRepo.getContact()
        .then((res) => {
          dispatch(onSuccessGetContact(res));
          return res;
        })
        .catch((err) => {
          dispatch(onFailureContact(err));
          return err;
        });
    };
  } else {
    return ContactRepo.getContact()
      .then((res) => {
        dispatch(onSuccessGetContact(res));
        return res;
      })
      .catch((err) => {
        dispatch(onFailureContact(err));
        return err;
      });
  }
}

function onSuccessAddContact(navigation, data) {
  VAlert.success(data.data.message, navigation);
  return {
    type: CONTACT_ADD_SUCCESS,
  };
}

export function addContact(navigation, data) {
  return async (dispatch) => {
    dispatch(onRequestContact());
    return ContactRepo.addContact(data)
      .then((res) => {
        dispatch(onSuccessAddContact(navigation, res));
        getContact(dispatch);
        return res;
      })
      .catch((err) => {
        dispatch(onFailureContact(err));
        return err;
      });
  };
}

function onSuccessUpdateContact(navigation, data) {
  VAlert.success(data.data.message, navigation);
  return {
    type: CONTACT_UPDATE_SUCCESS,
  };
}

export function updateContact(navigation, data) {
  return async (dispatch) => {
    dispatch(onRequestContact());
    return ContactRepo.updateContact(data)
      .then((res) => {
        dispatch(onSuccessUpdateContact(navigation, res));
        getContact(dispatch);
        return res;
      })
      .catch((err) => {
        dispatch(onFailureContact(err));
        return err;
      });
  };
}

function onSuccessDeleteContact(navigation, data) {
  VAlert.success(data.data.message, navigation);
  return {
    type: CONTACT_DELETE_SUCCESS,
  };
}

export function deleteContact(navigation, id) {
  return async (dispatch) => {
    dispatch(onRequestContact());
    return ContactRepo.deleteContact(id)
      .then((res) => {
        dispatch(onSuccessDeleteContact(navigation, res));
        getContact(dispatch);
        return res;
      })
      .catch((err) => {
        dispatch(onFailureContact(err));
        return err;
      });
  };
}

export function onSuccessSearchContact(data) {
  return {
    type: CONTACT_SEARCH_SUCCESS,
    data: data,
  };
}

export function searchContact(data, keyword) {
  return (dispatch) => {
    const list =
      data == null
        ? []
        : data.filter((item) => item.firstName.includes(keyword));
    dispatch(onSuccessSearchContact(list));
    return list;
  };
}
