import Box from "@mui/material/Box";
import {
  Tab,
  Tabs,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";
import { ExpandMore } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import CodeMirror from "@uiw/react-codemirror";
import { customTheme } from "../../customTheme";
import { json } from "@codemirror/lang-json";
import client from "../../apollo/client";
import { EditorView } from "@codemirror/view";

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
  const [headers, setHeaders] = useState("");
  const [variables, setVariables] = useState("");

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    event.stopPropagation();
    setValue(newValue);
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
              <Tab label={t("variables")} onClick={() => setOpen(true)} />
              <Tab label={t("headers")} onClick={() => setOpen(true)} />
            </Tabs>
          </Box>
        </AccordionSummary>
        <AccordionDetails
          sx={{ width: "100%", height: "15vh", overflowY: "auto" }}
        >
          <TabPanel value={value} index={0}>
            <CodeMirror
              spellCheck={true}
              autoFocus
              value={variables}
              theme={customTheme({ settings: { gutterBackground: "#1e1e1e" } })}
              extensions={[json(), EditorView.lineWrapping]}
              onChange={(value): void => {
                setVariables(value);
                props.setVariables(value);
              }}
            />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <CodeMirror
              spellCheck={true}
              autoFocus
              value={headers}
              theme={customTheme({ settings: { gutterBackground: "#1e1e1e" } })}
              extensions={[json(), EditorView.lineWrapping]}
              onChange={(value): void => {
                setHeaders(value);
                client.resetStore();
                props.setHeaders(value);
              }}
            />
          </TabPanel>
        </AccordionDetails>
      </Accordion>
    </>
  );
}
