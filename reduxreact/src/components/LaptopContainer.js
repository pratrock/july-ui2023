import React from 'react'
import { buyLaptop } from '../redux'
import { connect } from 'react-redux'


function LaptopContainer(props) {
  return (
    <>
        <h2>Number of Laptops: {props.numOfLaptops}</h2>
        <button onClick={props.buyLaptop}>Buy Laptop</button>
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
    buyLaptop: () => dispatch(buyLaptop())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(LaptopContainer)