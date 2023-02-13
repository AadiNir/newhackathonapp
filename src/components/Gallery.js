import React from 'react'
import { View } from './View'
import bl from "../assets/bl.jpeg"
import avalon from "../assets/avalon.svg";

const Gallery = () => {
  return (
    <div >
        <View
        img1={bl}
        name="harish uthaykumar"
        title="Bluelearn"
        amount="3 ethers"

        />
        <View 
        img1={avalon}
        name="Varun Mayya"
        title="Bluelearn"
        amount="3 ethers"

        />
    </div>
  )
}

export default Gallery