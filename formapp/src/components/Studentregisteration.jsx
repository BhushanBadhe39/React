import React from 'react'
import { useForm } from 'react-hook-form'

export default function Studentregisteration() {
    const {register,handleSubmit, formState: { errors }} = useForm()
    
        const onSubmit = (data)=>{
            console.log(data);
            
        }
  return (
    <div>
        <form className='px-70 py-10' onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-12">
        
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base/7 font-semibold text-gray-900">Student Registration Form</h2>
          <p className="mt-1 text-sm/6 text-gray-600">Welcome to IT Vedant. Fill in the details below.</p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="name" className="block text-sm/6 font-medium text-gray-900">
                Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="given-name"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  {...register('name', { required: true })}
                />
				{errors.name && <span className="text-red-600">This field is required</span>}
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="phone-number" className="block text-sm/6 font-medium text-gray-900">
                Phone Number
              </label>
              <div className="mt-2">
                <input
                  id="phone-number"
                  name="phone-number"
                  type="text"
                  autoComplete="family-name"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  {...register('phone-number', { required: "Phone number is required", pattern: { value: /^[0-9]{10}$/, message: "Invalid phone number" } })}
                />
				{errors['phone-number'] && <span className="text-red-600">{errors['phone-number'].message}</span>}
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  {...register('email', { required: true })}
                />
				{errors.email && <span className="text-red-600">This field is required</span>}
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="course" className="block text-sm/6 font-medium text-gray-900">
                Course
              </label>
              <div className="mt-2 grid grid-cols-1">
                <select
                  id="course"
                  name="course"
                  autoComplete="course-name"
                  className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  {...register('course', { required: true })}
                >

                  <option>Full Stack</option>
                  <option>Data Science</option>
                  <option>Software Testing</option>
                </select>
				{errors.course && <span className="text-red-600">This field is required</span>}
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Submit
        </button>
      </div>
    </form>
    </div>
  )
}
