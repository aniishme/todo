import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";
import { TTodo } from "@/types";

export async function GET() {
  try {
    const todos: TTodo[] = await prisma.todo.findMany({
      orderBy: [
        {
          updatedAt: "desc",
        },
      ],
    });
    return NextResponse.json({
      success: true,
      data: todos,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}

export async function POST(request: Request) {
  try {
    const { title } = await request.json();
    const todo = {
      title,
      completed: false,
    };

    const newTodo: TTodo = await prisma.todo.create({
      data: todo,
    });

    return NextResponse.json({
      success: true,
      data: newTodo,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}
