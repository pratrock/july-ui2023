import React from 'react'
// import { buyLaptop } from '../redux/'
import { buyPhones } from '../redux'
import { connect } from 'react-redux'


function PhoneContainer(props) {
  return (
    <>
        <h2>Number of Phones: {props.numOfPhones}</h2>
        <button onClick={props.buyPhones}>Buy Phone</button>
    </>
  )
}

const mapStateToProps = state => {
  console.log("Inside Phone stateProps")
  return {
    numOfPhones: state.phone.numOfPhones
  }
}

const mapDispatchToProps = dispatch => {
  console.log("Inside Phone Dispatch")
  return {
    buyPhones: () => dispatch(buyPhones())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(PhoneContainer)