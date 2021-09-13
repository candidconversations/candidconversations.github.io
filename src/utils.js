export const translateDateToES = (date) => {
  if (date.includes("February")) {
    return date.replace("February", "Febrero");
  } else if (date.includes("September")) {
    return date.replace("September", "Septiembre");
  } else if (date.includes("October")) {
    return date.replace("October", "Octubre");
  }
};
