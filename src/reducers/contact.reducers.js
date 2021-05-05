import {
  CONTACT_FAILED,
  CONTACT_REQUEST,
  CONTACT_GET_SUCCESS,
  CONTACT_ADD_SUCCESS,
  CONTACT_SEARCH_SUCCESS,
} from "../actions/contact.action";

const initState = {
  isLoading: true,
  message: "",
  listFilter: [],
};

export default function contact(state = initState, action) {
  switch (action.type) {
    case CONTACT_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case CONTACT_GET_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.data,
      };
    case CONTACT_FAILED:
      return {
        ...state,
        isLoading: false,
        message: action.message,
      };
    case CONTACT_ADD_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case CONTACT_SEARCH_SUCCESS:
      return {
        ...state,
        listFilter: action.data,
      };
    default:
      return state;
  }
}
