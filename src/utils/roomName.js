const generateCharacterNum = () => {
  const charCode = Math.floor(Math.random() * 35);
  if (charCode > 9) {
    return charCode - 9 + 65;
  }
  return charCode + 48;
};

const generateRoomName = () => {
  const charCodes = Array(4).fill(1).map(generateCharacterNum);
  return String.fromCharCode(...charCodes);
};

export { generateRoomName };
