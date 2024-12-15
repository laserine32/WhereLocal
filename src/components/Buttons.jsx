"use client"
import { IoAddSharp, IoPencil, IoTrashOutline } from "react-icons/io5"
import clsx from "clsx"
import { useFormStatus } from "react-dom"
import Link from "next/link"
import { deleteApp } from "@/lib/actions"

export const CreateButton = () => {
	return (
		<Link
			href="/apl/add"
			className="inline-flex items-center space-x-1 text-white bg-blue-700 hover:bg-blue-800 px-5 py-[9px] rounded-sm text-sm"
		>
			<IoAddSharp size={20} />
			Create
		</Link>
	)
}

export const EditButton = ({ id }) => {
	return (
		<Link href={`/apl/edit/${id}`} className="rounded-sm border p-1 hover:bg-gray-100">
			<IoPencil size={20} />
		</Link>
	)
}

export const DeleteButton = ({ id }) => {
	const DeleteAppWithId = deleteApp.bind(null, id)
	return (
		<form action={DeleteAppWithId}>
			<button className="rounded-sm border p-1 hover:bg-gray-100">
				<IoTrashOutline size={20} />
			</button>
		</form>
	)
}

export const SubmitButton = ({ label }) => {
	const { pending } = useFormStatus()

	const className = clsx(
		"text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-sm text-sm w-full px-5 py-3 text-center",
		{
			"opacity-50 cursor-progress": pending,
		}
	)

	return (
		<>
			<button type="submit" className={className} disabled={pending}>
				{label === "save" ? (
					<span>{pending ? "Saving..." : "Save"}</span>
				) : (
					<span>{pending ? "Updating..." : "Update"}</span>
				)}
			</button>
		</>
	)
}
