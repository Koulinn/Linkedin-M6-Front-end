const loginState = {
    isLogged: false,
    isLoginError:false,
    isLoading:false,
    
}


export const loginReducer = (state = loginState, action) => {
    switch (action.type) {
        case 'TEMPLATE':
            console.log(state)
            return {
                ...state,
                companiesList: [...state.companiesList, action.payload]
            }

        default: {
            console.log('inside default loginReducer')
            return state
        }

    }
}

export default loginReducer

