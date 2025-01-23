
import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import services from '../../../public/services.json'
import Image from 'next/image';


const Service = () => {

  // console.log(services)


  return (
    <div className=''>



        <div className='text-center space-y-2 my-10'>
            {/* content adding here */}
            <span className='text-orange-500 font-bold'>Service</span>
            
            <h3 className='text-3xl font-bold'>Our Service Area</h3>

            <p className=''>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>

        </div>



    <div className='grid grid-cols-3 gap-20'>
    {/* service card adding here */}

{
  services.map((service,index)=>(
    <div key={index} className="card card-compact bg-base-100 w-96 shadow-md shadow-zinc-800">
      
  
      <Image
      className='w-full'
        src={service.img}
        width={400}
        height={400}
        // unoptimized = {false}
        alt={service.title} />
  
    <div className="card-body">
      <h2 className="card-title text-2xl">{service.title}</h2>
      <p className='font-bold text-orange-600 text-xl'>Price : {service.price}</p>
      


      <div className="card-actions justify-end">
        <button className=" text-orange-600 btn btn-outline hover:bg-orange-600"><FaArrowRight />
        </button>
      </div>


    </div>
  </div>

  ))
}


  


    </div>


    {/* more service btn here */}

    <div className=' text-center mt-10'>
    <button className='btn  btn-outline  text-orange-500 hover:bg-orange-500'> More Service</button>

    </div>
  

    </div>
  )
}

export default Service