import { AppBar, Box, Toolbar } from "@mui/material"

export const NavBar: React.FC<{}> = () => {
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="fixed">
        <Toolbar>
        </Toolbar>
      </AppBar>
    </Box>
  )
}