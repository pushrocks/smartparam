import { tap, expect } from '@pushrocks/tapbundle';
import smartparam = require('../ts/index');
//construct test objects

let parentObject: any = {};
let childObject: any = {};

tap.test('childObject should not yet be in parentObject', async () => {
  expect(smartparam.exists(parentObject, 'childObject')).to.be.false;
  parentObject.childObject = childObject;
});

tap.test('childObject should now be in parentObject', async () => {
  expect(smartparam.exists(parentObject, 'childObject')).to.be.true;
});

tap.test('should be able to deepAdd an childParam', async () => {
  const parentObject = {
    hello: 'there'
  };
  const parentObject2 = smartparam.smartAdd(parentObject, 'wow.za', 'yes');
  console.log(parentObject2)
  expect(smartparam.exists(parentObject2.wow, 'za')).to.be.true;
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
