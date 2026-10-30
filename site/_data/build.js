// Build timestamp, and a compact form of it that versions asset URLs, so a
// deploy is never served alongside a stylesheet still cached from the last one
module.exports = () => {
  const date = new Date().toISOString();
  return { date, version: date.replace(/\D/g, "").slice(0, 14) };
};
