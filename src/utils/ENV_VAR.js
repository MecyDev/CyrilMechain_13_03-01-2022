export function setStorage() {
  if (localStorage.getItem("userToken") === null) {
    return sessionStorage;
  } else {
    return localStorage;
  }
}
