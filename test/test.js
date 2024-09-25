var expect = require("chai").expect;
var request = require("request");
var url = "http://localhost:3040";

describe("Add Two Numbers", function () {
    it("Should return 8 if we request result for 3 + 5", function (done) {
        request(`${url}/addTwoNumber?n1=3&n2=5`, function (error, response, body) {
            let result = JSON.parse(response.body);
            expect(result.data).equal(8);
            done()
        });
    });
});

describe("Sub Two Numbers", function () {
    it("Should return 3 if we request result for 15 - 12", function (done) {
        request(`${url}/subTwoNumber?n1=15&n2=12`, function (error, response, body) {
            let result = JSON.parse(response.body);
            expect(result.data).equal(3);
            done()
        });
    });
});

describe("Mul Two Numbers", function () {
    it("Should return 10 if we request result for 2 * 5", function (done) {
        request(`${url}/mulTwoNumber?n1=2&n2=5`, function (error, response, body) {
            let result = JSON.parse(response.body);
            expect(result.data).equal(10);
            done()
        });
    });
});

describe("Div Two Numbers", function () {
    it("Should return 2 if we request result for 10 / 5", function (done) {
        request(`${url}/divTwoNumber?n1=10&n2=5`, function (error, response, body) {
            let result = JSON.parse(response.body);
            expect(result.data).equal(2);
            done()
        });
    });
});