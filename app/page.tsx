import { redirect } from 'next/navigation'

export default function Home() {
  redirect('/payments/new-payment')
}
