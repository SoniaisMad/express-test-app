const app = require('./index');

const server = app.listen(8081, function () {
    console.log("Example app listening at http://%s:%s", "localhost", "8081")
 });

 module.exports = server