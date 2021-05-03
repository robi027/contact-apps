import axios from "axios";

async function get(url, headers, params) {
  try {
    let response = await axios.get(url, {
      headers: headers,
      timeout: 5000,
      params: params,
    });
    return {
      statusCode: response.status,
      data: response.data,
    };
  } catch (e) {
    throw {
      statusCode: e.response?.data?.stat_code || 500,
      message: e.response.datsa.stat_msg || "Please, Check your connection",
    };
  }
}

async function post(url, headers, body) {
  try {
    let response = await axios.post(url, body, {
      headers: headers,
      timeout: 5000,
    });
    return {
      statusCode: response.status,
      data: response.data,
    };
  } catch (e) {
    throw {
      statusCode: e.response?.data?.stat_code || 500,
      message: e.response.data.stat_msg || "Please, Check your connection",
    };
  }
}

async function put(url, headers, body) {
  try {
    let response = await axios.put(url, body, {
      headers: headers,
      timeout: 5000,
    });
    return {
      statusCode: response.status,
      data: response.data,
    };
  } catch (e) {
    throw {
      statusCode: e.response?.data?.stat_code || 500,
      message: e.response.data.stat_msg || "Please, Check your connection",
    };
  }
}

async function del(url, headers) {
  try {
    let response = await axios.delete(url, {
      headers: headers,
      timeout: 5000,
    });
    return {
      statusCode: response.status,
      data: response.data,
    };
  } catch (e) {
    throw {
      statusCode: e.response?.data?.stat_code || 500,
      message: e.response.data.stat_msg || "Please, Check your connection",
    };
  }
}

export default {
  get,
  post,
  put,
  del,
};
