import { Link } from 'react-router-dom';



export default function Signup() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className="text-3xl text-center font-semibold my-7">Sign up</h1>
      <form className='flex flex-col gap-4'>
        <input type="text" placeholder='Username' id='username' className='bg-slate-900 text-gray-50 p-3 rounded-lg ' required/>
        <input type="email" placeholder='Email' id='email' className='bg-slate-900 text-gray-50 p-3 rounded-lg' required/>
        <input type="password" placeholder='Password' id='password' className='bg-slate-900 text-gray-50 p-3 rounded-lg ' required/>
        <button className='p-3 rounded-lg uppercase bg-neutral-900 text-gray-50 hover:bg-neutral-950'>Sign up</button>       
      </form>
      <div className="flex mt-5 gap-2">
        <p>Have an account?</p>
        <Link to='/sign-in'>
        <span className='text-blue-500'>Sign In</span>
        </Link>
      </div>
    </div>
  )
}
