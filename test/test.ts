/// <reference path="../ts/typings/main.d.ts" />
var smartparam = require("../dist/index.js");
var should = require("should");
//construct test objects

var parentObject:any = {};
var childObject:any = {};

describe("smartparam",function(){
    describe(".exists()",function(){
        it("childObject should not yet be in parentObject",function(){
            (smartparam.exists(parentObject,"childObject")).should.be.false();
            parentObject.childObject = childObject;
        });
        it("childObject should now BE in parentObject",function(){
            (smartparam.exists(parentObject,"childObject")).should.be.true();
        });
    });
});