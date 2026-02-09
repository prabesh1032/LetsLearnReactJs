import { useForm } from "react-hook-form"

import React from 'react'   

function ReactHookform() {
    const {register,handleSubmit, formState: { errors }} = useForm();
    function submitForm(data){
       console.log("Form Data:",data);
    }
    console.log("ReactHookform component rendered");
    //with react hook form only the input that is being changed will re-render and not the entire form which is good for performance and user experience
    //also we can handle error handling and validation easily with react hook form and it also provides a lot of useful features like form state management, 
    // form validation, form submission handling and much more which makes it a great choice for handling forms in react applications

    //react hook form is best,however we cannot give all the validation in the register itself for complex validation we need to use yup or zod with react hook form
  return (
    <div className='min-h-screen bg-cyan-200 p-8 flex items-center justify-center'>
        <div className='bg-white p-8 rounded-xl shadow-lg w-full max-w-md'>
            <h1 className='text-3xl font-bold text-gray-800 mb-2 text-center'>Registration Form </h1>
            <p className='text-gray-600 text-sm mb-6 text-center'>Using React Hook Form</p>
            <form onSubmit={handleSubmit(submitForm)} className='space-y-5'>
                <div>
                    <label htmlFor="first" className='block text-sm font-medium text-gray-700 mb-1'>Name</label>
                    <input type="text" id="first" placeholder='Enter your name' {...register("name",
                        { required: "Name is required" }
                    )} className='w-full text-black px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition' />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                </div>
                <div>
                    <label htmlFor="age" className='block text-sm font-medium text-gray-700 mb-1'>Age</label>
                    <input type="number" id="age" placeholder='Enter your age' {...register("age", { required: "Age is required" })} className='w-full text-black px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition' />
                    {errors.age && <p className="text-red-500 text-sm mt-1">{errors.age.message}</p>}
                </div>
                <div>
                    <label htmlFor="email" className='block text-sm font-medium text-gray-700 mb-1'>Email</label>
                    <input type="email" id="email" placeholder='Enter your email' {...register("email", { required: "Email is required" })} className='w-full text-black px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition' />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>
                <div>
                    <label htmlFor="password" className='block text-sm font-medium text-gray-700 mb-1'>Password</label>
                    <input type="password" id="password" placeholder='Enter your password' {...register("password", { 
                        required: "Password is required",
                        minLength: {
                            value: 6,
                            message: "Password must be at least 6 characters"
                        },
                        maxLength: {
                            value: 20,
                            message: "Password must be less than 20 characters"
                        }
                         })} className='w-full text-black px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition' />
                    {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                </div>
                <button type='submit' className='w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-200 mt-6 shadow-md hover:shadow-lg'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default ReactHookform
