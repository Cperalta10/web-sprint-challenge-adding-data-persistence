// start your server here
const PORT = process.env.PORT || 9000;
const server = require("./api/server");

server.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
