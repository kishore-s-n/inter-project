
import { useState } from "react"
import Firstpage from "./Firstpage"
import Secondpage from "./Secondpage"

function Landingpage() {

  const [page, setPage] = useState("initial")

  const Handleclick = () => {

    setPage("second")
  }
  return (
    <>
      {page === 'initial' && <Firstpage />}
      {page === 'second' && <Secondpage />}

      <i className="absolute right-5 bottom-5">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={Handleclick}>
          <circle cx="30" cy="30" r="25" fill="url(#paint0_linear_1_37)" />
          <mask id="path-2-inside-1_1_37" fill="white">
            <path d="M30 0C35.2291 6.2356e-08 40.3673 1.36677 44.9053 3.9648C49.4433 6.56283 53.2234 10.3019 55.8709 14.8112C58.5183 19.3206 59.9411 24.4436 59.9982 29.6724C60.0553 34.9011 58.7447 40.054 56.1964 44.6201L54.8824 43.8867C57.3029 39.5497 58.5477 34.6553 58.4935 29.6888C58.4392 24.7223 57.0878 19.8563 54.5732 15.5731C52.0585 11.29 48.468 7.73846 44.1577 5.27074C39.8473 2.80303 34.9668 1.50482 30 1.50482V0Z" />
          </mask>
          <path d="M30 0C35.2291 6.2356e-08 40.3673 1.36677 44.9053 3.9648C49.4433 6.56283 53.2234 10.3019 55.8709 14.8112C58.5183 19.3206 59.9411 24.4436 59.9982 29.6724C60.0553 34.9011 58.7447 40.054 56.1964 44.6201L54.8824 43.8867C57.3029 39.5497 58.5477 34.6553 58.4935 29.6888C58.4392 24.7223 57.0878 19.8563 54.5732 15.5731C52.0585 11.29 48.468 7.73846 44.1577 5.27074C39.8473 2.80303 34.9668 1.50482 30 1.50482V0Z" stroke="#89A1FF" stroke-width="2" mask="url(#path-2-inside-1_1_37)" />
          <path d="M27 36L33 30L27 24" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <defs>
            <linearGradient id="paint0_linear_1_37" x1="5" y1="29.1667" x2="55" y2="30" gradientUnits="userSpaceOnUse">
              <stop stop-color="#DEE5FF" />
              <stop offset="1" stop-color="#809AFF" />
            </linearGradient>
          </defs>
        </svg>
      </i>
      <a href="" className="absolute top-5 right-5 text-blue-600 underline">Skip</a>
    </>
  )
}

export default Landingpage
