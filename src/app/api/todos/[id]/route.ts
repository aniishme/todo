import { NextResponse } from "next/server";
import { NextApiRequest } from "next";

import { prisma } from "@/lib/prisma";
import { TTodo } from "@/types";

export async function DELETE(request: NextApiRequest, context: any) {
  try {
    const id = parseInt(context.params.id);
    const todo: TTodo = await prisma.todo.delete({
      where: {
        id: id,
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

export async function PUT(request: Request, context: any) {
  try {
    const id = parseInt(context.params.id);
    const { completed, title } = await request.json();

    const todo: TTodo = await prisma.todo.update({
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
