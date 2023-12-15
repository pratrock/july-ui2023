export const Types = {
    GET_USERS_REQUEST : 'users/get_users-request',
    GET_USERS_SUCCESS : 'users/get_users-success',
    CREATE_USER_REQUEST: 'users/create_user_request',
    DELETE_USER_REQUEST: 'users/delete_user_request'
};

export const getUsersRequest = () => {return {
    type: Types.GET_USERS_REQUEST
}};

export const getUsersSuccess = ({items}) => {return{
    type: Types.GET_USERS_SUCCESS,
    payload: {
        items
    }
}};

export const createUserRequest = ({firstName, lastName}) => (
    {
        type: Types.CREATE_USER_REQUEST,
        payload:{
            firstName,
            lastName
        }
    }
)

export const deleteUserRequest = (userId) => ({
    type: Types.DELETE_USER_REQUEST,
    payload: {
        userId
    }
})



