import { NavLink } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { MenuItem } from "@mui/material";

interface PropsType {
  linkTo: string;
  name: string;
  handleClose: () => void;
}

const HeaderNavLinkMobile = ({ linkTo, name, handleClose }: PropsType) => {
  return (
    <NavLink to={linkTo}>
      <MenuItem onClick={handleClose}>
        <Typography variant="h6" component="div">
          {name}
        </Typography>
      </MenuItem>
    </NavLink>
  );
};

export default HeaderNavLinkMobile;
