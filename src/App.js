import { MainPage } from "./components/MainPage/MainPage";
import { Route, BrowserRouter, matchPath, Routes, Router } from "react-router-dom";
import { createBrowserHistory } from "history";

import { init, withProfiler } from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import ContactPage from "./components/ContactPage/ContactPage";
import AboutPage from "./components/AboutPage/AboutPage";
import { useEffect } from "react";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
	const routes = [
		{ path: "/" },
		{ path: "/Profile" },
		{ path: "/Contact" },
		{ path: "/About" },
	];
	// const browserTracing = useBrowserTracing();
	// const routingInstrumentation = useRoutingInstrumentation();

	// Initialize Sentry with the browser tracing integration.
	useEffect(() => {
		const browserTracing =   new BrowserTracing({
			tracingOrigins: ["https://randomuser.me/"],
      beforeNavigate: context => {
        return {
          ...context,
          // You could use your UI's routing library to find the matching
          // route template here. We don't have one right now, so do some basic
          // parameter replacements.
          name: window.location.pathname
            .replace(/\/[a-f0-9]{32}/g, "/<hash>")
            .replace(/\/\d+/g, "/<digits>"),
        };
      },
    })
		init({
			dsn: "https://041768eae2104575b92f0f873935b386@o1250105.ingest.sentry.io/6413971",
			integrations: [browserTracing],
		});
	}, []);

	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/Profile" element={<ProfilePage />} />
				<Route path="/Contact" element={<ContactPage />} />
				<Route path="/About" element={<AboutPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default withProfiler(App);
