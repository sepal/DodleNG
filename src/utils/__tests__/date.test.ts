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
