import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";


export async function POST(req: Request, { params }: { params: { id: string } }) {
  const { userId } = await auth();
  if (!userId) return new Response("Unauthorized", { status: 401 });

  const existing = await prisma.like.findUnique({
    where: { userId_postId: { userId, postId: params.id } }
  });

  if (existing) {
    await prisma.like.delete({ where: { id: existing.id } });
  } else {
    await prisma.like.create({
      data: {
        userId,
        postId: params.id
      }
    });
  }

  return new Response("OK");
}
