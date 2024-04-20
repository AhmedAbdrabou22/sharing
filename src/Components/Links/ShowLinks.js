import React from 'react'
import { FaGithubSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

const ShowLinks = () => {
  return (
    <div>
      <div className='font w-50 m-auto mt-5 p-4 showLinks' >

        <div className='linkMedia'>
          <div >
            <FaGithubSquare fontSize={"30px"} /> Github
          </div>
          <div>
            <FaYoutube fontSize={"30px"} /> Youtube
          </div>
          <div>
            <FaFacebookSquare fontSize={"30px"} /> Facebook

          </div>
        </div>

      </div>
    </div>
  )
}

export default ShowLinks
