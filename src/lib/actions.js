"use server"
import { z } from "zod"
import { prisma } from "./prisma"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

const AppsSchema = z.object({
	name: z.string().min(1),
	link: z.string().min(1),
	img: z.string().optional().default("/dashboard/assets/imgs/favicon.png"),
})

export const saveApp = async (prevSate, formData) => {
	const validatedFields = AppsSchema.safeParse(Object.fromEntries(formData.entries()))
	if (!validatedFields.success) {
		return {
			Error: validatedFields.error.flatten().fieldErrors,
		}
	}
	try {
		await prisma.apps.create({
			data: {
				name: validatedFields.data.name,
				link: validatedFields.data.link,
				img: validatedFields.data.img,
			},
		})
	} catch (error) {
		return { message: "Failed to create apps" }
	}
	revalidatePath("/apps")
	redirect("/apps")
}

export const editApp = async (id, prevSate, formData) => {
	const validatedFields = AppsSchema.safeParse(Object.fromEntries(formData.entries()))
	if (!validatedFields.success) {
		return {
			Error: validatedFields.error.flatten().fieldErrors,
		}
	}
	try {
		await prisma.apps.update({
			data: {
				name: validatedFields.data.name,
				link: validatedFields.data.link,
				img: validatedFields.data.img,
			},
			where: {
				id,
			},
		})
	} catch (error) {
		return { message: "Failed to update apps" }
	}
	revalidatePath("/apps")
	redirect("/apps")
}

export const deleteApp = async (id) => {
	try {
		await prisma.apps.delete({
			where: {
				id,
			},
		})
	} catch (error) {
		return { message: "Failed to create apps" }
	}
	revalidatePath("/apps")
}
