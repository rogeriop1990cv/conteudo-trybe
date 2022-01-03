const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase())
  }, 200);
};

module.exports = uppercase;
