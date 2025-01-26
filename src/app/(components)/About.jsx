import Image from 'next/image'
import React from 'react'

import img1 from '../../../public/assets/images/about_us/person.jpeg'
import img2 from '../../../public/assets/images/about_us/parts.jpg'

const About = () => {
  return (

    <div className='my-28'>
 <div className='flex '>

<div className='relative w-[50%] '>

{/* adding img here */}

    <Image className=' rounded-md shadow-2xl shadow-slate-800'  width={400} height={800} alt='#' src={img1}></Image>
   
    

</div>


<div className='w-[50%]'>

 {/* content add here */}
 
<h6 id='aboutus'>About Us</h6>
<h3>We are qualified & of experience in this field</h3>
<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
<p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>

<button className="btn text-white bg-orange-600 ">Get More Info </button>

</div>


</div>

    </div>
   
  )
}

export default About