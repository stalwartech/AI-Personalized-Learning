module.exports = () => {
  return `CERT-${Date.now()}-${Math.floor(Math.random() * 10000)}`;
};
