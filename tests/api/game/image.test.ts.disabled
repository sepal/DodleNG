import { rest } from "msw";
import { setupServer } from "msw/node";
import { getXataClient } from "@/xata";
import { GET } from "@/app/api/game/[gameId]/image/[level]/route";

const server = setupServer();

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("GET /api/game/1/image/1 returns correct image size", async () => {
  const gameId = "1";
  const level = "1";

  const xata = getXataClient();
  const game = await xata.db.games.read(gameId);
  const imageRecord = await xata.db.images
    .filter({ game: game, level: parseInt(level) })
    .getFirst();

  server.use(
    rest.get(`https://s3.amazonaws.com/${imageRecord.key}`, (req, res, ctx) => {
      return res(
        ctx.set("Content-Type", "image/jpeg"),
        ctx.body(new ArrayBuffer(120303))
      );
    })
  );

  const response = await GET(new Request("localhost:3000/game/1/level/1"), {
    params: { gameId, level },
  });
  const buffer = await response.arrayBuffer();

  expect(response.status).toBe(200);
  expect(buffer.byteLength).toBe(120303);
});
