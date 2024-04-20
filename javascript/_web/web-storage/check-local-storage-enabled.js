const isLocalStorageEnabled = () => {
  try {
    const key = `__storage__test`;
    window.localStorage.setItem(key, null);
    window.localStorage.removeItem(key);
    return true;
    console.log('LocalStorage is currently enabled')
  } catch (e) {
    return false;
    console.log('LocalStorage is currently disabled.')
  }
};