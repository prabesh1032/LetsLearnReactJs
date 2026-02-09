import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from '@hookform/resolvers/zod';


import React from 'react'

const formSchema = z.object({
    name: z.string().min(1, "Name is required").max(100, "Name is too long"),
    age: z.coerce.number().min(1, "Age is required").max(120, "Invalid age"),
    email: z.string().email("Invalid email address").min(1, "Email is required"),
    password: z.string().min(6, "Password must be at least 6 characters").max(20, "Password must be less than 20 characters").min(1, "Password is required"),
    confirmPassword: z.string().min(1, "Confirm Password is required")
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"] // This tells Zod which field the error message should be associated with
})

function ZodForm() {
    const { register, handleSubmit, formState: { errors } } = useForm(
        {
            resolver: zodResolver(formSchema)
        });
    function submitForm(data) {
        console.log("Form Data:", data);
    }
    console.log("ZodForm component rendered");
    return (
        <div className='min-h-screen bg-cyan-200 p-8 flex items-center justify-center'>
            <div className='bg-white p-8 rounded-xl shadow-lg w-full max-w-md'>
                <h1 className='text-3xl font-bold text-gray-800 mb-2 text-center'>Registration Form </h1>
                <p className='text-gray-600 text-sm mb-6 text-center'>Using React Hook Form with Zod</p>
                <form onSubmit={handleSubmit(submitForm)} className='space-y-5'>
                    <div>
                        <label htmlFor="first" className='block text-sm font-medium text-gray-700 mb-1'>Name</label>
                        <input type="text" id="first" placeholder='Enter your name' {...register("name")} className='w-full text-black px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition' />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                    </div>
                    <div>
                        <label htmlFor="age" className='block text-sm font-medium text-gray-700 mb-1'>Age</label>
                        <input type="number" id="age" placeholder='Enter your age' {...register("age")} className='w-full text-black px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition' />
                        {errors.age && <p className="text-red-500 text-sm mt-1">{errors.age.message}</p>}
                    </div>
                    <div>
                        <label htmlFor="email" className='block text-sm font-medium text-gray-700 mb-1'>Email</label>
                        <input type="email" id="email" placeholder='Enter your email' {...register("email")} className='w-full text-black px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition' />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                    </div>
                    <div>
                        <label htmlFor="password" className='block text-sm font-medium text-gray-700 mb-1'>Password</label>
                        <input type="password" id="password" placeholder='Enter your password' {...register("password")} className='w-full text-black px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition' />
                        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                    </div>
                    <div>
                        <label htmlFor="confirmPassword" className='block text-sm font-medium text-gray-700 mb-1'>Confirm Password</label>
                        <input type="password" id="confirmPassword" placeholder='Confirm your password' {...register("confirmPassword")} className='w-full text-black px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition' />
                        {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>}
                    </div>
                    <button type='submit' className='w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-200 mt-6 shadow-md hover:shadow-lg'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default ZodForm
