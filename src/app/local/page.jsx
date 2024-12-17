import LocalTable from "@/components/LocalTable"
import Wrapper from "@/components/Wrapper"
import { Suspense } from "react"
const LocalPage = () => {
	return (
		<Wrapper>
			<div className="p-10 -m-10 bg-black/70">
				<h1 className="text-white text-center mb-8 text-2xl font-black">List Locals</h1>
				<div className="w-full overflow-x-auto">
					<Suspense fallback={<h2 className="text-white">Loading...</h2>}>
						<LocalTable />
					</Suspense>
				</div>
			</div>
		</Wrapper>
	)
}

export default LocalPage
