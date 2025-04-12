import React from 'react'
import { FiFileText} from 'react-icons/fi';
import { GoDotFill } from "react-icons/go";
import { MdOutlineIntegrationInstructions, MdOutlinePlagiarism } from 'react-icons/md';

export default function Authorguideline() {


    return (
        <>
            {/*Author Guidelines */}
            <div className="mx-auto rounded-lg border-gray-200 border-2  border-t-[#1B56FD] border-t-5 p-6 ">
                <div className="flex flex-col gap-4 ">
                    <h2 className="text-[#1B56FD] namdhinggo-bold lg:text-4xl text-2xl">
                        Author Guidelines:
                    </h2>
                    <p className="poppins-regular text-sm sm:text-base md:text-lg lg:text-[16px] text-justify  ">
                        <span className='text-[#1B56FD] font-medium'>The International Journal of Applied Psychology and Neuroscience </span> welcomes submissions of original research, comprehensive reviews, insightful case studies, and thematic contributions for special issues. Manuscripts should be written in clear academic English and formatted according to the journal’s standards. All manuscripts submitted to IJAPNS are subject to a rigorous double-blind peer-review process to ensure academic quality and originality. Submissions must be previously unpublished and not under consideration elsewhere. Authors are responsible for ensuring the accuracy of all data, obtaining necessary ethical approvals, and clearly disclosing any conflicts of interest.
                    </p>
                </div>

            </div>


            {/*Aim and scope*/}

            <div>
                <div className="flex items-center mb-3">
                    <h2 className="mt-8 text-[#1B56FD] namdhinggo-bold lg:text-4xl text-2xl p-1">Submission Guidelines</h2>
                    <div className="h-1 bg-[#1B56FD] flex-grow ml-4 rounded-full mt-8"></div>
                </div>

                <div className="space-y-8">
                    {[
                        {
                            icon: <FiFileText className="h-6 w-6 text-[#1B56FD]" />,
                            title: "Manuscript Requirements",
                            description: "Authors are encouraged to submit original research papers, reviews, case studies, or special issue contributions that align with the journal’s scope. Each manuscript should include a clear title, an abstract (150–250 words), 4–6 keywords, a well-structured main text, and properly formatted references (APA 7th edition preferred). Submissions must be in Microsoft Word format, using 12-point Times New Roman font and 1.5 line spacing."
                        },
                        {
                            icon: <FiFileText className="h-6 w-6 text-[#1B56FD]" />,
                            title: "Peer Review and Ethics",
                            description: "All submissions undergo a double-blind peer-review process to ensure academic integrity and quality. Authors must confirm that their work is original, unpublished, and not under review elsewhere. Studies involving human participants should include ethical approval and informed consent. Any conflicts of interest or funding sources should be clearly disclosed."
                        },
                        {
                            icon: <FiFileText className="h-6 w-6 text-[#1B56FD]" />,
                            title: "Submission Process",
                            description: "Manuscripts can be submitted via the journal’s official online portal or designated editorial email. Upon acceptance, authors may be asked to submit the final formatted version, high-resolution figures, and sign the copyright and publication agreement. For detailed instructions or template requests, authors are encouraged to contact the editorial office."
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
                        icon: <MdOutlineIntegrationInstructions  className="text-[#1B56FD] text-3xl" />,
                        title: "Formatting Instructions ",
                        description: "To ensure consistency and readability, authors must adhere to the journal’s formatting standards. Proper formatting helps streamline the review and publication process.",
                        point: <GoDotFill className="text-[#1B56FD] text-md mt-1" />,
                        point1: "Use MS Word (.doc or .docx) format only.",
                        point2: "Font: Times New Roman, size 12, 1.5 line spacing.",
                        point3: "Include continuous page and line numbering."
                    },
                    {
                        icon: <MdOutlinePlagiarism  className="text-[#1B56FD] text-3xl" />,
                        title: "Plagiarism and Originality",
                        description: "IJAPNS maintains strict policies regarding academic honesty. All submissions are checked for plagiarism before review.",
                        point: <GoDotFill className="text-[#1B56FD] text-md mt-1" />,
                        point1: "Submissions must be original and unpublished.",
                        point2: "Use of plagiarism detection tools is encouraged before submission.",
                        point3: "Authors should cite all sources properly and avoid duplicate publication."
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
