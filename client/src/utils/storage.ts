/**
 * It gets the value of a key from localStorage, parses it as JSON, and returns it
 * @param {string} key - string - The key of the item you want to get from localStorage
 * @returns A function that takes a key and returns the value of that key in localStorage.
 */
export const getLocalStorage = (key: string): null | unknown => {
  if (!key || typeof window === 'undefined') {
    return null;
  }

  try {
    const item = window.localStorage.getItem(key);

    // Parse stored json or if none return initialValue
    return item ? JSON.parse(item) : null;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    return null;
  }
};

/**
 * It sets a value in localStorage
 * @param {string} key - string - The key to store the value under.
 * @param {unknown} value - unknown - This is the value that we want to store in localStorage.
 * @returns A function that takes two arguments, key and value, and sets the value of the key in
 * localStorage.
 */
export const setLocalStorage = (key: string, value: string): void => {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    window.localStorage.setItem(key, value);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
};

/**
 * If the key is not empty and the window object exists, remove the item from localStorage.
 * @param {string} key - The key of the item you want to get from localStorage.
 * @returns the value of the key in localStorage.
 */
export const removeLocalStorage = (key: string): void => {
  if (!key || typeof window === 'undefined') return;
  window.localStorage.removeItem(key);
};
