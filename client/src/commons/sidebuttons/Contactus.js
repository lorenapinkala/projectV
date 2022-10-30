import ListItem from "@mui/material/ListItem";
import CallIcon from '@mui/icons-material/Call';
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

const Contactus = () => {
  return (
    <ListItem>
    <ListItemButton>
      <ListItemIcon>
        <CallIcon />
      </ListItemIcon>
      <ListItemText primary="Contact us" />
    </ListItemButton>
  </ListItem>
  )
}

export default Contactus