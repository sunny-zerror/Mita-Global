import React from 'react'

const ServiceGridImage = () => {
    return (
        <div className='container'>
            <div className="w-full md:h-screen  py-1 md:min-h-180 md:flex justify-between">
                <div className="md:w-[calc(50%-4px)] space-y-1 overflow-hidden h-full">
                    <div className="w-full overflow-hidden h-90 md:h-1/2">
                        <img data-img-effect className='cover saturate-[0.33]' src="https://framerusercontent.com/images/lu8cxVbrM78MOdzV4pQDtFW6o8.jpg?scale-down-to=1024" alt="" />
                    </div>
                    <div className="w-full overflow-hidden h-90 md:h-1/2">
                        <img data-img-effect className='cover saturate-[0.33]' src="	https://framerusercontent.com/images/LVY1eKTfV2jqN9QsEU3BAlVkGfY.jpg?scale-down-to=1024" alt="" />
                    </div>
                </div>
                <div className="md:w-1/2 h-140 md:h-full overflow-hidden">
                    <img  data-img-effect className='cover saturate-[0.33]' src="	https://framerusercontent.com/images/1l1yePnYwNAJBsF4BiYMefkgY.jpg?scale-down-to=2048" alt="" />
                </div>
            </div>
        </div >
    )
}

export default ServiceGridImage