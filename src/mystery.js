export const mystery2 = (num) => {
  // some of these could probably be combined
  if (num % 4 === 0) {
    if (num % 100 === 0) {
      return !(num % 400);
    }
    return true;
  }

  return false;
};
