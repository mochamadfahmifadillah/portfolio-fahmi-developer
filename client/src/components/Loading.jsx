import '../styles/loading.css'

const Loading = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-6 bg-[#362EED]/80">
      
      <div className="wheel-and-hamster">
        <div className="wheel"></div>

        <div className="hamster">
          <div className="hamster__body">
            <div className="hamster__head">
              <div className="hamster__ear"></div>
              <div className="hamster__eye"></div>
              <div className="hamster__nose"></div>
            </div>

            <div className="hamster__limb--fr"></div>
            <div className="hamster__limb--fl"></div>
            <div className="hamster__limb--br"></div>
            <div className="hamster__limb--bl"></div>
            <div className="hamster__tail"></div>
          </div>
        </div>

        <div className="spoke"></div>
      </div>

      {/* Loading Text */}
      <div className="text-center text-white">
        <h2 className="text-2xl font-bold tracking-wide animate-pulse">
          Loading...
        </h2>
      </div>
    </div>
  )
}

export default Loading