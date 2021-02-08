export const translateDateToES = date => {
  if (date.includes("February")) {
    return date.replace("February", "Febrero");
  }
};
