const setCookie = (value, name = 'token') => {
  const now = new Date();
  now.setTime(now.getTime() + 15 * 60 * 1000);
  const expires = now.toUTCString();
  document.cookie = `${name}=${value};expires=${expires};path=/`;
};

export default setCookie;
