const full = document.querySelector("#full");
const year = document.querySelector("#year");
const month = document.querySelector("#month");
const day = document.querySelector("#day");

const today = new Date();

full.innerHTML = `Today is <span class="highlight">${new Intl.DateTimeFormat(
	"en-US",
	{
		dateStyle: "full"
	}
).format(today)}</span>`;

