import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { IoBusiness , IoLocationOutline, IoCopyOutline } from "react-icons/io5";
import { BiSolidBusiness } from "react-icons/bi";
import { WiStars } from "react-icons/wi";
import { MdOutlinePeople } from "react-icons/md";
import { RiShareBoxLine, RiResetLeftLine  } from "react-icons/ri";
import RatingStar from '../RatingStar/RatingStar';

const GeneratePage = () => {
    const [businessInfo, setBusinessInfo] = useState({
        name: '',
        location: ''
    })
    const [regenerate, setRegenerate] = useState(false)
    const [generate, setGenerate] = useState(false)
    const [headlines, setHeadlines] = useState({})

    const handleSubmit = async (e) => {
        e.preventDefault()

        const response = await axios.post('http://localhost:3000/business-data', businessInfo)
        console.log(response)
        if (response.status === 200){
            setHeadlines(response.data)
            setGenerate(false)
        } else {
            console.error('Error generating headlines:', response.data.error)
        }

    }

    const regenerateHeadline = async() => {
        setRegenerate(true)
        try {
            const response = await axios.get(`http://localhost:3000/regenerate-headline?name=${businessInfo.name}&location=${businessInfo.location}`)
            if (response.status === 200) {
                setHeadlines(prevHeadlines => ({
                    ...prevHeadlines,
                    headline: response.data.headline
                }))
                setRegenerate(false)
            }
        } catch (error) {
            console.error('Error regenerating headline:', error)
            
        }
    }
   

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBusinessInfo(prevDetails => ({
                ...prevDetails,
                [name]: value
        }))
    }
    return (
        <div className='h-100 w-full py-10 flex flex-col md:flex-row justify-evenly relative bg-gray-50 '>
            <div className='w-full md:w-[600px] h-[100vh] flex flex-col justify-between'>
                <div className='space-y-3 w-[350px] text-center self-center md:text-left md:w-full font-roboto'>
                    <h1 className='text-[30px] text-black font-bold md:font-extrabold'>Generate Your Perfect SEO Headline</h1>
                    <p className='text-lg font-normal'>Enter your business details and get AI-powered SEO headlines that drive traffic and improve your search rankings</p>
                </div>
                <div className='w-[350px] self-center md:w-full p-8 my-4 h-[370px] rounded-lg bg-white flex flex-col justify-around shadow-2xl'>
                    <div className='flex items-center gap-2'>
                        <IoBusiness size={30} />
                        <h1 className='text-lg font-medium'>Business Information</h1>
                    </div>
                    
                    <form className='flex flex-col py-6 space-y-4' onSubmit={handleSubmit}>
                        <label className='text-gray-400 text-base font-medium' htmlFor="b/s-details">Business Name</label>
                        <div className='flex border border-black rounded-md items-center px-2'>
                            <BiSolidBusiness className='text-gray-300' size={24}  />
                            <input 
                                id="b/s-details" 
                                type="text" name="name" 
                                onChange={handleChange} 
                                placeholder='eg: Digital Marketing Agency' 
                                className='px-2 py-3 text-md outline-none relative'
                                required
                            />                          
                        </div>
                        <label className='text-gray-400 text-base font-medium' htmlFor="location">Location</label>
                        <div className='flex border border-black rounded-md items-center px-2'>
                            <IoLocationOutline className='text-gray-300' size={24} />
                            <input 
                                type="text" 
                                id="location" 
                                name="location" 
                                onChange={handleChange} 
                                placeholder='eg: New York,NY' 
                                className='px-2 py-3 text-md outline-none relative'
                                required
                            />
                         </div>
                         {generate ? 
                           <button type="submit" className='w-full py-2 flex justify-center items-center gap-1 text-[16px]
                         font-medium  text-white rounded bg-gradient-to-r from-blue-500/50 to-violet-500/50' > 
                              <RiResetLeftLine className='animate-spin' size={22} />
                              Generating...
                            </button>
                            :
                        <button onClick={() => setGenerate(true)} className={`w-full py-2 flex justify-center items-center gap-1 text-[16px]
                         font-medium text-white rounded bg-gradient-to-r
                         ${businessInfo.name && businessInfo.location ? 'from-blue-500 to-violet-500':
                            'from-blue-500/50 to-violet-500/50'
                         }`} type='submit'>
                           <WiStars size={25} />  Generate SEO Headlines</button>
                           
                        }
                    </form>
                </div>
                <div className='w-[350px] self-center md:w-full my-4 p-8 h-[220px] bg-white bg-opacity-75 rounded-md space-y-2'>
                    <h2>What you'll get:</h2>
                    <ul className='space-y-1 pl-5'>
                        <li className='relative before:absolute before:-left-5 before:top-2 
                        before:w-2 before:h-2 before:rounded-full before:bg-blue-500'>Simulated Google rating analysis</li>
                        <li className='relative before:absolute before:-left-5 before:top-2 
                        before:w-2 before:h-2 before:rounded-full before:bg-violet-500'>Review count estimation</li>
                        <li className='relative before:absolute before:-left-5 before:top-2 
                        before:w-2 before:h-2 before:rounded-full before:bg-green-500'>AI-generated SEO headlines</li>
                    </ul>
                </div>
            </div>
            {Object.keys(headlines).length === 0 ? 
            <div className= 'w-[350px] self-center md:self-start text-center md:w-[500px] h-[350px] flex flex-col justify-center items-center px-7 bg-white rounded-lg shadow-lg space-y-5'>
                <img className='w-20 h-20 mx-auto rounded-full'
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjA2ECgSbhUMkr2iWy2RE__Fj_gMM_F_tzBQCk2oNFk8BiPU4S" alt="star" />
                <h2 className='text-lg font-medium'>Ready to Generate Headlines</h2>
                <p className='text-md font-normal'>Enter your business information to get started with AI-powered SEO headlines and analytics.</p>
            </div>:
            <div className='w-[350px] self-center md:self-start md:w-[600px] h-[570px] p-8 flex flex-col justify-evenly rounded-lg bg-white shadow-lg'>
               <div className='flex justify-between items-center'>
                <h2 className='text-xl font-semibold'>Generated Results</h2>
                <button className='border-none text-sm bg-green-400 text-green-800 px-1 py-[1px] rounded-lg'>Live</button>
                </div>
                <div className='w-full h-[200px] md:h-[150px] rounded-lg bg-yellow-50 p-4 my-4 flex justify-between'>
                    <div className='flex flex-col justify-between'>
                        <h2 className='text-[17px] font-medium'>Google Rating Simulation</h2>
                        <div className='flex space-x-2 items-center'>
                            <h1 className='font-semibold text-2xl'>{headlines.rating}</h1>
                            <RatingStar rating={headlines.rating} />
                        </div>
                        <div className='flex space-x-2 items-center'>
                            <MdOutlinePeople size={24} />
                            <p className='text-lg font-normal'>{headlines.reviews} reviews</p>
                        </div>    
                    </div>
                    <RiShareBoxLine size={20} className='text-gray-400' />
                </div>
                <div className='w-full h-[200px] md:h-[130px] space-y-5 p-3 md:p-4 rounded-lg bg-gray-100'>
                    <div className='flex justify-between items-center'>
                    <h2 className='text-md font-medium'>AI-Generated SEO Headline</h2>
                    <div className='flex space-x-3 items-center'>
                        <IoCopyOutline size={16} />
                        {!regenerate ?
                         <RiResetLeftLine onClick={regenerateHeadline}  size={16}/>:
                         <RiResetLeftLine className='animate-spin' size={16}/>
                        }
                    </div>
                    </div>
                    <div className='w-full h-[70px] md:h-[45px] rounded-lg bg-white border-none flex items-center px-2'>
                        <p className='text-md font-normal text-black'>{headlines.headline}</p>
                    </div>
                </div>
                <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 font-medium'>
                    {regenerate ? 
                    <button 
                     className='flex justify-center items-center py-3 gap-3 border rounded-md border-cyan-500/50 bg-white text-black '>
                        <RiResetLeftLine className='animate-spin' size={20} />
                        Regenerating...
                    </button>
                    :
                    <button onClick={regenerateHeadline}
                     className='flex justify-center items-center py-3 gap-3 border rounded-md border-cyan-500 bg-white text-black '>
                        <RiResetLeftLine size={20} />
                        New Headline
                    </button>
}
                    <button className='flex justify-center items-center py-3 rounded-md gap-3 bg-gradient-to-r from-green-500 to-green-800 text-white '>
                        <IoCopyOutline size={20} />
                        Copy Headline
                    </button>
                </div>
                <div className='w-full flex justify-evenly mt-5 md:mt-2'>
                    <div className='space-y-1 flex flex-col items-center'>
                        <h2 className='text-2xl text-blue-800 font-bold'>{headlines.rating}</h2>
                        <p className='text-sm font-light'>Average Rating</p>
                    </div>
                    <div className='space-y-1 flex flex-col items-center'>
                        <h2 className='text-2xl text-violet-700 font-bold'>{headlines.reviews}</h2>
                        <p className='text-sm font-light'>Total Reviews</p>
                    </div>
                </div>
            </div>
            }
        </div>
    )
}

export default GeneratePage