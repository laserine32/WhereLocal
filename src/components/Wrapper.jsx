const Wrapper = ({ children }) => {
	return (
		<>
			<div className="abosulute w-dvw h-dvh left-0 top-0 right-0 bottom-0 overflow-hidden flex flex-col justify-center items-center">
				<div className="app bg-black/30 p-10 rounded-lg mx-auto overflow-auto max-h-screen">
					{children}
					{/* <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-10 gap-2">{childern}</div> */}
				</div>
			</div>
		</>
	)
}

export default Wrapper
