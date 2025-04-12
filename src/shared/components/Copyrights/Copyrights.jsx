import React from 'react'
import { FaRegCopyright } from 'react-icons/fa6';
import { FiFileText } from 'react-icons/fi';
import { GoDotFill } from "react-icons/go";
import { MdOutlinePolicy } from 'react-icons/md';

export default function Copyrights() {



    return (
        <>
            {/*Copyright Declaration: */}
            <div className="mx-auto rounded-lg border-gray-200 border-2  border-t-[#1B56FD] border-t-5 p-6 ">
                <div className="flex flex-col gap-4 ">
                    <h2 className="text-[#1B56FD] namdhinggo-bold lg:text-4xl text-2xl">
                        Copyright Declaration:
                    </h2>
                    <p className="poppins-regular text-sm sm:text-base md:text-lg lg:text-[16px] text-justify  ">
                        By submitting a manuscript to the  <span className='text-[#1B56FD] font-medium'> International Journal of Applied Psychology and Neuroscience</span>, authors agree to grant the journal the non-exclusive right to publish, reproduce, and distribute the work in all forms and media. Authors retain the copyright of their work, and all published content remains the intellectual property of the authors. However, the journal reserves the right to archive and index the article for academic and research purposes. Authors are responsible for ensuring that their submissions are original, do not infringe upon any existing copyrights, and that all necessary permissions have been obtained for any third-party content included in the manuscript.
                    </p>
                </div>

            </div>



            {/*Publication Rights and Content Warranty*/}

            <div>
                <div className="flex items-center mb-3">
                    <h2 className="mt-8 text-[#1B56FD] namdhinggo-bold lg:text-4xl text-2xl p-1">Copyright Policy</h2>
                    <div className="h-1 bg-[#1B56FD] flex-grow ml-4 rounded-full mt-8"></div>
                </div>

                <div className="space-y-8">
                    {[
                        {
                            icon: <FiFileText className="h-6 w-6 text-[#1B56FD]" />,
                            title: "Rights and Ownership",
                            description: "Authors retain full copyright of their submitted and published work. The International Journal of Applied Psychology and Neuroscience only requires a non-exclusive license to publish, distribute, and archive the article in all formats. This allows authors to share their work freely while ensuring its accessibility through our platform."
                        },
                        {
                            icon: <FiFileText className="h-6 w-6 text-[#1B56FD]" />,
                            title: "License to Publish",
                            description: "By submitting a manuscript, authors grant IJAPNS permission to publish the work under the agreed terms. This includes the right to reproduce, distribute, and display the article online or in print. Authors may be asked to sign a declaration form confirming the originality of their submission and their agreement to the publication terms."
                        },
                        {
                            icon: <FiFileText className="h-6 w-6 text-[#1B56FD]" />,
                            title: "Content and Responsibility",
                            description: "Authors must ensure that all content, including figures, tables, or excerpts, is either original or properly credited with written permission from copyright holders if necessary. The journal bears no responsibility for copyright infringement—this lies solely with the author(s)."
                        }
                    ].map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100 p-6"
                        >
                            <div className="flex items-center mb-4">
                                <div className="bg-[#E8EDFF] p-3 rounded-lg">
                                    {feature.icon}
                                </div>
                                <h3 className="ml-4 text-xl font-semibold text-gray-900">{feature.title}</h3>
                            </div>
                            <p className="text-gray-600 poppins-regular text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>



            <div className="grid md:grid-cols-2 grid-cols-1 gap-12 mt-8">
                {[
                    {
                        icon: <FaRegCopyright  className="text-[#1B56FD] text-3xl" />,
                        title: "Copyright Form ",
                        description: "Upon acceptance of the manuscript, authors may be required to complete and sign a Copyright Transfer Form. This form ensures that the journal has permission to publish and distribute the work while acknowledging the authors’ rights.",
                        point: <GoDotFill className="text-[#1B56FD] text-md mt-1" />,
                        point1: "Must be signed by the corresponding author.",
                        point2: "Confirms originality and author agreement.",
                        point3: "Form must be submitted before final publication."
                    },
                    {
                        icon: <MdOutlinePolicy  className="text-[#1B56FD] text-3xl" />,
                        title: " Open Access Policy",
                        description: "IJAPNS operates under an open-access policy, which allows unrestricted access to published articles for readers worldwide. Authors agree that their articles may be freely accessed, shared, and cited, increasing research visibility.",
                        point: <GoDotFill className="text-[#1B56FD] text-md mt-1" />,
                        point1: "Articles are freely accessible online without subscription.",
                        point2: "Encourages broader dissemination of research.",
                        point3: "Readers may reuse content with proper citation."
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


        </>
    )
}
