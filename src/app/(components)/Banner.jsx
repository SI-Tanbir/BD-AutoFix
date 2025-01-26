import React from 'react'

const Banner = () => {

   
 const   banner=[
        {
            title:'AutoFix is now on BD',
            subtitle:'Anywhere everywhere at your fingertips',
            next:'#slide2',
            prev:'#slide4'

        },
        {
            title:'hello this is slide one 2',
            subtitle:'hello this is slide one',
            next:'#slide3',
            prev:'#slide1'

        },

        {
            title:'hello this is slide one 3',
            subtitle:'hello this is slide one',
            next:'#slide4',
            prev:'#slide2'

        },

        {
            title:'hello this is slide one 4',
            subtitle:'hello this is slide one',
            next:'#slide1',
            prev:'#slide3'

        }
    ]

  return (

    
    <div className="carousel container  ">


{/* making of carusel */}

{

banner.map((items,index)=>(
  <div
  style={{
    background: `
      linear-gradient(90deg, 
        rgba(2,0,36,1) 0%, 
        rgba(9,9,121,1) 0%, 
        rgba(7,50,148,1) 0%, 
        rgba(33,85,125,0.52) 75%, 
        rgba(0,0,0,0.16) 100%
      ),
      url("/assets/images/banner/${index+1}.jpg")
    `,


  
    backgroundSize: "cover",
    backgroundPosition: "top",

  }}
  
  key={index} id={`slide${index+1}`} className="carousel-item relative w-full h-[90vh] bg-top ">


        <div className=' space-y-4 text-white mt-[40vh] ml-[35vw]' >

            <h2 className='text-5xl'>{items.title}</h2>
            <h2 className='text-3xl'>{items.subtitle}</h2>
           <div>

           <button className='btn mr-4 bg-orange-500  border border-orange-500 text-white ' >Discover More</button>


           <button className='btn mr-4 text-white  border border-orange-500 btn-outline hover:bg-orange-500' >Discover More</button>
           </div>

        </div>
  <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
    <a href={items.prev} className="btn btn-circle">❮</a>
    <a href={items.next} className="btn btn-circle">❯</a>
  </div>

</div>


    )

)

}





 
</div>
  )
}


export default Banner