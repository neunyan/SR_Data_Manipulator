const {maybeFunction} = require("../utility");
const {Result} = require("../enumerate")

module.exports.$ = (process, data) => maybeFunction(process)(data);
module.exports.R = (process, data) =>
    "tag" in data && "value" in data && typeof data.tag == "function" && typeof data.value == "function"?
        data.expect(Result.$Err)
        .then($=>$)
        .catch(maybeFunction(process)(data.value())) :
        data;