import React from 'react'
import { Link } from 'react-router-dom'
import {AppBar, Button, IconButton, Stack, Toolbar, Typography} from "@mui/material"
import ProductCard from './ProductCard'
// import CatchingPokemoIcon from "@mui/icons-material/C"
function Header() {
  return (
     <div>
      <AppBar position='static'>
         <Toolbar>
          <Typography variant='h4' sx={{flexGrow:1}}>E-commerce</Typography>
           <Stack direction='row' spacing={2} >
           <Link to="/Signup">
            <Button color='inherit'>Signup</Button>
            </Link>
            <Link to ="/Login">
            <Button color='inherit'>login</Button>
            </Link>
         </Stack>
         </Toolbar>
      </AppBar>
      
        {/* <Link to="/Signup">Signup</Link> */}
         {/* |<Link to ="/Login">Login</Link> */}
    </div>
  )
}
export default Header
