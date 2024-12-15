import LocalTable from "@/components/LocalTable"
import Wrapper from "@/components/Wrapper"
const page = () => {
	return (
		<Wrapper>
			<div className="p-10 -m-10 bg-black/70">
				<h1 className="text-white text-center mb-8 text-2xl font-black">List Locals</h1>
				<div className="w-full overflow-x-auto">
					<LocalTable />
				</div>
			</div>
		</Wrapper>
	)
}

export default page
