import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

const Menu = () => {
    const menuItems = useSelector(state=>state.restaurants.menuItems)
    
    const navigate = useNavigate()
    
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <button onClick={() => navigate(-1)} className="w-[100px] cursor-pointer h-[40px] bg-[#ffb347] border border-white rounded">Əvvələ qayıt</button>

  <h2 className="text-3xl font-bold text-center text-[#ffb347] mb-8">
    Restoran Menyusu
  </h2>

  <ul className="bg-gray-900 text-white px-4 py-6 space-y-4">
  {menuItems.map((item, index) => (
    <li key={index} className="flex items-start gap-4 bg-gray-800 rounded-xl p-4 shadow hover:bg-gray-700 transition-all duration-200 max-sm:flex-col">
      <img
        src={item.imageUrl}
        alt={item.name}
        className="w-24 h-24 object-cover rounded-lg border border-gray-700 max-sm:w-full max-sm:h-40"
      />
      <div className="flex flex-col justify-between flex-1">
        <div>
          <h3 className="text-lg font-semibold">{item.name}</h3>
          <p className="text-sm text-gray-300 mt-1">{item.description}</p>
        </div>
        <span className="text-amber-400 font-bold mt-2">{item.price}</span>
      </div>
    </li>
  ))}
</ul>
</div>

  )
}

export default Menu