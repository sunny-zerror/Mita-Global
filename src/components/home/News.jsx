import React from 'react'
import BlinkButton from '../common/BlinkButton'
import Button from '../common/Button'
import { Link } from 'next-view-transitions'
import CardHover from '../animation/CardHover'

const News = () => {

    const news = [
        {
            id: 1,
            title: "Mita Group Launches Greenway Cultural Center",
            slug: "mita-group-launches-greenway-cultural-center",
            date: "Dec 22, 2022",
            cover_img: "https://framerusercontent.com/images/CzDVFa0DR9CGAGL3bfRnZIXSYw.jpg?scale-down-to=512"
        },
        {
            id: 2,
            title: "Mita Group Expands Renewable Energy Operations",
            slug: "mita-group-expands-renewable-energy-operations",
            date: "Aug 1, 2023",
            cover_img: "https://framerusercontent.com/images/QPJ1NKzMlgImFCPzetHaVtJof0.jpg?scale-down-to=2048"
        },
        {
            id: 3,
            title: "Mita Steel Global: A Leader in Tubular Solutions",
            slug: "mita-steel-global-a-leader-in-tubular-solutions",
            date: "Apr 15, 2023",
            cover_img: "https://framerusercontent.com/images/vRQLOx1DYzjgGSte06vYsbkEYk.jpg?scale-down-to=4096"
        },
    ]

    return (
        <>
            <div className="container py-40 md:py-50  px-5">
                <div className="w-full max-w-298 gap-y-12 md:gap-y-20 flex flex-col text-center items-center mx-auto">
                    <div className="gap-y-6 items-center flex flex-col ">
                        <BlinkButton text={"News"} />
                        <h2 data-text-effect className=' leading-none text-[#f2f2f2]'>Latest Updates and <br /> Insights from Our <br /> Firm</h2>
                        <Button text=" browse all" link="/news" theme='light' />
                    </div>

                    <div className="w-full grid gap-1 md:grid-cols-3">
                        {news.map((item, index) => (
                            <Link href={`/news/${item.slug}`} key={index} className=" group cursor-pointer w-full flex flex-col items-stretch gap-1 ">
                                <div className="h-120 max-sm:h-100 overflow-hidden w-full">
                                    <div data-img-effect className="w-full h-full overflow-hidden">
                                        <img className=' group-hover:scale-105! transition-all duration-300 cover saturate-[0.33]' src={item.cover_img} alt="" />
                                    </div>
                                </div>
                                <div className=" relative overflow-hidden  px-6 space-y-2 flex-1 py-7 text-start bg-[#0f1219] group-hover:bg-[#acbbc2] transition-all duration-300">
                                    <CardHover />
                                    <p className=' text-xs text-[#f2f2f2b3]'>{item.date}</p>
                                    <p className=' text-2xl w-[75%] text-[#f2f2f2] leading-none '>{item.title}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default News