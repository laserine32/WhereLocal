import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export const POST = async (request) => {
	try {
		const { address } = await request.json()
		const local = await prisma.locals.create({
			data: {
				address: address,
			},
		})
		const ret = { status: "success", data: local }
		return NextResponse.json(ret, { status: 200 })
	} catch (error) {
		return NextResponse.json({ status: "error", message: "Failed to add local" }, { status: 500 })
	}
}
