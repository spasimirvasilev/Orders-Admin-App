import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Order from "types/Order";
import { styled } from "@mui/material/styles";
import { columns } from "./orderColumns";
import Button from "@mui/material/Button";
import MapPopup from "components/MapPopup/MapPopup";

const StyledDataGrid = styled(DataGrid)(() => ({
  "& .pending": {
    backgroundColor: "rgb(255, 182, 73)",
    "&:hover": {
      backgroundColor: "rgba(255, 182, 73, 0.7)",
    },
    "&.Mui-selected": {
      backgroundColor: "rgba(255, 182, 73, 0.5)",
      "&:hover": {
        backgroundColor: "rgba(255, 182, 73, 0.3)",
      },
    },
  },
}));

const OrdersGrid: React.FC<{ orders: Order[] }> = ({ orders }) => {
  const [open, setOpen] = useState(false);
  const [originAddress, setOriginAddress] = useState<string | null>(null);
  const [shippingAddress, setShippingAddress] = useState<string | null>(null);

  columns[columns.length - 1].renderCell = (params) => (
    <Button
      onClick={() => {
        setOpen(true);
        setOriginAddress(params.row.origin_address);
        setShippingAddress(params.row.shipping_address);
      }}
    >
      View in Map
    </Button>
  );
  return (
    <>
      <StyledDataGrid
        columns={columns}
        disableColumnMenu
        rows={orders}
        getRowClassName={(params) =>
          params.row.status === "pending" ? "pending" : ""
        }
      />
      <MapPopup
        open={open}
        onClose={() => setOpen(false)}
        from={originAddress as string}
        to={shippingAddress as string}
      />
    </>
  );
};

export default OrdersGrid;
