import plugins = require('./smartparam.plugins');

/**
 * adds an object to the parent object if it doesn't exists
 * @param parentObject
 * @param childParam
 * @param logBool
 * @returns {boolean}
 */
export const smartAdd = (
  parentObject,
  childParam: string,
  valueArg = {},
  optionsArg?: {
    interpretDotsAsLevel: boolean;
  }
): typeof parentObject & any => {
  optionsArg = {
    interpretDotsAsLevel: true,
    ...optionsArg
  };

  let varNamesArray: string[];
  let referencePointer = parentObject;
  if (optionsArg.interpretDotsAsLevel) {
    varNamesArray = childParam.split('.');
  } else {
    varNamesArray = [childParam];
  }

  for (let i = 0; i !== varNamesArray.length; i++) {
    const varName = varNamesArray[i];

    // is there a next variable ?
    const varNameNext: string = (() => {
      if (varNamesArray[i + 1]) {
        return varNamesArray[i + 1];
      }
      return null;
    })();

    // build the tree in parentObject
    if (!referencePointer[varName] && !varNameNext) {
      referencePointer[varName] = valueArg;
      referencePointer = null;
    } else if (!referencePointer[varName] && varNameNext) {
      referencePointer[varName] = {};
      referencePointer = referencePointer[varName];
    } else if (referencePointer[varName] && varNameNext) {
      referencePointer = referencePointer[varName];
    } else {
      throw new Error('Something is strange!');
    }
  }
  return parentObject;
};

/**
 * gets an object from the parent object using dots as levels by default
 * @param parentObject
 * @param childParam
 * @param optionsArg
 */
export const smartGet = (
  parentObject,
  childParam: string,
  optionsArg?: {
    interpretDotsAsLevel: boolean;
  }
) => {
  optionsArg = {
    interpretDotsAsLevel: true,
    ...optionsArg
  };
};

/**
 * checks if an object has a parameter with a given key name, returns true if yes.
 * @param parentObject
 * @param childParam
 * @returns {boolean}
 */
export let exists = function(parentObject, childParam: string): boolean {
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
  let propertyNamesMatched = propertyNames.filter(propertyNameArg => {
    return plugins.minimatch(propertyNameArg, wildcardArg);
  });
  for (let propertyNameArg of propertyNamesMatched) {
    await callbackArg(parentObjectArg[propertyNameArg]);
  }
};
