import { NextResponse } from 'next/server';

// expecting a JSON body with a `name` field to say hello to
export async function POST(req: Request) {
  try {
    const { name } = await req.json();

    if (!name) {
      return NextResponse.json({ error: 'O campo "name" é obrigatório.' }, { status: 400 });
    }

    return NextResponse.json({ message: `Hello, ${name}!` }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao processar a requisição.' }, { status: 500 });
  }
}
