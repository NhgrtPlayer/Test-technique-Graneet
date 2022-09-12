import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  text: "",
  isLoading: false,
  results: {}
}

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setText: (state, action) => {
      state.text = action.payload
    },
    isLoading: (state, action) => state.isLoading = action.payload,
    setResults: (state, action) => {
      state.results = action.payload
    },
  }
})

export default searchSlice
