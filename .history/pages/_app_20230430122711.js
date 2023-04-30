import "../styles/globals.css";
import { NavBar } from "../Components";
import { TrackingProvider } from "../Conetxt/TrackingContext";

export default function App({ Component, pageProps }) {
  return (
    <>
    <TrackingProvider>
      <NavBar/>
    <Component {...pageProps} />
    </TrackingProvider>  
    </>
  );
}
