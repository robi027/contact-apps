export const isEmpty = (data) => {
  switch (typeof data) {
    case "string":
      return data.length == 0 ? true : false;
    case "undefined":
      return true;
    case "object":
      return data == null ? true : data.length == 0 ? true : false;
    default:
      return true;
  }
};
