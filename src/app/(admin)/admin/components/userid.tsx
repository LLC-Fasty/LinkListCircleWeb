import { redirect } from 'next/navigation'
import { createClient } from '../../../../../utils/supabase/server'

export default async function Userid() {
  const supabase = createClient()


  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/login')
  }
    return <div className='flex justify-center pt-4'>
      <h1 className='font-semibold text-[24px] leading-[28px]'>Hello {data.user.email}</h1>
    </div>
  
}
//  return <p>Hello {data.user.email}</p>