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
type ErrorModal = {
  error: string;
};

export function ErrorModalWindow({ error }: ErrorModal) {
  const [open, setOpen] = useState(true);
  const { t } = useTranslation();

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography
          id="modal-modal-title"
          variant="subtitle1"
          component="h6"
          sx={{ fontWeight: "500" }}
        >
          {t("errorTitle")}
        </Typography>
        <Typography
          id="modal-modal-description"
          component="div"
          sx={{ mt: 2, mb: 2 }}
        >
          {error}
        </Typography>
        <Button onClick={handleClose} variant="outlined">
          {t("tryAgain")}
        </Button>
      </Box>
    </Modal>
  );
}
