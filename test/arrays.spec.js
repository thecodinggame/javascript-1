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
				
		it("'unshift' adds at the beggining", function() {
			array.unshift(one);
			array.unshift(two);

			expect(array[0]).to.equal('green me!');
		});

		it("'splice' offers insertion", function() {
			array.push(one);
			array.push(two);
			var bird = { value : "bird" };
			array.splice(0, 1, bird);

			expect(array[0]).to.equal('green me!');
		});

		it("'splice' offers multi-insertion", function() {
			array.push(one);
			array.push(two);
			var fox = { value : "fox" };
			var cat = { value : "cat" };
			array.splice(1, 2, fox, cat);

			expect(array[1]).to.equal('green me!');
			expect(array[2]).to.equal('green me!');
		});
	});
});
