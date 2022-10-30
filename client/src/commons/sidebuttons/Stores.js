import ListItem from "@mui/material/ListItem";
import StoreMallDirectoryIcon from '@mui/icons-material/StoreMallDirectory';
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

const Stores = () => {
  return (
    <ListItem>
    <ListItemButton>
      <ListItemIcon>
        <StoreMallDirectoryIcon />
      </ListItemIcon>
      <ListItemText primary="Stores" />
    </ListItemButton>
  </ListItem>
  )
}

export default Stores