import { Autocomplete, Card, FormControl, TextField } from "@mui/material";
import { atom, useAtom } from "jotai";

export const statusAtom = atom<string | null>(null);
export const sizeAtom = atom<string | null>(null);
export const conditionAtom = atom<string | null>(null);
export const typeAtom = atom<string | null>(null);

const OrdersFilter: React.FC = () => {
  const [status, setStatus] = useAtom(statusAtom);
  const [size, setSize] = useAtom(sizeAtom);
  const [condition, setCondition] = useAtom(conditionAtom);
  const [type, setType] = useAtom(typeAtom);

  return (
    <div>
      <Card sx={{ display: "flex", padding: 1, mb: 2, alignItems: "center" }}>
        <FormControl sx={{ mr: 1, flexGrow: 1 }}>
          <Autocomplete
            size="small"
            value={`${status || ""}`}
            onChange={(_, value) => setStatus(value)}
            options={["delivered", "in-progress", "pending"]}
            renderInput={(params) => <TextField {...params} label="Status" />}
          />
        </FormControl>
        <FormControl sx={{ mr: 1, flexGrow: 1 }}>
          <Autocomplete
            size="small"
            value={`${size || ""}`}
            onChange={(_, value) => setSize(value)}
            options={["20ft", "40ft", "45ft"]}
            renderInput={(params) => <TextField {...params} label="Size" />}
          />
        </FormControl>
        <FormControl sx={{ mr: 1, flexGrow: 1 }}>
          <Autocomplete
            size="small"
            value={`${condition || ""}`}
            onChange={(_, value) => setCondition(value)}
            options={["cargo-worthy", "new", "wind-watertight"]}
            renderInput={(params) => (
              <TextField {...params} label="Condition" />
            )}
          />
        </FormControl>
        <FormControl sx={{ mr: 1, flexGrow: 1 }}>
          <Autocomplete
            size="small"
            value={`${type || ""}`}
            onChange={(_, value) => setType(value)}
            options={["high-cube", "standard"]}
            renderInput={(params) => <TextField {...params} label="Type" />}
          />
        </FormControl>
      </Card>
    </div>
  );
};

export default OrdersFilter;
