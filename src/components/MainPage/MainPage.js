import React from "react";
import "../../Styles/MainPage.scss";
import { Navbar } from "../Navbar/Navbar";
import * as Sentry from "@sentry/browser";
import { SpanStatus } from "@sentry/tracing";

export const MainPage = () => {
	const throwNewError = () => {
		throw new Error("Broken Api");
	};

	const apiCatch = (error) => {
		Sentry.configureScope((scope) =>
			scope.setLevel("Error").setUser("johndoe@gmail.com").setExtra("userData", {
				user:'johndoe@gmail.com',
				name: "john",
				phonenumber: "038239832",
				address: "Depok",
			}).setTransactionName('GET RANDOM USER').setTag(error)
		);
		return Sentry.captureException(error);
	};

	async function alertAction() {
		try {
			const getUser = await fetch("https://randomuser.me/apw/");
			const data = await getUser.json()
			if(data){
				alert('ok')
			}
		} catch (error) {
			apiCatch(error)
		}
		// // This will create a new Transaction for you
		// const transaction = Sentry.startTransaction({ name: "Alert Action" });
		// // Set transaction on scope to associate with errors and get included span instrumentation
		// // If there's currently an unfinished transaction, it may be dropped
		// Sentry.getCurrentHub().configureScope(scope => scope.setSpan(transaction));

		// // Assume this function makes an xhr/fetch call
		// const result = "Alert Ok"

		// const span = transaction.startChild({
		// 	data: {
		// 		result
		// 	},
		// 	op: 'task',
		// 	description: `processing Alert Action`,
		// });
		// try {
		// 	alert("Ok Click Here From Action")
		// 	span.setStatus(SpanStatus.Ok);
		// } catch (err) {
		// 	span.setStatus(SpanStatus.UnknownError);
		// 	throw err;
		// } finally {
		// 	span.finish();
		// 	transaction.finish();
		// }
	}
	return (
		<>
			<div className="mainPage">
				<h1>Hello World</h1>
				<button onClick={alertAction}>Click Here</button>
				<button className="brokenButton" onClick={()=>{}}>
					Broken Button
				</button>
			</div>
		</>
	);
};
