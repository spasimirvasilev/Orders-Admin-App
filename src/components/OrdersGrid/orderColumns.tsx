import Tooltip from "@mui/material/Tooltip/Tooltip";
import { GridColDef } from "@mui/x-data-grid/models/colDef/gridColDef";
import { GridRenderCellParams } from "@mui/x-data-grid/models/params/gridCellParams";

const ImageColumn: React.FC<{
  params: GridRenderCellParams;
}> = ({ params }) => {
  return (
    <Tooltip
      placement="right"
      arrow
      title={
        <img
          style={{
            height: `100%`,
            width: `100%`,
          }}
          src={params.row.photo}
          // src="https://media.istockphoto.com/id/1067347086/photo/cat-with-blue-eyes-looks-at-camera.jpg?s=612x612&w=0&k=20&c=UP1yQs6o0eidm4L2F74DDm02pyeH40MwBwwGRAKhb4E="
          alt={`${params.row.size}-${params.row.type}`}
        />
      }
    >
      <img
        style={{
          display: "block",
          margin: "10px auto",
          maxHeight: `100%`,
          maxWidth: `100%`,
        }}
        src={params.row.photo}
        // src="https://media.istockphoto.com/id/1067347086/photo/cat-with-blue-eyes-looks-at-camera.jpg?s=612x612&w=0&k=20&c=UP1yQs6o0eidm4L2F74DDm02pyeH40MwBwwGRAKhb4E="
        alt={`${params.row.size}-${params.row.type}`}
      />
    </Tooltip>
  );
};

export const columns: GridColDef[] = [
  { field: "id", headerName: "ID", flex: 1 },
  {
    field: "created",
    headerName: "Created At",
    flex: 1,
  },
  {
    field: "status",
    headerName: "Status",
    flex: 1,
  },
  {
    field: "customer",
    headerName: "Customer",
    flex: 1,
  },
  {
    field: "sku",
    headerName: "SKU",
    flex: 1,
  },
  {
    field: "photo",
    headerName: "Photo",
    renderCell: (params): JSX.Element | undefined => (
      <ImageColumn params={params} />
    ),
    flex: 1,
  },
  {
    field: "condition",
    headerName: "Condition",
    flex: 1,
  },
  {
    field: "size",
    headerName: "Size",
    flex: 1,
  },
  {
    field: "type",
    headerName: "Type",
    flex: 1,
  },
  {
    field: "origin_address",
    headerName: "Origin Address",
    flex: 2,
  },
  {
    field: "shipping_address",
    headerName: "Shipping Address",
    flex: 2,
  },
  {
    field: "action",
    width: 120,
    headerName: "",
    sortable: false,
  },
];
