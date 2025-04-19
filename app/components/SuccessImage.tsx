export default function SuccessImage() {
  return (
    <div className="w-full h-full bg-primary rounded-lg flex flex-col items-center justify-center text-white p-8">
      <div className="text-6xl mb-8">🏆</div>
      <div className="text-center space-y-4">
        <h3 className="text-2xl font-bold">TECHNOLOGY SUCCESS</h3>
        <div className="flex justify-between w-full text-3xl">
          <span>💻</span>
          <span>⚙️</span>
          <span>🚀</span>
        </div>
        <p className="text-sm mt-4">INNOVATION • GROWTH • RESULTS</p>
      </div>
      <div className="mt-8 w-full">
        <div className="bg-white rounded-lg p-4">
          <p className="text-primary text-center font-bold mb-4">SUCCESS METRICS</p>
          <div className="flex justify-between items-end h-32">
            <div className="w-1/5 bg-green-500 h-1/4"></div>
            <div className="w-1/5 bg-green-500 h-2/4"></div>
            <div className="w-1/5 bg-green-500 h-3/4"></div>
            <div className="w-1/5 bg-green-500 h-full"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
