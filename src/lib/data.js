import { prisma } from "./prisma"

export const getLocal = async () => {
	try {
		const data = await prisma.locals.findFirst({
			orderBy: {
				createdAt: "desc",
			},
		})
		return data
	} catch (error) {
		throw new Error("Failed to fetch apps data")
	}
}

export const getLocals = async () => {
	try {
		const data = await prisma.locals.findMany({
			orderBy: {
				createdAt: "desc",
			},
		})
		return data
	} catch (error) {
		throw new Error("Failed to fetch apps data")
	}
}

export const getApps = async () => {
	try {
		const data = await prisma.apps.findMany()
		return data
	} catch (error) {
		throw new Error("Failed to fetch apps data")
	}
}

export const getAppById = async (id) => {
	try {
		const data = await prisma.apps.findFirst({
			where: { id },
		})
		return data
	} catch (error) {
		throw new Error("Failed to fetch apps data")
	}
}
