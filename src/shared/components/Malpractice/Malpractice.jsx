import React from 'react'
import { GoDotFill } from 'react-icons/go'
import { GrLinkNext } from 'react-icons/gr'
import {MdOutlineReportProblem } from 'react-icons/md'
import { SlUserFollowing } from 'react-icons/sl'

export default function Malpractice() {


    return (
        <>
            {/*Malpractice Policy: */}

            <div className="mx-auto rounded-lg border-gray-200 border-2  border-t-[#1B56FD] border-t-5 p-6 ">
                <div className="flex flex-col gap-4 ">
                    <h2 className="text-[#1B56FD] namdhinggo-bold lg:text-4xl text-2xl">
                    Malpractice Policy:
                    </h2>
                    <p className="poppins-regular text-sm sm:text-base md:text-lg lg:text-[16px] text-justify  ">
                        <span className='text-[#1B56FD] font-medium'>The  International Journal of Applied Psychology and Neuroscience</span> adheres to the highest standards of publication ethics and is committed to preventing any form of academic misconduct or malpractice. Authors, reviewers, and editors are expected to uphold integrity and transparency throughout the publication process. Any unethical behavior such as data fabrication, falsification, plagiarism, redundant publication, or unethical experimentation is considered a serious offense.

                    </p>
                </div>

            </div>


            <div className="grid md:grid-cols-2 grid-cols-1 gap-12 mt-8">
                {[
                    {
                        icon: <SlUserFollowing  className="text-[#1B56FD] text-3xl" />,
                        title: "Follow Ethics ",
                        description: "Everyone involved—authors, editors, and reviewers—must follow strong ethical practices. Honesty and fairness are expected in all steps of the publishing process.",
                        point: <GoDotFill className="text-[#1B56FD] text-md mt-1" />,
                        point1: "Submit only original, honest research.",
                        point2: "Treat all submissions with fairness.",
                        point3: "Avoid any conflicts of interest."
                    },
                    {
                        icon: <MdOutlineReportProblem  className="text-[#1B56FD] text-3xl" />,
                        title: "Spotting Problems",
                        description: "We carefully check each paper for plagiarism, false data, or duplicate publication. Tools and manual reviews help us ensure the work is clean and ethical.",
                        point: <GoDotFill className="text-[#1B56FD] text-md mt-1" />,
                        point1: "All papers are scanned for issues.",
                        point2: "Plagiarism and fake data are not allowed.",
                        point3: "Any concerns are quickly reviewed."
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
                        icon: <GrLinkNext  className="text-[#1B56FD] text-3xl" />,
                        title: "What Happens Next",
                        description: "If misconduct is found, serious steps are taken. The paper may be rejected or removed if already published. The author’s institution may be informed, and repeated issues can lead to a permanent ban. We handle all cases fairly, using COPE (Committee on Publication Ethics) guidelines. We encourage everyone to report any unethical practices to keep our journal trustworthy.",
                        point: <GoDotFill className="text-[#1B56FD] text-md mt-1" />,
                        point1: "Unethical work may be rejected or retracted.",
                        point2: "Institutions may be notified of misconduct.",
                        point3: "Repeated issues can lead to blacklisting."
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
