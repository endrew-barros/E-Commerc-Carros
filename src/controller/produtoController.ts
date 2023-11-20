import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient();
const produtoController = {
    criar: async (data: any) => {
        return await prisma.produto.create({
            data
        });
    },
    listarTodos: async () => {
        return await prisma.produto.findMany();
    },
    listarUm: async (id: string) => {
        return await prisma.produto.findUnique({
            where: { id },
        });
    },
    editar: async (id: string, data: any) => {
        return await prisma.produto.update({
            where: { id },
            data
        });
    },
    deletar: async (id: string) => {
        return await prisma.produto.delete({
            where: { id }
        });
    }
};
export default produtoController;