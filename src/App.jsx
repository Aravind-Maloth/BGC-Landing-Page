import { useState, useEffect } from "react";
import AOS from "aos";
import AppRoutes from "./assets/Routes/AppRoutes";
import { ScrollToTop } from "./assets/Components/common/ScrollToTop";
import InitialLoader from "./assets/Components/common/InitialLoader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="App">
      {/* 1. Show Loader and trigger state update when complete */}
      <InitialLoader onComplete={() => setIsLoading(false)} />

      {/* 2. Hide routes (including MainLayout & NavBar) while loading */}
      {!isLoading && (
        <>
          <AppRoutes />
          <ScrollToTop />
        </>
      )}
    </div>
  );
}

export default App;