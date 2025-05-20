import { NOIMAGE } from "@/utilities/utilityConstant";

export const getPropertyByStatusSlip = (status: string) => {
  switch (status) {
    case "Active":
      return "#008000";
    case "Closed":
      return "#000";
    case "Coming Soon":
      return "#2C7EF2";
    case "Contingent":
      return "#FFA500";
    case "Expired":
      return "#800080";
    case "Off Market":
      return "#B4D9EF";
    case "Pending":
      return "#FFD700";
    case "Pending Sale":
      return "#FFD700";
    case "Sold":
      return "#000";
    case "Under Contract":
      return "#FF0000";
    default:
      return "#000";
  }
};
