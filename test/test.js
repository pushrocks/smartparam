/// <reference path="../ts/typings/main.d.ts" />
var smartparam = require("../dist/index.js");
var should = require("should");
//construct test objects
var parentObject = {};
var childObject = {};
describe("smartparam", function () {
    describe(".exists()", function () {
        it("childObject should not yet be in parentObject", function () {
            (smartparam.exists(parentObject, "childObject")).should.be.false();
            parentObject.childObject = childObject;
        });
        it("childObject should now BE in parentObject", function () {
            (smartparam.exists(parentObject, "childObject")).should.be.true();
        });
    });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0RBQWdEO0FBQ2hELElBQUksVUFBVSxHQUFHLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBQzdDLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUMvQix3QkFBd0I7QUFFeEIsSUFBSSxZQUFZLEdBQU8sRUFBRSxDQUFDO0FBQzFCLElBQUksV0FBVyxHQUFPLEVBQUUsQ0FBQztBQUV6QixRQUFRLENBQUMsWUFBWSxFQUFDO0lBQ2xCLFFBQVEsQ0FBQyxXQUFXLEVBQUM7UUFDakIsRUFBRSxDQUFDLCtDQUErQyxFQUFDO1lBQy9DLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ2xFLFlBQVksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQzNDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsRUFBRSxDQUFDLDJDQUEyQyxFQUFDO1lBQzNDLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3JFLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJ0ZXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL3RzL3R5cGluZ3MvbWFpbi5kLnRzXCIgLz5cbnZhciBzbWFydHBhcmFtID0gcmVxdWlyZShcIi4uL2Rpc3QvaW5kZXguanNcIik7XG52YXIgc2hvdWxkID0gcmVxdWlyZShcInNob3VsZFwiKTtcbi8vY29uc3RydWN0IHRlc3Qgb2JqZWN0c1xuXG52YXIgcGFyZW50T2JqZWN0OmFueSA9IHt9O1xudmFyIGNoaWxkT2JqZWN0OmFueSA9IHt9O1xuXG5kZXNjcmliZShcInNtYXJ0cGFyYW1cIixmdW5jdGlvbigpe1xuICAgIGRlc2NyaWJlKFwiLmV4aXN0cygpXCIsZnVuY3Rpb24oKXtcbiAgICAgICAgaXQoXCJjaGlsZE9iamVjdCBzaG91bGQgbm90IHlldCBiZSBpbiBwYXJlbnRPYmplY3RcIixmdW5jdGlvbigpe1xuICAgICAgICAgICAgKHNtYXJ0cGFyYW0uZXhpc3RzKHBhcmVudE9iamVjdCxcImNoaWxkT2JqZWN0XCIpKS5zaG91bGQuYmUuZmFsc2UoKTtcbiAgICAgICAgICAgIHBhcmVudE9iamVjdC5jaGlsZE9iamVjdCA9IGNoaWxkT2JqZWN0O1xuICAgICAgICB9KTtcbiAgICAgICAgaXQoXCJjaGlsZE9iamVjdCBzaG91bGQgbm93IEJFIGluIHBhcmVudE9iamVjdFwiLGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAoc21hcnRwYXJhbS5leGlzdHMocGFyZW50T2JqZWN0LFwiY2hpbGRPYmplY3RcIikpLnNob3VsZC5iZS50cnVlKCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufSk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
