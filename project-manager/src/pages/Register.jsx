
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    // State to track the registration form fields
    const [registrationData, setRegistrationData] = useState({
        name: '',
        email: '',
        password: '',
        accountType: '',
    });

    // Function to handle changes in the form fields
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setRegistrationData({
            ...registrationData,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        //
        console.log('Registration data:', registrationData);
        // You can send this data to your backend for registration
    };

    return (
        <div className='flex justify-center items-center h-[100vh] w-full relative bg-gradient-to-r from-violet-600 to-indigo-600'>
            <form
                onSubmit={handleSubmit} // Handle form submission
                className='bg-white absolute z-1 flex flex-col gap-3 md:w-[30%] w-[70%] border-2 border-black md:py-6 md:px-3 py-5 px-4 rounded-lg h-fit justify-center'>
                <h2 className='text-lg font-semibold text-center'>Register</h2>
                <input
                    type="text"
                    name="name"
                    placeholder='Your Name'
                    className='border border-black p-1 rounded-md'
                    value={registrationData.name}
                    onChange={handleInputChange}
                />
                <input
                    type="email"
                    name="email"
                    placeholder='Your Email'
                    className='border border-black p-1 rounded-md'
                    value={registrationData.email}
                    onChange={handleInputChange}
                />
                <input
                    type="password"
                    name="password"
                    placeholder='Password'
                    className='border border-black p-1 rounded-md'
                    value={registrationData.password}
                    onChange={handleInputChange}
                />
                <select
                    name="accountType"
                    id="accountType"
                    className='border border-black rounded-md p-1'
                    value={registrationData.accountType}
                    onChange={handleInputChange}
                >
                    <option value="" defaultChecked>
                        Select User Account Type
                    </option>
                    <option value="Admin">Admin</option>
                    <option value="Student">Student</option>
                    <option value="Faculty">Faculty</option>
                </select>
                <button type="submit" className='border border-black text-center rounded-md p-1'>
                    Register
                </button>
                <p>can add more fields</p> 
                <div className='flex mt-8 gap-3 justify-center'>
                    <p className='text-gray-500'>Already have an account? </p>
                    <Link to="/login">Login</Link>
                </div>
            </form>
        </div>

    );
}

export default Register
