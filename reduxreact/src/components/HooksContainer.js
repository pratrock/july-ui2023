import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyLaptop } from '../redux'

function HooksContainer() {
  const numOfLaptops = useSelector(state => state.laptop.numOfLaptops)
  const dispatch = useDispatch()
  return (
    <>
        <h2>Number of Laptops: {numOfLaptops}</h2>
        <button onClick={()=>dispatch(buyLaptop())}>Buy Laptop</button>
    </>
  )
}

export default HooksContainer