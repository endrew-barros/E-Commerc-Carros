import {PrismaClient} from "@prisma/client"

const prisma = new PrismaClient();
const usuarioController = {
    criar: async (data: any) => {
        return await prisma.usuario.create({
            data
        });
    },
    listarTodos: async () => {
        return await prisma.usuario.findMany();
    },
    listarUm: async (id: string) => {
        return await prisma.usuario.findUnique({
            where: { id },
        });
    },
    editar: async (id: string, data: any) => {
        return await prisma.usuario.update({
            where: { id },
            data
        });
    },
    deletar: async (id: string) => {
        console.log(id)
        return await prisma.usuario.delete({
            where:{
                id
            }
        })
    }
};
export default usuarioController;