import React from "react";
import { useNavigate } from 'react-router-dom';
import mentalhealth from "/assets/images/mentalhealth.png";
import { AiOutlineGlobal } from "react-icons/ai";
import { IoBookOutline } from "react-icons/io5";
import { HiLightBulb } from "react-icons/hi";
import { FaArrowRightLong } from "react-icons/fa6";
import { LuNotebookPen } from "react-icons/lu";
import { BsCalendar4, BsSearch } from "react-icons/bs";
import { FaRegStickyNote } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { FiUpload } from "react-icons/fi";



export default function Home({ firstRow, secondRow, thirdRow }) {
    const navigate = useNavigate();

    return (
        <>
            {/* welcome section */}

            <div className="mx-auto flex flex-row justify-between items-center gap-4 rounded-lg border-gray-200 border-2  border-t-[#1B56FD] border-t-5 p-6 ">
                <div className="flex flex-col gap-4 lg:max-w-[60rem]">
                    <h2 className="text-[#1B56FD] namdhinggo-bold lg:text-4xl text-2xl">
                        International Journal of Applied Psychology and <br className="lg:block hidden"></br>Neuroscience
                    </h2>
                    <p className="poppins-regular text-sm sm:text-base md:text-lg lg:text-[16px] text-justify  ">
                        It is a peer-reviewed, interdisciplinary journal committed to advancing the scientific understanding and practical application of psychology and neuroscience. Our mission is to bridge the gap between research and practice by publishing high-quality studies that explore the complex interplay between human behavior, brain function, and cognitive processes across diverse populations and settings.
                    </p>
                    <div className="text-start">
                        <a href="https://ijapns.com/ijapns/index.php/ijapns/about/submissions" target="_blank" rel="noopener noreferrer">
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
                            <img src={mentalhealth} alt="Upload Icon" className="w-[82px] h-[82px] " />
                        </div>

                    </div>

                </div>

            </div>


            {/*about ,aim */}

            <div className="py-10 bg-[#F8FAFC] flex justify-center items-center border-t-[#1B56FD] border-t-5 mt-8 ">
                <div className="max-w-6xl px-4 sm:px-6 w-full">
                    <div className="max-w-3xl mx-auto text-center mb-5 flex flex-col items-center">
                        <h2 className="text-[#1B56FD] namdhinggo-bold lg:text-4xl text-2xl mb-4">About the Journal</h2>
                        <p className="poppins-regular text-sm sm:text-base md:text-lg lg:text-[16px] text-justify mb-4">
                            The International Journal of Applied Psychology and Neuroscience is a peer-reviewed publication dedicated to advancing research at the intersection of psychology and neuroscience. The journal focuses on applied studies that explore human behavior, brain function, cognitive processes, and mental health.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 grid-cols-1 gap-12">
                        {[
                            {
                                icon: <AiOutlineGlobal className="text-[#1B56FD] text-3xl" />,
                                title: "Journal Scope",
                                description: "IJAPNS publishes applied, peer-reviewed research in psychology and neuroscience, focusing on behavior, brain function, cognition, and mental health with real-world relevance."
                            },
                            {
                                icon: <IoBookOutline className="text-[#1B56FD] text-3xl" />,
                                title: "Editorial Vision",
                                description: "Dedicated to advancing mind and brain science, IJAPNS features innovative studies in clinical psychology, neuropsychology, and cognitive neuroscience from global contributors."
                            },
                            {
                                icon: <HiLightBulb className="text-[#1B56FD] text-3xl" />,
                                title: "Publication Focus",
                                description: "IJAPNS highlights research that blends psychological theory with neuroscience, supporting practical applications in mental health, education, and behavioral interventions."
                            }
                        ].map((stat, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg shadow-sm p-8 text-center border-t-5 border-t-[#1B56FD] flex flex-col items-center"
                            >
                                <div className="inline-flex items-center justify-center bg-[#E8EDFF] p-4 rounded-full mb-4">
                                    {stat.icon}
                                </div>
                                <h3 className="text-xl poppins-semibold text-[#1B56FD] mb-2">{stat.title}</h3>
                                <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">
                                    {stat.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-10 flex justify-center">
                        <button
                            onClick={() => navigate("/aboutus")}
                            className="inline-flex items-center gap-2 text-[#1B56FD] font-semibold hover:text-blue-700 transition-colors cursor-pointer"
                        >
                            Learn more about the journal
                            <FaArrowRightLong className="text-[#1B56FD] text-lg" />
                        </button>
                    </div>
                </div>
            </div>


            {/*aim and scope*/}

            <div className="bg-white py-10 flex justify-center">
                <div className="px-4 lg:px-0 w-full">
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="flex-1 flex flex-col">
                            <h2 className="text-[#1B56FD] namdhinggo-bold lg:text-4xl text-2xl mb-4">Aim and Scope</h2>
                            <p className="poppins-regular text-sm sm:text-base md:text-lg lg:text-[16px] text-justify mb-4">
                            The International Journal of Applied Psychology and Neuroscience aims to promote high-quality, interdisciplinary research that explores the intersection of psychology and neuroscience with real-world applications. The journal provides a platform for original empirical studies, theoretical analyses, and review articles that contribute to the understanding of brain-behavior relationships and their practical implications.
                            </p>
                            <p className="poppins-medium text-[18px] text-justify mb-4 text-[#1B56FD]">
                                Scope includes (but is not limited to):
                            </p>
                            <div className="flex flex-col gap-3 ">
                                <div className="flex flex-row gap-1">
                                    <GoDotFill className="text-[#1B56FD] text-md mt-1" />
                                    <p className="poppins-regular text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Cognitive and behavioral neuroscience</p>
                                </div>

                                <div className="flex flex-row gap-1">
                                    <GoDotFill className="text-[#1B56FD] text-md mt-1" />
                                    <p className="poppins-regular text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Clinical and health psychology</p>
                                </div>
                                <div className="flex flex-row gap-1">
                                    <GoDotFill className="text-[#1B56FD] text-md mt-1" />

                                    <p className="poppins-regular text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Neuropsychological assessment and rehabilitation</p>
                                </div>
                                <div className="flex flex-row gap-1">
                                    <GoDotFill className="text-[#1B56FD] text-md mt-1" />
                                    <p className="poppins-regular text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">Educational and developmental neuroscience</p>
                                </div>
                            </div>

                            <div className="max-w-lg mt-4">
                                <button
                                    onClick={() => navigate('/aimscope')}
                                    className="bg-[#1B56FD] text-white px-4 py-3   cursor-pointer rounded "
                                >   <div className="flex justify-between gap-2 items-center ">
                                        Explore Scope Details
                                        <FaArrowRightLong />
                                    </div>
                                </button>
                            </div>


                        </div>

                        <div className="flex-1 grid lg:grid-cols-2 grid-cols-1 gap-4">
                            {[
                                {
                                    icon: <LuNotebookPen className="text-[#1B56FD] text-3xl mb-3" />,
                                    title: "Research Articles",
                                    description: "IJAPNS welcomes original empirical studies that explore applied aspects of psychology and neuroscience."
                                },
                                {
                                    icon: <BsSearch className="text-[#1B56FD] text-3xl mb-3" />,
                                    title: "Review Papers",
                                    description: "Comprehensive and critical reviews that suggest future directions in applied psychology and neuroscience are encouraged."
                                },
                                {
                                    icon: <FaRegStickyNote className="text-[#1B56FD] text-3xl mb-3" />,
                                    title: "Case Studies",
                                    description: "Well-documented case studies that provide valuable clinical or practical insights into psychological or neurological conditions."
                                },
                                {
                                    icon: <BsCalendar4 className="text-[#1B56FD] text-3xl mb-3" />,
                                    title: "Special Issues",
                                    description: "IJAPNS publishes themed special issues focusing on emerging topics or interdisciplinary themes."
                                }
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-[#E8EDFF] p-6 rounded-lg flex flex-col"
                                >
                                    {item.icon}
                                    <h3 className="text-xl poppins-semibold text-[#1B56FD] mb-2">{item.title}</h3>
                                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Research Domains */}
            <div className="mb-8 bg-[#F8FAFC] rounded-lg p-8 border-t-[#1B56FD] border-t-5">
                <div className="text-center mb-8">
                    <h2 className="text-[#1B56FD] namdhinggo-bold lg:text-4xl text-2xl mb-2">Key Research Domains</h2>
                    <p className="lg:text-[25px] text-[20px] namdhinggo-medium   max-w-3xl mx-auto">
                    "The journal covers the following areas of Applied Psychology and Neuroscience."
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-y-3 gap-x-8">
                    {/* Column 1 */}
                    <div className="space-y-3">
                        {firstRow.map((keyword, index) => (
                            <div key={index} className="flex items-center bg-white p-3 rounded-lg shadow-sm">
                                <div className="bg-[#E8EDFF] p-2 rounded-md">
                                    <BsSearch className="h-4 w-4 text-[#1B56FD]" />
                                </div>
                                <span className="ml-3 text-gray-700">{keyword}</span>
                            </div>
                        ))}
                    </div>

                    {/* Column 2 */}
                    <div className="space-y-3">
                        {secondRow.map((keyword, index) => (
                            <div key={index} className="flex items-center bg-white p-3 rounded-lg shadow-sm">
                                <div className="bg-[#E8EDFF] p-2 rounded-md">
                                    <BsSearch className="h-4 w-4 text-[#1B56FD]" />
                                </div>
                                <span className="ml-3 text-gray-700">{keyword}</span>
                            </div>
                        ))}
                    </div>

                    {/* Column 3 */}
                    <div className="space-y-3">
                        {thirdRow.map((keyword, index) => (
                            <div key={index} className="flex items-center bg-white p-3 rounded-lg shadow-sm">
                                <div className="bg-[#E8EDFF] p-2 rounded-md">
                                    <BsSearch className="h-4 w-4 text-[#1B56FD]" />
                                </div>
                                <span className="ml-3 text-gray-700">{keyword}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>



            {/*Last*/}
            <div className="mx-auto rounded-lg border-gray-200 border-2  border-t-[#1B56FD] border-t-5 p-8 bg-[#F8FAFC]">
                <h2 className="text-[#1B56FD] namdhinggo-bold lg:text-4xl text-2xl mb-4 text-center">Journal Announcement</h2>
                <div className="text-center ">
                    <p className="text-gray-900 mb-4   lg:px-0  text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">
                        We publish original research articles, review papers, case studies, and technical notes in the fields of applied psychology and neuroscience. The journal emphasizes emerging trends, innovative research methodologies, and practical applications in mental health, cognition, and neural sciences. IJAPNS ensures a swift and transparent peer-review process, typically completing reviews within two weeks of submission. Accepted manuscripts are published online promptly after the final version is received, enabling rapid and broad dissemination of impactful scientific research.
                    </p>
                    <div className="text-center">
                        <p className="poppins-medium  text-sm lg:text-base">
                            The last date for manuscript submission for the next issue is June 22, 2025
                        </p>
                    </div>
                    <p className=" mt-4 px-4 lg:px-0">
                        With Warm Regards, <br />
                        <span className="poppins-semibold text-gray-900">Editor-in-Chief </span><br />
                        <span className="poppins-bold text-[#1B56FD]">IJAPNS</span>
                    </p>
                </div>

            </div>

        </>
    );
}
