const app = require('./index');

const port = process.env.PORT || 3000;

const server = app.listen(port, function () {
    console.log("Example app listening at http://%s:%s", "localhost", port)
 });

 module.exports = server
