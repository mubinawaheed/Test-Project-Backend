const routes = require("./employee");
const {sendResponseMsg} = require('../common')

module.exports= (app)=>{
    app.get("/", (req, res) => {
        return sendResponseMsg(res, "Welcome to Node Server", true, 200);
      });
    app.use('/employee', routes)
    app.use(function (req, res) {
        return sendResponseMsg(res, "Route does not exist", false, 404);
    });
}