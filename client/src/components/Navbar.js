import { AppBar,Toolbar,IconButton,Typography,Stack,Button, } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Searchbar from "./Search";



const Navbar = () => {
  return (
    <AppBar sx={{backgroundColor:'#1D3557'}}>
        <Toolbar>
            <IconButton size='large' edge='start' color='inherit' arial-label='logo'>
                <MenuIcon/>
            </IconButton>
            <Typography variant="h6" component='div' sx={{flexGrow:1}}>
              BRAND
            </Typography>
            <Stack direction='row' spacing={5} sx={{mr:15}}>
            <Searchbar/>
            </Stack>
            <Stack direction='row' spacing={3}>
              <Button color='inherit'><ShoppingCartIcon/></Button>
              <Button color='inherit'><AccountCircleIcon/></Button>

            </Stack>
        </Toolbar>
    </AppBar>
  )
}

export default Navbar