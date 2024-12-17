import { getLocals } from "@/lib/data"
import { formatDate } from "@/lib/utils"

const LocalTable = async () => {
	const locals = await getLocals()
	return (
		<>
			<table className="w-full text-sm text-left text-gray-500">
				<thead className="text-sm text-gray-700 uppercase bg-gray-50">
					<tr>
						<th className="py-3 px-6">#</th>
						<th className="py-3 px-6">Address</th>
						<th className="py-3 px-6">Created</th>
					</tr>
				</thead>
				<tbody>
					{locals.map((local, i) => (
						<tr key={local.id} className="bg-white border-b">
							<td className="py-3 px-6">{i + 1}</td>
							<td className="py-3 px-6">{local.address}</td>
							<td className="py-3 px-6">{formatDate(local.createdAt)}</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	)
}

export default LocalTable
