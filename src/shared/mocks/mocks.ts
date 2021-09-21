import autor1 from "../assets/images/autor1.jpg";
import autor2 from "../assets/images/autor2.jpg";

export const HEADER_MENU = [
  { id: "1", text: "О нас", href: "/" },
  { id: "2", text: "Меню", href: "/" },
  { id: "3", text: "Галерея", href: "/" },
  { id: "4", text: "Отзывы", href: "/" },
  { id: "5", text: "Контакты", href: "/" },
];

export const REVIEWS = [
  {
    id: "1",
    text: "Мне очень нравится, что у них всегда дают жвачку - она как раз нужна после кофе и какао. Сейчас я не пью кофе, и поэтому уже давно у них не был, но вообще мне нравится эта сеть. И шестой напиток - всегда приятная неожиданность)",
    autor: {
      photo: autor1,
      name: "Raul Pendejo",
      inst: "@RaulNePendejo",
    },
  },
  {
    id: "2",
    text: "Вкусный каппучино, мандариновый раф, горячий шоколад. Насколько я знаю, в городе несколько точек, что очень удобно. Рекомендую!",
    autor: {
      photo: autor2,
      name: "Зигизмунд Дийкстра",
      inst: "@iDoNotLoveTheWitches",
    },
  },
];

export const FOOTER_MENUS = [
  {
    id: "1",
    header: "Главная",
    points: [
      { id: "1", text: "О нас", href: "/" },
      { id: "2", text: "Достижения", href: "/" },
      { id: "3", text: "Контакты", href: "/" },
      { id: "4", text: "Галерея", href: "/" },
      { id: "5", text: "Наши филиалы", href: "/" },
    ],
  },
  {
    id: "2",
    header: "Меню",
    points: [
      { id: "1", text: "Чёрный кофе", href: "/" },
      { id: "2", text: "Кофе на молоке", href: "/" },
      { id: "3", text: "Чай/горячие напитки", href: "/" },
      { id: "4", text: "Холодный кофе/холодные напитки", href: "/" },
      { id: "5", text: "Завтраки", href: "/" },
    ],
  },
  {
    id: "3",
    header: "Сотрудничество",
    points: [
      { id: "1", text: "Партнёрам", href: "/" },
      { id: "2", text: "Оборудование", href: "/" },
      { id: "3", text: "Вакансии", href: "/" },
    ],
  },
];
