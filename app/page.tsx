"use client"
import Button from "@/components/atoms/Button";
import { useRouter } from 'next/navigation'


export default async function Index() {
  const router = useRouter()
  return(
    <main>
      <h1>Projet test technique Factory</h1>
      <p>test technique sur une api gratuite</p>
      <Button text="Go to recipe app" handleClick={() => router.push('/recipes')}/>
    </main>
  )
}