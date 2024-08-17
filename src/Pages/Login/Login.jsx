import { FaGoogle } from 'react-icons/fa'
import '../registration/registration.css'
import { Link, useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'
import { AuthContext } from '../../Context/Authentication/Authentication'
import { useContext } from 'react'
const Login = () => {
    const navigate = useNavigate()
 // context for authentication
    const { loginUser, googleLogin } = useContext(AuthContext);
    const googlesignup = async()=>{
        const googleResponse = await googleLogin()
    if (googleResponse.user) {
        toast.success("Successfully Signup")
        navigate('/products')
    }

}
    const handleLogin= async (e) =>{
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        const loginResponse =  await loginUser(email, password)
        if (loginResponse.user) {
            toast.success("Login Successfully")
            navigate('/products')
        }
        toast.error("Login error")

    }
  return (
    <div className="flex h-screen justify-center items-center border bg px-3">

        <form className="flex flex-col gap-5 glass_effect bg-transparent p-5 w-96 "
             onSubmit={handleLogin}>
            <input type="email" placeholder='Email' name='email' className="border border-gray-200 p-3 rounded-xl outline-blue-300 text-blue-500 placeholder:text-gray-300 placeholder:tracking-[3px] bg-transparent"/>
            <input type="password" name='password' placeholder='Password' className="border border-gray-200 p-3 rounded-xl outline-blue-300 text-blue-500 placeholder:text-gray-300 placeholder:tracking-[3px] bg-transparent"/>
            <input type="submit" value="Login" className='border border-gray-200 p-3 text-white font-bold text-lg rounded-lg hover:bg-blue-500 ease-linear duration-300 hover:border-blue-500 hover:text-white'/>
            <div className='flex justify-center items-center gap-5 font-bold text-white mt-5  p-2 rounded-full bg-blue-500 duration-300 hover:border hover:bg-transparent cursor-pointer'
            onClick={googlesignup}>
                <FaGoogle className='text-white'></FaGoogle> Google
            </div>
            <div>
            <h4  className='text-white'>New in this Planet? <Link to='/registration' className='text-blue-300 font-bold'>Register Now!</Link></h4>
            </div>
        </form>
        <Toaster
            position="top-center"
            reverseOrder={false}
        />
    </div>
  )
}

export default Login
