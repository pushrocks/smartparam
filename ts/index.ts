import plugins = require("./smartparam.plugins");

/**
 * adds an obejct to the parent object if it doesn't exists
 * @param parentObject
 * @param childParam
 * @param logBool
 * @returns {boolean}
 */
export let smartAdd = function (parentObject, childParam: string): boolean {
  if (parentObject.hasOwnProperty(childParam)) {
    return false;
  } else {
    parentObject[ childParam ] = {}
    return true;
  }
};

/**
 * checks if an object has a parameter with a given key name, returns true if yes.
 * @param parentObject
 * @param childParam
 * @returns {boolean}
 */
export let exists = function (parentObject, childParam: string): boolean {
  if (parentObject.hasOwnProperty(childParam)) {
    return true;
  }
  return false;
};

/**
 * runs a function for all properties of an object whose key matches a regex expression
 * @param parentObjectArg the parent object
 * @param wildcardArg the rege expression to match the property keys against
 * @param callbackArg the function to run with those properties
 */
export let forEachMinimatch = async (parentObjectArg: any, wildcardArg: string, callbackArg) => {
  let propertyNames = Object.getOwnPropertyNames(parentObjectArg);
  let propertyNamesMatched = propertyNames.filter((propertyNameArg) => {
    return plugins.minimatch(propertyNameArg, wildcardArg);
  });
  for (let propertyNameArg of propertyNamesMatched) {
    await callbackArg(parentObjectArg[ propertyNameArg ]);
  };
}
