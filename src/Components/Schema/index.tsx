import { useState, lazy, Suspense } from "react";
import SchemaContext, {
  type SchemaItemType,
  type SetSchemaType,
} from "./context/SchemaContext";
import { Button, Drawer } from "@mui/material";
import SchemaTwoToneIcon from "@mui/icons-material/SchemaTwoTone";
import Loader from "../Loader";

const SchemaList = lazy(() => import("./SchemaList"));

const Schema = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [list, setList] = useState<SchemaItemType[]>([
    { query: "Query", level: 1 },
  ]);

  const setSchema: SetSchemaType = (name, index) => {
    let newSchema: SchemaItemType[];

    if (!name) {
      newSchema = list.slice(0, index);
    } else if (list.some(({ level }) => level === index + 1)) {
      newSchema = list.slice(0, index);
      newSchema.push({ query: name, level: index + 1 });
    } else {
      newSchema = [...list, { query: name, level: index + 1 }];
    }
    setList(newSchema);
  };

  return (
    <SchemaContext.Provider value={{ schema: list, setSchema }}>
      <Button onClick={() => setIsOpen(!isOpen)}>schema</Button>
      <Drawer
        onClick={() => setIsOpen(!isOpen)}
        anchor="right"
        open={isOpen}
        PaperProps={{
          sx: {
            minHeight: "100%",
            paddingBlock: 2,
            paddingInline: 3,
          },
        }}
      >
        <Suspense fallback={<Loader />}>
          <SchemaList />
        </Suspense>
      </Drawer>
    </SchemaContext.Provider>
  );
};

export default Schema;
