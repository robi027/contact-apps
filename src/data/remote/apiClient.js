import axios from "axios";

async function get(url, headers, params) {
  try {
    let response = await axios.get(url, {
      headers: headers,
      timeout: 5000,
      params: params,
    });
    console.log("[Response - " + url + "]");
    console.log(response);
    return {
      statusCode: response.status,
      data: response.data,
    };
  } catch (e) {
    console.log("[Error - " + url + "]");
    console.log(e);
    throw {
      statusCode: e.response.status || 500,
      message: e.response.data.message || "Please, Check your connection",
    };
  }
}

async function post(url, headers, body) {
  try {
    let response = await axios.post(url, body, {
      headers: headers,
      timeout: 5000,
    });
    console.log("[Response - " + url + "]");
    console.log(response);
    return {
      statusCode: response.status,
      data: response.data,
    };
  } catch (e) {
    console.log("[Error - " + url + "]");
    console.log(e);
    throw {
      statusCode: e.response.status || 500,
      message: e.response.data.message || "Please, Check your connection",
    };
  }
}

async function put(url, headers, body) {
  try {
    let response = await axios.put(url, body, {
      headers: headers,
      timeout: 5000,
    });
    console.log("[Response - " + url + "]");
    console.log(response);
    return {
      statusCode: response.status,
      data: response.data,
    };
  } catch (e) {
    console.log("[Error - " + url + "]");
    console.log(e);
    throw {
      statusCode: e.response.status || 500,
      message: e.response.data.message || "Please, Check your connection",
    };
  }
}

async function del(url, headers) {
  try {
    let response = await axios.delete(url, {
      headers: headers,
      timeout: 5000,
    });
    console.log("[Response - " + url + "]");
    console.log(response);
    return {
      statusCode: response.status,
      data: response.data,
    };
  } catch (e) {
    console.log("[Error - " + url + "]");
    console.log(e);
    throw {
      statusCode: e.response.status || 500,
      message: e.response.data.message || "Please, Check your connection",
    };
  }
}

export default {
  get,
  post,
  put,
  del,
};
