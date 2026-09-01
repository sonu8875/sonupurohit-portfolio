import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaSquareXTwitter } from 'react-icons/fa6'

function Footer() {
  return (
    
    <footer className='py-4'>
        <div id="outline" className="border-t-4 border-t-[#00FFFF] mt-6"></div>

        <div>
                <ul className='flex gap-6 text-4xl py-4 w-fit mx-auto'>
                    <li className='duration-300 hover:scale-110 hover:text-[#00FFFF]'> <a href="#"  ><FaInstagram/> </a> </li>
                    <li className='duration-300 hover:scale-110 hover:text-[#00FFFF]'> <a href="#"  ><FaGithub /> </a> </li>
                    <li className='duration-300 hover:scale-110 hover:text-[#00FFFF]'> <a href="#"  ><FaLinkedin  /> </a> </li>
                    <li className='duration-300 hover:scale-110 hover:text-[#00FFFF]'> <a href="#"  ><FaSquareXTwitter/> </a> </li>
                </ul>
        </div>

        <div>
            <p className='text-center custom-text-secondary custom-font-poppins font-semibold text-xl'> &lt; This Portfolio Made by Me 😃 &#47; &gt; </p>
        </div>
    </footer>
  )
}

export default Footer