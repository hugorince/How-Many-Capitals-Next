export const resetButtonVisibility = (
  buttonRef: React.MutableRefObject<any>
) => {
  const elements = buttonRef.current.children;
  const elementsArray = Array.prototype.slice.call(elements);
  elementsArray.map((e: any) => (e.style.visibility = "visible"));
};
