import AppTable from "@/components/AppTable"
import { CreateButton } from "@/components/Buttons"
import Wrapper from "@/components/Wrapper"
import { Suspense } from "react"

const AplPage = () => {
	return (
		<>
			<Wrapper>
				<div className="p-10 -m-10 bg-black/70">
					<h1 className="text-white text-center mb-8 text-2xl font-black">List Apps</h1>
					<CreateButton />
					<div className="w-full overflow-x-auto">
						<Suspense fallback={<h2 className="text-white">Loading...</h2>}>
							<AppTable />
						</Suspense>
					</div>
				</div>
			</Wrapper>
		</>
	)
}

export default AplPage
