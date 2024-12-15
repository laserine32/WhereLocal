import { getApps, getLocal } from "@/lib/data"
import Image from "next/image"
import { DeleteButton, EditButton } from "./Buttons"

const AppTable = async () => {
	const local = await getLocal()
	const data = await getApps()

	const wrapUlrLocal = (url) => `http://${local.address}${url}`
	const wrapSrcImg = (url) =>
		url == "" ? `http://${local.address}/dashboard/assets/imgs/favicon.png` : wrapUlrLocal(url)

	return (
		<>
			<table className="w-full text-sm text-left text-gray-500">
				<thead className="text-sm text-gray-700 uppercase bg-gray-50">
					<tr>
						<th className="py-3 px-6">#</th>
						<th className="py-3 px-6">Name</th>
						<th className="py-3 px-6">Link</th>
						<th className="py-3 px-6">Icon</th>
						<th className="py-3 px-6 text-center">Actions</th>
					</tr>
				</thead>
				<tbody>
					{data.map((app, i) => (
						<tr key={app.id} className="bg-white border-b">
							<td className="py-3 px-6">{i + 1}</td>
							<td className="py-3 px-6">{app.name}</td>
							<td className="py-3 px-6">{wrapUlrLocal(app.link)}</td>
							<td className="py-3 px-6">
								<Image src={wrapSrcImg(app.img)} width={100} height={100} alt={app.name} />
							</td>
							<td className="flex justify-center gap-1 py-3">
								<EditButton id={app.id} />
								<DeleteButton id={app.id} />
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	)
}

export default AppTable
