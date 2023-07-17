import prismaClient from "../../prisma";

interface DetailRequest{
    order_id: string;
}

class DetailOrderService{
    async execute({order_id}: DetailRequest){
        const orders = await prismaClient.item.findMany({
            where:{
                order_id: order_id
            },
            include:{ /*Através do prisma, devido aos itens terem ligação com a order, posso pegar informações dos ítens também*/
                product: true,
                order: true
            }
        })

        return orders
    }
}

export {DetailOrderService}