import { tap, expect } from '@pushrocks/tapbundle';
import smartparam = require('../ts/index');
//construct test objects

let parentObject: any = {};
let childObject: any = {};

tap.test('childObject should not yet be in parentObject', async () => {
  expect(smartparam.exists(parentObject, 'childObject')).to.be.false;
  parentObject.childObject = childObject;
});

tap.test('childObject should now BE in parentObject', async () => {
  expect(smartparam.exists(parentObject, 'childObject')).to.be.true;
});

tap.test('should call properties for minimatched properties', async () => {
  let testObject = {
    matchedOne: 'Hey!',
    matchedTwo: 'this works!',
    notmatched: 'NOT!'
  };
  await smartparam.forEachMinimatch(testObject, 'matched*', matchedProperty => {
    console.log(matchedProperty);
  });
});

tap.start();
