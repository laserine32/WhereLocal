import AppIcon from "@/components/AppIcon"
import Wrapper from "@/components/Wrapper"
import { getApps, getLocal } from "@/lib/data"
import { Suspense } from "react"

export const revalidate = 0

const Home = async () => {
	const local = await getLocal()
	const data = await getApps()

	const wrapUlrLocal = (url) => `http://${local.address}${url}`

	return (
		<>
			<Wrapper>
				<h1 className="text-white text-center mb-8 text-2xl font-black">Apps</h1>
				<div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-10 gap-2">
					<Suspense fallback={<h2 className="text-white">Loading...</h2>}>
						{data.map((app, i) => {
							app.link = wrapUlrLocal(app.link)
							return <AppIcon key={i} app={app} />
						})}
					</Suspense>
				</div>
			</Wrapper>
		</>
	)
}

export default Home
