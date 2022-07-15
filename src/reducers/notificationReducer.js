import { createSlice } from '@reduxjs/toolkit'

const initialState = ''

let currentTimeoutID

const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
      setContent(state, action) {
        return action.payload
      },
      removeNotification(state, action) {
        return ''
      }
    },
  })


  export const setNotification = (content, timeout) => {
    return async dispatch => {
      if (currentTimeoutID) { clearTimeout(currentTimeoutID) }
      dispatch(removeNotification())
      dispatch(setContent(content))
      currentTimeoutID = setTimeout(() => {
        dispatch(removeNotification())
      }, timeout * 1000)
    }
  }


export const { setContent, removeNotification } = notificationSlice.actions
export default notificationSlice.reducer