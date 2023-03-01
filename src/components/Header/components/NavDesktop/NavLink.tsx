import { NavLink } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

interface PropsType {
  linkTo: string;
  name: string;
}

const HeaderNavLink = ({ linkTo, name }: PropsType) => {
  return (
    <NavLink to={linkTo}>
      <Button size="large" color="inherit" aria-label="menu">
        <Typography variant="h6" component="div">
          {name}
        </Typography>
      </Button>
    </NavLink>
  );
};

export default HeaderNavLink;
