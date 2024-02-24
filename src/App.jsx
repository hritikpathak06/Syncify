import { Route, Routes } from "react-router-dom";
import { useUser } from "./context/userContext";
import BackgroundRemoval from "./pages/BackgroundRemoval/BackgroundRemoval";
import ImageEnhancer from "./pages/ImageEnhancer/ImageEnhancer";
import GenerateImages from "./pages/GenerateImages/GenerateImages";
import Translation from "./pages/Translation/Translation";
import Home from "./pages/Home/Home";
import YTVideosToAUdio from "./pages/YTVideosToAUdio/YTVideosToAUdio";
import VideoDownloader from "./pages/VideoDownloader/VideoDownloader";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignIn/SignUp";

function App() {
  const { userData } = useUser();

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={userData ? <Home /> : <SignIn />} />
        <Route path="/sign-up" element={userData ? <Home /> : <SignUp />} />
        <Route
          path="/background-removal"
          element={userData ? <BackgroundRemoval /> : <SignIn />}
        />
        <Route
          path="/image-enhancer"
          element={userData ? <ImageEnhancer /> : <SignIn />}
        />
        <Route
          path="/generate-images"
          element={userData ? <GenerateImages /> : <SignIn />}
        />
        <Route
          path="/text-translation"
          element={userData ? <Translation /> : <SignIn />}
        />
        <Route
          path="/video-to-audio"
          element={userData ? <YTVideosToAUdio /> : <SignIn />}
        />
        <Route
          path="/video-downloader"
          element={userData ? <VideoDownloader /> : <SignIn />}
        />
      </Routes>
    </div>
  );
}

export default App;
