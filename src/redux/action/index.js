import actions from "./actions"

export const template = (payload) => ({
    type: 'TEMPLATE',
    payload: payload
})


export const TemplateThunk = (endpoint) => {
    return async (dispatch, getState) => {
        try {
            const currentState = getState()
            //request
           
                dispatch(actions.DoSomething('anyParameterAsPayload'))
            
        } catch (error) {
            dispatch(actions.DoSomething('anyParameterAsPayload'))
            console.log(error)
        }
    }

}

