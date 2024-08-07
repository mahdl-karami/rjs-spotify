function setCookie(name, value, exdays = 3550000) {
  //! default expire time = 1h ( 3600 * 1000 ms)
  const d = new Date();
  d.setTime(d.getTime() + exdays);
  let expires = "expires=" + d.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

export default setCookie;
