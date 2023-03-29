import { prisma } from ".";

export const createUser = async (email: string, password: string) => {
    console.log('createUser', email, password)
    const user = await prisma.user.create({
        data: {
        email,
        password,
        },
    });
    return user;
};