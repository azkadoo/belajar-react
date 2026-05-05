interface ProductCardProps {
	image: string;
	title: string;
	price: number;
}

export default function ProductCard(props: ProductCardProps) {
	return (
		<div>
			<img
				src={props.image}
				alt={props.title}
				className="h-64 object-contain"
			/>
			<div>{props.title}</div>
			<div>USD {props.price}</div>
		</div>
	);
}
