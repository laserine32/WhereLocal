import AppIcon from "@/components/AppIcon"
import Wrapper from "@/components/Wrapper"
import { getApps, getLocal } from "@/lib/data"

const Home = async () => {
	const local = await getLocal()
	const data = await getApps()

	const wrapUlrLocal = (url) => `http://${local.address}${url}`
	const wrapSrcImg = (url) =>
		url == "" ? `http://${local.address}/dashboard/assets/imgs/favicon.png` : wrapUlrLocal(url)

	return (
		<>
			<Wrapper>
				<h1 className="text-white text-center mb-8 text-2xl font-black">Apps</h1>
				<div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-10 gap-2">
					{data.map((app, i) => {
						app.link = wrapUlrLocal(app.link)
						app.img = wrapSrcImg(app.img)
						return <AppIcon key={i} app={app} />
					})}
				</div>
			</Wrapper>
		</>
	)
}

export default Home
