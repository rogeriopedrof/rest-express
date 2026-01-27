import { PrismaClient } from "@prisma/client/extension";

const prisma = new PrismaClient();

export async function getTaskById(taskId) {
    return prisma.task.findUnique({
        where: {
            id: Number(taskId),
        },
    });
}

export async function updatedTask(taskId, data) {
    return prisma.task.update({
        where: {
            id: Number(taskId),
        },
        data,
    });
}