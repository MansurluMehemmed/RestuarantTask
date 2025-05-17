// redux/restaurantsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const persistedCardPage = localStorage.getItem('cardPage')

const initialState = {
  restaurants : [
  {
    id: 1,
    name: "Şəki Sarayı",
    imageUrl: "https://winterparkhotel.net/img/2e5082e64c1fb709.webp",
    rating: 4.6,
    cuisine: "Azərbaycan mətbəxi",
    location: "Bakı, Yasamal rayonu",
    description: "Ənənəvi Azərbaycan mətbəxinin zəngin dadlarını müasir rahatlıqla birləşdirən Şəki Sarayı, ailəvi və dostlarla yemək üçün ideal məkandır.",
  },
  {
    id: 2,
    name: "Naxçıvan Dadı",
    imageUrl: "https://cdn.frisaga.com/catalog/image/place/content/Restaurant/b1faeda7-902a-4901-bb5a-517e7c70fe93.jpg",
    rating: 4.3,
    cuisine: "Milli mətbəx",
    location: "Bakı, Nərimanov rayonu",
    description: "Naxçıvan bölgəsinin spesifik ləzzətlərini təqdim edən bu restoran, sadə və mehriban mühiti ilə tanınır.",
  },
  {
    id: 3,
    name: "İçərişəhər Ləzzəti",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwYTdy6pYjzHuQKrZLtvSF9zXZVxQzey9CZQ&s",
    rating: 4.8,
    cuisine: "Azərbaycan mətbəxi",
    location: "Bakı, İçərişəhər",
    description: "Tarixi İçərişəhərdə yerləşən bu məkanda həm milli yeməkləri dada, həm də qədim Bakının ruhunu hiss edə bilərsiniz.",
  },
  {
    id: 4,
    name: "Qafqaz Mətbəxi",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi3d-I6PcXWxgqKp2tkLO1rl7Dypzb3xC0bg&s",
    rating: 4.2,
    cuisine: "Qafqaz mətbəxi",
    location: "Bakı, Xətai rayonu",
    description: "Qafqaz xalqlarının zəngin kulinariya mirasını bir araya gətirən bu restoran, geniş menyusu ilə seçilir.",
  },
  {
    id: 5,
    name: "Baku Grill",
    imageUrl: "https://resizer.otstatic.com/v3/photos/66693431-2?width=752&height=752&webp=true",
    rating: 4.0,
    cuisine: "Qarışıq mətbəx",
    location: "Bakı, Səbail rayonu",
    description: "Qərb və Şərq mətbəxinin müasir təqdimatla birləşdirildiyi Baku Grill, gənclərin sevimli görüş nöqtəsidir.",
  },
  {
    id: 6,
    name: "Dolma House",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSihaTGqqMjThpo1nCbx0YBfXSgQziAnMTPWg&s",
    rating: 4.5,
    cuisine: "Azərbaycan mətbəxi",
    location: "Bakı, Binəqədi rayonu",
    description: "Ənənəvi dolma və plovları ilə məşhur olan Dolma House, ləzzət axtaranlar üçün əla seçimdir.",
  },
  {
    id: 7,
    name: "Sushi Baku",
    imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/65/24/79/fariz-quliyev.jpg",
    rating: 4.7,
    cuisine: "Yapon mətbəxi",
    location: "Bakı, Nizami rayonu",
    description: "Yapon mətbəxinə maraq göstərənlər üçün müasir dizaynlı, keyfiyyətli sushi və ramen təklif edən məkandır.",
  },
  {
    id: 8,
    name: "Kebabçı",
    imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/48/a4/19/yenilenen-dizayn-ile.jpg?w=900&h=500&s=1",
    rating: 4.1,
    cuisine: "Türk mətbəxi",
    location: "Bakı, Suraxanı rayonu",
    description: "Dadlı kabablar və ət yeməkləri ilə məşhur olan Kebabçı, Türk mətbəxinin ən gözəl nümunələrini təqdim edir.",
  },
],
  cardPage:persistedCardPage?JSON.parse(persistedCardPage):[]
};

const restaurantsSlice = createSlice({
  name: 'restaurants',
  initialState,
  reducers: {
    clickRestaurant:(state,action)=>{     
      state.cardPage = state.restaurants.filter(restaurant=>restaurant.id===action.payload)
      localStorage.setItem('cardPage',JSON.stringify(state.cardPage))
    }
  },
});
export const {clickRestaurant}= restaurantsSlice.actions

export default restaurantsSlice.reducer;
