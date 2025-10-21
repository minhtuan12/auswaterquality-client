import { RouterProvider } from "react-router-dom";
import { router } from "./app/routes";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { ConfigProvider } from "antd";

function App() {
  return (
    <div>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#116aab",
          },
        }}
      >
        <RouterProvider router={router} />
      </ConfigProvider>
    </div>
  );
}

export default App;
