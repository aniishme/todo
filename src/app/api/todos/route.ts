import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const todos = await prisma.todo.findMany();
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

    const newTodo = await prisma.todo.create({
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

export async function DELETE(request: Request) {
  try {
    const { id } = await request.json();

    const todo = await prisma.todo.delete({
      where: {
        id,
      },
    });

    return NextResponse.json({
      success: true,
      data: todo,
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

export async function PUT(request: Request) {
  try {
    const { id, completed, title } = await request.json();

    const todo = await prisma.todo.update({
      where: {
        id,
      },
      data: {
        completed,
        title,
      },
    });

    return NextResponse.json({
      success: true,
      data: todo,
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
