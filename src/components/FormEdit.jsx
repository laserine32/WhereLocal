"use client"

import { editApp } from "@/lib/actions"
import { SubmitButton } from "./Buttons"
import InputText from "./InputText"
import { useActionState } from "react"

const FormEdit = ({ data }) => {
	const updateAppById = editApp.bind(null, data.id)
	const [state, formAction] = useActionState(updateAppById, null)

	return (
		<>
			<form action={formAction}>
				<InputText title={"App Name"} name={"name"} value={data.name} state={state} />
				<InputText title={"App Link"} name={"link"} value={data.link} state={state} />
				<InputText title={"App Icon"} name={"img"} value={data.img} state={state} />
				<div id="message-error" aria-live="polite" aria-atomic="true">
					<p className="mt-2 text-sm text-red-500">{state?.message}</p>
				</div>
				<SubmitButton label={"update"} />
			</form>
		</>
	)
}

export default FormEdit
