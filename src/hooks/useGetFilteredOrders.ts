import {
  sizeAtom,
  typeAtom,
  statusAtom,
  conditionAtom,
} from "components/OrdersFilter/OrdersFilter";
import orders from "orders.json";
import { useAtomValue } from "jotai";
import Order from "types/Order";

const filterOrder = (orderOption: string, filter: string | null) => {
  if (filter === undefined || filter === null) return true;
  return orderOption === filter;
};

const useGetFilteredOrders = (): { data: Order[] } => {
  const size = useAtomValue(sizeAtom);
  const type = useAtomValue(typeAtom);
  const status = useAtomValue(statusAtom);
  const condition = useAtomValue(conditionAtom);

  const data = orders.filter(
    (order) =>
      filterOrder(order.size, size) &&
      filterOrder(order.type, type) &&
      filterOrder(order.status, status) &&
      filterOrder(order.condition, condition)
  );

  return { data };
};

export default useGetFilteredOrders;
