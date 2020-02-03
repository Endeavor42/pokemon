import React from "react";
import { ClickAwayListener, Tooltip, Button } from "@material-ui/core";

export default function ImageModal({ card }) {
  //   const [open, setOpen] = React.useState(false);

  //   const handleTooltipClose = () => {
  //     setOpen(false);
  //   };

  //   const handleTooltipOpen = () => {
  //     setOpen(true);
  //   };
  return (
    <div className="item1">
      <Tooltip
        placement="top"
        arrow
        disableFocusListener
        disableTouchListener
        title={`${card.name}!`}
      >
        <img
          src={
            "https://img.pokemondb.net/sprites/black-white/anim/normal/" +
            card.name +
            ".gif"
          }
          className="sprite"
          alt=""
        />
      </Tooltip>
      {/* <ClickAwayListener onClickAway={handleTooltipClose}>
        <Tooltip
          placement="top"
          PopperProps={{
            disablePortal: true
          }}
          onClose={handleTooltipClose}
          open={open}
          disableFocusListener
          disableHoverListener
          disableTouchListener
          title={`${card.name}!`}
          arrow
        >
          <img
            onClick={handleTooltipOpen}
            src={
              "https://img.pokemondb.net/sprites/black-white/anim/normal/" +
              card.name +
              ".gif"
            }
            className="sprite"
            alt=""
          />
        </Tooltip>
      </ClickAwayListener> */}
    </div>
  );
}
