import OrdersGrid from "components/OrdersGrid/OrdersGrid";
import OrdersFilter from "components/OrdersFilter/OrdersFilter";
import useGetFilteredOrders from "hooks/useGetFilteredOrders";
import "./App.css";
import { Typography } from "@mui/material";

function App() {
  const { data: orders } = useGetFilteredOrders();
  return (
    <div className="App">
      <Typography
        variant="h3"
        component="h1"
        textAlign="left"
        paddingTop="12px"
      >
        Orders
      </Typography>
      <OrdersFilter />
      <div className="grid-container">
        <OrdersGrid orders={orders} />
      </div>
    </div>
  );
}

export default App;
