import React from 'react'
import { AiOutlineFileDone } from 'react-icons/ai';
import { FiFileText } from 'react-icons/fi';
import { GoDotFill } from "react-icons/go";
import { RiIndentIncrease } from 'react-icons/ri';

export default function Abstractindexing() {


    return (
        <>
            {/*Abstracting and Indexing: */}
            <div className="mx-auto rounded-lg border-gray-200 border-2  border-t-[#1B56FD] border-t-5 p-6 ">
                <div className="flex flex-col gap-4 ">
                    <h2 className="text-[#1B56FD] namdhinggo-bold lg:text-4xl text-2xl">
                    Abstracting and Indexing:
                    </h2>
                    <p className="poppins-regular text-sm sm:text-base md:text-lg lg:text-[16px] text-justify  ">
                        <span className='text-[#1B56FD] font-medium'>The  International Journal of Applied Psychology and Neuroscience</span> is committed to enhancing the visibility and accessibility of its published content. To achieve this, the journal is actively indexed and abstracted in recognized academic databases and directories. These platforms ensure that the research articles reach a broad scholarly audience and contribute to global scientific dialogue. Inclusion in indexing services also reflects the journal’s adherence to high publication standards and its dedication to promoting impactful, peer-reviewed research in the fields of applied psychology and neuroscience.

                    </p>
                </div>

            </div>


            {/*Publication Rights and Content Warranty*/}

            <div>
                <div className="flex items-center mb-3">
                    <h2 className="mt-8 text-[#1B56FD] namdhinggo-bold lg:text-4xl text-2xl p-1">Visibility Through Indexing</h2>
                    <div className="h-1 bg-[#1B56FD] flex-grow ml-4 rounded-full mt-8"></div>
                </div>

                <div className="space-y-8">
                    {[
                        {
                            icon: <FiFileText className="h-6 w-6 text-[#1B56FD]" />,
                            title: "Enhanced Discoverability",
                            description: "The journal ensures that published research is widely discoverable through indexing in prominent academic and scholarly databases. This allows researchers, educators, and practitioners around the world to easily access, cite, and build upon the work published in the journal."
                        },
                        {
                            icon: <FiFileText className="h-6 w-6 text-[#1B56FD]" />,
                            title: "Academic Recognition",
                            description: "Being indexed in reputed databases boosts the credibility and academic reputation of both the journal and its contributors. It increases the chances of citation and contributes to the overall impact and scholarly value of the research articles."
                        },
                        {
                            icon: <FiFileText className="h-6 w-6 text-[#1B56FD]" />,
                            title: "Global Accessibility",
                            description: "Abstracting and indexing services facilitate the global distribution of published work. By being present in multiple platforms, the journal promotes inclusive access to knowledge, enabling researchers from various disciplines and regions to engage with the content."
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
                        icon: <AiOutlineFileDone  className="text-[#1B56FD] text-3xl" />,
                        title: "Quality Validation",
                        description: "Abstracting and indexing in reputable databases act as a mark of quality and trust for a journal. These services assess editorial standards, peer-review processes, and overall publishing ethics before inclusion, reflecting the journal’s commitment to academic excellence.",
                        point: <GoDotFill className="text-[#1B56FD] text-md mt-1" />,
                        point1: "Indexing validates journal quality and integrity.",
                        point2: "Highlights strong peer-review and ethical practices.",
                        point3: "Builds trust among authors, readers, and institutions."
                    },
                    {
                        icon: <RiIndentIncrease  className="text-[#1B56FD] text-3xl" />,
                        title: "Citations",
                        description: "Presence in major indexing platforms significantly improves the visibility and reach of articles, thereby increasing the potential for higher citation rates. This not only benefits individual authors but also enhances the impact factor and influence of the journal as a whole.",
                        point: <GoDotFill className="text-[#1B56FD] text-md mt-1" />,
                        point1: "Boosts article visibility and academic reach.",
                        point2: "Helps authors gain wider recognition.",
                        point3: "Contributes to the journal’s citation metrics and impact."
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
