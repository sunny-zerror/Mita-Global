"use client";

import React, { useRef, useState } from "react";
import BlinkButton from "../common/BlinkButton";
import Button from "../common/Button";

const faqData = [
    {
        id: 1,
        question: "How do I start a project with Mita?",
        answer:
            "To start a project, simply contact us via our website or phone. We’ll schedule an initial consultation to discuss your vision and project details.",
    },
    {
        id: 2,
        question: "What is your approach to project budgeting?",
        answer:
            "We work closely with you to establish a realistic budget and manage costs effectively, providing transparent updates and adjustments as needed.",
    },
    {
        id: 3,
        question: "What is the typical timeline for a project?",
        answer:
            "Project timelines vary based on scope and complexity. We provide a detailed timeline during the initial consultation and keep you updated throughout the process.",
    },
    {
        id: 4,
        question: "Can you help with permits and approvals?",
        answer:
            "Yes, we handle the necessary permits and approvals required for your project, ensuring compliance with local regulations.",
    },
    {
        id: 5,
        question: "Do you offer sustainable design options?",
        answer:
            "Yes, we incorporate eco-friendly and energy-efficient solutions in our designs to promote sustainability and reduce environmental impact.",
    },
    {
        id: 6,
        question: "How do you handle project changes?",
        answer:
            "We accommodate changes through a structured revision process, ensuring that adjustments align with your vision and budget.",
    },
    {
        id: 7,
        question: "How involved will I be in the design process?",
        answer:
            "You’ll be actively involved throughout the design process. We value client input and ensure your vision is reflected in every aspect of the project.",
    },
    {
        id: 8,
        question: "How can I view examples of your past work?",
        answer:
            "You can view our portfolio on our website, which showcases a selection of completed projects demonstrating our design capabilities and expertise.",
    },
];

const FaqItem = ({ item, isOpen, onToggle }) => {
    const contentRef = useRef(null);

    return (
        <div
            onClick={onToggle}
            className={`px-6 border border-[#f2f2f21a] hover:bg-[#f2f2f21a] bg-[#f2f2f208] py-5 cursor-pointer transition-all duration-300 flex flex-col ${isOpen ? "gap-y-4" : "gap-y-0"
                }`}
        >
            <div className="flex items-center justify-between uppercase leading-none  text-[#f2f2f2] gap-x-5">
                <p className="translate-y-0.5">{item.question}</p>

                <p
                    className={`transition-transform translate-y-0.5 font-thin text-2xl leading-0 duration-300 shrink-0 ${isOpen ? "rotate-45" : "rotate-0"
                        }`}
                >
                    +
                </p>
            </div>

            <div
                style={{
                    height: isOpen
                        ? `${contentRef.current?.scrollHeight}px`
                        : "0px",
                }}
                className="overflow-hidden transition-all duration-300"
            >
                <div ref={contentRef}>
                    <p className="text-[#f2f2f2b3] text-sm leading-tight pt-1">
                        {item.answer}
                    </p>
                </div>
            </div>
        </div>
    );
};

const Faq = () => {
    const [openFaq, setOpenFaq] = useState(null);

    const handleToggle = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    return (
        <div className="container py-50 px-7">
            <div className="w-full max-w-240 gap-y-20 flex flex-col text-center items-center mx-auto">
                <div className="gap-y-6 items-center flex flex-col">
                    <BlinkButton text="faq"  />

                    <h2  data-text-effect className="leading-none text-[#f2f2f2]">
                        Quick Answers to <br /> Common Questions
                    </h2>
                </div>

                <div className="w-full text-start gap-2 flex">
                    <div className="space-y-2 flex-1">
                        {faqData.slice(0, faqData.length / 2).map((item, index) => (
                            <FaqItem
                                key={item.id}
                                item={item}
                                isOpen={openFaq === index}
                                onToggle={() => handleToggle(index)}
                            />
                        ))}
                    </div>

                    <div className="space-y-2 flex-1">
                        {faqData
                            .slice(faqData.length / 2)
                            .map((item, index) => {
                                const actualIndex = index + faqData.length / 2;

                                return (
                                    <FaqItem
                                        key={item.id}
                                        item={item}
                                        isOpen={openFaq === actualIndex}
                                        onToggle={() => handleToggle(actualIndex)}
                                    />
                                );
                            })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;