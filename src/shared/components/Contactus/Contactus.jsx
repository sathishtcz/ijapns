import React from 'react'

export default function Contactus() {
    return (
        <>

            <div className='w-full  mx-auto mt-11' >
            <h1 className="text-[#1B56FD] namdhinggo-bold lg:text-4xl text-2xl text-center mb-2 ">Contact us</h1>
            <p className="text-black text-base mb-4 poppins-regular text-center">Get in touch with us for any queries or support </p>
                <div className="bg-[#E8EDFF] p-6 rounded-lg  max-w-md mx-auto">
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-[#1B56FD] poppins-medium mb-1">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Name"
                                className="w-full p-2 rounded-lg  bg-white focus:outline-none focus:ring-2 focus:ring-[#1B56FD]"
                            />
                        </div>


                        <div>
                            <label htmlFor="email" className="block text-[#1B56FD] poppins-medium mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Email"
                                className="w-full p-2 rounded-lg bg-white  focus:outline-none focus:ring-2 focus:ring-[#1B56FD]"
                            />
                        </div>

                        <div>
                            <label htmlFor="subject" className="block text-[#1B56FD] poppins-medium mb-1">
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                placeholder="Subject"
                                className="w-full p-2 bg-white  rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1B56FD]"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-[#1B56FD] poppins-medium mb-1">
                                Message
                            </label>
                            <textarea
                                id="message"
                                placeholder="Your Message"
                                rows="4"
                                className="w-full p-2 bg-white rounded-lg  focus:outline-none focus:ring-2 focus:ring-[#1B56FD] max-h-[calc(85vh-100px)]"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="cursor-pointer w-full bg-[#1B56FD] text-white rounded-lg p-2 transition duration-300 flex items-center justify-center poppins-medium"
                        >
                            <span className="mr-2"></span> Send Email
                        </button>

                        <p className="text-center text-gray-600 mt-6 poppins-regular">
                            For any queries contact Email: <a href="mailto:editor@ijapns.com" className="text-[#1B56FD] hover:underline">editor@ijapns.com</a>
                        </p>
                    </form>
                </div>
            </div>

        </>
    )
}
