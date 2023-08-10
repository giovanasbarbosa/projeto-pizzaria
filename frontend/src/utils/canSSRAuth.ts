import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import { parseCookies, destroyCookie } from "nookies";
import { AuthTokenError } from "../services/errors/AuthTokenError";

//Função para páginas só users logados podem ter acesso

export function canSSRAuth<P>(fn: GetServerSideProps<P>){
    return async (contexto: GetServerSidePropsContext): Promise<GetServerSidePropsResult<P>> => {
        const cookies = parseCookies(contexto)
        const token = cookies['@nextauth.token']
        if(!token){
            return{
                redirect:{
                    destination: '/',
                    permanent: false,
                }
            }
        }

        try{
            return await fn(contexto)
        }catch(err){
            if(err instanceof AuthTokenError){
                destroyCookie(contexto, '@nextauth.token')
                return{
                    redirect:{
                        destination: '/',
                        permanent: false,
                    }
                }

            }
        }

    }
}