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
    for (let propertyNameArg of propertyNamesMatched) {
        yield callbackArg(parentObjectArg[propertyNameArg]);
    }
    ;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsZ0RBQWlEO0FBRWpEOzs7Ozs7R0FNRztBQUNRLFFBQUEsUUFBUSxHQUFHLFVBQVUsWUFBWSxFQUFFLFVBQWtCO0lBQzlELEVBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVDLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDZixDQUFDO0lBQUMsSUFBSSxDQUFDLENBQUM7UUFDTixZQUFZLENBQUUsVUFBVSxDQUFFLEdBQUcsRUFBRSxDQUFBO1FBQy9CLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDZCxDQUFDO0FBQ0gsQ0FBQyxDQUFDO0FBRUY7Ozs7O0dBS0c7QUFDUSxRQUFBLE1BQU0sR0FBRyxVQUFVLFlBQVksRUFBRSxVQUFrQjtJQUM1RCxFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1QyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUNELE1BQU0sQ0FBQyxLQUFLLENBQUM7QUFDZixDQUFDLENBQUM7QUFFUyxRQUFBLGdCQUFnQixHQUFHLENBQU8sZUFBb0IsRUFBRSxXQUFtQixFQUFFLFdBQVc7SUFDekYsSUFBSSxhQUFhLEdBQUcsTUFBTSxDQUFDLG1CQUFtQixDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ2hFLElBQUksb0JBQW9CLEdBQUcsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLGVBQWU7UUFDOUQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsZUFBZSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ3pELENBQUMsQ0FBQyxDQUFDO0lBQ0gsR0FBRyxDQUFDLENBQUMsSUFBSSxlQUFlLElBQUksb0JBQW9CLENBQUMsQ0FBQyxDQUFDO1FBQ2pELE1BQU0sV0FBVyxDQUFDLGVBQWUsQ0FBRSxlQUFlLENBQUUsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFBQSxDQUFDO0FBQ0osQ0FBQyxDQUFBLENBQUEifQ==