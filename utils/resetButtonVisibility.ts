export const resetButtonVisibility = (buttonRef) => {
  const elements = buttonRef.current.children;
  const elementsArray = Array.prototype.slice.call(elements);
  elementsArray.map((e: any) => (e.style.visibility = "visible"));
};
