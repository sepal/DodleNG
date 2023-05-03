import { getImageUrl } from "../aws-s3";

describe("getImageUrl", () => {
  it("should return a valid signed URL for the given key", async () => {
    const key = "inbox/1654002616/0.png";
    const url = await getImageUrl(key);
    expect(url).toMatch(/^https:\/\/.+\/inbox\/1654002616\/0\.png\?.+$/);
  });
});
