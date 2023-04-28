import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const carouselIframe = document.getElementById(
      "carousel-iframe"
    ) as HTMLIFrameElement | null;

    const interstitialIframe = document.getElementById(
      "interstitial-iframe"
    ) as HTMLIFrameElement | null;

    window.addEventListener("message", (event) => {
      if (
        event.origin === "http://localhost:3000" &&
        event.data === "CLICK_CAROUSEL_ITEM"
      ) {
        const message = {
          type: "OPEN_INTERSTITIAL",
          payload: {
            open: true,
          },
        };

        if (interstitialIframe) {
          interstitialIframe.contentWindow?.postMessage(
            message,
            "http://localhost:3001"
          );
        }
      }
    });
  }, []);

  return (
    <div className="container">
      <iframe
        id="carousel-iframe"
        src="http://localhost:3000"
        className="carousel-iframe"
      />
      <iframe
        id="interstitial-iframe"
        src="http://localhost:3001"
        className="interstitial-iframe"
      />
    </div>
  );
}

export default App;
