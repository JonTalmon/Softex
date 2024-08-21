const modules = require("./module.js");
const user = require("./database/db.js");

modules.sayHello();
modules.sayMyName("Heisenberg");
modules.cooking("Meth");

console.log(user);