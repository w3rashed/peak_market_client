
import { Link } from 'react-router-dom'

const HomeContent = () => {
  return (
    <div className='flex  flex-col justify-center items-center h-screen'>
      <h2 className='text-3xl font-extrabold text-green-700'>Please Log in First.</h2>
      <div className='flex flex-col justify-center mt-10'>
            <Link to='/login' className='btn bg-green-500 hover:bg-green-800 px-5  text-white text-xl'>Log In Now</Link>
        </div>
    </div>
  )
}

export default HomeContent