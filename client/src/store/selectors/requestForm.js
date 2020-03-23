export const selectStepToRequest = ({ requestForm: { step } }) => step

export const selectWeight = ({ requestForm: { sendData: {weight} } }) => weight

export const selectHeight = ({ requestForm: { sendData: {height} } }) => height

export const selectLeg = ({ requestForm: { sendData: {leg} } }) => leg

export const selectArm = ({ requestForm: { sendData: {arm} } }) => arm

export const selectBust = ({ requestForm: { sendData: {bust} } }) => bust

export const selectHips = ({ requestForm: { sendData: {hips} } }) => hips

export const selectWaist = ({ requestForm: { sendData: {waist} } }) => waist

export const selectSentData = ({ requestForm: { sendData } }) => sendData

export const selectStepDone = ({ requestForm: { done } }) => done