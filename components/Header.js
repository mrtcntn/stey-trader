import { useRouter } from "next/router"

const Header = () => {
  const router = useRouter();
  return <div className='w-full bg-white py-6 px-4'>
  <div className='container xl:max-w-6xl mx-auto flex flex-row align-middle justify-between'>
  <div className=''>
    <p className='text-gray-900 m-2 text-2xl'>Stey</p>
  </div>
  <div className='menu'>
    <button onClick={() => {router.push('/buy-sell')}} className='transition-all py-3 px-4 mx-2
      bg-blue-600 
      focus:ring
      focus:outline-none
      focus:border-blue-700
      rounded-md 
      text-white 
      hover:bg-blue-700 
      shadow-md hover:shadow-lg'>
      Buy - Sell</button>
    <button onClick={() => {router.push('/account')}} value='Hesabım' className='transition-all py-3 px-4 mx-2
      bg-gray-50 
      focus:ring
      focus:outline-none
      focus:border-blue-400
      rounded-md 
      text-gray-900
      hover:bg-gray-100
      shadow-md hover:shadow-lg'>My Account</button>
  </div>
  </div>
</div>
}

export default Header