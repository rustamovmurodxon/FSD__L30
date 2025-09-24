import { memo } from "react";
import AppProvider from "./provider";
import AppRouter from "@/app/routes";

const App = () => {
  return (
    <div>
      <AppProvider>
        <AppRouter />
      </AppProvider>
    </div>
  );
};

export default memo(App);
