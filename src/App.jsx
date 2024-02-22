import { Route, Routes } from "react-router-dom";
import { useUser } from "./context/userContext";
import BackgroundRemoval from "./pages/BackgroundRemoval/BackgroundRemoval";
import ImageEnhancer from "./pages/ImageEnhancer/ImageEnhancer";
import GenerateImages from "./pages/GenerateImages/GenerateImages";
import Translation from "./pages/Translation/Translation";
import Home from "./pages/Home/Home";
import YTVideosToAUdio from "./pages/YTVideosToAUdio/YTVideosToAUdio";

function App() {
  const { userData } = useUser();

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/background-removal"
          element={userData ? <BackgroundRemoval /> : <Home />}
        />
        <Route
          path="/image-enhancer"
          element={userData ? <ImageEnhancer /> : <Home />}
        />
        <Route
          path="/generate-images"
          element={userData ? <GenerateImages /> : <Home />}
        />
        <Route
          path="/text-translation"
          element={userData ? <Translation /> : <Home />}
        />
        <Route
          path="/video-to-audio"
          element={userData ? <YTVideosToAUdio /> : <Home />}
        />
      </Routes>
    </div>
  );
}

export default App;
