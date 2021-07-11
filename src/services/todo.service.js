export function addToLocalStorage(data) {
  data.map((todo, idx) => (todo.id = idx));
  return localStorage.setItem("TodoReactMUI", JSON.stringify(data));
}

export function getLocalStorage() {
  return JSON.parse(localStorage.getItem("TodoReactMUI"));
}
