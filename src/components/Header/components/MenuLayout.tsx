import { Button, Menu } from "@mui/material";

interface PropsType {
  buttonElement: React.ReactNode;
  children: React.ReactNode;
  anchorEl: null | HTMLElement;
  open: boolean;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleClose: () => void;
}

const MenuLayout = ({
  buttonElement,
  children,
  anchorEl,
  open,
  handleClick,
  handleClose,
}: PropsType) => {
  return (
    <>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        color={"inherit"}
      >
        {buttonElement}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {children}
      </Menu>
    </>
  );
};

export default MenuLayout;
