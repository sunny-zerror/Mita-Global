import React from 'react'

const News = () => {

    const news = [
        {
            id: 1,
            title: "Mita Group Launches Greenway Cultural Center",
            date: "Dec 22, 2022",
            cover_img: "https://framerusercontent.com/images/CzDVFa0DR9CGAGL3bfRnZIXSYw.jpg?scale-down-to=512"
        },
        {
            id: 2,
            title: "Mita Group Expands Renewable Energy Operations",
            date: "Aug 1, 2023",
            cover_img: "https://framerusercontent.com/images/QPJ1NKzMlgImFCPzetHaVtJof0.jpg?scale-down-to=2048"
        },
        {
            id: 3,
            title: "Mita Steel Global: A Leader in Tubular Solutions",
            date: "Apr 15, 2023",
            cover_img: "https://framerusercontent.com/images/vRQLOx1DYzjgGSte06vYsbkEYk.jpg?scale-down-to=4096"
        },
    ]

    return (
        <>
            <div className="container py-50 px-7">
                <div className="w-full max-w-298 gap-y-20 flex flex-col text-center items-center mx-auto">
                    <div className="gap-y-6 items-center flex flex-col ">
                        <div className="border bg-[#f2f2f208] whitespace-nowrap uppercase text-sm w-fit flex items-center gap-x-2 p-3  pb-2  leading-none border-[#f2f2f21a]">
                            <span className="size-1 -translate-y-px rounded-full bg-[#f2f2f2] animate-blink" />
                            <p className='leading-0 text-[#f2f2f2]'>News</p>
                        </div>
                        <h2 className=' leading-none text-[#f2f2f2]'>Latest Updates and <br /> Insights from Our <br /> Firm</h2>
                        <button className="uppercase text-sm bg-[#f2f2f2] text-[#0f1219] w-fit p-3 leading-none">
                            browse all
                        </button>
                    </div>

                    <div className="w-full grid gap-1 grid-cols-3">
                        {news.map((item, index) => (
                            <div key={index} className="w-full flex flex-col items-stretch gap-1 ">
                                <div className="h-120 overflow-hidden w-full">
                                    <img className='cover saturate-[0.33]' src={item.cover_img} alt="" />
                                </div>
                                <div className="px-6 space-y-2 flex-1 py-7 text-start bg-[#0f1219]">
                                    <p className=' text-xs text-[#f2f2f2b3]'>{item.date}</p>
                                    <p className=' text-2xl w-[75%] text-[#f2f2f2] leading-none '>{item.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default News