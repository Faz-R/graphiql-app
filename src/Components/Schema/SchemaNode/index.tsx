import { useContext } from "react";
import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import SchemaContext, { type SchemaField } from "../context/SchemaContext";

const SchemaNode: React.FC<SchemaField & { level: number }> = ({
  name,
  description,
  type,
  level,
}) => {
  const { setSchema } = useContext(SchemaContext);
  return (
    <Accordion
      disableGutters
      onClick={(e) => {
        e.stopPropagation();
        setSchema(type.name, level);
      }}
    >
      <AccordionSummary expandIcon={<ExpandMore color="inherit" />}>
        <Typography variant="subtitle1" color="primary">
          {name}:{` `}
          <span style={{ color: "#ff9800" }}>
            {type.name ||
              `[${
                type.ofType?.name ??
                (description.startsWith("Episode") ? "Episode" : "Character")
              }]`}
          </span>
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="caption" color="secondary">
          {description || "No description"}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default SchemaNode;
