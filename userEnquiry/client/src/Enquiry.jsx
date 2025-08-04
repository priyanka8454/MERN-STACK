import React from 'react';
import axios from 'axios';
//import 'flowbite';
//import 'flowbite-react';
export default function Enquiry() {


  let saveEnquiry = (e) => {
    alert("Enquiry Submitted Successfully");
    e.preventDefault()
 
    let formData = {
      name: e.target.name.value,
      email: e.target.email.value,     
      phone: e.target.phone.value,
      message: e.target.message.value
    }

    axios.post('http://localhost:8020/api/website/enquiry/insert', formData)
      .then((res)=>{
        console.log(res.data)

      })
    
  };

  return (
    <div >
      <h1 className="text-[40px] font-bold  text-center">User Enquiry</h1>
      <div className='grid grid-cols-[30%_auto]  gap-10' ></div>
      <div className='bg color-200 p-4 m-4 rounded-lg shadow-lg'> 
        <div className="flex gap-8">
          <form className='flex flex-col border-4 border-blue-500 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 gap-4' onSubmit={saveEnquiry}>    

            <label className='text-lg font-semibold'>Your Name:</label>
            <input
              type="text"
              name="name" // <-- Add this
              className='border border-white -300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
              placeholder='Enter your name'
            />
            <label className='text-lg font-semibold'>Your Email:</label>
            <input
              type="email"
              name="email" // <-- Add this
              className='border border-white -300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
              placeholder='Enter your email'
            />
            <label className='text-lg font-semibold'>Your Phone No:</label>
            <input
              type="text"
              name="phone" // <-- Add this
              className='border border-white -300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
              placeholder='Enter your Phone No'
            />
            <label className='text-lg font-semibold'>Your Message:</label>
            <textarea
              name="message" // <-- Add this
              className='border border-white -300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
              placeholder='Enter your message'
              rows="4"
            ></textarea>
            <button type="submit" className='bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors'>Submit</button>
          </form>
          <div>
            <h2 className = 'text-[30px] border-4 border-blue-500 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 font-bold'> Enquiry List </h2>
            <table className='w-full border-4 border-blue-500 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600  border-collapse'>
              <thead>
                <tr className='bg-black-100'>
                  <th className='border p-2'>SR NO</th>
                  <th className='border p-2'>NAME</th>
                  <th className='border p-2'>EMAIL</th>
                  <th className='border p-2'>PHONE</th>
                  <th className='border p-2'>MESSAGE</th>
                  <th className='border p-2'>EDIT</th>
                  <th className='border p-2'>DELETE</th>
                </tr>
              </thead>
              <tbody>
                {/* Example data, replace with dynamic data */}
                <tr>
                  <td className='border p-2'>1</td>
                  <td className='border p-2'>John Doe</td>
                  <td className='border p-2'>john@example.com</td>
                  <td className='border p-2'>1234567890</td>
                  <td className='border p-2'>Hello, this is a sample enquiry.</td>
                  <td className='border p-2'>
                    <button className='bg-yellow-500 text-white p-1 rounded hover:bg-yellow-600 transition-colors '>Edit</button>
                  </td>
                  <td className='border p-2'>
                    <button className='bg-red-500 text-white p-1 rounded hover:bg-red-600 transition-colors'>Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
