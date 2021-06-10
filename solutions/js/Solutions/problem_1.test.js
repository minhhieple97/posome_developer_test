const findLuckyCouple = require("./problem_1");
const dataTest = require("../../../test_cases/problem_1.json");

test("Run Test case 1", () => {
  const inputTestCase_1 = dataTest[0].input;
  const outputTestCase_1 = dataTest[0].output;
  const result = findLuckyCouple(
    inputTestCase_1.penny_numbers,
    inputTestCase_1.golden_number
  );
  expect(result).toEqual(outputTestCase_1);
});

test("Run test case 2", () => {
  const inputTestCase_2 = dataTest[1].input;
  const outputTestCase_2 = dataTest[1].output;
  const result = findLuckyCouple(
    inputTestCase_2.penny_numbers,
    inputTestCase_2.golden_number
  );
  expect(result).toEqual(outputTestCase_2);
});

test("Run test case 3", () => {
  const inputTestCase_3 = dataTest[2].input;
  const outputTestCase_3 = dataTest[2].output;
  const result = findLuckyCouple(
    inputTestCase_3.penny_numbers,
    inputTestCase_3.golden_number
  );
  expect(result).toEqual(outputTestCase_3);
});
