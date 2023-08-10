import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import { parseCookies } from "nookies";

//funcao para páginas que podem só ser acessadas por visitantes

export function canSSRGuest<P>(fn: GetServerSideProps<P>){
    return async (contexto: GetServerSidePropsContext): Promise<GetServerSidePropsResult<P>> => {
        
        const cookies = parseCookies(contexto)

        //Se tentar acessar já tendo login salvo, redirecionamos:
        if(cookies['@nextauth.token']){
            return{
                redirect:{
                    destination: '/dashboard',
                    permanent: false,
                }
            }
        }

        return await fn(contexto)
    }
}