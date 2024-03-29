export const goodAnswerStyle = (elem: any) => {
  elem.style.backgroundColor = "lightgreen";
  elem.style.boxShadow = "0px 0px 10px lightgreen";
  elem.animate(
    [
      { transform: "scale(1)" },
      { transform: "scale(1.2)" },
      { transform: "scale(1)" },
    ],
    {
      duration: 400,
      iterations: 1,
    }
  );
};
