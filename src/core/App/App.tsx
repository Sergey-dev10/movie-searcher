import { RouterProvider } from "react-router";
import { router } from "../routing/RouteSwithc.tsx";
import { GlobalStyles } from "../style/GlobalStyles.styles.ts";
function App() {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
