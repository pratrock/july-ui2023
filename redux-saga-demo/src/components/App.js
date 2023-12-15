
import { connect } from 'react-redux';
import { getUsersRequest, createUserRequest,deleteUserRequest } from '../actions/users';
import { useEffect } from 'react';
import React, { Component } from 'react';
import UsersList from './UsersList';
import NewUserForm from './NewUserForm';


function App({users, getUsersRequest, createUserRequest, deleteUserRequest}) {
  useEffect(() => {
    getUsersRequest()
  },[]);

  const handleSubmit = ({firstName, lastName})=>{
    console.log(firstName, lastName)
    createUserRequest({
      firstName,
      lastName
    })
  }

  const DeleteUserClick = (userId) => {
    deleteUserRequest(userId)
  }
  return (
      <div style={{margin:'0 auto', padding:'20px', maxWidth:'600px'}}>
        <NewUserForm onSubmit={handleSubmit}/>
        <UsersList onDeleteUser={DeleteUserClick} users={users.items}/>
      </div>
  );
}


// class App extends Component {
//   constructor(props) {
//     super(props)
//     this.props.getUsersRequest()
//   }
//   render() {
//     return (
//       <div>App</div>
//     )
//   }
// }

export default connect(({users}) => ({users}), {
  getUsersRequest,
  createUserRequest,
  deleteUserRequest
})(App);
