import React from "react";
import "../../Styles/MainPage.scss";

export const MainPage = () => {
	const throwNewError=()=>{
		throw new Error('This is an error from sentry tutorials')
	}
	return (
		<>
			<div className="mainPage">
				<h1>Hello World</h1>
        <button onClick={throwNewError}>Click Here</button>
			</div>
		</>
	);
};
