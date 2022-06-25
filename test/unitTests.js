import assert from "assert";
import {addZero, formatDate, TaboolaAds} from "../index.js";

// addZero
describe("AddZero", () => {
    it("addZero 1", () => {

        const input = "1"
        const result = addZero(input)
        const expectOutput = "01"

        assert.equal(expectOutput, result);
    });

    it("addZero 2", () => {

        const input = "7"
        const result = addZero(input)
        const expectOutput = "07"

        assert.equal(expectOutput, result);
    });

    it("addZero 3", () => {

        const input = "11"
        const result = addZero(input)
        const expectOutput = "11"

        assert.equal(expectOutput, result);
    });
});

// Dates
describe("Dates", () => {
    it("Date 1", () => {

        const input = new Date("01/01/2022")
        const result = formatDate(input)
        const expectOutput = "01/01/2022"

        assert.equal(expectOutput, result);
    });

    it("Date 2", () => {

        const input = new Date("01/05/2022")
        const result = formatDate(input)
        const expectOutput = "05/01/2022"

        assert.equal(expectOutput, result);
    });

    it("Date 3", () => {

        const input = new Date ("12/17/2022")
        const result = formatDate(input)
        const expectOutput = "17/12/2022"

        assert.equal(expectOutput, result);
    });
});

// Class
describe("Class", () => {

    it("Class 1 - categories", () => {

        const result = new TaboolaAds({
            categories : null
        })
        const expectOutput = []

        assert.equal(expectOutput.join(","), result.categories.join(","));
    });

    it("Class 2 - categories", () => {

        const result = new TaboolaAds({
            categories : ["Test"]
        })
        const expectOutput = ["Test"]

        assert.equal(expectOutput.join(","), result.categories.join(","));
    });

    it("Class 3 - createdDate", () => {

        const date = "01/01/2022"
        const result = new TaboolaAds({
            created : date
        })
        const expectOutput = new Date(date)

        assert.equal(expectOutput.getTime(), result.createdDate.getTime());
    });

});