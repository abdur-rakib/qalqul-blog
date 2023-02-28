export const truncate = (string, value) => {
  return string.substring(0, value);
};

export const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
