import { getS3Item } from "@/lib/aws-s3";
import { getXataClient } from "@/xata";

export async function GET(
  request: Request,
  {
    params,
  }: {
    params: {
      gameId: string;
      level: string;
    };
  }
) {
  const xata = getXataClient();

  const { gameId, level } = params;

  const game = await xata.db.games.read(gameId);

  const imageRecord = await xata.db.images
    .filter({
      game: game,
      level: parseInt(level),
    })
    .getFirst();

  if (!imageRecord) {
    return new Response("No image found", { status: 404 });
  }

  if (!imageRecord.key) {
    return new Response("Server error", {
      status: 500,
    });
  }

  const image = await getS3Item(imageRecord.key);

  if (!image) {
    return new Response("Server error", {
      status: 500,
    });
  }

  return new Response(image.transformToWebStream());
}
