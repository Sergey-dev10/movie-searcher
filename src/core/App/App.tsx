import { RouterProvider } from "react-router";
import {Provider} from "react-redux";
import { router } from "../routing/RouteSwithc.tsx";
import {store} from "../../modules/";
import { GlobalStyles } from "../style/GlobalStyles.styles.ts";
function App() {
  return (
    <>
        <Provider store={store}>
            <GlobalStyles />
            <RouterProvider router={router} />
        </Provider>
    </>
  );
}

export default App;
