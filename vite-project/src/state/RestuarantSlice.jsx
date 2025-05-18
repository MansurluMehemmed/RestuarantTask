// redux/restaurantsSlice.js
import { createSlice } from "@reduxjs/toolkit";

const persistedCardPage = localStorage.getItem("cardPage");
const persistedMenuItems = localStorage.getItem("menuItems");

const initialState = {
  restaurants: [
    {
      id: 1,
      name: "Şəki Sarayı",
      imageUrl: "https://winterparkhotel.net/img/2e5082e64c1fb709.webp",
      rating: 4.6,
      cuisine: "Azərbaycan mətbəxi",
      location: "Bakı, Yasamal rayonu",
      description:
        "Ənənəvi Azərbaycan mətbəxinin zəngin dadlarını müasir rahatlıqla birləşdirən Şəki Sarayı, ailəvi və dostlarla yemək üçün ideal məkandır.",
      reviews: [
        {
          user: "Aysel",
          comment: "Xidmət çox yaxşıdır, yeməklər ləzzətli idi!",
          rating: 5,
        },
        {
          user: "Elvin",
          comment: "Menyu zəngindir, ancaq qiymətlər bir az yüksəkdir.",
          rating: 4,
        },
      ],
      menu: [
        {
          name: "Piti",
          price: "15 AZN",
          imageUrl:
            "https://i.lezzet.com.tr/images-xxlarge/piti-kebabi-bozbas-375509-c242ac43-3058-4491-a237-35e44177d4cd",
          description: "Quzu əti və noxudla hazırlanan ənənəvi Şəki yeməyidir.",
        },
        {
          name: "Düyü plovu",
          price: "12 AZN",
          imageUrl:
            "https://turpkimi.com/files/posts/original/2022/4/19/976213df-f721-42e0-bd9a-9615093e13cb/ce09f050889545879142ba34ef5d33f6.jpg",
          description:
            "Ətirli ədviyyatlarla süfrəyə verilən Azərbaycan plovudur.",
        },
        {
          name: "Qutab",
          price: "7 AZN",
          imageUrl:
            "https://i.lezzet.com.tr/images-xxlarge/yesillikli-qutab-171c01db-f0f3-4d75-987a-96ecfb407def",
          description: "İçlikli yuxa ilə hazırlanan milli qəlyanaltıdır.",
        },
      ],
      contact: {
        phone: "+994 12 123 45 67",
        email: "info@sekisarayi.az",
        address: "Yasamal rayonu, Bakı, Azərbaycan",
      },
    },
    {
      id: 2,
      name: "Naxçıvan Dadı",
      imageUrl:
        "https://cdn.frisaga.com/catalog/image/place/content/Restaurant/b1faeda7-902a-4901-bb5a-517e7c70fe93.jpg",
      rating: 4.3,
      cuisine: "Milli mətbəx",
      location: "Bakı, Nərimanov rayonu",
      description:
        "Naxçıvan bölgəsinin spesifik ləzzətlərini təqdim edən bu restoran, sadə və mehriban mühiti ilə tanınır.",
      reviews: [
        {
          user: "Rəşad",
          comment: "Xüsusilə badımcan dolması çox xoşuma gəldi.",
          rating: 5,
        },
        {
          user: "Leyla",
          comment: "Menyu daha çox çeşidlə zənginləşdirilə bilər.",
          rating: 3,
        },
      ],
      menu: [
        {
          name: "Badımcan dolması",
          price: "10 AZN",
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaW3e7Xyg1iRrZnuLt0ixk8cIp3nIJ9Y_80A&s",
          description: "Ət və düyü ilə doldurulmuş badımcan yeməyidir.",
        },
        {
          name: "Naxçıvan çığırtması",
          price: "13 AZN",
          imageUrl:
            "https://i.ytimg.com/vi/pORusDPaRE0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBgK7Lw4eEZfE8uImI1q463kvzC0w",
          description: "Tərəvəz və yumurta ilə hazırlanan dadlı yeməkdir.",
        },
        {
          name: "Düşbərə",
          price: "8 AZN",
          imageUrl:
            "https://foodinfo.az/uploads/photos/original/2024/10/14818751246722a21e16367.png",
          description: "Balaca xəmirli ət dolmaları ilə bişirilən şorbadır.",
        },
      ],
      contact: {
        phone: "+994 12 234 56 78",
        email: "contact@naxcivandadi.az",
        address: "Nərimanov rayonu, Bakı, Azərbaycan",
      },
    },
    {
      id: 3,
      name: "İçərişəhər Ləzzəti",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwYTdy6pYjzHuQKrZLtvSF9zXZVxQzey9CZQ&s",
      rating: 4.8,
      cuisine: "Azərbaycan mətbəxi",
      location: "Bakı, İçərişəhər",
      description:
        "Tarixi İçərişəhərdə yerləşən bu məkanda həm milli yeməkləri dada, həm də qədim Bakının ruhunu hiss edə bilərsiniz.",
      reviews: [
        {
          user: "Farid",
          comment: "Restoranın atmosferi və yeməkləri möhtəşəmdir!",
          rating: 5,
        },
        {
          user: "Nigar",
          comment: "Xidmət çox sürətli və keyfiyyətlidir.",
          rating: 5,
        },
      ],
      menu: [
        {
          name: "Düyü plovu",
          price: "14 AZN",
          imageUrl:
            "https://foodinfo.az/uploads/photos/original/2023/8/185448655664cffb161b262.jpg",
          description: "Ətirli düyü və ət birlikdə təqdim olunur.",
        },
        {
          name: "Kababs",
          price: "18 AZN",
          imageUrl: "https://fed.az/upload/news/3264109.jpg",
          description: "Manqalda bişirilmiş ət şişləridir.",
        },
        {
          name: "Şirniyyat",
          price: "6 AZN",
          imageUrl:
            "https://imageproxy.wolt.com/menu/menu-images/614c24c5e15b6531b1651d80/c3a34f20-b4df-11ed-869e-fabe56d0fd35_paxl.jpeg",
          description: "Milli şirniyyat nümunələri ilə zəngin desertdir.",
        },
      ],
      contact: {
        phone: "+994 12 345 67 89",
        email: "info@icerisheherlezzeti.az",
        address: "İçərişəhər, Bakı, Azərbaycan",
      },
    },
    {
      id: 4,
      name: "Qafqaz Mətbəxi",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi3d-I6PcXWxgqKp2tkLO1rl7Dypzb3xC0bg&s",
      rating: 4.2,
      cuisine: "Qafqaz mətbəxi",
      location: "Bakı, Xətai rayonu",
      description:
        "Qafqaz xalqlarının zəngin kulinariya mirasını bir araya gətirən bu restoran, geniş menyusu ilə seçilir.",
      reviews: [
        {
          user: "Orxan",
          comment: "Menyu çox zəngindir və keyfiyyətlidir.",
          rating: 4,
        },
        {
          user: "Amina",
          comment: "Qiymətlər münasibdir, amma xidmət bir az ləng idi.",
          rating: 3,
        },
      ],
      menu: [
        {
          name: "Dolma",
          price: "13 AZN",
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReiuDujebQlhTUOB6mcldV2OLRUXtb0JnnDA&s",
          description: "Üzüm yarpağına bükülmüş ətli içlikli yeməkdir.",
        },
        {
          name: "Xaş",
          price: "20 AZN",
          imageUrl:
            "https://cdn.yeniavaz.com/uploadedfiles/custom/2019/8/30/1/7c444bfe-bded-4f60-bd0c-164703c2f2cb/xas-yemek.jpg",
          description: "Sümük və ayaq hissəsindən hazırlanan milli şorbadır.",
        },
        {
          name: "Lavash",
          price: "5 AZN",
          imageUrl:
            "https://www.daringgourmet.com/wp-content/uploads/2023/10/Lavash-Recipe-11.jpg",
          description: "İncə, yumşaq və təzə çörək növüdür.",
        },
      ],
      contact: {
        phone: "+994 12 456 78 90",
        email: "contact@qafqazmetbexi.az",
        address: "Xətai rayonu, Bakı, Azərbaycan",
      },
    },
    {
      id: 5,
      name: "Baku Grill",
      imageUrl:
        "https://resizer.otstatic.com/v3/photos/66693431-2?width=752&height=752&webp=true",
      rating: 4.0,
      cuisine: "Qarışıq mətbəx",
      location: "Bakı, Səbail rayonu",
      description:
        "Qərb və Şərq mətbəxinin müasir təqdimatla birləşdirildiyi Baku Grill, gənclərin sevimli görüş nöqtəsidir.",
      reviews: [
        {
          user: "Tural",
          comment: "Möhtəşəm interyer və dadlı yeməklər.",
          rating: 4,
        },
        {
          user: "Sevda",
          comment: "Bəzi yeməklər daha da yaxşı ola bilər.",
          rating: 3,
        },
      ],
      menu: [
        {
          name: "Steyk",
          price: "25 AZN",
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtFYovgY0jkHbnMVnZ3rvLgpJk4qVaBIxxNw&s",
          description: "Qızardılmış dana əti ilə hazırlanmış klassik yeməkdir.",
        },
        {
          name: "Sushi",
          price: "22 AZN",
          imageUrl:
            "https://imageproxy.wolt.com/assets/673206fa308c8149ae82d52d",
          description: "Dəniz məhsulları ilə bükülmüş düyü rulonlarıdır.",
        },
        {
          name: "Qril toyuq",
          price: "18 AZN",
          imageUrl: "https://evdar.az/wp-content/uploads/qril-toyuq.jpg",
          description: "Qril üzərində bişirilmiş marinadlı toyuq.",
        },
      ],
      contact: {
        phone: "+994 12 567 89 01",
        email: "info@bakugrill.az",
        address: "Səbail rayonu, Bakı, Azərbaycan",
      },
    },
    {
      id: 6,
      name: "Dolma House",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSihaTGqqMjThpo1nCbx0YBfXSgQziAnMTPWg&s",
      rating: 4.5,
      cuisine: "Azərbaycan mətbəxi",
      location: "Bakı, Binəqədi rayonu",
      description:
        "Ənənəvi dolma və plovları ilə məşhur olan Dolma House, ləzzət axtaranlar üçün əla seçimdir.",
      reviews: [
        {
          user: "Kamran",
          comment: "Dolmaları çox ləzzətli və ev dadındadır.",
          rating: 5,
        },
        {
          user: "Günay",
          comment: "Menyu daha çox çeşid ola bilərdi.",
          rating: 4,
        },
      ],
      menu: [
        {
          name: "Ət dolması",
          price: "14 AZN",
          imageUrl: "https://example.com/et_dolma.jpg",
          description: "Tərəvəz içərisinə doldurulmuş ət və düyü qarışığıdır.",
        },
        {
          name: "Badımcan dolması",
          price: "12 AZN",
          imageUrl: "https://example.com/badimcan_dolma2.jpg",
          description: "Dadlı və ətirli badımcanla hazırlanan dolma növüdür.",
        },
        {
          name: "Plov",
          price: "13 AZN",
          imageUrl: "https://example.com/plov.jpg",
          description: "Klassik Azərbaycan düyü yeməyidir.",
        },
      ],
      contact: {
        phone: "+994 12 678 90 12",
        email: "contact@dolmahouse.az",
        address: "Binəqədi rayonu, Bakı, Azərbaycan",
      },
    },
    {
      id: 7,
      name: "Sushi Baku",
      imageUrl:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/65/24/79/fariz-quliyev.jpg",
      rating: 4.7,
      cuisine: "Yapon mətbəxi",
      location: "Bakı, Nizami rayonu",
      description:
        "Yapon mətbəxinə maraq göstərənlər üçün müasir dizaynlı, keyfiyyətli sushi və ramen təklif edən məkandır.",
      reviews: [
        {
          user: "Nihad",
          comment: "Sushiləri çox təravətli və dadlı idi.",
          rating: 5,
        },
        {
          user: "Leyla",
          comment: "Ramen daha da zəngin ola bilərdi.",
          rating: 4,
        },
      ],
      menu: [
        {
          name: "California Roll",
          price: "20 AZN",
          imageUrl: "https://imageproxy.wolt.com/assets/abcde12345",
          description:
            "Avokado, xiyar və yengeç ətindən hazırlanmış sushi növü.",
        },
        {
          name: "Ramen",
          price: "18 AZN",
          imageUrl: "https://imageproxy.wolt.com/assets/xyz98765",
          description: "Yapon şorbası, düyü və tərəvəzlərlə.",
        },
        {
          name: "Tempura",
          price: "15 AZN",
          imageUrl: "https://imageproxy.wolt.com/assets/tempuraimage",
          description: "Qızardılmış tərəvəz və dəniz məhsulları.",
        },
      ],
      contact: {
        phone: "+994 12 789 01 23",
        email: "info@sushibaku.az",
        address: "Nizami rayonu, Bakı, Azərbaycan",
      },
    },
    {
      id: 8,
      name: "Pizza King",
      imageUrl:
        "https://popmenucloud.com/jvxpkilw/f0ca6226-7ca5-4f80-9696-9a349217021d.jpeg",
      rating: 4.4,
      cuisine: "İtalyan mətbəxi",
      location: "Bakı, Yasamal rayonu",
      description:
        "Pizza sevənlər üçün geniş çeşid və keyfiyyətli xidmət təqdim edən Pizza King, dostlarla vaxt keçirmək üçün ideal seçimdir.",
      reviews: [
        {
          user: "Elvin",
          comment: "Pizza çox ləzzətli və xəmiri nazikdir.",
          rating: 5,
        },
        {
          user: "Aynur",
          comment: "Sürətli çatdırılma və mehriban xidmət.",
          rating: 4,
        },
      ],
      menu: [
        {
          name: "Margherita",
          price: "10 AZN",
          imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Pizza_Margherita_stu_spivack.jpg/1200px-Pizza_Margherita_stu_spivack.jpg",
          description: "Ənənəvi pomidor və pendir pizza.",
        },
        {
          name: "Pepperoni",
          price: "12 AZN",
          imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlN7PsgMT_mlNzx4__k-qX2-LY8HUw1QBsYQ&s",
          description: "Pepperoni kolbasası ilə zənginləşdirilmiş pizza.",
        },
        {
          name: "Vegetarian",
          price: "11 AZN",
          imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYgA96sx_kc46A65x1pMH4pc6PJoLPZ3t8yw&s",
          description: "Tərəvəz və göbələk ilə dolu pizza.",
        },
      ],
      contact: {
        phone: "+994 12 890 12 34",
        email: "contact@pizzaking.az",
        address: "Yasamal rayonu, Bakı, Azərbaycan",
      },
    },
  ],
  cardPage: persistedCardPage ? JSON.parse(persistedCardPage) : [],
  menuItems: persistedMenuItems ? JSON.parse(persistedMenuItems) : [],
};

const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState,
  reducers: {
    clickRestaurant: (state, action) => {
      state.cardPage = state.restaurants.filter(
        (restaurant) => restaurant.id === action.payload
      );
      localStorage.setItem("cardPage", JSON.stringify(state.cardPage));
    },
    menuItemsSection: (state) => {
      state.menuItems = state.cardPage.map((item) => item.menu).flat();
      localStorage.setItem("menuItems", JSON.stringify(state.menuItems));
    },
  },
});
export const { clickRestaurant, menuItemsSection } = restaurantsSlice.actions;

export default restaurantsSlice.reducer;
