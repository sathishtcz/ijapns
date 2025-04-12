import React from 'react'
import { FiFileText, FiUpload } from 'react-icons/fi';
import { GoDotFill } from "react-icons/go";
import { HiLightBulb } from 'react-icons/hi';
import { BsSearch } from 'react-icons/bs';

export default function AimScope() {

    return (
        <>
            {/*Aim annd Scope Section */}
            <div className="mx-auto flex flex-row justify-between items-center gap-4 rounded-lg border-gray-200 border-2  border-t-[#1B56FD] border-t-5 p-6 ">
                <div className="flex flex-col gap-4 lg:max-w-[60rem]">
                    <h2 className="text-[#1B56FD] namdhinggo-bold lg:text-4xl text-2xl">
                        Aim and Scope:
                    </h2>
                    <p className="poppins-regular text-sm sm:text-base md:text-lg lg:text-[16px] text-justify  ">
                        <span className='text-[#1B56FD] font-medium'>The International Journal of Applied Psychology and Neuroscience </span> aims to provide a dynamic platform for the dissemination of cutting-edge research in the fields of psychology and neuroscience. The journal encourages interdisciplinary approaches and welcomes contributions that explore the scientific, clinical, experimental, and applied aspects of human behavior, brain function, and mental health. IJAPNS publishes original research articles, review papers, case studies, and special issues that advance knowledge in cognitive neuroscience, behavioral science, neuropsychology, psychophysiology, clinical psychology, and related domains.
                    </p>
                    <div className="text-start">
                        <a href="" target="_blank" rel="noopener noreferrer">
                            <button className="bg-[#1B56FD] text-white px-4 py-3   cursor-pointer rounded ">
                                <div className="flex justify-between gap-2 items-center ">
                                    {" "}
                                    Submit Manuscript
                                    <FiUpload />
                                </div>
                            </button>
                        </a>
                    </div>
                </div>
                <div className="hidden lg:flex lg:flex-shrink-0 2xl:mr-15">
                    <div className="bg-[#E8EDFF] flex-shrink-0 rounded-full p-12  flex items-center justify-center">
                        <div className="bg-white rounded-full p-6  flex items-center justify-center">
                            <img src="/assets/images/mentalhealth.png" alt="Upload Icon" className="w-[82px] h-[82px] " />
                        </div>

                    </div>

                </div>

            </div>


            {/*Aim and scope*/}

            <div>
                <div className="flex items-center mb-3">
                    <h2 className="mt-8 text-[#1B56FD] namdhinggo-bold lg:text-4xl text-2xl p-1">Journal Focus Areas</h2>
                    <div className="h-1 bg-[#1B56FD] flex-grow ml-4 rounded-full mt-8"></div>
                </div>

                <div className="space-y-8">
                    {[
                        {
                            icon: <FiFileText className="h-6 w-6 text-[#1B56FD]" />,
                            title: "Interdisciplinary Focus",
                            description: "The International Journal of Applied Psychology and Neuroscience is dedicated to promoting research that bridges the gap between psychology and neuroscience. The journal supports studies that combine cognitive science, behavioral analysis, and neurological research to provide a deeper understanding of how the brain influences behavior and mental processes. By encouraging interdisciplinary approaches, IJAPN fosters innovation across traditional boundaries, inviting work that integrates biology, psychology, medicine, and social science to address complex questions about human thought and action."
                        },
                        {
                            icon: <FiFileText className="h-6 w-6 text-[#1B56FD]" />,
                            title: "Applied Research",
                            description: "IJAPN places strong emphasis on applied research that translates theory into practice. The journal welcomes studies in cognitive neuroscience, clinical psychology, neuropsychology, and psychophysiology that aim to improve mental health, enhance learning, and inform therapeutic strategies. By focusing on real-world issues and evidence-based practices, the journal supports research that has direct impact in clinical, educational, and community settings. Submissions should offer meaningful insights or interventions that contribute to societal well-being and scientific advancement."
                        },
                        {
                            icon: <FiFileText className="h-6 w-6 text-[#1B56FD]" />,
                            title: "Global Contributions",
                            description: "Committed to academic diversity, IJAPNS invites submissions from researchers around the world. The journal values a range of article types—including original research, review articles, and case studies—and seeks to represent different cultural, clinical, and scientific perspectives. By encouraging a global exchange of ideas, IJAPN provides a platform for voices from both emerging and established research communities. This inclusive scope ensures the journal remains relevant, progressive, and responsive to the evolving needs of the international psychology and neuroscience fields."
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
                        icon: <HiLightBulb className="text-[#1B56FD] text-3xl" />,
                        title: "Innovation ",
                        description: "IJAPNS actively supports research that pushes the boundaries of conventional psychological science, encouraging new methodologies, technologies, and frameworks that drive the field forward.",
                        point: <GoDotFill className="text-[#1B56FD] text-md mt-1" />,
                        point1: "Emerging theories in cognitive and behavioral psychology.",
                        point2: "Use of AI, neuroimaging, and big data in psychological research.",
                        point3: "Development of new assessment tools and therapeutic techniques."
                    },
                    {
                        icon: <BsSearch className="text-[#1B56FD] text-3xl" />,
                        title: "Research and Practice",
                        description: "A core aim of IJAPNS is to bridge academic research with practical application, supporting work that leads to measurable improvements in mental health, therapy, education, and community well-being.",
                        point: <GoDotFill className="text-[#1B56FD] text-md mt-1" />,
                        point1: "Translational neuroscience and applied behavioral interventions.",
                        point2: "Evidence-based strategies for clinical and educational settings.",
                        point3: "Research with direct implications for public policy and health systems."
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
