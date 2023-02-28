import { Button, Menu } from "@mui/material";
import { useState } from "react";

interface PropsType {
  childButton: React.ReactNode;
  childMenuTop: React.ReactNode;
  childMenuBottom?: React.ReactNode;
  anchorEl: null | HTMLElement;
  open: boolean;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleClose: () => void;
}

const MenuLayout = ({
  childButton,
  childMenuTop,
  childMenuBottom,
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
        {childButton}
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
        {childMenuTop}
        {childMenuBottom}
      </Menu>
    </>
  );
};

export default MenuLayout;
