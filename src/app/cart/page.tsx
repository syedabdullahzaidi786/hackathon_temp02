import Image from "next/image"
import { Button } from "../../components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Input } from "../../components/ui/input"

export default function CartPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-light mb-8">Your shopping cart</h1>
      
      <div className="space-y-8">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50%]">Product</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead className="text-right">Total</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <div className="flex gap-4">
                  <Image
                    src="/silky_vase.svg"
                    alt="Graystone vase"
                    width={100}
                    height={100}
                    className="object-cover"
                  />
                  <div>
                    <h3 className="font-medium">Graystone vase</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      A timeless ceramic vase with a tri color grey glaze.
                    </p>
                    <p className="text-sm mt-2">£85</p>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <Input
                  type="number"
                  min="1"
                  defaultValue="1"
                  className="w-20"
                />
              </TableCell>
              <TableCell className="text-right">£85</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="flex gap-4">
                  <Image
                    src="/white_vase.jpeg"
                    alt="Basic white vase"
                    width={100}
                    height={100}
                    className="object-cover"
                  />
                  <div>
                    <h3 className="font-medium">Basic white vase</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      Beautiful and simple this is one for the classics
                    </p>
                    <p className="text-sm mt-2">£125</p>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <Input
                  type="number"
                  min="1"
                  defaultValue="1"
                  className="w-20"
                />
              </TableCell>
              <TableCell className="text-right">£125</TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <div className="flex flex-col items-end gap-4">
          <div className="flex justify-between w-full max-w-md">
            <span className="text-lg">Subtotal</span>
            <span className="text-lg">£210</span>
          </div>
          <p className="text-sm text-gray-600">
            Taxes and shipping are calculated at checkout
          </p>
          <Button className="bg-[#2A254B] hover:bg-[#2A254B]/90 text-white px-8">
            Go to checkout
          </Button>
        </div>
      </div>
    </div>
  )
}

