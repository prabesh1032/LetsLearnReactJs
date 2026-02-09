import React,{useState} from 'react'

function Form() {
    const [name,setName] = useState("");
    const [age,setAge] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    function handleSubmit(e){
        e.preventDefault();
        console.log("name:",name);
        console.log("age:",age);
        console.log("email:",email);
        console.log("password:",password);
    }
    console.log("Form component rendered");
    //in this type of form this will render the entire form on every keystroke which is not good for performance
    //so wee need to use react hook form to optimize the performance and avoid unnecessary re-renders
  return (
    <div className='min-h-screen  bg-cyan-100 p-8 flex items-center justify-center'>
        <div className='bg-white p-8 rounded-xl shadow-lg w-full max-w-md'>
            <h1 className='text-3xl font-bold text-red-800 mb-2 text-center'>Registration Form</h1>
            <p className='text-gray-600 text-sm mb-6 text-center'>Please fill in your details below</p>
            <form onSubmit={handleSubmit} className='space-y-5'>
                <div>
                    <label className='block text-sm font-medium text-gray-700 mb-1'>Name</label>
                    <input type="text" placeholder='Enter your name' value={name} onChange={(e)=>setName(e.target.value)} className='w-full text-black px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition' />
                </div>
                <div>
                    <label className='block text-sm font-medium text-gray-700 mb-1'>Age</label>
                    <input type="number" placeholder='Enter your age' value={age} onChange={(e)=>setAge(e.target.value)} className='w-full text-black px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition' />
                </div>
                <div>
                    <label className='block text-sm font-medium text-gray-700 mb-1'>Email</label>
                    <input type="email" placeholder='Enter your email' value={email} onChange={(e)=>setEmail(e.target.value)} className='w-full text-black px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition' />
                </div>
                <div>
                    <label className='block text-sm font-medium text-gray-700 mb-1'>Password</label>
                    <input type="password" placeholder='Enter your password' value={password} onChange={(e)=>setPassword(e.target.value)} className='w-full text-black px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition' />
                </div>
                <button type='submit' className='w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-200 mt-6 shadow-md hover:shadow-lg'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Form
