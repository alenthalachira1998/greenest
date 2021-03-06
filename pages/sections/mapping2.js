import Menuu from 'components/Menuu'
import React from 'react'
// import { FcRating } from 'react-icons/fc'
import Link from 'next/link'
//import { FcHome } from 'react-icons/fc'
import { FcSearch } from 'react-icons/fc'
const Mapping = () => {
  


  return (
       // <div className="w-16 h-10 bg-white rounded-full animate-pulse border-2  focus:animate-none hover:animate-none  hover:bg-blue-200 focus:bg-blue-200 border-black "><p></p>B3</div> */}
    // < div className="  overflow-hidden">
      
     <>
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
      <div className="absolute mt-10  flex justify-center   inset-0">
     <div className="xl:flex hidden justify-center items-center  flex-col"> 
  
      <div className="h-full   flex justify-center items-center  w-full ">
    
        <div className="h-75  relative">
          <img className=" h-full  object-contain  " src="/images/map.png" />
          {/* <div className="flex absolute top-1/2    flex-col" style={{ 'left': '48%' }}>
          <Link href="/blogs/blog-10">
          <a><FcHome className="text-2xl mb-1 focus:scale-150  hover:scale-150 transform" /></a>
        </Link>
           
          
          </div>
          <div className="flex absolute top-1/2    flex-col" style={{ 'left': '55%' }}>

          <Link href="/blogs/blog-9">
          <a><FcHome className="text-2xl mb-1 focus:scale-150  hover:scale-150 transform" /></a>
        </Link>
         
          </div>
          <div className="flex absolute   flex-col" style={{ 'left': '80%', 'top': '54%' }}>

          <Link href="/blogs/blog-1">
          <a><FcHome className="text-2xl mb-1 focus:scale-150  hover:scale-150 transform" /></a>
        </Link>
         
          </div>
          <div className="flex absolute   flex-col" style={{ 'left': '75%', 'top': '69%' }}>
         <Link href="/blogs/blog-17">
         <a><FcRating className="text-2xl mb-1 focus:scale-150  hover:scale-150 transform" /></a></Link>
          </div>
          <div className="flex absolute   flex-col" style={{ 'left': '60%', 'top': '20%' }}>
          <Link href="/blogs/blog-19">
         <a><FcRating className="text-2xl mb-1 focus:scale-150  hover:scale-150 transform" /></a></Link>
          
          </div>
          <div className="flex absolute   flex-col" style={{ 'left': '48%', 'top': '76%' }}>
          <Link href="/blogs/blog-7">
          <a><FcHome className="text-2xl mb-1 focus:scale-150  hover:scale-150 transform" /></a>
        </Link>
          </div>
          <div className="flex absolute   flex-col" style={{ 'left': '26%', 'top': '66%' }}>
          <Link href="/blogs/blog-13">
          <a><FcHome className="text-2xl mb-1 focus:scale-150  hover:scale-150 transform" /></a>
        </Link>
          </div>
          <div className="flex absolute   flex-col" style={{ 'left': '49%', 'top': '8%' }}>
          <Link href="/blogs/blog-16">
          <a><FcHome className="text-2xl mb-1 focus:scale-150  hover:scale-150 transform" /></a>
        </Link>
          </div>

          <div className="flex absolute   flex-col" style={{ 'left': '70%', 'top': '34%' }}>
          <Link href="/blogs/blog-18">
          <a><FcRating className="text-2xl mb-1 focus:scale-150  hover:scale-150 transform" /></a></Link>
          </div>

          <div className="flex absolute   flex-col" style={{ 'left': '30%', 'top': '68%' }}>
          <Link href="/blogs/blog-14">
          <a><FcHome className="text-2xl mb-1 focus:scale-150  hover:scale-150 transform" /></a></Link>
          </div>

          <div className="flex absolute   flex-col" style={{ 'left': '16%', 'top': '66%' }}>

          <Link href="/blogs/blog-20">
         <a><FcRating className="text-2xl mb-1 focus:scale-150  hover:scale-150 transform" /></a></Link>          </div>

          <div className="flex absolute   flex-col" style={{ 'left': '60%', 'top': '74%' }}>
          <Link href="/blogs/blog-3">
          <a><FcHome className="text-2xl mb-1 focus:scale-150  hover:scale-150 transform" /></a></Link>

          </div>

          <div className="flex absolute   flex-col" style={{ 'left': '42%', 'top': '74%' }}>
          <Link href="/blogs/blog-8">
          <a><FcHome className="text-2xl mb-1 focus:scale-150  hover:scale-150 transform" /></a></Link>
          </div>

          <div className="flex absolute   flex-col" style={{ 'left': '50%', 'top': '24%' }}>
          <Link href="/blogs/blog-12">
          <a><FcHome className="text-2xl mb-1 focus:scale-150  hover:scale-150 transform" /></a></Link>
          </div>



          <div className="flex absolute   flex-col" style={{ 'left': '58%', 'top': '29%' }}>
          <Link href="/blogs/blog-11">
          <a><FcHome className="text-2xl mb-1 focus:scale-150  hover:scale-150 transform" /></a></Link>
          </div>



          <div className="flex absolute   flex-col" style={{ 'left': '64%', 'top': '45%' }}>
          <Link href="/blogs/blog-6">
          <a><FcHome className="text-2xl mb-1 focus:scale-150  hover:scale-150 transform" /></a></Link>
          </div>


          <div className="flex absolute   flex-col" style={{ 'left': '63%', 'top': '54%' }}>
          <Link href="/blogs/blog-5">
          <a><FcHome className="text-2xl mb-1 focus:scale-150  hover:scale-150 transform" /></a></Link>
          </div>



          <div className="flex absolute   flex-col" style={{ 'left': '62%', 'top': '65%' }}>
          <Link href="/blogs/blog-4">
          <a><FcHome className="text-2xl mb-1 focus:scale-150  hover:scale-150 transform" /></a></Link>

          </div>



          <div className="flex absolute   flex-col" style={{ 'left': '75%', 'top': '42%' }}>
          <Link href="/blogs/blog-2">
          <a><FcHome className="text-2xl mb-1 focus:scale-150  hover:scale-150 transform" /></a></Link>
         </div>

          <div className="flex absolute   flex-col" style={{ 'left': '35%', 'top': '54%' }}>
          <Link href="/blogs/blog-15">
          <a><FcHome className="text-2xl mb-1 focus:scale-150  hover:scale-150 transform" /></a></Link>
          </div> */}

          </div>
          <div className="grid grid-cols-2 gap-4  justify-center  desk:mr-8  content-center font-sans  h-full self-start ">
          <div className="col-span-2 lg:font-semibold xl:font-medium  lg:text-4xl xl:text-xl 2xl:text-xl   " style={{color:'#59a23e'}}><h1>PLOT LAYOUT &#x26; </h1> FLOOR PLANS</div>
<div style={{'background':'#61BE6D'}} className="flex-col py-2 w-40  bg-blue-800 justify-center  rounded-lg   items-center text-white   flex"><div className="">LAND AREA</div><div className=" font-Open mb-1 text-3xl">2.2</div> <div>ACRES</div></div>
<div style={{'background':'#7EB341'}} className="flex-col py-2 w-40 bg-blue-800 justify-center rounded-lg items-center text-white flex"><div className="">VILLAS</div><div className=" font-Open mb-1 text-3xl">29</div> <div>NOS</div></div>
<div style={{'background':'#E4BF30'}} className="flex-col py-2 w-40 bg-blue-800 justify-center rounded-lg items-center text-white flex"><div className="">3BHK</div><div className=" font-Open mb-1 text-3xl">18</div> <div>NOS</div></div>
<div style={{'background':'#F58323'}} className="flex-col py-2 w-40 bg-blue-800 justify-center rounded-lg items-center text-white  flex"><div className="">4BHK</div><div className=" font-Open mb-1 text-3xl">11</div><div>NOS</div></div>
{/* <div  className="flex-col h-28 w-40 bg-blue-400 justify-center rounded-lg items-center text-white flex"><div className="">BLOCKS VILLA</div><div className=" font-Open mt-2 mb-3 text-3xl"><FcHome/></div> </div>
<div  className="flex-col h-28 w-40 bg-purple-600 justify-center rounded-lg items-center text-white  flex"><div className="">BLOCKS OTHER</div><div className=" font-Open mt-2 mb-3  animate-spin text-3xl"><FcRating/></div> </div> */}

<div className="flex-col flex col-span-2  justify-center py-2 items-center rounded-lg"style={{'background':'#61BE6D'}} >
<div className=" font-semi-bold text-xl text-white mb-4">
Explore Villas 
</div>
<div className="text-sm  font-Open flex  w-full h-full justify-around">
<div className="flex  w-14 h-6 hover:bg-gray-200  focus:bg-gray-200 bg-white rounded-lg justify-center items-center">
<Link href="/blogs/villa1-4">
          <a className="">1</a></Link>
</div>
<div className="flex w-14 h-6 hover:bg-gray-200  focus:bg-gray-200 bg-white rounded-lg justify-center items-center">
<Link href="/blogs/villa5">
          <a>5</a></Link>
</div>
<div className="flex w-14 h-6 hover:bg-gray-200  focus:bg-gray-200 bg-white rounded-lg justify-center items-center">
<Link href="/blogs/villa6">
          <a>6</a></Link>
</div>
<div className="flex  w-14 h-6 hover:bg-gray-200  focus:bg-gray-200 bg-white rounded-lg justify-center items-center">
<Link href="/blogs/villa7">
          <a>7</a></Link>
</div>
<div className="flex w-14 h-6 hover:bg-gray-200  focus:bg-gray-200 bg-white rounded-lg justify-center items-center">
<Link href="/blogs/villa8-13">
          <a>8-13</a></Link>
</div>
</div>
<div className="flex font-Open  text-sm mt-4 w-full h-full justify-around">

<div className="flex  w-14 h-6 hover:bg-gray-200  focus:bg-gray-200 bg-white rounded-lg justify-center items-center">
<Link href="/blogs/villa14">
          <a>14</a></Link>
</div>
<div className="flex w-14 h-6 hover:bg-gray-200  focus:bg-gray-200 bg-white rounded-lg justify-center items-center">
<Link href="/blogs/villa15">
          <a>15</a></Link>
</div>
<div className="flex w-14 h-6 hover:bg-gray-200  focus:bg-gray-200 bg-white rounded-lg justify-center items-center">
<Link href="/blogs/villa16">
          <a>16</a></Link>
</div>
<div className="flex  w-14 h-6 hover:bg-gray-200  focus:bg-gray-200 bg-white rounded-lg justify-center items-center">
<Link href="/blogs/villa17">
          <a>17</a></Link>
</div>
<div className="flex w-14 h-6 hover:bg-gray-200  focus:bg-gray-200 bg-white rounded-lg justify-center items-center">
<Link href="/blogs/villa18">
          <a>18</a></Link>
</div>
</div>
<div className="flex  font-Open text-sm mt-4 w-full h-full justify-around">


<div className="flex  w-14 h-6 hover:bg-gray-200  focus:bg-gray-200 bg-white rounded-lg justify-center items-center">
<Link href="/blogs/villa19-24">
          <a>19-24</a></Link>
</div>
<div className="flex w-14 h-6 hover:bg-gray-200  focus:bg-gray-200 bg-white rounded-lg justify-center items-center">
<Link href="/blogs/villa25">
          <a>25</a></Link>
</div>
<div className="flex w-14 h-6 hover:bg-gray-200  focus:bg-gray-200 bg-white rounded-lg justify-center items-center">
<Link href="/blogs/villa26">
          <a>26</a></Link>
</div>
<div className="flex w-14 h-6 hover:bg-gray-200  focus:bg-gray-200 bg-white rounded-lg justify-center items-center">
<Link href="/blogs/villa27">
          <a>27</a></Link>
</div>
<div className="flex  w-14 h-6 hover:bg-gray-200  focus:bg-gray-200 bg-white rounded-lg justify-center items-center">
<Link href="/blogs/villa28">
          <a>28</a></Link>
</div>

</div>
<div className="flex font-Open  text-sm mt-4 w-full h-full items-center  justify-center">
<div className="flex  w-14 h-6 hover:bg-gray-200  mr-4 focus:bg-gray-200 bg-white rounded-lg justify-center items-center">
<Link href="/blogs/villa29">
          <a>29</a></Link>
</div>
<div className="flex font-sans text-sm px-2 py-1  hover:bg-gray-200  focus:bg-gray-200 bg-white rounded-lg">
<Link href="/blogs/clubhouse">
          <a>Club house</a></Link>
</div>


</div>





</div>
</div>

          </div>



        

        </div>
        <div className="flex px-8  justify-around items-center flex-col xl:hidden">
        <div className="grid grid-cols-4 gap-2 justify-center  content-center font-sans  h-full self-start ">
          <div className="col-span-4 lg:font-semibold font-bold text-base sm:text-xl xl:font-medium desk:text-2xl lg:text-4xl xl:text-2xl 2xl:text-3xl mb-4  " style={{color:'#59a23e'}}><h1>PLOT  LAYOUT &#x26; </h1>  FLOOR PLANS</div>
<div style={{'background':'#61BE6D'}} className="flex-col sm:text-xl text-center text-xs p-2 px-4  bg-blue-800 justify-center  rounded-lg   items-center text-white   flex"><div className="">LAND AREA</div><div className=" font-Open mt-1 mb-1 text-xl">2.2</div> <div>ACRES</div></div>
<div style={{'background':'#7EB341'}} className="flex-col sm:text-xl text-center text-xs p-2 px-4 bg-blue-800 justify-center rounded-lg items-center text-white flex"><div className="">VILLAS</div><div className=" font-Open mt-1 mb-1 text-xl">29</div> <div>NOS</div></div>
<div style={{'background':'#E4BF30'}} className="flex-col sm:text-xl text-center text-xs p-2 px-4 bg-blue-800 justify-center rounded-lg items-center text-white flex"><div className="">3BHK</div><div className=" font-Open mt-1 mb-1 text-xl">18</div> <div>NOS</div></div>
<div style={{'background':'#F58323'}} className="flex-col sm:text-xl text-center text-xs p-2 px-4 bg-blue-800 justify-center rounded-lg items-center text-white  flex"><div className="">4BHK</div><div className=" font-Open mt-1 mb-1 text-xl">11</div><div>NOS</div></div>
<div className="col-span-4  mt-4"><img className="  object-contain " src="/images/Page - 07 Site plan 1.png" /></div>
<div className="flex flex-1 justify-center col-span-4">
<Link href="/Blogshome">
          <a className=" flex flex-col justify-center items-center text-center text-green-600"><FcSearch className="text-2xl mb-1 animate-pulse focus:scale-150  hover:scale-150 transform" />Explore</a></Link>
</div>
</div>
      </div>
    </div>
    </>
  )
}

export default Mapping