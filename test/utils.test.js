const utils = require('../app/bookshop_utils');

describe("utils.addVAT", () => {
  test("returns 36 when passed 30", () => {
    expect(utils.addVAT(30)).toBe(36);
  });
  
  test("returns 120 when passed 100", () => {
    expect(utils.addVAT(100)).toBe(120);
  });

  test("returns 118.8 when passed 99", () => {
    expect(utils.addVAT(99)).toBe(118.8);
  });
// Yes ^^^ this did pass the test on my console.

describe("utils.getFullName", () => {
  test("returns Haruki Murakami when passed Haruki and Murakami", () => {
    expect(utils.getFullName("Haruki", "Murakami")).toBe("Haruki Murakami");
  });
});

// makeHalfPrice Test

test("Returns 50 when passed 100", () => {
  expect(utils.makeHalfPrice(100)).toBe(50);
});

// countBooks Test
test("Returns 3 when counting a array made up of three book titles", () => {
  expect(utils.countBooks(["The Great Gatsby", "To Kill a Mockingbird", "Harry Potter and the Sorcerer's Stone"])).toBe(3);
});

// isInStock Test == True
test("returns true if the title is in stock", () => {
  const book = {
    title: "The Stone Diaries",
    author: "Carol Shields",
    yearOfPublication: 1993,
    quantity: 9
  };

  expect(utils.isInStock(book)).toBe(true);
});

// isInStock Test == False
test("returns true if the title is in stock", () => {
  const book = {
    title: "The Stone Diaries",
    author: "Carol Shields",
    yearOfPublication: 1993,
    quantity: 0
  };

  expect(utils.isInStock(book)).toBe(false);
});

// getTotalOrderPrice Test
test("returns 43.2 when passed 18 and 2", () => {
  expect(utils.getTotalOrderPrice(18,2)).toBe(43.2);
});






});
