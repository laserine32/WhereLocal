"use client"

import { saveApp } from "@/lib/actions"
import { SubmitButton } from "./Buttons"
import InputText from "./InputText"
import { useActionState } from "react"

const FormCreate = () => {
	const [state, formAction] = useActionState(saveApp, null)

	return (
		<>
			<form action={formAction}>
				<InputText title={"App Name"} name={"name"} state={state} />
				<InputText title={"App Link"} name={"link"} state={state} />
				<InputText title={"App Icon"} name={"img"} state={state} />
				<div id="message-error" aria-live="polite" aria-atomic="true">
					<p className="mt-2 text-sm text-red-500">{state?.message}</p>
				</div>
				<SubmitButton label={"save"} />
			</form>
		</>
	)
}

export default FormCreate
