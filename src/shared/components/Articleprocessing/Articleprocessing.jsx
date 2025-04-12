import React from 'react'
import { FiFileText } from 'react-icons/fi';
import { GoDotFill } from "react-icons/go";
import { MdOutlineAccessTime, MdOutlineContactSupport } from 'react-icons/md';


export default function Articleprocessing() {


    return (
        <>
            {/*Article Processing: */}
            <div className="mx-auto rounded-lg border-gray-200 border-2  border-t-[#1B56FD] border-t-5 p-6 ">
                <div className="flex flex-col gap-4 ">
                    <h2 className="text-[#1B56FD] namdhinggo-bold lg:text-4xl text-2xl">
                    Article Processing:
                    </h2>
                    <p className="poppins-regular text-sm sm:text-base md:text-lg lg:text-[16px] text-justify  ">
                        <span className='text-[#1B56FD] font-medium'>The  International Journal of Applied Psychology and Neuroscience</span> maintains a transparent and efficient article processing workflow to ensure high publication standards. Upon submission, manuscripts undergo an initial editorial check, followed by a rigorous peer-review process. Accepted articles proceed through copyediting, formatting, and final proofreading stages before publication. The journal strives to minimize turnaround time while maintaining quality, offering prompt communication and support to authors throughout the process. There are no hidden fees, and all article processing charges (if any) are clearly stated on the journal's website.

                    </p>
                </div>

            </div>


            {/*Publication Rights and Content Warranty*/}

            <div>
                <div className="flex items-center mb-3">
                    <h2 className="mt-8 text-[#1B56FD] namdhinggo-bold lg:text-4xl text-2xl p-1">Article Workflow
                    </h2>
                    <div className="h-1 bg-[#1B56FD] flex-grow ml-4 rounded-full mt-8"></div>
                </div>

                <div className="space-y-8">
                    {[
                        {
                            icon: <FiFileText className="h-6 w-6 text-[#1B56FD]" />,
                            title: "Submission and Initial Check",
                            description: "Once an article is submitted, it undergoes an initial editorial screening to assess its alignment with the journal’s aims, scope, and formatting guidelines. Submissions that meet basic requirements are then forwarded for peer review."
                        },
                        {
                            icon: <FiFileText className="h-6 w-6 text-[#1B56FD]" />,
                            title: "Peer Review and Decision",
                            description: "All eligible manuscripts are reviewed by expert reviewers through a double-blind peer-review process. The editorial team evaluates the feedback and makes a decision—accept, revise, or reject—ensuring that only high-quality work is published."
                        },
                        {
                            icon: <FiFileText className="h-6 w-6 text-[#1B56FD]" />,
                            title: "Final Editing and Publication",
                            description: "Accepted papers go through professional copyediting and typesetting to ensure clarity and consistency. Authors are given the opportunity to review proofs before final online publication. The journal ensures timely processing for rapid dissemination."
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
                        icon: <MdOutlineContactSupport  className="text-[#1B56FD] text-3xl" />,
                        title: "Author Support",
                        description: "The journal provides continuous guidance to authors throughout the article processing stages. From initial submission to final publication, editorial support ensures that queries are addressed promptly and that authors are well-informed at every step.",
                        point: <GoDotFill className="text-[#1B56FD] text-md mt-1" />,
                        point1: "Dedicated editorial assistance during submission.",
                        point2: "Timely updates on review and publication status.",
                        point3: "Clear communication of revisions and requirements."
                    },
                    {
                        icon: <MdOutlineAccessTime  className="text-[#1B56FD] text-3xl" />,
                        title: "Timely Publication",
                        description: "The journal is committed to fast yet thorough processing of manuscripts. Efficient editorial handling, swift peer review, and prompt editing workflows help reduce publication delays and support quicker dissemination of research.",
                        point: <GoDotFill className="text-[#1B56FD] text-md mt-1" />,
                        point1: "Streamlined peer-review and editing workflow.",
                        point2: "Reduced publication turnaround time.",
                        point3: "Early online availability of accepted papers."
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
