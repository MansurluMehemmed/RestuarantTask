import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const ContactUs = () => {
    const contact = useSelector(state=>state.restaurants.cardPage)
    const navigate = useNavigate()
     useEffect(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }, []);
  return (
<section className="bg-[#111] px-6 py-12 rounded-2xl shadow-xl max-w-4xl mx-auto my-10 text-white">
    <button onClick={() => navigate(-1)} className="w-[100px] cursor-pointer h-[40px] bg-[#ffb347] border border-white rounded">Əvvələ qayıt</button>
  <h2 className="text-3xl font-bold text-center mb-8">Bizimlə Əlaqə</h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

    <form className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="Adınız"
        className="bg-[#1c1c1c] border border-gray-700 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffb347]"
      />
      <input
        type="email"
        placeholder="E-poçt ünvanınız"
        className="bg-[#1c1c1c] border border-gray-700 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffb347]"
      />
      <textarea
        placeholder="Mesajınız"
        rows="5"
        className="bg-[#1c1c1c] border border-gray-700 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffb347]"
      ></textarea>
      <button
        type="submit"
        className="bg-[#ffb347] text-black font-semibold p-3 rounded-md hover:bg-[#e6a63f] transition-all"
      >
        Göndər
      </button>
    </form>


    {contact.map(item=>(
        <div className="space-y-5 text-gray-300">
      <div>
        <h3 className="text-lg font-semibold text-white">Telefon:</h3>
        <p>{item.contact.phone}</p>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-white">E-poçt:</h3>
        <p>{item.contact.email}</p>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-white">Ünvan:</h3>
        <p>{item.contact.address}</p>
      </div>
    </div>
    ))}
  </div>
</section>

  )
}

export default ContactUs