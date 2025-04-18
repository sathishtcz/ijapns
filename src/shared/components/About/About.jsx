import React from 'react'
import { AiOutlineGlobal } from 'react-icons/ai';
import { FiEdit, FiFileText, FiUpload } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { GoDotFill } from "react-icons/go";
import { FaArrowRightLong } from 'react-icons/fa6';

export default function About() {
    const navigate = useNavigate();

    return (
        <>
            {/* About section */}
            <div className="mx-auto flex flex-row justify-between items-center gap-4 rounded-lg border-gray-200 border-2  border-t-[#1B56FD] border-t-5 p-6 ">
                <div className="flex flex-col gap-4 lg:max-w-[60rem]">
                    <h2 className="text-[#1B56FD] namdhinggo-bold lg:text-4xl text-2xl">
                        About us:
                    </h2>
                    <p className="poppins-regular text-sm sm:text-base md:text-lg lg:text-[16px] text-justify  ">
                        <span className='text-[#1B56FD] font-medium'>The International Journal of Applied Psychology and Neuroscience</span> is a peer-reviewed, open-access scholarly journal committed to advancing the fields of psychology and neuroscience through high-quality, original research. IJAPNS serves as a platform for scientists, clinicians, educators, and scholars to share findings that bridge theory and practical application in understanding human behavior, cognition, and brain function.
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
                            <img src="/assets/images/mentalhealth.png" alt="Upload Icon" className="w-[82px] h-[82px] " />
                        </div>

                    </div>

                </div>

            </div>



            {/*scope and mission*/}
            <div className="grid md:grid-cols-2 grid-cols-1 gap-12 mt-8">
                {[
                    {
                        icon: <FiEdit className="text-[#1B56FD] text-3xl" />,
                        title: "Editorial Commitment",
                        description: "IJAPNS is guided by a dedicated editorial board composed of esteemed researchers and professionals in the fields of psychology and neuroscience.We are committed to maintaining the highest standards of peer review.",
                        point: <GoDotFill className="text-[#1B56FD] text-md mt-1" />,
                        point1: "Double-blind peer review process.",
                        point2: "Exploring brain function and mental health applications.",
                        point3: "Timely decision-making and transparent communication."
                    },
                    {
                        icon: <AiOutlineGlobal className="text-[#1B56FD] text-3xl" />,
                        title: " Global Reach",
                        description: "The journal welcomes contributions from researchers around the world, embracing diverse perspectives and contexts in psychological and neuroscientific research.",
                        point: <GoDotFill className="text-[#1B56FD] text-md mt-1" />,
                        point1: "International authorship and readership.",
                        point2: "Open access for unrestricted global accessibility.",
                        point3: "Participation in international indexing and academic networks."
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

            {/* Journal Features */}
            <div>
                <div className="flex items-center mb-3">
                    <h2 className="mt-8 text-[#1B56FD] namdhinggo-bold lg:text-4xl text-2xl p-1">Journal Features</h2>
                    <div className="h-1 bg-[#1B56FD] flex-grow ml-4 rounded-full mt-8"></div>
                </div>

                <div className="space-y-8">
                    {[
                        {
                            icon: <FiFileText className="h-6 w-6 text-[#1B56FD]" />,
                            title: "Open Access Publishing",
                            description: "IJAPNS is a fully open-access journal, ensuring that all published articles are freely available to readers worldwide without subscription or access fees. This model supports greater visibility, citation potential, and the democratization of scientific knowledge. Open access promotes inclusivity and accelerates the exchange of scientific knowledge, making IJAPNS a truly accessible and impactful resource in the academic community."
                        },
                        {
                            icon: <FiFileText className="h-6 w-6 text-[#1B56FD]" />,
                            title: "Peer Review",
                            description: "Every submission to IJAPNS undergoes a strict double-blind peer-review process. This ensures that published research meets high standards of scientific validity, originality, and relevance to the field of applied psychology and neuroscience. Our peer-review system is designed to provide authors with constructive feedback while upholding transparency, objectivity, and efficiency."
                        },
                        {
                            icon: <FiFileText className="h-6 w-6 text-[#1B56FD]" />,
                            title: "Indexing and Visibility",
                            description: "To maximize the reach and impact of published research, IJAPNS is actively indexed in reputable academic databases, repositories, and scholarly platforms. Each article is assigned a DOI (Digital Object Identifier), ensuring permanent discoverability and citation tracking. To ensure wide dissemination and academic recognition, IJAPNS is indexed in leading scholarly databases and repositories."
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


            <div className="mt-8 mx-auto rounded-lg border-gray-200 border-2  border-t-[#1B56FD] border-t-5 p-8 bg-[#F8FAFC]">
                <h2 className="text-[#1B56FD] namdhinggo-bold lg:text-4xl text-2xl mb-4 text-center">Submission Guidelines</h2>
                <div className="text-center ">
                    <p className="text-gray-900 mb-4  text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">
                    The International Journal of Applied Psychology and Neuroscience accepts original research articles, reviews, case studies, and special issue papers in psychology and neuroscience. Submissions must be in clear English, in Word format, and include an abstract, keywords, main text, and references. All manuscripts undergo a double-blind peer-review, with decisions typically within 2–3 weeks. Accepted papers are published online with open access and assigned a DOI. Submissions must be original, ethically sound, and free from plagiarism. Authors can submit via the journal’s online system or official email.
                    </p>
                    <div className="text-center">
                        <button onClick={() => navigate('/authorguidelinespage')} className="bg-[#1B56FD] text-white px-4 py-3   cursor-pointer rounded ">
                            <div className="flex justify-between gap-2 items-center ">
                            Submission Guidelines
                                <FaArrowRightLong />
                            </div>

                           

                        </button>
                    </div>
                </div>

            </div>








        </>
    )
}
