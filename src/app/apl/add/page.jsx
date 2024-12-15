import FormCreate from "@/components/FormCreate"
import Wrapper from "@/components/Wrapper"

const page = () => {
	return (
		<>
			<Wrapper>
				<div className="p-10 -m-10 bg-black/70">
					<h1 className="text-white text-center mb-8 text-2xl font-black">Add Apps</h1>
					<FormCreate />
				</div>
			</Wrapper>
		</>
	)
}

export default page
