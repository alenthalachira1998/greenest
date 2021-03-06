

import React from 'react'
import Link from 'next/link'
import { IoIosArrowRoundDown } from 'react-icons/io';
import Iframe from "react-iframe"

import Menuu from 'components/Menuu';
const About = () => {
// const bg = {
// backgroundImage: 'url("/images/club house.jpg")',
// backgroundSize: 'cover',
// backgroundPosition: 'center',
// backgroundRepeat: 'no-repeat',

// }

return (
<section id="inset-0 h-full w-full absolute-0 ">

       
<div className="absolute  top-4 w-screen  lg:right-10 text-center flex justify-center  z-10">
        <img
          src="/logo.png"
          alt="Picture of the author"
          className="md:h-14 md:w-auto  h-10 w-32 md:w-auto"
        />
         
      </div>
      <div className="absolute pl-2 pr-2 pb-2 pt-4 lg:px-4 lg:pb-4 lg:pt-6 flex w-screen justify-between ">
        
      <Link href='/'><a className="z-50"><img src="/logoo.png" className="md:ml-4 ml-2 md:w-8 w-8 h-auto  md:h-auto  drop-shadow-2xl brightness-150 saturate-200 "/></a></Link>
     <div className="z-40"></div> 
        <div className="flex text-3xl mr-3  lg:text-5xl text-gray-200 ">
     
       <Menuu/>
          {/* <div className="hover:text-pink-800 hover:animate-ping">
          <AiOutlineInstagram />
          </div>
          <Link href="https://www.facebook.com/GreenestBuildings/">
          <a className="hover:text-blue-400 hover:animate-ping">
          <AiOutlineFacebook />
          </a>
          </Link> */}
        </div>
      </div>
{/* <div className="h-full bg-white lg:h-full relative">
<div className="absolute h-full lg:h-full w-full opacity-40 flex flex-col items-center justify-center"></div>
<div className="relative ">
<div className="flex-col h-full"> */}
<div className="flex absolute  inset-0  w-screen flex-col items-center h-full justify-center">
<div className=" flex flex-col lg:max-w-6xl md:max-w-xl max-w-s px-10 h-3/5 md:h-2/5 xl:h-2/5 justify-start ">
<div className="text-gray-900 pb-6 lg:text-xl  text-sm lg:text-left lg:font-normal flex flex-col justify-center lg:items-center "><h1 className="lg:pb-6 pb-2 text-xl  lg:text-4xl"> About Us </h1> 
Our parent company Light and Shadow Projects, was started in the year 2011 as an interior contracting company and established as a construction contractor within a few years. By the year 2021 we have completed construction and handed over 70+ residential as well as commercial building projects in an around Thiruvananthapuram. 
Greenest Building and Business Pvt Ltd is managed by a core team of two Civil engineers and an Architect. Each having an experience of 10+ years in the field of design, construction and management in Kerala and abroad. .</div>

<div className="self-start lg:self-center">

</div>

{/* </div>
</div>


</div>*/}
</div> 

</div>



</section>
)
}
export default About