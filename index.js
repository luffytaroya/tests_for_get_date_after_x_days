var addDays = require("date-fns/addDays");

const ModifiedDate = (days) => {
  const result = addDays(new Date(2020, 8, 22), days);
  let value = `${result.getDate()}-${result.getMonth()}-${result.getFullYear()}`;
  console.log(value);
  return value;
};

module.exports = ModifiedDate;
