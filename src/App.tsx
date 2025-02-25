import { FC, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import RouterSwitch from "./RouterSwitch";
import "./style/main.scss";

const App: FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <RouterSwitch />
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
