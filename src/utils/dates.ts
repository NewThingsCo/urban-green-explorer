/** Gets the season of the year. */
function getSeason(): 'autumn' | 'summer' | 'spring' | 'winter' {
  const month = new Date().getMonth() + 1;
  switch (month) {
    case 4:
    case 5:
      return 'spring';
    case 6:
    case 7:
    case 8:
      return 'summer';
    case 9:
    case 10:
      return 'autumn';
    default:
      return 'winter';
  }
}

export { getSeason };
