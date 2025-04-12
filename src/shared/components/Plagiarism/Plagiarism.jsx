import React from 'react'
import { FaRegUser } from 'react-icons/fa6'
import { GoDotFill } from 'react-icons/go'
import { MdOutlinePolicy } from 'react-icons/md'
import { VscTools } from 'react-icons/vsc'


export default function Plagiarism() {


    return (
        <>
            {/*Plagiarism Policy: */}
            <div className="mx-auto rounded-lg border-gray-200 border-2  border-t-[#1B56FD] border-t-5 p-6 ">
                <div className="flex flex-col gap-4 ">
                    <h2 className="text-[#1B56FD] namdhinggo-bold lg:text-4xl text-2xl">
                        Plagiarism Policy:
                    </h2>
                    <p className="poppins-regular text-sm sm:text-base md:text-lg lg:text-[16px] text-justify  ">
                        <span className='text-[#1B56FD] font-medium'>The  International Journal of Applied Psychology and Neuroscience</span> maintains a strict policy against plagiarism to uphold academic integrity. All submitted manuscripts are screened using reliable plagiarism detection software to ensure originality. Authors are expected to submit only original work and appropriately cite all sources and references. Any form of plagiarism, including self-plagiarism, duplication, or unattributed content, will result in immediate rejection of the manuscript or retraction of the published article. The journal reserves the right to take appropriate action in cases of ethical misconduct.

                    </p>
                </div>

            </div>


            <div className="grid md:grid-cols-2 grid-cols-1 gap-12 mt-8">
                {[
                    {
                        icon: <MdOutlinePolicy  className="text-[#1B56FD] text-3xl" />,
                        title: "Zero Tolerance ",
                        description: "The journal strictly enforces a zero-tolerance approach toward plagiarism in any form. Authors must ensure that their work is original, properly cited, and free from any copied or duplicated content. Submissions found to contain plagiarized material are immediately rejected.",
                        point: <GoDotFill className="text-[#1B56FD] text-md mt-1" />,
                        point1: "No tolerance for plagiarism or duplication.",
                        point2: "Immediate rejection upon detection.",
                        point3: "Applies to both textual and conceptual content."
                    },
                    {
                        icon: <VscTools className="text-[#1B56FD] text-3xl" />,
                        title: "Detection Tools",
                        description: "All manuscripts submitted to the journal are checked for originality using trusted plagiarism detection software. This screening helps maintain academic integrity and ensures that published articles meet the journal’s ethical standards.",
                        point: <GoDotFill className="text-[#1B56FD] text-md mt-1" />,
                        point1: "Reliable plagiarism detection tools employed.",
                        point2: "Pre-review screening for all submissions.",
                        point3: "Ensures content originality and ethical compliance."
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
                        icon: <FaRegUser  className="text-[#1B56FD] text-3xl" />,
                        title: "Author Responsibility ",
                        description: "Maintaining the credibility of scientific publishing is a shared responsibility. If plagiarism is detected before or after publication, the journal may reject or retract the paper, notify the author’s institution, and blacklist the authors from future submissions. Authors must properly acknowledge all sources, paraphrase content with caution, and avoid reusing their previously published material without citation. Repeated offenses may lead to permanent submission bans.",
                        point: <GoDotFill className="text-[#1B56FD] text-md mt-1" />,
                        point1: "Retraction or rejection for plagiarized work.",
                        point2: "Notification of academic misconduct to relevant authorities.",
                        point3: "Responsibility lies with authors to ensure originality."
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
