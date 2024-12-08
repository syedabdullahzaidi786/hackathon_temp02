import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="grid lg:grid-cols-2">
        <div className="bg-[#2A254B] text-white px-6 py-16 lg:px-20 lg:py-24">
          <h1 className="text-4xl lg:text-5xl font-light mb-6">
            The furniture brand for the future, with timeless designs
          </h1>
          <Link href="/collections">
            <Button variant="secondary" size="lg" className="mt-4">
              View collection
            </Button>
          </Link>
          <p className="mt-8 text-sm opacity-80">
            A new era in eco-friendly furniture with Avion, the French luxury retail brand with nice fonts, tasteful colors, and a beautiful way to display things digitally using modern web technologies.
          </p>
        </div>
        <div className="bg-[#8A8A8F] relative min-h-[400px] lg:min-h-0">
          <Image
            src="/chair.svg"
            alt="Modern chair"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl mb-12 text-center">What makes our brand different</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="mb-4">
                <svg className="w-8 h-8 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-medium mb-2">Next day as standard</h3>
              <p className="text-sm text-gray-600">Order before 3pm and get your order the next day as standard</p>
            </div>
            <div className="text-center">
              <div className="mb-4">
                <svg className="w-8 h-8 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="font-medium mb-2">Made by true artisans</h3>
              <p className="text-sm text-gray-600">Handmade crafted goods made with real passion and craftsmanship</p>
            </div>
            <div className="text-center">
              <div className="mb-4">
                <svg className="w-8 h-8 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-medium mb-2">Unbeatable prices</h3>
              <p className="text-sm text-gray-600">For our materials and quality you wonot find better prices anywhere</p>
            </div>
            <div className="text-center">
              <div className="mb-4">
                <svg className="w-8 h-8 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="font-medium mb-2">Recycled packaging</h3>
              <p className="text-sm text-gray-600">We use 100% recycled packaging to ensure our footprint is manageable</p>
            </div>
          </div>
        </div>
      </section>

      {/* New Ceramics Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-2xl mb-12">New ceramics</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <Image
                src="/chair.svg"
                alt="The Dandy chair"
                width={300}
                height={300}
                className="w-full aspect-square object-cover mb-4"
              />
              <h3 className="font-medium">The Dandy chair</h3>
              <p className="text-gray-600">£250</p>
            </div>
            <div>
              <Image
                src="/rustic_vase.svg"
                alt="Rustic Vase Set"
                width={300}
                height={300}
                className="w-full aspect-square object-cover mb-4"
              />
              <h3 className="font-medium">Rustic Vase Set</h3>
              <p className="text-gray-600">£155</p>
            </div>
            <div>
              <Image
                src="/silky_vase.svg"
                alt="The Silky Vase"
                width={300}
                height={300}
                className="w-full aspect-square object-cover mb-4"
              />
              <h3 className="font-medium">The Silky Vase</h3>
              <p className="text-gray-600">£125</p>
            </div>
            <div>
              <Image
                src="/LuckyLamp.svg"
                alt="The Lucy Lamp"
                width={300}
                height={300}
                className="w-full aspect-square object-cover mb-4"
              />
              <h3 className="font-medium">The Lucy Lamp</h3>
              <p className="text-gray-600">£399</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link href="/collections">
              <Button variant="outline">View collection</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Products */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl mb-12">Our popular products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <Image
                src="/sofa.svg"
                alt="The Poplar suede sofa"
                width={400}
                height={300}
                className="w-full aspect-[4/3] object-cover mb-4"
              />
              <h3 className="font-medium">The Poplar suede sofa</h3>
              <p className="text-gray-600">£980</p>
            </div>
            <div>
              <Image
                src="/chair.svg"
                alt="The Dandy chair"
                width={400}
                height={300}
                className="w-full aspect-[4/3] object-cover mb-4"
              />
              <h3 className="font-medium">The Dandy chair</h3>
              <p className="text-gray-600">£250</p>
            </div>
            <div>
              <Image
                src="/Dandy chair.svg"
                alt="The Dandy chair"
                width={400}
                height={300}
                className="w-full aspect-[4/3] object-cover mb-4"
              />
              <h3 className="font-medium">The Dandy chair</h3>
              <p className="text-gray-600">£250</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link href="/collections">
              <Button variant="outline">View collection</Button>
            </Link>
          </div>
        </div>
      </section>

       {/* Join Club Section */}
       <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="text-2xl mb-4">Join the club and get the benefits</h2>
          <p className="text-gray-600 mb-8">
            Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more
          </p>
          <div className="flex gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-2 border rounded-md"
            />
            <Button>Sign up</Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl mb-6">From a studio in London to a global brand with over 400 outlets</h2>
              <p className="text-gray-600 mb-4">
                When we started Avion, the idea was simple. Make high-quality furniture affordable and available for the mass market.
              </p>
              <p className="text-gray-600 mb-8">
                Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique became the hotbed for the London interior design community.
              </p>
              <Button variant="outline">Get in touch</Button>
            </div>
            <div>
              <Image
                src="/before_footer.svg"
                alt="Our studio"
                width={600}
                height={400}
                className="w-full aspect-[3/2] object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
