import Image from "next/image"

const products = [
  { name: "The Dandy chair", price: "£250", image: "/placeholder.svg" },
  { name: "Rustic Vase Set", price: "£155", image: "/placeholder.svg" },
  { name: "The Silky Vase", price: "£125", image: "/placeholder.svg" },
  { name: "The Lucy Lamp", price: "£399", image: "/placeholder.svg" },
  { name: "The Poplar suede sofa", price: "£980", image: "/placeholder.svg" },
  { name: "The Dandy chair", price: "£250", image: "/placeholder.svg" },
  { name: "The Dandy chair", price: "£250", image: "/placeholder.svg" },
  { name: "The Dandy chair", price: "£250", image: "/placeholder.svg" },
]

export default function AllProductsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-light mb-8">All products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div key={index}>
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={300}
              className="w-full aspect-square object-cover mb-4"
            />
            <h3 className="font-medium">{product.name}</h3>
            <p className="text-gray-600">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
