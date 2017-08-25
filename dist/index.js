"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const plugins = require("./smartparam.plugins");
/**
 * adds an obejct to the parent object if it doesn't exists
 * @param parentObject
 * @param childParam
 * @param logBool
 * @returns {boolean}
 */
exports.smartAdd = function (parentObject, childParam) {
    if (parentObject.hasOwnProperty(childParam)) {
        return false;
    }
    else {
        parentObject[childParam] = {};
        return true;
    }
};
/**
 * checks if in object has a parameter with a given key name, returns true if yes.
 * @param parentObject
 * @param childParam
 * @returns {boolean}
 */
exports.exists = function (parentObject, childParam) {
    if (parentObject.hasOwnProperty(childParam)) {
        return true;
    }
    return false;
};
exports.forEachMinimatch = (parentObjectArg, wildcardArg, callbackArg) => __awaiter(this, void 0, void 0, function* () {
    let propertyNames = Object.getOwnPropertyNames(parentObjectArg);
    let propertyNamesMatched = propertyNames.filter((propertyNameArg) => {
        return plugins.minimatch(propertyNameArg, wildcardArg);
    });
    propertyNamesMatched.forEach((propertyNameArg) => __awaiter(this, void 0, void 0, function* () {
        yield callbackArg(parentObjectArg[propertyNameArg]);
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsZ0RBQWlEO0FBRWpEOzs7Ozs7R0FNRztBQUNRLFFBQUEsUUFBUSxHQUFHLFVBQVUsWUFBWSxFQUFDLFVBQWlCO0lBQzFELEVBQUUsQ0FBQSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQSxDQUFDO1FBQ3hDLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUFDLElBQUksQ0FBQyxDQUFDO1FBQ0osWUFBWSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQTtRQUM3QixNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2hCLENBQUM7QUFDTCxDQUFDLENBQUM7QUFFRjs7Ozs7R0FLRztBQUNRLFFBQUEsTUFBTSxHQUFHLFVBQVMsWUFBWSxFQUFDLFVBQWlCO0lBQ3ZELEVBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUNELE1BQU0sQ0FBQyxLQUFLLENBQUM7QUFDakIsQ0FBQyxDQUFDO0FBRVMsUUFBQSxnQkFBZ0IsR0FBRyxDQUFPLGVBQW1CLEVBQUMsV0FBa0IsRUFBQyxXQUFXO0lBQ25GLElBQUksYUFBYSxHQUFHLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUNoRSxJQUFJLG9CQUFvQixHQUFHLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxlQUFlO1FBQzVELE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLGVBQWUsRUFBQyxXQUFXLENBQUMsQ0FBQztJQUMxRCxDQUFDLENBQUMsQ0FBQztJQUNILG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxDQUFPLGVBQWU7UUFDL0MsTUFBTSxXQUFXLENBQUMsZUFBZSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7SUFDeEQsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQSxDQUFBIn0=