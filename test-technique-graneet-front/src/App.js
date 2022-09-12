import { ThemeProvider, createTheme } from "@mui/material/styles"
import { blue } from "@mui/material/colors"
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import SearchBar from "./SearchBar"
import CitiesBox from "./CitiesBox"

const theme = createTheme({
  palette: {
    primary: {
      main: blue[500],
    },
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl">
        <SearchBar />
        <Box display="flex" sx={{ mt: 5 }}>
          <CitiesBox type="metropolitan" title="Villes de métropoles" />
          <div style={{ flex: 0.1 }} />
          <CitiesBox type="overseas" title="Villes d'outre-mer" />
        </Box>
      </Container>
    </ThemeProvider>
  )
}

export default App
