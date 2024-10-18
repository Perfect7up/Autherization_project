import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Signin() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(false);
      const res = await fetch('/backend/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      setLoading(false);
      if (data.success == false) {
        setError(true);
        return;
      }
    }   catch (error) {
        setLoading(false);
        setError(true);
    } 
  };

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input type="email" placeholder='Email' id='email' className='bg-slate-900 text-gray-50 p-3 rounded-lg' onChange={handleChange}/>
        <input type="password" placeholder='Password' id='password' className='bg-slate-900 text-gray-50 p-3 rounded-lg ' onChange={handleChange}/>
        <button disabled={loading} className='p-3 rounded-lg uppercase bg-neutral-900 text-gray-50 hover:bg-neutral-950'>
        {loading ? 'Loading...' : 'Sign Up'}
        </button>       
      </form>
      <div className="flex mt-2 gap-2">
        <p>Dont have an account?</p>
        <Link to='/sign-up'>
        <span className='text-blue-500'>Sign Up</span>
        </Link>
        <p className='text-red-700 mt-3'>{error && 'Something went wrong!'}</p>
      </div>
    </div>
  )
}
