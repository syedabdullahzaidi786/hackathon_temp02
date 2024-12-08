import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-[#2A254B] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-medium mb-4">Menu</h3>
            <ul className="space-y-2">
              <li><Link href="/new-arrivals" className="text-sm text-gray-300 hover:text-white">New arrivals</Link></li>
              <li><Link href="/best-sellers" className="text-sm text-gray-300 hover:text-white">Best sellers</Link></li>
              <li><Link href="/recently-viewed" className="text-sm text-gray-300 hover:text-white">Recently viewed</Link></li>
              <li><Link href="/popular" className="text-sm text-gray-300 hover:text-white">Popular this week</Link></li>
              <li><Link href="/all" className="text-sm text-gray-300 hover:text-white">All products</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><Link href="/crockery" className="text-sm text-gray-300 hover:text-white">Crockery</Link></li>
              <li><Link href="/furniture" className="text-sm text-gray-300 hover:text-white">Furniture</Link></li>
              <li><Link href="/homeware" className="text-sm text-gray-300 hover:text-white">Homeware</Link></li>
              <li><Link href="/plant-pots" className="text-sm text-gray-300 hover:text-white">Plant pots</Link></li>
              <li><Link href="/chairs" className="text-sm text-gray-300 hover:text-white">Chairs</Link></li>
              <li><Link href="/crockery" className="text-sm text-gray-300 hover:text-white">Crockery</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-4">Our company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm text-gray-300 hover:text-white">About us</Link></li>
              <li><Link href="/vacancies" className="text-sm text-gray-300 hover:text-white">Vacancies</Link></li>
              <li><Link href="/contact" className="text-sm text-gray-300 hover:text-white">Contact us</Link></li>
              <li><Link href="/privacy" className="text-sm text-gray-300 hover:text-white">Privacy</Link></li>
              <li><Link href="/returns" className="text-sm text-gray-300 hover:text-white">Returns policy</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-4">Join our mailing list</h3>
            <div className="flex space-x-2">
              <Input type="email" placeholder="your@email.com" className="bg-white" />
              <Button variant="secondary">Sign up</Button>
            </div>
          </div>
        </div>
        <div className="mt-12 flex items-center justify-between border-t border-gray-700 pt-8">
          <p className="text-sm text-gray-300">Copyright 2024 Avion LTD</p>
          <div className="flex space-x-4">
            <Link href="#" className="text-gray-300 hover:text-white">
              <span className="sr-only">LinkedIn</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </Link>
            <Link href="#" className="text-gray-300 hover:text-white">
              <span className="sr-only">Facebook</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
            </Link>
            <Link href="#" className="text-gray-300 hover:text-white">
              <span className="sr-only">Instagram</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </Link>
            <Link href="#" className="text-gray-300 hover:text-white">
              <span className="sr-only">Skype</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.069 18.874c-4.023 0-5.82-1.979-5.82-3.464 0-.765.561-1.296 1.333-1.296 1.723 0 1.273 2.477 4.487 2.477 1.641 0 2.55-.895 2.55-1.811 0-.551-.269-1.16-1.354-1.429l-3.576-.895c-2.88-.724-3.403-2.286-3.403-3.751 0-3.047 2.861-4.191 5.549-4.191 2.471 0 5.393 1.373 5.393 3.199 0 .784-.688 1.24-1.453 1.24-1.469 0-1.198-2.037-4.164-2.037-1.469 0-2.292.664-2.292 1.617s1.153 1.258 2.157 1.487l2.637.587c2.891.649 3.624 2.346 3.624 3.944 0 2.476-1.902 4.324-5.722 4.324m11.084-4.882l-.029.135-.044-.24c.015.045.044.074.059.12.12-.675.181-1.363.181-2.052 0-1.529-.301-3.012-.898-4.42-.569-1.348-1.395-2.562-2.427-3.596-1.049-1.033-2.247-1.856-3.595-2.426-1.318-.631-2.801-.93-4.328-.93-.72 0-1.444.07-2.143.204l.119.06-.239-.033.119-.025c-.507-1.053-.777-2.2-.777-3.365 0-4.367 0-8.514 1.7-11.613 4.785-3.099 3.099-4.785 7.215-4.785 11.613 0 .749.089 1.497.223 2.231.016.046.045.075.06.12l-.045-.24-.029.136c-.455.92-.684 1.904-.684 2.892 0 3.564 2.91 6.461 6.461 6.461.931 0 1.863-.201 2.723-.586l.119-.025-.239-.033.119.06c-.778.157-1.567.236-2.357.236-6.617 0-12-5.383-12-12s5.383-12 12-12c6.616 0 12 5.383 12 12 0 .79-.079 1.579-.236 2.357"/></svg>
            </Link>
            <Link href="#" className="text-gray-300 hover:text-white">
              <span className="sr-only">Pinterest</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/></svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

