import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    products: [
      {
        id: 1,
        name: "Product 1",
        price: 100,
      },
      {
        id: 2,
        name: "Product 2",
        price: 200,
      },
    ]
  })
}

export async function POST(req: Request) {
  const data = await req.json()
  return NextResponse.json(data)
}