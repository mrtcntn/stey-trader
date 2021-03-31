import { useContext } from "react";
import { BuySellContext } from "../providers/BuySellProvider";

function useBuySell() {
  const context = useContext(BuySellContext);
  if (context === undefined) {
    throw new Error('useBuySell must be used within a BuySellProvider');
  }
  return context;
}

export default useBuySell;