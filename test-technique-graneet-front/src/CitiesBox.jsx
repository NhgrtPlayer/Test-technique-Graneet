import React from "react"
import PropTypes from "prop-types"
import { Box, Typography } from "@mui/material"
import { useSelector } from "react-redux"
import CityBox from "./CityBox"

function LengthText({ value }) {
  if (value <= 0) {
    return (
      <Typography
        sx={{
          backgroundColor: "error.main",
          py: 2,
          px: 3,
          my: 3
        }}
        color="white"
      >
        Aucune ville correspondant au texte saisi
      </Typography>
    )
  }
  return (
    <Typography
      sx={{
        backgroundColor: "success.main",
        py: 2,
        px: 3,
        my: 4
      }}
      color="white"
    >
      {value} villes correspondants au texte saisi
    </Typography>)
}

export default function CitiesBox(props) {
  const { type, title } = props
  const cities = useSelector((state) => state.search.results[type]) || []

  return (
    <Box
      sx={{
        flex: 1,
        bgcolor: "primary.main",
        boxShadow: 1,
        borderRadius: 2,
        p: 2,
        alignItems: "center"
      }}
    >
      <Typography variant="h5" align="center">{title}</Typography>
      <LengthText value={cities.length} />
      <Box display="grid" gridTemplateColumns="repeat(2, 1fr)" gap={3}>
        {cities.map((city) => <CityBox {...city} />)}
      </Box>
    </Box>
  )
}

CitiesBox.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}
