import ListItem from "@mui/material/ListItem";
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

const Aboutus = () => {
  return (
    <ListItem>
    <ListItemButton>
      <ListItemIcon>
        <AutoAwesomeIcon />
      </ListItemIcon>
      <ListItemText primary="About us" />
    </ListItemButton>
  </ListItem>
  )
}

export default Aboutus