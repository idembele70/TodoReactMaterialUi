export function addToLocalStorage(data) {
  return localStorage.setItem("TodoReactMUI", JSON.stringify(data));
}

export function getLocalStorage() {
  return JSON.parse(localStorage.getItem("TodoReactMUI"));
}
