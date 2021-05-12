import "react-native";
import configureMockStore from "redux-mock-store";
import {
  searchContact,
  onSuccessSearchContact,
  CONTACT_SEARCH_SUCCESS,
} from "../src/actions/contact.action";
import thunk from "redux-thunk";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

it("Search data", async () => {
  const sample = [
    { firstName: "Robi" },
    { firstName: "Dwi" },
    { firstName: "Setiawan" },
  ];

  const expected = [
    {
      type: CONTACT_SEARCH_SUCCESS,
      data: [{ firstName: "Robi" }],
    },
    {
      type: CONTACT_SEARCH_SUCCESS,
      data: [],
    },
    {
      type: CONTACT_SEARCH_SUCCESS,
      data: [{ firstName: "Setiawan" }],
    },
  ];

  const store = mockStore("Loading...");

  const firstTestCase = await store.dispatch(searchContact(sample, "Robi"));
  const secondTestCase = await store.dispatch(searchContact(sample, "robi"));
  const thirdTestCase = await store.dispatch(searchContact(sample, "a"));
  const action = store.getActions();
  // console.log(action);
  // expect(action[0]).toEqual(onSuccessSearchContact(datas));
  expect(action).toEqual(expected);
});

it("Search Data Twice", async () => {
  const sample = [{ firstName: "Fegi" }, { firstName: "Eriyani" }];

  const expected = {
    type: CONTACT_SEARCH_SUCCESS,
    data: [{ firstName: "Fegi" }],
  };

  const store = mockStore("Loading...");
  const firstTestCase = await store.dispatch(searchContact(sample, "F"));
  const action = store.getActions();
  expect(action[0]).toEqual(expected);
});
