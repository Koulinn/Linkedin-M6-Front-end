const userData = {
   
}


export const userReducer = (state = userData, action) => {
    switch (action.type) {
        case 'TEMPLATE':
            console.log(state)
            return {
                ...state,
                template: [...state.template, action.payload]
            }

        default: {
            console.log('inside default userReducer')
            return state
        }

    }
}

export default userReducer

