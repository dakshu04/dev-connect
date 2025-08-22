import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";

export async function syncUser() {
    const user = await currentUser()

    if(!user) return null;

    return prisma.user.upsert({
        where: { email: user.emailAddresses[0].emailAddress },
        update: {},
        create: {
        email: user.emailAddresses[0].emailAddress,
        name: user.fullName,
        image: user.imageUrl,
        }
  });
}