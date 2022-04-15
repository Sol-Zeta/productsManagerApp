export const calculatePages = (items: number, itemsPerPage: number) =>
  items % itemsPerPage === 0 ? items / itemsPerPage : Math.floor(items / itemsPerPage + 1);
