import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET() {
  try {
    const clientes = await prisma.proyectos.findMany();
    return NextResponse.json(clientes);
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

export async function POST(request: Request) {
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

    const newClientes = await prisma.proyectos.create({
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

    return NextResponse.json(newClientes);
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


