const DAYS = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
const MONTHS = [
	"Janvier",
	"Fevrier",
	"Mars",
	"Avril",
	"Mai",
	"Juin",
	"Juillet",
	"Aout",
	"Septembre",
	"Octobre",
	"Novembre",
	"Decembre",
];

export const formatDate = (dateValue: string): string => {
	const [datePart] = dateValue.split("T");
	const [year, month, day] = datePart.split("-").map(Number);
	const date = new Date(year, month - 1, day);

	return `${DAYS[date.getDay()]} ${day} ${MONTHS[month - 1]}`;
};