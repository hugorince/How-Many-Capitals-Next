export const setVisibility = () => {
  const elements = document.querySelectorAll(".button-question");
  const elementsArray = Array.prototype.slice.call(elements);
  elementsArray.map((e: any) => (e.style.visibility = "visible"));
};
