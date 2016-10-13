var expect = require('chai').expect;

describe("Arrays", function() {

	var array, one, two;

	beforeEach(function() {
		array = [];
		one = { value : "first" };
		two = { value : "second" };
	});

	describe("adding elements", function() {

		it("'push' adds at the end by default", function() {
			array.push(one);
			array.push(two);

			expect(array[1]).to.equal('green me!');
		});

	});

});
