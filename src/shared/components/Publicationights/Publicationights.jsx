import React from 'react'
import {  FaRegUser } from 'react-icons/fa6'
import { GoDotFill } from 'react-icons/go'
import { IoHandRightSharp } from 'react-icons/io5'
import { SiOpenaccess } from 'react-icons/si'


export default function Publicationights() {

    return (
        <>
            {/*Publication Rights Policy: */}
            <div className="mx-auto rounded-lg border-gray-200 border-2  border-t-[#1B56FD] border-t-5 p-6 ">
                <div className="flex flex-col gap-4 ">
                    <h2 className="text-[#1B56FD] namdhinggo-bold lg:text-4xl text-2xl">
                        Publication Rights Policy:
                    </h2>
                    <p className="poppins-regular text-sm sm:text-base md:text-lg lg:text-[16px] text-justify  ">
                        <span className='text-[#1B56FD] font-medium'>The  International Journal of Applied Psychology and Neuroscience</span> upholds a transparent and ethical approach to publication rights. Authors retain the copyright of their work while granting the journal a non-exclusive license to publish, distribute, and archive the content in all formats. This ensures the widest possible dissemination while respecting the authors’ intellectual ownership. All accepted articles are published under open access, allowing unrestricted access and use by readers, provided proper citation and attribution to the original authors are maintained.

                    </p>
                </div>

            </div>


            <div className="grid md:grid-cols-2 grid-cols-1 gap-12 mt-8">
                {[
                    {
                        icon: <FaRegUser className="text-[#1B56FD] text-3xl" />,
                        title: "Author Ownership",
                        description: "Authors retain full copyright of their submitted and published work in the International Journal of Applied Psychology and Neuroscience. The journal only receives publishing rights necessary to disseminate the article effectively.",
                        point: <GoDotFill className="text-[#1B56FD] text-md mt-1" />,
                        point1: "Authors maintain copyright.",
                        point2: "Journal holds non-exclusive publishing rights.",
                        point3: "Encourages recognition of author contribution."
                    },
                    {
                        icon: <SiOpenaccess  className="text-[#1B56FD] text-3xl" />,
                        title: "Open Access Licensing",
                        description: "All articles are published under open access, ensuring free and global access to the content. Readers can view, share, and reuse content with proper attribution under the terms of the applicable Creative Commons license.",
                        point: <GoDotFill className="text-[#1B56FD] text-md mt-1" />,
                        point1: "Content accessible without subscription.",
                        point2: "Promotes global visibility and citation.",
                        point3: "Requires appropriate citation of original work."
                    }
                ].map((stat, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg shadow-sm p-8 text-center   border-t-5 border-t-[#1B56FD] flex flex-col items-center"
                    >
                        <div className="inline-flex items-center justify-center bg-[#E8EDFF] p-4 rounded-full mb-4">
                            {stat.icon}
                        </div>
                        <h3 className="text-xl poppins-semibold text-[#1B56FD] mb-2">{stat.title}</h3>
                        <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">
                            {stat.description}
                        </p>
                        {stat.point && stat.point1 && stat.point2 && stat.point3 && (
                            <div className="flex flex-col items-start w-full mt-4">
                                <div className="flex flex-row gap-2">
                                    {stat.point}
                                    <p className="poppins-regular text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">
                                        {stat.point1}
                                    </p>
                                </div>
                                <div className="flex flex-row gap-2 mt-2">
                                    {stat.point}
                                    <p className="poppins-regular text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">
                                        {stat.point2}
                                    </p>
                                </div>
                                <div className="flex flex-row gap-2 mt-2">
                                    {stat.point}
                                    <p className="poppins-regular text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">
                                        {stat.point3}
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 gap-12 mt-8">
                {[
                    {
                        icon: <IoHandRightSharp  className="text-[#1B56FD] text-3xl" />,
                        title: "Rights and Responsibilities",
                        description: "By submitting an article, authors confirm the originality of their work and grant the journal permission to publish and distribute it in both print and digital forms. Authors are also responsible for ensuring that any reused content (figures, tables, or substantial excerpts) is properly credited and permission has been obtained where necessary. ",
                        point: <GoDotFill className="text-[#1B56FD] text-md mt-1" />,
                        point1: "Submission confirms originality and permission to publish.",
                        point2: "Authors must credit reused materials appropriately.",
                        point3: "Sharing allowed with clear citation of journal source."
                    },

                ].map((stat, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg shadow-sm p-8 text-center   border-t-5 border-t-[#1B56FD] flex flex-col items-center"
                    >
                        <div className="inline-flex items-center justify-center bg-[#E8EDFF] p-4 rounded-full mb-4">
                            {stat.icon}
                        </div>
                        <h3 className="text-xl poppins-semibold text-[#1B56FD] mb-2">{stat.title}</h3>
                        <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">
                            {stat.description}
                        </p>
                        {stat.point && stat.point1 && stat.point2 && stat.point3 && (
                            <div className="flex flex-col items-start w-full mt-4">
                                <div className="flex flex-row gap-2">
                                    {stat.point}
                                    <p className="poppins-regular text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">
                                        {stat.point1}
                                    </p>
                                </div>
                                <div className="flex flex-row gap-2 mt-2">
                                    {stat.point}
                                    <p className="poppins-regular text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">
                                        {stat.point2}
                                    </p>
                                </div>
                                <div className="flex flex-row gap-2 mt-2">
                                    {stat.point}
                                    <p className="poppins-regular text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">
                                        {stat.point3}
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>


        </>
    )
}
