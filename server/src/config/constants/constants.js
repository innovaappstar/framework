/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */
"use strict";
var Constants = (function () {
    function Constants() {
    }
    Constants.DB_CONNECTION_STRING = process.env.NODE_ENV === 'production' ? process.env.dbURI : "mongodb://localhost:27017/devmongo";
    return Constants;
}());
Object.seal(Constants);
module.exports = Constants;
