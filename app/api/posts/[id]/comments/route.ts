import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";


export async function POST(req: Request, { params }: { params: { id: string } }) {
  const { userId } = await auth();
  if (!userId) return new Response("Unauthorized", { status: 401 });

  const { content } = await req.json();

  const comment = await prisma.comment.create({
    data: {
      content,
      postId: params.id,
      userId
    }
  });

  return Response.json(comment);
}
