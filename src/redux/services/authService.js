import axios from "../../axios/axios";

export function signIn(credentials) {
  return new Promise((resolve, reject) => {
    axios
      .post("/superadmin/v1/login", credentials)
      .then((response) => {
        if (response.data.status === true) {
          //todo: add bearer to auth token for authentication purposes
          resolve({ auth_token: response.data.auth_token });
        } else {
          reject(response.data.error);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export function signUp(credentials) {
  return new Promise((resolve, reject) => {
    axios
      .post("/superadmin/v1/register", credentials)
      .then((response) => {
        if (response.data.status === true) {
          resolve();
        }
        reject(response.data.error);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export function resetPassword(credentials) {
  return new Promise((resolve, reject) => {
    axios
      .put("/bot/v1/password/forgot/", credentials)
      .then((response) => {
        if (response.data.status === true) {
          resolve();
        }
        reject(response.data.error);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
