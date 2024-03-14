import React from 'react'
import { ThreeDots } from 'react-loader-spinner';

const Loader = ({loading}) => {
     if (!loading) {
    return null;
  }
  return (
      <div> 
  <ThreeDots
  visible={true}
  height="80"
  width="80"
  color="white"
  radius="9"
  ariaLabel="three-dots-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
    </div>
  )
}

export default Loader;