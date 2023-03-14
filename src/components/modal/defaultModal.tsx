import "~/components/_modals.scss"
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import IconClose from "@/components/icons/IconClose";

const style = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: 600,
  minHeight: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function defaultModal({isModalOpen, handleModalOpen}: {isModalOpen: boolean, handleModalOpen}) {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false)
    handleModalOpen(false);
  };

  useEffect(() => {
    setOpen(isModalOpen);
    console.log(isModalOpen)
  }, [isModalOpen]);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="modal"
      >
        <Box sx={style}>
          <div className="modal__header">
            <p>Text in a modal</p>
            <div className="link modal__icon-close" onClick={() => handleClose()}>
              <IconClose></IconClose>
            </div>
          </div>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}