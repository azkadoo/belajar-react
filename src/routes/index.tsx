import { createFileRoute } from "@tanstack/react-router";
import ProductCard from "#/modules/product/components/product-card";
import { getProducts } from "#/modules/product/lib/get-products";

export const Route = createFileRoute("/")({
	component: RouteComponent,
	loader: getProducts,
});

function RouteComponent() {
	const products = Route.useLoaderData();

	return (
		<div className="grid grid-cols-4 p-16 gap-8">
			{products.map((product) => {
				return <ProductCard key={product.id} {...product} />;
			})}
		</div>
	);
}
