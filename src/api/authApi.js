import axiosClient from "./axiosClient";

const authApi = {
  signUp: ({ email, password, firstname, lastname, gender, day, month, year }) => {
    const url = '/auth/signup';
    return axiosClient.post(url, { email, password, firstname, lastname, gender, day, month, year });
  },

  signIn: ({ email, password }) => {
    const url = '/auth/signin';
    return axiosClient.post(url, { email, password });
  },

  verifyEmail: ({ mailCode }) => {
    const url = '/verify/email';
    return axiosClient.put(url, { mailCode });
  }
}

export default authApi;