import React from 'react'
import { FiFileText } from 'react-icons/fi';
import { GoDotFill } from "react-icons/go";
import { RiTimeLine } from 'react-icons/ri';
import { SiTicktick } from 'react-icons/si';

export default function Peerreview() {

  
    return (
        <>
            {/*Peer Review Process: */}
            <div className="mx-auto rounded-lg border-gray-200 border-2  border-t-[#1B56FD] border-t-5 p-6 ">
                <div className="flex flex-col gap-4 ">
                    <h2 className="text-[#1B56FD] namdhinggo-bold lg:text-4xl text-2xl">
                    Peer Review Process:
                    </h2>
                    <p className="poppins-regular text-sm sm:text-base md:text-lg lg:text-[16px] text-justify  ">
                    All submissions to the  <span className='text-[#1B56FD] font-medium'> International Journal of Applied Psychology and Neuroscience</span> undergo a rigorous double-blind peer review process to ensure the quality, integrity, and relevance of published research. Each manuscript is initially screened by the editorial team for suitability and adherence to submission guidelines. Suitable papers are then evaluated by at least two independent experts in the field, who assess the work based on originality, clarity, methodology, and contribution to the field. The review process typically takes 2–4 weeks. Final decisions are made by the editorial board based on reviewers' feedback, and authors are notified promptly of the outcome.
                    </p>
                </div>

            </div>


            {/*Publication Rights and Content Warranty*/}

            <div>
                <div className="flex items-center mb-3">
                    <h2 className="mt-8 text-[#1B56FD] namdhinggo-bold lg:text-4xl text-2xl p-1">Review Process</h2>
                    <div className="h-1 bg-[#1B56FD] flex-grow ml-4 rounded-full mt-8"></div>
                </div>

                <div className="space-y-8">
                    {[
                        {
                            icon: <FiFileText className="h-6 w-6 text-[#1B56FD]" />,
                            title: "Initial Screening",
                            description: "Once a manuscript is submitted, it undergoes an initial screening by the editorial team to ensure it aligns with the journal’s scope and meets basic formatting and ethical standards. Submissions that do not comply may be returned for revision before peer review."
                        },
                        {
                            icon: <FiFileText className="h-6 w-6 text-[#1B56FD]" />,
                            title: "Double-Blind Review",
                            description: "All qualifying manuscripts proceed to a double-blind peer review, where both the authors' and reviewers' identities are kept confidential. Each submission is evaluated by at least two independent experts for its originality, scientific validity, clarity, and contribution to the field of applied psychology and neuroscience."
                        },
                        {
                            icon: <FiFileText className="h-6 w-6 text-[#1B56FD]" />,
                            title: "Editorial Decision",
                            description: "After the peer review, the editorial team considers the reviewers’ comments and makes a final decision—acceptance, revision, or rejection. Authors receive detailed feedback and are encouraged to respond to reviewer comments in case revisions are requested. Final publication is subject to satisfactory revisions and editorial approval."
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
                        icon: <SiTicktick   className="text-[#1B56FD] text-3xl" />,
                        title: "Reviewer Selection",
                        description: "To maintain the quality and fairness of the review process, reviewers are carefully selected based on their expertise, academic credentials, and research background relevant to the submitted manuscript. The journal ensures diversity in perspectives and adherence to ethical reviewing practices.",
                        point: <GoDotFill className="text-[#1B56FD] text-md mt-1" />,
                        point1: "Reviewers are chosen for subject-area expertise.",
                        point2: "Conflict of interest is strictly avoided.",
                        point3: "Reviewers provide unbiased and constructive feedback."
                    },
                    {
                        icon: <RiTimeLine   className="text-[#1B56FD] text-3xl" />,
                        title: "Review Timeline",
                        description: "The journal is committed to a timely and transparent review process. Authors are regularly updated about the progress of their submission, and reviews are typically completed within 2 to 4 weeks. Clear communication ensures a smooth and efficient experience for all contributors.",
                        point: <GoDotFill className="text-[#1B56FD] text-md mt-1" />,
                        point1: "Initial screening within 5–7 days.",
                        point2: "Full review completed in 2–4 weeks.",
                        point3: "Regular email updates provided to authors."
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
