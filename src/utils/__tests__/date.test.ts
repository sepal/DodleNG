/**
 * @author codelity
 * @prompt Create a unit test for getCurrentEpoch, which should take in a date and return the epoch,
 * but disregard the timezone. So if the passed date is 2023-05-01T08:00:00+02:00 the epoch should
 * be 1682928000.
 */
import { getCurrentEpoch } from "../date";

describe("getCurrentEpoch", () => {
  it("should return the correct epoch time without timezone", () => {
    const date = new Date("2023-05-01T08:00:00+02:00");
    const expectedEpoch = 1682928000;
    const result = getCurrentEpoch(date);
    expect(result).toEqual(expectedEpoch);
  });
});

/**
 * @author codelity
 * @prompt Create a unit test for roundToDay.
 */
import { roundToDay } from "../date";

describe("roundToDay", () => {
  test("should round epoch time to the start of the day", () => {
    const epoch = 1633094400; // 01 Oct 2021 00:00:00 GMT
    const input = epoch + 3600 * 5 + 60 * 30; // 01 Oct 2021 05:30:00 GMT
    const result = roundToDay(input);
    expect(result).toBe(1633046400);
  });

  test("should return the same epoch time if it is already the start of the day", () => {
    const epoch = 1633094400; // 01 Oct 2021 00:00:00 GMT
    const result = roundToDay(epoch);
    expect(result).toBe(1633046400);
  });
});
