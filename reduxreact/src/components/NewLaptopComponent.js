import React, { useState } from 'react'
import { buyLaptop } from '../redux'
import { connect } from 'react-redux'


function NewLaptopComponent(props) {
  const [number, setNumber] = useState(1)
  return (
    <>
        <h2>Number of Laptops: {props.numOfLaptops}</h2>
        <input type='text' value={number} onChange={e => setNumber(e.target.value)}></input>
        <button onClick={()=>props.buyLaptop(number)}>Buy {number} Laptop</button>
    </>
  )
}

const mapStateToProps = state => {
  return {
    numOfLaptops: state.laptop.numOfLaptops
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buyLaptop: (number) => dispatch(buyLaptop(number))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(NewLaptopComponent)