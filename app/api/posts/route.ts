import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";


export async function GET() {
  const posts = await prisma.post.findMany({
    include: {
      author: true,
      comments: true,
      likes: true,
    },
    orderBy: { createdAt: "desc" }
  });
  return Response.json(posts);
}

export async function POST(req: Request) {
  const { userId } = await auth();
  if (!userId) return new Response("Unauthorized", { status: 401 });

  const { title, content } = await req.json();

  const post = await prisma.post.create({
    data: {
      title,
      content,
      author: { connect: { user_id: userId } }
    }
  });

  return Response.json(post);
}
