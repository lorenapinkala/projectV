import { AppBar,Toolbar, Typography,Stack,Button, } from "@mui/material"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import Searchbar from "./Search";



const Navbar = () => {
  return (
    <AppBar sx={{backgroundColor:'#1D3557'}}>
        <Toolbar>
            <Typography variant="h6" component='div' sx={{flexGrow:1}}>
              BRAND <LocalMallIcon/>
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