/// <reference path="typings/tsd.d.ts" />
var bl = require("beautylog");

module.exports = (parentObject,childParam:string,action:string = 'smartAdd') => {
    if (action = 'smartAdd') {
        if(parentObject.hasOwnProperty(childParam)){
            mojo.log("param " + childParam + " exists!");
        } else {
            mojo.log('file.data does not exist, so we make it!');
            file.data = {}
        }
        //make mojo settings available for jade through mojo.something
        if (mojoActive) {
            file.data.mojo = mojo.settings;
        }
    }
};
