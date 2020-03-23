import * as types from '../constants/requestForm'

export const setRequestForm = data => ({
    type: types.SET_REQUEST_FORM,
    data
})

export const setSentData = data => ({
    type: types.SET_SENT_DATA,
    data
})

export const setDoneStep = data => ({
    type: types.SET_STEP_DONE,
    data
})
