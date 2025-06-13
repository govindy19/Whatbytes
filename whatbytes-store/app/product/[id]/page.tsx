import { promises as fs } from "fs";
import path from "path";
import Image from "next/image";
import ProductClientSection from "@/components/ProductClientSection";

// ✅ Define Product type inline
type Product = {
  id: string;
  title: string;
  price: number;
  image: string;
  description: string;
  category?: string;
};

// ✅ Define your page component
export default async function ProductPage({
  params
}: {
  params: { id: string };
}) {
  // ✅ Read products.json safely using Node APIs
  const filePath = path.join(process.cwd(), "data", "products.json");
  const jsonData = await fs.readFile(filePath, "utf-8");
  const products: Product[] = JSON.parse(jsonData);

  const product = products.find((p) => p.id === params.id);

  if (!product) {
    return <div className="p-6 text-red-600 font-bold">Product not found</div>;
  }

  return (
    <div className="flex flex-col md:flex-row p-6 gap-6">
      {/* Image Box */}
      <div className="flex items-center justify-center w-full md:w-1/2">
        <div className="w-[500px] h-[400px] border rounded flex items-center justify-center overflow-hidden">
          <Image
            src={product.image}
            alt={product.title}
            width={500}
            height={400}
            className="object-contain"
          />
        </div>
      </div>

      {/* Add to Cart Section */}
      <ProductClientSection product={product} />
    </div>
  );
}
