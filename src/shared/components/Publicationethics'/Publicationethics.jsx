import React from 'react'
import { FiFileText } from 'react-icons/fi';
import { GoDotFill } from "react-icons/go";
import { MdOutlinePlagiarism } from 'react-icons/md';
import { SiTicktick } from 'react-icons/si';

export default function Publicationethics() {


    return (
        <>
            {/*Publication Ethics: */}
            <div className="mx-auto rounded-lg border-gray-200 border-2  border-t-[#1B56FD] border-t-5 p-6 ">
                <div className="flex flex-col gap-4 ">
                    <h2 className="text-[#1B56FD] namdhinggo-bold lg:text-4xl text-2xl">
                    Publication Ethics
                    </h2>
                    <p className="poppins-regular text-sm sm:text-base md:text-lg lg:text-[16px] text-justify  ">
                        <span className='text-[#1B56FD] font-medium'>The  International Journal of Applied Psychology and Neuroscience</span> is committed to upholding the highest standards of publication ethics and integrity. All authors, reviewers, and editors are expected to follow ethical guidelines throughout the publication process. Authors must ensure the originality of their work and properly cite sources to avoid plagiarism. Submissions must not be under consideration elsewhere or previously published. Reviewers are expected to maintain confidentiality, provide fair and unbiased evaluations, and disclose any conflicts of interest. Editors make publication decisions based solely on scholarly merit and ethical considerations. 
                    </p>
                </div>

            </div>


            {/*Publication Rights and Content Warranty*/}

            <div>
                <div className="flex items-center mb-3">
                    <h2 className="mt-8 text-[#1B56FD] namdhinggo-bold lg:text-4xl text-2xl p-1">Ethical Standards</h2>
                    <div className="h-1 bg-[#1B56FD] flex-grow ml-4 rounded-full mt-8"></div>
                </div>

                <div className="space-y-8">
                    {[
                        {
                            icon: <FiFileText className="h-6 w-6 text-[#1B56FD]" />,
                            title: "Author Responsibilities",
                            description: "Authors must ensure that their work is original, properly cited, and free from plagiarism. Submissions must not be under review elsewhere, and any form of data manipulation or fabrication is strictly prohibited. All contributors should be appropriately acknowledged, and ethical approval must be obtained where necessary."
                        },
                        {
                            icon: <FiFileText className="h-6 w-6 text-[#1B56FD]" />,
                            title: "Reviewer Conduct",
                            description: "Reviewers play a vital role in maintaining the quality of published content. They are expected to provide fair, constructive, and timely evaluations. Confidentiality must be upheld at all stages, and reviewers should decline if there is a conflict of interest or lack of expertise on the subject."
                        },
                        {
                            icon: <FiFileText className="h-6 w-6 text-[#1B56FD]" />,
                            title: "Editorial Integrity",
                            description: "Editors are responsible for making impartial and objective decisions based on the manuscript’s merit, relevance, and adherence to ethical standards. They must ensure a transparent peer-review process, handle complaints appropriately, and take corrective action in cases of research misconduct or publication malpractice."
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
                        icon: <MdOutlinePlagiarism className="text-[#1B56FD] text-3xl" />,
                        title: "Plagiarism and Misconduct",
                        description: "The journal maintains a strict zero-tolerance policy against plagiarism and research misconduct. All submissions are screened using plagiarism detection software. ",
                        point: <GoDotFill className="text-[#1B56FD] text-md mt-1" />,
                        point1: "All manuscripts are checked for plagiarism.",
                        point2: "Duplicate submissions are not allowed.",
                        point3: "Data must be accurate and honestly reported."
                    },
                    {
                        icon: <SiTicktick className="text-[#1B56FD] text-3xl" />,
                        title: "Corrections",
                        description: "Maintaining transparency in publication is essential to uphold academic trust. Authors are required to disclose any potential conflicts of interest and funding sources.",
                        point: <GoDotFill className="text-[#1B56FD] text-md mt-1" />,
                        point1: "Conflict of interest disclosures are mandatory.",
                        point2: "Funding and acknowledgments must be transparent.",
                        point3: "Post-publication corrections are issued if necessary."
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
