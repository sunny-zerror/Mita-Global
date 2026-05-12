import React from 'react'

const AboutImage = ({ img }) => {
    return (
        <>
            <div className="container">
                <div className="w-full aspect-video mt-1 ">
                    <img className='cover saturate-[0.33]' src={img} alt="" />
                </div>
            </div>
        </>
    )
}

export default AboutImage