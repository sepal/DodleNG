import { getCurrentEpoch } from "../date";

describe("getCurrentEpoch", () => {
  it("should return the correct epoch time without timezone", () => {
    const date = new Date("2023-05-01T08:00:00+02:00");
    const expectedEpoch = 1682928000;
    const result = getCurrentEpoch(date);
    expect(result).toEqual(expectedEpoch);
  });
});
