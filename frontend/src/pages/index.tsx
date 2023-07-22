import Head from "next/head"
import Image from 'next/image'
import styles from '../../styles/home.module.scss'

import logoImg from '../../public/Logo.png'
import {Input} from '../components/ui/input'

export default function Home() {
  return (
    <>
    <Head>
      <title>
        PizzaScript - Faça seu login
      </title>
    </Head>
      <div className={styles.containerCenter}>
        <Image src={logoImg} alt='Logo PizzaScript'/>
      </div>
      <div className={styles.login}>
        <form>
          <Input
            placeholder="Digite seu e-mail"
            type='text'
          />
          <Input
            placeholder="Sua senha"
            type='password'
          />
        </form>
      </div>
    </>
  )
}

