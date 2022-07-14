import { createSlice } from '@reduxjs/toolkit'

const initialState = ''

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
      setFilter(state, action) {
        const filterToApply = action.payload
        return filterToApply
      },
    },
  })
  
  export const { setFilter } = filterSlice.actions
  export default filterSlice.reducer