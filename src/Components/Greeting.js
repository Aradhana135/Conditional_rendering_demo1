import React from 'react'
import Guest from './Guest';
import User from './User';

const Greeting = (props) => {
    const is_Logged_In=props.is_Logged_In;
    if(is_Logged_In){
      return  <User/> //if login is true it will render user component
      }
      else
   return  <Guest/> //if login is false it will render guest component
  return (
    <>
    </>
  )
}

export default Greeting