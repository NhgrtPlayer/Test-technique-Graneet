import React, { useCallback, useEffect, useState } from "react"
import _ from "lodash"
import Box from '@mui/material/Box'
import { InputBase, Typography } from "@mui/material"
import { useDispatch } from 'react-redux'
import searchSlice from "./slices/searchSlice"
import useHttpClient from "./hooks/useHttpClient"

const searchActions = searchSlice.actions

export default function SearchBar() {
  const [text, setText] = useState("")
  const httpClient = useHttpClient()
  const dispatch = useDispatch()

  const throttled = useCallback(_.throttle(() => {
    httpClient.get(`/cities?query=${text}`).then(({ data }) => dispatch(searchActions.setResults(data)))
  }, 1000))

  useEffect(() => {
    throttled()
  }, [dispatch, httpClient, text, throttled])

  return (
    <Box
      display="flex"
      sx={{
        bgcolor: 'primary.main',
        boxShadow: 1,
        borderRadius: 2,
        p: 2,
        alignItems: "center"
      }}
    >
      <Typography sx={{ whiteSpace: "nowrap" }}>
        Je recherche
      </Typography>
      <InputBase
        fullWidth
        size="small"
        placeholder="...une ville, un code postal"
        value={text}
        onChange={(e) => setText(e.target.value)}
        sx={{
          backgroundColor: "white",
          borderRadius: 2,
          ml: 1,
          p: 0.5
        }}
      />
    </Box>
  )
}