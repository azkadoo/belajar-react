interface ProductCardProps {
	name: string;
	price: number;
	category: string;
	tags: string;
}

export function ProductCard({ name, price }: ProductCardProps) {
	return (
		<div>
			<div className="bg-gray-200 h-32"></div>
			<div>{name}</div>
			<div>USD {price}</div>
		</div>
	);
}
