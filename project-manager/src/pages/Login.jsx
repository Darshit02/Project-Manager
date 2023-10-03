import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
    // State to track the selected account type
    const [accountType, setAccountType] = useState('');

    // Function to handle changes in the select input
    const handleAccountTypeChange = (event) => {
        setAccountType(event.target.value);
    };

    return (
        <>
            <div className='flex justify-center items-center h-[100vh] w-full relative bg-gradient-to-r from-violet-600 to-indigo-600 '>
                {/* <div className='bg-sky-600 h-[100px] w-[100px] rounded-full absolute z-[-5] bottom-[20%] right-[20%] md:right-[35%]' /> */}
                {/* <div className='bg-sky-600 h-[100px] w-[100px] rounded-full absolute z-[-5] top-[20%] left-[20%] md:left-[35%] ' /> */}
                <form
                    action=""
                    className='bg-white absolute z-1 flex flex-col gap-3 md:w-[30%] w-[70%] border-2 border-black md:py-6 md:px-3 py-5 px-4 rounded-lg h-fit justify-center'>
                    <h2 className='text-lg font-semibold text-center ' >Login</h2>
                    <select
                        name="accountType"
                        id="accountType"
                        className='border border-black rounded-md p-1'
                        value={accountType} // Set the selected value
                        onChange={handleAccountTypeChange} // Handle select change
                    >
                        <option value="" defaultChecked>
                            Select User Account Type
                        </option>
                        <option value="Admin">Admin</option>
                        <option value="Student">Student</option>
                        <option value="Faculty">Faculty</option>
                    </select>

                    {/* Conditionally render input fields based on the selected option */}
                    {accountType === 'Admin' && (
                        <>
                            <input
                                type="text"
                                placeholder='Please Enter your Enrolment NO.'
                                className='border border-black p-1 w-full rounded-md'
                            />
                            <input
                                type="email"
                                name=""
                                id=""
                                placeholder='Please enter your Password'
                                className='border border-black p-1 w-full rounded-md'
                            />
                        </>
                    )}
                    {accountType === 'Student' && (
                        <>
                            <input
                                type="text"
                                placeholder='Please Enter your Enrolment NO.'
                                className='border border-black p-1 w-full rounded-md'
                            />
                            <input
                                type="email"
                                name=""
                                id=""
                                placeholder='Please enter your Password'
                                className='border border-black p-1 w-full rounded-md'
                            />
                        </>
                    )}
                    {accountType === 'Faculty' && (
                        <>
                            <input
                                type="text"
                                placeholder='Please Enter your Faculty NO'
                                className='border border-black p-1 w-full rounded-md'
                            />
                            <input
                                type="email"
                                name=""
                                id=""
                                placeholder='Please enter your Password'
                                className='border border-black p-1 w-full rounded-md'
                            />
                        </>
                    )}
                    {/* Display a message when "Select User Account Type" is chosen */}
                    {accountType === '' && (
                        <p>Please select Your account type</p>
                    )}
                    <button className='border border-black text-center rounded-md p-1'>Login</button>

                    <div className='flex mt-8 gap-3 justify-center ' >
                        <p className='text-gray-500' >Don't Have Account? </p>
                        <Link to="/register"> {/* Use Link to navigate to the registration page */}
                            <button>Register</button>
                        </Link>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Login;
