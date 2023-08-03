import Head from "next/head"
import Image from 'next/image'
import styles from '../../../styles/home.module.scss'

import logoImg from '../../../public/Logo.png'
import {Input} from '../../components/ui/input'
import {Button} from '../../components/ui/button'

import Link from 'next/link'

export default function SignUp() {
  return (
    <>
    <Head>
      <title>
        Faça o seu cadastro
      </title>
    </Head>
      <div className={styles.containerCenter}>
        <Image src={logoImg} alt='Logo PizzaScript'/>

      <div className={styles.login}>
        <h1>Criando sua conta</h1>

        <form>
          <Input 
            placeholder="Digite seu nome"
            type="text"
          />   
          <Input
            placeholder="Digite seu e-mail"
            type='text'
          />

          <Input
            placeholder="Sua senha"
            type='password'
          />

          <Button
            type='submit'
            loading={false}>
              Cadastrar
          </Button>
        </form>

        <Link href="/">
        <a className={styles.text}>Já possui uma conta? Faça o login aqui.</a>
        </Link>

      </div>
    </div>
    </>
  )
}

