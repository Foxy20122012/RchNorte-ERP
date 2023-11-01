import { NextResponse } from "next/server";
import { Prisma } from "@prisma/client";
import { prisma } from "@/libs/prisma";

interface Params {
  params: { id: string };
}

export async function GET(request: Request, { params }: Params) {
  console.log(params.id);
  try {
    const proyectos = await prisma.proyectos.findFirst({
      where: {
        id: Number(params.id),
      },
    });

    if (!proyectos)
      return NextResponse.json({ message: "Projects not found" }, { status: 404 });

    return NextResponse.json(proyectos);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        {
          message: error.message,
        },
        {
          status: 500,
        }
      );
    }
  }
}

export async function DELETE(request: Request, { params }: Params) {
  try {
    const deletedproyectos = await prisma.proyectos.delete({
      where: {
        id: Number(params.id),
      },
    });
    if (!deletedproyectos)
      return NextResponse.json({ message: "Projects not found" }, { status: 404 });

    return NextResponse.json(deletedproyectos);
  } catch (error) {
    console.log(error);
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2025") {
        return NextResponse.json(
          {
            message: "Projects not found",
          },
          {
            status: 404,
          }
        );
      }

      return NextResponse.json(
        {
          message: error.message,
        },
        {
          status: 500,
        }
      );
    }
  }
}

export async function PUT(request: Request, { params }: Params) {
  try {
    const {         
        id, 
        nombre,
        lugar_realizacion, 
        costo_proyecto, 
        encargado, 
        area_proyecto,
        tiempo_meses,
        cantidad_trabajadores, } = await request.json();

    const updatedclientes = await prisma.proyectos.update({
      where: {
        id: Number(params.id),
      },
      data: {
        id, 
        nombre,
        lugar_realizacion, 
        costo_proyecto, 
        encargado, 
        area_proyecto,
        tiempo_meses,
        cantidad_trabajadores,
      },
    });

    return NextResponse.json(updatedclientes);
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2025") {
        return NextResponse.json(
          {
            message: "Projects not found",
          },
          {
            status: 404,
          }
        );
      }

      return NextResponse.json(
        {
          message: error.message,
        },
        {
          status: 500,
        }
      );
    }
  }
}
