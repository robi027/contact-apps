import {
  CONTACT_FAILED,
  CONTACT_REQUEST,
  CONTACT_SUCCESS,
} from "../actions/contact.action";

const initState = {
  isLoading: true,
  message: "",
};

export default function contact(state = initState, action) {
  switch (action.type) {
    case CONTACT_REQUEST:
      return {
        isLoading: true,
        ...state,
      };
    case CONTACT_SUCCESS:
      return {
        isLoading: true,
        data: action.data,
      };
    case CONTACT_FAILED:
      return {
        isLoading: false,
        message: action.message,
      };
    default:
      return state;
  }
}
