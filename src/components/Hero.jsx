import {Link} from 'react-router-dom';
import  landingImage from "../assets/landingImage.png";
export const Hero = ()=>{

    return(
        <section id="Home" className="w-full h-auto mt-10  p-7 pt-20 flex flex-col md:flex-row items-center justify center ">
            {/* for left side text */}
            <div className=" h-auto w-full md:w-[50%] mx-auto leading-tight">
                <h1 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-pink-700 to-purple-800 bg-clip-text text-transparent">Protect Yourself from <br /> Fraudulent Hiring</h1>
                <h3 className="text-sm md:text-2xl font-medium my-4 text-gray-300">We provide overview on possible fraudlent hiring companies and fake hirings like fake internships </h3>
                <div className="flex items-center  my-2 gap-3">
                    <Link to='browseReports'
                    className="font-medium text-sm md:text-lg m-2 px-4 py-2 border border-red-400/50 rounded-lg text-red-600 hover:bg-red-500/20 hover:-translate-y-1.5 transition-all hover:shadow-[0_0_25px_rgba(225,30,30,0.7)]">BrowseReports
                    </Link> 
                    <Link  to='report' className="font-semibold text-xs md:text-lg px-4 py-2 border m-2 border-red-500 rounded-lg  bg-red-500 hover:-translate-y-1.5 transition-all hover:shadow-[0_0_25px_rgba(225,30,30,0.7)]">Report Company</Link>
                </div>
            </div>
            {/* right side image or logo */}
            <div className="w-full md:w-[40%] ">
                <img className="object-contain h-60 md:h-93 mx-auto" src={landingImage} alt="" />
            </div>

        </section>
    )
}