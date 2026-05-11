import React from 'react'
import BlinkButton from './BlinkButton'
import Button from './Button'

const PageHero = ({
    blinkBtnText,
    title,
    description,
    btnText,
}) => {
    return (
        <>
            <div className="container">
                <div className=" relative z-100 flex flex-col justify-end w-full h-[76svh] bg-[#F2F2F2]">
                    <div className="w-full grid p-10 pt-[5.2rem] pb-0 pointer-events-none grid-cols-4 z-10 absolute inset-0">
                        <div className="border-l border-[#0f12191a]"></div>
                        <div className="border-l border-[#0f12191a]"></div>
                        <div className="border-l border-[#0f12191a]"></div>
                        <div className="border-l border-[#0f12191a]"></div>
                    </div>
                    <div className=" p-10 space-y-5 w-full">
                        <BlinkButton text={blinkBtnText} theme='dark' />
                        <div className="grid grid-cols-4">
                            <div className="col-span-3 ">
                                <h1 className='leading-none max-w-160 tracking-tight wrap-break-word'>{title}</h1>
                            </div>
                            <div className=" w-full  flex flex-col justify-between pl-2 col-span-1">
                                <p className='text-sm  leading-tight w-[80%]'>{description}</p>
                                <Button text={btnText} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PageHero