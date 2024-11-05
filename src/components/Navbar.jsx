import React, { useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-scroll'

const Navbar = () => {
    const[showNav,setShowNav] = useState(false)
    const[sticky,setSticky] = useState('')
    useEffect(()=>{
        const handleScroll = ()=>{
            if(window.scrollY > 100){
                setSticky(true)
            }else{
                setSticky(false)
            }
        }

        window.addEventListener('scroll',handleScroll)

        return(()=>{
            window.removeEventListener('scroll',handleScroll)
        })
    },[])
  return (
    <header className={`font-Poppins  bg-tertiary z-50 duration-500 transition-all ease-linear md:px-24 px-0  ${sticky ? 'sticky top-0 w-full z-50 shadow duration-300 transform ease-linear bg-opacity-80 bg-tertiary' : ''}` }>
        <nav className='flex justify-between items-center py-4 container mx-auto px-6'>
            <div>
               <Link to='/'><h1 className='text-xl font-semibold font-jetBrains'>J<span className='text-primary'>Tech.</span></h1></Link>
            </div>
            <div className='lg:flex hidden'>
                <ul className='flex gap-[35px] items-center cursor-pointer'>
                    <Link to='landingPage' smooth={true} duration={500} className='hover:text-primary ease-linear duration-300'><li>Home</li></Link>
                    <Link to='about' smooth={true} duration={500} className='hover:text-primary ease-linear duration-300'><li>About</li></Link>
                    <Link to='skills' smooth={true} duration={500}  className='hover:text-primary ease-linear duration-300'><li>Skills & Technology</li></Link>
                    <Link to='projects' smooth={true} duration={500}  className='hover:text-primary ease-linear duration-300'><li>Projects</li></Link>
                    <Link to='service' smooth={true} duration={500}  className='hover:text-primary ease-linear duration-300'><li>Services</li></Link>
                    <Link to='resume' smooth={true} duration={500}  className='hover:text-primary ease-linear duration-300'><li>Resume</li></Link>
                    <Link to='contact' smooth={true} duration={500} className='hover:text-primary ease-linear duration-300'><li>Contact</li></Link>
                </ul>
            </div>
            <div>
                <button className='py-3 px-6 bg-primary rounded font-jetBrains text-tertiary '>Contact Me</button>
            </div>
            <div className='lg:hidden flex cursor-pointer' onClick={()=>setShowNav(!showNav)}>
                <button className='text-2xl bg-secondary p-3 rounded'><FaBars /></button>
            </div>
        </nav>
       {showNav &&  <div>
                <ul className='flex flex-col items-center  justify-start py-3  gap-[35px] border-t border-primary'>
                    <Link><li>Home</li></Link>
                    <Link><li>About</li></Link>
                    <Link><li>Skills & Technology</li></Link>
                    <Link><li>Projects</li></Link>
                    <Link><li>Services</li></Link>
                    <Link><li>Contact</li></Link>
                </ul>
            </div>}
    </header>
  )
}

export default Navbar