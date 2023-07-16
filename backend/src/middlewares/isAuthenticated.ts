import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'

interface Payload{
    sub: string;
}

export function isAuthenticated(req: Request, res: Response, next: NextFunction){
    //Receber o token quando a rota for chamada
    const authToken = req.headers.authorization
    
    if(!authToken){
        return res.status(401).end()
    }

    const [, token] = authToken.split(" ")
    //Pra pegar o Bearer (token), criar um array, ignorar o primeiro e vai ser dividido por " " espaço vazio...

    try{
        //Validar o token
        const { sub } = verify( //sub é o id do usuário
            token,
            process.env.JWT_SECRET
        ) as Payload
         //Método do jsonwebtoken: ele pode token, secreteKey

         req.user_id = sub //injetamos essa tipagem criando uma @types no src e autorizando typeRoots use no tsconfig 

         return next()

    }catch(err){
        return res.status(401).end()
    }

}

