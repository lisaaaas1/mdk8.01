let num = 1;
const count = document.querySelector(".count")

const request = document.querySelector(".submit")
count.innerHTML = num;
request.addEventListener("click", () => {
	num++; 
	count.style.left = "64px";
	count.style.fontSize = "0";
	setTimeout(() => {
		count.style.left = "0";
		count.style.fontSize = "24px";
		count.innerHTML = num;
	}, 500);
})
