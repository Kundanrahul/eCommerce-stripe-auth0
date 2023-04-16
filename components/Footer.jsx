import Link from 'next/link'
import React from 'react'
import { AiFillLinkedin,AiFillGithub } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2023 KUNDAN STORE ALL RIGHTS RESERVED</p>
      <p className="icons">
       <Link  href="https://www.linkedin.com/in/rahul-kundan-63b4b3248/" ><AiFillLinkedin  /></Link> 
       <Link  href="https://github.com/Kundanrahul" ><AiFillGithub /></Link> 
      </p>
    </div>
  )
}

export default Footer