import Image from "next/image"
import Link from "next/link"
import React from "react"

const AppIcon = ({ app }) => {
	return (
		<>
			<Link href={app.link} target="blank">
				<div className="cursor-pointer h-28 hover:bg-white/30 p-2 rounded-xl">
					<div className="h-14 w-full">
						<Image className="w-auto h-full m-auto" src={app.img} alt={app.name} width={100} height={100} />
					</div>
					<div className="text-sm text-center">
						<p className="text-white">{app.name}</p>
					</div>
				</div>
			</Link>
		</>
	)
}

export default AppIcon
