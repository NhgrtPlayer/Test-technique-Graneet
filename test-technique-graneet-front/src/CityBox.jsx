import React from "react"
import PropTypes from "prop-types"
import { Box, Typography } from "@mui/material"

export default function CityBox(props) {
  const { name, postalCode } = props

  return (
    <Box
      display="flex"
      sx={{
        backgroundColor: "primary.dark",
        px: 2,
        py: 2
      }}
    >
      <Typography color="white">{name}</Typography>
      <div style={{ flex: 1 }} />
      <Typography color="gray">{postalCode}</Typography>
    </Box>
  )
}

CityBox.propTypes = {
  name: PropTypes.string.isRequired,
  postalCode: PropTypes.number.isRequired
}
