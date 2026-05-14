"use client";
import { RiArrowDownSLine } from '@remixicon/react';
import React, { useState } from 'react'

const ContactForm = () => {
    const [inquiry, setInquiry] = useState("General Inquiry");
    return (
        <>
            <div className="container my-1">
                <div className="w-full flex gap-1 items-stretch ">
                    <div className="w-[calc(50%-4px)]">
                        <div className="w-full h-full">
                            <img data-img-effect className='cover saturate-[0.33]' src="https://framerusercontent.com/images/mnJ2Ynf49fxGe22kCXEiF0H4Zg.jpg" alt="" />
                        </div>
                    </div>
                    <div className="w-[calc(50%-4px)] bg-[#f2f2f2] space-y-8 h-full relative pt-8 pr-6 pb-12 pl-6">
                        <h2 data-text-effect className='leading-none'>Share Your <br />Vision with Us</h2>
                        <form className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-xs font-medium uppercase  text-[#0f1219b3]">
                                    Full Name
                                </label>

                                <input
                                    type="text"
                                    placeholder="John Anderson"
                                    className="  heading-font w-full border border-[#8888881a] bg-[#0f121912] px-6 py-4 placeholder:text-[#0f121980] text-[#0f1219b3] outline-none placeholder:text-[#0f1219b3] focus:border-[#8888881a]"
                                />
                            </div>

                            <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                                <div className="space-y-3">
                                    <label className="text-xs font-medium uppercase  text-[#0f1219b3]">
                                        Email
                                    </label>

                                    <input
                                        type="email"
                                        placeholder="john.anderson@gmail.com"
                                        className="  heading-font w-full border border-[#8888881a] bg-[#0f121912] px-6 py-4 placeholder:text-[#0f121980] text-[#0f1219b3] outline-none placeholder:text-[#0f1219b3] focus:border-[#8888881a]"
                                    />
                                </div>

                                <div className="space-y-3">
                                    <label className="text-xs font-medium uppercase  text-[#0f1219b3]">
                                        Phone
                                    </label>

                                    <input
                                        type="tel"
                                        placeholder="+1 (232) 488-2388"
                                        className="  heading-font w-full border border-[#8888881a] bg-[#0f121912] px-6 py-4 placeholder:text-[#0f121980] text-[#0f1219b3] outline-none placeholder:text-[#0f1219b3] focus:border-[#8888881a]"
                                    />
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className="text-xs font-medium uppercase  text-[#0f1219b3]">
                                    Inquiry Type
                                </label>

                                <div className="relative">
                                    <select
                                        value={inquiry}
                                        onChange={(e) => setInquiry(e.target.value)}
                                        className="  heading-font w-full appearance-none border border-[#8888881a] bg-[#0f121912] px-6 py-4 placeholder:text-[#0f121980] text-[#111827] outline-none focus:border-[#8888881a]"
                                    >
                                        <option>General Inquiry</option>
                                        <option>Support</option>
                                        <option>Partnership</option>
                                        <option>Career</option>
                                    </select>

                                    <RiArrowDownSLine
                                        size={18}
                                        className="pointer-events-none absolute right-8 top-1/2 -translate-y-1/2 text-[#4b5563]"
                                    />
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className="text-xs font-medium uppercase  text-[#0f1219b3]">
                                    Message
                                </label>

                                <textarea
                                    rows={7}
                                    placeholder="How can we help you?"
                                    required
                                    className=" heading-font w-full resize-none border border-[#8888881a] bg-[#0f121912] px-6 py-4 placeholder:text-[#0f121980]  text-[#0f1219b3] outline-none placeholder:text-[#0f1219b3] focus:border-[#8888881a]"
                                />
                            </div>

                        </form>
                        <button
                            type="submit"
                            className="flex  w-full border border-transparent hover:border-[#0f1219] hover:text-[#0f1219] items-center justify-center bg-[#0f1219] text-sm py-5 pb-4  leading-none uppercase  text-[#f2f2f2] transition-all duration-300 hover:bg-[#8888881a]"
                        >
                            Send a Message
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactForm