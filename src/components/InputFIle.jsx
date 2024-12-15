"use client"

const InputFIle = ({ title, name, state }) => {
	const placeholder = `${title}...`
	const errorId = `${name}-error`

	const onFIleChange = (e) => {
		if (!e.target.files) {
			return
		}
	}

	return (
		<>
			<div className="mb-5">
				<label htmlFor={name} className="block text-sm font-medium text-white">
					{title}
				</label>
				<input
					type="file"
					name={name}
					id={name}
					className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
					placeholder={placeholder}
				/>
				<div id={errorId} aria-live="polite" aria-atomic="true">
					<p className="mt-2 text-sm text-red-500">{state?.Error?.name}</p>
				</div>
			</div>
		</>
	)
}

export default InputFIle
