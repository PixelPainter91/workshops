import { auth } from "@clerk/nextjs/server";
import { db } from "@/app/utils/dbConnections";

export async function POST(req) {
  const { userId } = auth();
  if (!userId) {
    return new Response("Unauthorized", { status: 401 });
  }

  const { images, textBoxes } = await req.json();

  await db.query(
    `UPDATE users
     SET mypage_images = $1,
         mypage_text = $2
     WHERE id = $3`,
    [images, textBoxes, userId]
  );

  return Response.json({ success: true });
}
