import axios, { AxiosRequestConfig } from 'axios';

/* Creating an axios instance */
const api = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
  withCredentials: true,
});

/**
 * It makes a request to the API, and if it fails, it shows an alert with the error message
 * @param {string} url - string - The URL to make the request to.
 * @param {AxiosRequestConfig} [options] - Axios configuration object
 * @returns {Promise<Error>} if request failse {Promise<data>} if it suceeds
 */
const makeRequest = async <T>(url: string, options?: AxiosRequestConfig): Promise<T | Error> => {
  try {
    const { data } = await api(url, options);
    return data;
  } catch (error) {
    let errorMessage = '';
    if (axios.isAxiosError(error)) {
      errorMessage = error?.response?.data?.message ?? 'Sorry, something went wrong!';
    }

    // eslint-disable-next-line
    alert(errorMessage);
    return Promise.reject(new Error(errorMessage));
  }
};

export default makeRequest;
