import Image from "next/image"
import Link from "next/link"
import { Button } from "../../components/ui/button"

const collections = [
  { name: "Plant pots", image: "/plantpot.jpg" },
  { name: "Ceramics", image: "/ceramics.jpg" },
  { name: "Tables", image: "/tables.jpg" },
  { name: "Chairs", image: "/chairs.jpeg" },
  { name: "Crockery", image: "/crockery.jpg" },
  { name: "Tableware", image: "/tableware.jpeg" },
  { name: "Cutlery", image: "/cutlery.jpeg" },
]

export default function CollectionsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-light mb-8">Collections</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {collections.map((collection, index) => (
          <div key={index} className="relative group">
            <Image
              src={collection.image}
              alt={collection.name}
              width={400}
              height={300}
              className="w-full aspect-[4/3] object-cover mb-4"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Link href={`/${collection.name.toLowerCase().replace(' ', '-')}`}>
                <Button variant="secondary">{collection.name}</Button>
              </Link>
            </div>
            <h3 className="font-medium text-center">{collection.name}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

