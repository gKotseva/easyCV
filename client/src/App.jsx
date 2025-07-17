import { Route, Routes } from "react-router-dom";

import { paths } from "./paths";
import { Builder } from "./pages/Builder";
import { Profile } from "./pages/Profile";

function App() {
  return (
    <>
      <Routes>
        <Route path={paths.builder} element={<Builder />} />
        <Route path={paths["my-profile"]} element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
