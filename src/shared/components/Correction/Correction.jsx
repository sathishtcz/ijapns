import React from 'react'
import { BiRevision } from 'react-icons/bi'
import { FaGreaterThan, FaLessThan } from 'react-icons/fa6'
import { GoDotFill } from 'react-icons/go'

export default function Correction() {


    return (
        <>
            {/*correction Policy: */}
            <div className="mx-auto rounded-lg border-gray-200 border-2  border-t-[#1B56FD] border-t-5 p-6 ">
                <div className="flex flex-col gap-4 ">
                    <h2 className="text-[#1B56FD] namdhinggo-bold lg:text-4xl text-2xl">
                        Correction Policy:
                    </h2>
                    <p className="poppins-regular text-sm sm:text-base md:text-lg lg:text-[16px] text-justify  ">
                        <span className='text-[#1B56FD] font-medium'>The  International Journal of Applied Psychology and Neuroscience</span> is committed to maintaining accuracy and transparency in its published content. If errors are identified in a published article—whether by authors, editors, or readers—that affect the clarity, accuracy, or scientific integrity of the work, the journal will issue a correction. Authors are encouraged to promptly notify the editorial team if they discover any mistakes in their published work.

                    </p>
                </div>

            </div>


            <div className="grid md:grid-cols-2 grid-cols-1 gap-12 mt-8">
                {[
                    {
                        icon: <FaLessThan  className="text-[#1B56FD] text-3xl" />,
                        title: "Minor Corrections",
                        description: "Minor errors that do not affect the core findings or integrity of the research—such as spelling mistakes, author name corrections, or formatting issues—are addressed through a formal erratum.",
                        point: <GoDotFill className="text-[#1B56FD] text-md mt-1" />,
                        point1: "Includes typographical or author detail errors.",
                        point2: "Does not impact study results or conclusions.",
                        point3: "Issued as an erratum with proper linkage."
                    },
                    {
                        icon: <FaGreaterThan  className="text-[#1B56FD] text-3xl" />,
                        title: " Major Corrections",
                        description: "If substantial errors are found—such as incorrect data, misinterpretation, or missing information—a corrigendum is issued. These corrections clarify and update the article to maintain accuracy in the scientific record.",
                        point: <GoDotFill className="text-[#1B56FD] text-md mt-1" />,
                        point1: "Involves significant factual or data errors.",
                        point2: "May affect interpretation of results.",
                        point3: "Clearly marked and linked as a corrigendum."
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
                        icon: <BiRevision  className="text-[#1B56FD] text-3xl" />,
                        title: "Retractions and Revisions",
                        description: "In rare but serious cases, when an article is found to contain errors that invalidate its findings or if ethical concerns arise (such as plagiarism or fabrication), a retraction or major revision may be necessary. Retractions are clearly marked and the original article remains accessible for transparency, but it is prominently labeled as retracted. In some cases, the journal may allow corrected resubmissions if the issues can be responsibly addressed.",
                        point: <GoDotFill className="text-[#1B56FD] text-md mt-1" />,
                        point1: "Used for serious errors or ethical violations.",
                        point2: "Article is labeled as “Retracted” but stays visible.",
                        point3: "COPE guidelines are followed for fair handling."
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
