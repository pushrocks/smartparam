/// <reference path="typings/tsd.d.ts" />
var bl = require("beautylog");
/**
 * takes a parent object and a child object and adds it in smart ways.
 * @param parentObject parent Object
 * @param childParam child object to add
 * @param action defines the way in which the param is added
 * @param logBool {boolean} turns on logging
 * @returns {boolean} return true if something changes (like param is added), returns false in case nothing changes
 */
module.exports = function (parentObject, childParam, action, logBool) {
    if (action === void 0) { action = 'smartAdd'; }
    if (logBool === void 0) { logBool = false; }
    if (action = 'smartAdd') {
        if (parentObject.hasOwnProperty(childParam)) {
            if (logBool)
                bl.log("param " + childParam + " exists! Nothing changes!");
            return false;
        }
        else {
            if (logBool)
                bl.log('param does not exist, so we make it!');
            parentObject[childParam] = {};
            return true;
        }
    }
};
