import Box from "@mui/material/Box";
import {
  TextField,
  Tab,
  Tabs,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";
import { ExpandMore } from "@mui/icons-material";
import { t } from "i18next";
import { useTranslation } from "react-i18next";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </div>
  );
}

interface Props {
  setOpenParent: Dispatch<SetStateAction<boolean>>;
  open: boolean;
  setVariables: Dispatch<SetStateAction<string>>;
  setHeaders: Dispatch<SetStateAction<string>>;
  window?: () => Window;
}

export default function VariablesField(props: Props) {
  const { t } = useTranslation();
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    event.stopPropagation();
    setValue(newValue);
    setOpen(true);
  };

  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Accordion
        disableGutters
        expanded={isOpen === true}
        sx={{
          flex: "0 1 0%",
        }}
      >
        <AccordionSummary
          expandIcon={
            <ExpandMore
              onClick={() => {
                setOpen(!isOpen);
              }}
            />
          }
        >
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs value={value} onChange={handleChange}>
              <Tab label={t("variables")} />
              <Tab label={t("headers")} />
            </Tabs>
          </Box>
        </AccordionSummary>
        <AccordionDetails sx={{ width: "100%" }}>
          <TabPanel value={value} index={0}>
            <TextField
              id="outlined-multiline-flexible"
              multiline
              focused
              variant="standard"
              maxRows={5}
              minRows={5}
              sx={{
                width: "100%",
                "& .MuiInputBase-root": {
                  paddingLeft: "10px",
                  height: "100%",
                  borderRadius: 0,
                  overflow: "hidden",
                  overflowY: "auto",
                },
                "& .MuiInputBase-root::before": {
                  display: "none",
                },
                "& .MuiInputBase-root::after": {
                  display: "none",
                },
              }}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                props.setVariables(event.target.value);
              }}
            />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <TextField
              id="outlined-multiline-flexible"
              multiline
              focused
              variant="standard"
              maxRows={5}
              minRows={5}
              sx={{
                width: "100%",
                "& .MuiInputBase-root": {
                  paddingLeft: "10px",
                  height: "100%",
                  borderRadius: 0,
                  overflow: "hidden",
                  overflowY: "auto",
                },
                "& .MuiInputBase-root::before": {
                  display: "none",
                },
                "& .MuiInputBase-root::after": {
                  display: "none",
                },
              }}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                props.setHeaders(event.target.value);
              }}
            />
          </TabPanel>
        </AccordionDetails>
      </Accordion>
    </>
  );
}
