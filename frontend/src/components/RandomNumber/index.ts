const RandomNumber = () => {
  var items = [
    1, 2, 3, 5, 7, 8, 9, 10, 11, 12, 13, 14, 19, 20, 21, 24, 26, 27, 28, 29, 30,
    31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 49, 50, 56,
  ];
  let item = items[Math.floor(Math.random() * items.length)];
  console.log(typeof item);

  const numberToName = (item: number) => {
    if (item === 1) {
      return `Philipe Jensen ${item}`;
    } else if (item === 2) {
      return `Jão  ${item}`;
    } else if (item === 3) {
      return `Xepa ${item}`;
    } else if (
      item === 5 ||
      item === 7 ||
      item === 10 ||
      item === 11 ||
      item === 15 ||
      item === 19 ||
      item === 26 ||
      item === 29 ||
      item === 30 ||
      item === 50
    ) {
      return `Leleo ${item}`;
    } else if (item === 8) {
      return `Felipe ${item}`;
    } else if (item === 9 || item === 21) {
      return `Pimpão ${item}`;
    } else if (item === 12) {
      return `Monteiro ${item}`;
    } else if (item === 13) {
      return `May ${item}`;
    } else if (item === 20) {
      return `Bugs ${item}`;
    } else if (item === 24 || item === 56) {
      return `Vev ${item}`;
    } else if (item === 27) {
      return `Tic ${item}`;
    } else if (item === 28) {
      return `Helo Ams ${item}`;
    } else if (
      item === 31 ||
      item === 32 ||
      item === 33 ||
      item === 34 ||
      item === 35 ||
      item === 36 ||
      item === 37 ||
      item === 38 ||
      item === 39 ||
      item === 40 ||
      item === 41 ||
      item === 42 ||
      item === 43 ||
      item === 44 ||
      item === 45 ||
      item === 46
    ) {
      return `Izumi ${item}`;
    } else if (item === 49) {
      return `Geobanna ${item}`;
    }
  };

  return numberToName(item) || '';
};

export default RandomNumber;
