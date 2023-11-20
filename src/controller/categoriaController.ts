import {PrismaClient} from "@prisma/client"
const prisma = new PrismaClient();
const categoriaController = {
    criar: async (data: any) => {
    return await prisma.categorias.create({data})
    },
    listarTodos: async () => {
        return await prisma.categorias.findMany();
    },
    listarUm: async (id: string) => {
        return await prisma.categorias.findUnique({
            where: { id },include:{Produto:true}
        });
    },
    editar: async (id: string, data: any) => {
        return await prisma.categorias.update({
            where: { id },
            data
        });
    },
    deletar: async (id: string) => {
        return await prisma.categorias.delete({
            where: { id }
        });
    }
};
export default categoriaController;