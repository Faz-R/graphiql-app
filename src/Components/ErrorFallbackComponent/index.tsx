import { FallbackProps } from "react-error-boundary";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #fff",
  boxShadow: 24,
  p: 4,
  maxWidth: "100%",
  "@media (max-width: 400px)": {
    width: "90%",
  },
};

export function ErrorFallbackComponent({
  error,
  resetErrorBoundary,
}: FallbackProps) {
  const [open, setOpen] = useState(true);
  const { t } = useTranslation();

  const handleClose = () => {
    resetErrorBoundary();
    setOpen(false);
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title-fallback"
      aria-describedby="modal-modal-description-fallback"
    >
      <Box sx={style}>
        <Typography
          id="modal-modal-title-fallback"
          variant="subtitle1"
          component="h6"
          sx={{ fontWeight: "500" }}
        >
          {t("errorTitle")}
        </Typography>
        <Typography
          id="modal-modal-description-fallback"
          component="div"
          sx={{ mt: 2, mb: 2 }}
        >
          {`[error GraphQL]: Message: ${error.message}`}
        </Typography>
        <Button onClick={resetErrorBoundary} variant="outlined">
          {t("tryAgain")}
        </Button>
      </Box>
    </Modal>
  );
}
