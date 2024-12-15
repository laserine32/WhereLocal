import FormEdit from "@/components/FormEdit"
import Wrapper from "@/components/Wrapper"
import { getAppById } from "@/lib/data"
import { notFound } from "next/navigation"
import React from "react"

const page = async ({ params }) => {
	const { id } = await params
	const data = await getAppById(parseInt(id))

	if (!data) {
		notFound()
	}

	return (
		<>
			<Wrapper>
				<div className="p-10 -m-10 bg-black/70">
					<h1 className="text-white text-center mb-8 text-2xl font-black">Edit Apps</h1>
					<FormEdit data={data} />
				</div>
			</Wrapper>
		</>
	)
}

export default page
