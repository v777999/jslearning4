"use strict";

const inputRub = document.querySelector("#rub"),
  inputUsd = document.querySelector("#usd");

inputRub.addEventListener("input", () => {
  const request = new XMLHttpRequest();

  request.open("GET", "js/current1.json"); // 1 - error
  request.setRequestHeader("Content-type", "application/json; charset=utf-8");
  request.send();

  // status 200 404
  // statusText
  // response
  // readyState

	// request.addEventListener("readystatechange", () => {
	// 	if (request.readyState === 4 && request.status === 200) {
	// 		console.log(request.response);
	// 		const data = JSON.parse(request.response);
	// 		inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
	// 	} else {
	// 		inputUsd.value = "Что-то пошло не так";
	// 	}
	// });

	request.addEventListener("load", () => {
		if (request.status === 200) {
			const data = JSON.parse(request.response);
			inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
		} else {
			inputUsd.value = "Что-то пошло не так";
		}
	});
});
