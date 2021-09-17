import requests from '../../lib/requests.js'
const {getUserData} = requests

export const template = (payload) => ({
    type: 'TEMPLATE',
    payload: payload
})


export const TemplateThunk = (endpoint) => {
    return async (dispatch, getState) => {
        try {
            const currentState = getState()
            //request
           
                dispatch({
                    type: 'TEMPLATE',
                    payload: payload
                })
            
        } catch (error) {
            dispatch({
                type: 'TEMPLATE',
                payload: payload
            })
            console.log(error)
        }
    }
}

