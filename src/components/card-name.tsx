interface CardNameProps {
	name: string;
	gender: "male" | "female";
}

export function CardName({ name, gender }: CardNameProps) {
	const classNameMale = "bg-blue-200 text-blue-800 p-8";
	const classNameFemale = "bg-rose-200 text-rose-800 p-8";

	return (
		<main className={gender === "male" ? classNameMale : classNameFemale}>
			<div>Name: {name}</div>
			<div>Gender: {gender}</div>
		</main>
	);
}
