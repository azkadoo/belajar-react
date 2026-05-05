import { createFileRoute } from "@tanstack/react-router";
import { CardName } from "#/components/card-name";
import { Footer } from "#/components/footer";
import { Header } from "#/components/header";
import { ProductCard } from "#/components/product-card";

export const Route = createFileRoute("/")({ component: Home });

const users = [
	{ id: 1, name: "Azka", gender: "male" },
	{ id: 2, name: "Annisa", gender: "female" },
	{ id: 3, name: "Adit", gender: "male" },
	{ id: 4, name: "Gita", gender: "female" },
	{ id: 5, name: "Ghaniyo", gender: "male" },
	{ id: 6, name: "Ami", gender: "female" },
];

const products = [
	{
		id: 1,
		name: "Product A",
		price: 20,
		category: "Shoes",
		tags: "sports, luxury, modern",
	},
	{
		id: 2,
		name: "Product B",
		price: 15,
		category: "Shoes",
		tags: "sports, luxury, modern",
	},
	{
		id: 3,
		name: "Product C",
		price: 23,
		category: "Shoes",
		tags: "sports, luxury, modern",
	},
];

// Mapping -> Data to Component

function Home() {
	return (
		<div>
			<Header />
			<section className="grid grid-cols-2 gap-5 my-5">
				{users.map((user) => {
					return (
						<CardName key={user.id} name={user.name} gender={user.gender} />
					);
				})}
			</section>
			<section className="grid grid-cols-4 gap-5 my-5">
				{products.map((product) => {
					return <ProductCard key={product.id} {...product} />;
				})}
			</section>
			<Footer />
		</div>
	);
}
