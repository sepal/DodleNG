import { getS3Item } from "@/lib/aws-s3";
import { getXataClient } from "@/xata";

const xata = getXataClient();

export async function GET(
  request: Request,
  {
    params,
  }: {
    params: {
      gameId: string;
      imageIdx: number;
    };
  }
) {
  const { gameId, imageIdx } = params;

  const game = await xata.db.games.read(gameId);

  if (imageIdx < 0) {
    return new Response("Wrong image index.", {
      status: 400,
    });
  }

  const imageRecord = await xata.db.images
    .filter({
      game: game,
    })
    .getAll();

  if (imageIdx >= imageRecord.length) {
    return new Response("Wrong image index.", {
      status: 400,
    });
  }

  const key = imageRecord[imageIdx].key;

  if (!key) {
    return new Response("Server error", {
      status: 500,
    });
  }

  const image = await getS3Item(key);

  if (!image) {
    return new Response("Server error", {
      status: 500,
    });
  }

  return new Response(image.transformToWebStream());
}
