import {PrismaClient} from "@prisma/client"
const prisma = new PrismaClient()
const postagemController = {
    criar:async (data:any) => {
        return await prisma.post.create({data})
    },
    listarTodos:async () => {
        return (await prisma.post.findMany())
    },
    listarUm:async (id:string,) => {
        return await prisma.post.findUnique({where:{id},include:{usuario:{include:{produto:true}}}})
    },
    editar:async (data:any,id:string) => {
        return await prisma.post.update({where:{id},data})
    },
    deletar:async (id:string) => {
        return await prisma.post.delete({where:{id}})
    }
}
export default postagemController