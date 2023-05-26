import { FallbackProps } from "react-error-boundary";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #fff",
  boxShadow: 24,
  p: 4,
};

export function ErrorFallbackComponent({
  error,
  resetErrorBoundary,
}: FallbackProps) {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    resetErrorBoundary();
    setOpen(false);
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title-fallback"
        aria-describedby="modal-modal-description-fallback">
        <Box sx={style}>
          <Typography
            id="modal-modal-title-fallback"
            variant="h5"
            component="h2">
            Something went wrong:
          </Typography>
          <Typography
            id="modal-modal-description-fallback"
            variant="h6"
            sx={{ mt: 2 }}>
            {`[error GraphQL]: Message: ${error.message}`}
          </Typography>
          <Button onClick={resetErrorBoundary}>Try again</Button>
        </Box>
      </Modal>
    </div>
  );
}
