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
  console.log(parentObject2);
  expect(smartparam.exists(parentObject2.wow, 'za')).to.be.true;
});

tap.test('should be able to deep get an item', async () => {
  const testObject = {
    hey: {
      there: {
        so: 'cool'
      }
    }
  };

  const item = smartparam.smartGet(testObject, 'hey.there.so');
  expect(item).to.equal('cool');
});

tap.test('should call properties for minimatched properties', async () => {
  let testObject = {
    matchedOne: 'Hey!',
    matchedTwo: 'this works!',
    notmatched: 'NOT!'
  };

  const matchedStrings: string[] = [];
  await smartparam.forEachMinimatch(testObject, 'matched*', matchedProperty => {
    matchedStrings.push(matchedProperty);
    console.log(matchedProperty);
  });

  expect(matchedStrings).to.include('Hey!');
  expect(matchedStrings).to.include('this works!');
  expect(matchedStrings).to.not.include('NOT!');
});

tap.start();
