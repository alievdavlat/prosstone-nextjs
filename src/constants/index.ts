import { brands, checkicon, choose1, choose2, choose3, choose4, guarantsBg, heroImage, location, mailIcon, masterCard, partners1, partners2, partners3, partners4, partners5, partners6, phoneIcon, products1, products2, products3, products4, products5, products6, products7, products8, products9, projects1, projects2, projects3, projects4, projects5, projects6, review, user, uzcard, visa } from "@/assets";




export const navbarItems = [
  {
    id: 1,
    title: "Почему мы?",
    path: "choose",
  },
  {
    id: 2,
    title: "Направления",
    path: "products",
  },
  {
    id: 3,
    title: "Проекты",
    path: "projects",
  },
  {
    id: 4,
    title: "Контакты",
    path: "footer",
  },
];

export const heroData = {
  title: "Изготовления столешниц из КВАРЦА и АКРИЛА под ключ",
  heroServices: [
    {
      id: 1,
      icon: checkicon,
      title: "Гарантия 3 года",
    },
    {
      id: 2,
      icon: checkicon,
      title: "Гибкие условия оплаты",
    },
    {
      id: 3,
      icon: checkicon,
      title: "На 15-30% дешевле, чем в салонах",
    },
    {
      id: 4,
      icon: checkicon,
      title: "Установка в день доставки",
    },
  ],
  bg:heroImage
};

export const chooseData = {
  title: "За что нас выбирают?",
  choose: [
    {
      id: 1,
      title: "Цены производителя",
      descr: "Не переплачивайте посредникам!",
      icon: choose1,
    },
    {
      id: 2,
      title: "Гарантии и сервисы",
      descr: "Замер бесплатно. Гарантии 3 года.",
      icon: choose2,
    },
    {
      id: 3,
      title: "Сертификаты",
      descr: "Международные стандарты камня",
      icon: choose3,
    },
    {
      id: 4,
      title: "10 лет в отрасли!",
      descr: "10 лет в отрасли!",
      icon: choose4,
    },
  ],
};

export const productsData = {
  title: "НАША ВЫСОКОКАЧЕСТВЕННАЯ ПРОДУКЦИЯ",
  products: [
    {
      id: 1,
      title: "Столешницы для кухни",
      image: products1,
    },
    {
      id: 2,
      title: "Столешницы для ванной",
      image: products2,
    },
    {
      id: 3,
      title: "Подоконники",
      image: products3,
    },
    {
      id: 4,
      title: "Барные стойки",
      image: products4,
    },
    {
      id: 5,
      title: "Мойки и раковины",
      image: products5,
    },
    {
      id: 6,
      title: "Стеновые панели/фартуки",
      image: products6,
    },
    {
      id: 7,
      title: "Столы",
      image: products7,
    },
    {
      id: 8,
      title: "Лестницы / ступени",
      image: products8,
    },
    {
      id: 9,
      title: "Стойки-ресепшн",
      image: products9,
    },
  ],
};

export const guarantsData = {
  title: "Гарантия на работу и камень 3 года",
  subtitle: "Закупаем камень от мировых производителей:",
  image: brands,
  bg:guarantsBg,
};

export const projectsData = {
  title: "2744+ реализованных проектов",
  projects: [
    {
      id: 1,
      address: "г.Ташкент",
      title: "Подоконник из искусственного камня",
      material: "Caesarstone",
      color: "Black Noir",
      size: "3.85 м2",
      year: "2022",
      image: projects1,
    },
    {
      id: 2,
      address: "г.Ташкент",
      title: "Cтолешница в санузел из акрилового камня",
      material: "Samsung Radianz",
      color: "Toluca Sand",
      size: "3000*600 мм",
      year: "2022",
      image: projects2,
    },
    {
      id: 3,
      address: "г.Ташкент",
      title: "Cтолешница в санузел из акрилового камня",
      material: "Samsung Radianz",
      color: "Toluca Sand",
      size: "3000*600 мм",
      year: "2022",
      image: projects3,
    },
    {
      id: 4,
      address: "г.Ташкент",
      title: "Cтолешница в санузел из акрилового камня",
      material: "Samsung Radianz",
      color: "Toluca Sand",
      size: "3000*600 мм",
      year: "2022",
      image: projects4,
    },
    {
      id: 5,
      address: "г.Ташкент",
      title: "Cтолешница в санузел из акрилового камня",
      material: "Samsung Radianz",
      color: "Toluca Sand",
      size: "3000*600 мм",
      year: "2022",
      image: projects5,
    },
    {
      id: 6,
      address: "г.Ташкент",
      title: "Подоконник из искусственного камня",
      material: "Caesarstone",
      color: "Black Noir",
      size: "3.85 м2",
      year: "2022",
      image: projects6,
    },
   
  ],
};

export const reviewsData = {
  title: "Отзывы наших довольных клиентов",
  reviews: [
    {
      id: 1,
      owner: "Наргиза Халилова",
      avatar: user,
      source: "Написал(а) через Instagram",
      review:
        "Купили мраморную столешницу на кухню в Старстоун. Приезжал замерщик - бесплатно и через две недели поставили в срок, успели до Нового года. Цены адекватные от производителя со скидкой. Хотим заказать подоконники из того же камня. Рекомендую всем.)",
      rating: 5,
      image: review,
    },
    {
      id: 2,
      owner: "Наргиза Халилова",
      avatar: user,
      source: "Написал(а) через Instagram",
      review:
        "Купили мраморную столешницу на кухню в Старстоун. Приезжал замерщик - бесплатно и через две недели поставили в срок, успели до Нового года. Цены адекватные от производителя со скидкой. Хотим заказать подоконники из того же камня. Рекомендую всем.)",
      rating: 5,
      image: review,
    },
    {
      id: 3,
      owner: "Наргиза Халилова",
      avatar: user,
      source: "Написал(а) через Instagram",
      review:
        "Купили мраморную столешницу на кухню в Старстоун. Приезжал замерщик - бесплатно и через две недели поставили в срок, успели до Нового года. Цены адекватные от производителя со скидкой. Хотим заказать подоконники из того же камня. Рекомендую всем.)",
      rating: 5,
      image: review,
    },
    {
      id: 4,
      owner: "Наргиза Халилова",
      avatar: user,
      source: "Написал(а) через Instagram",
      review:
        "Купили мраморную столешницу на кухню в Старстоун. Приезжал замерщик - бесплатно и через две недели поставили в срок, успели до Нового года. Цены адекватные от производителя со скидкой. Хотим заказать подоконники из того же камня. Рекомендую всем.)",
      rating: 5,
      image: review,
    },
    {
      id: 5,
      owner: "Наргиза Халилова",
      avatar: user,
      source: "Написал(а) через Instagram",
      review:
        "Купили мраморную столешницу на кухню в Старстоун. Приезжал замерщик - бесплатно и через две недели поставили в срок, успели до Нового года. Цены адекватные от производителя со скидкой. Хотим заказать подоконники из того же камня. Рекомендую всем.)",
      rating: 5,
      image: review,
    },
    {
      id: 6,
      owner: "Наргиза Халилова",
      avatar: user,
      source: "Написал(а) через Instagram",
      review:
        "Купили мраморную столешницу на кухню в Старстоун. Приезжал замерщик - бесплатно и через две недели поставили в срок, успели до Нового года. Цены адекватные от производителя со скидкой. Хотим заказать подоконники из того же камня. Рекомендую всем.)",
      rating: 5,
      image: review,
    },
    {
      id: 7,
      owner: "Наргиза Халилова",
      avatar: user,
      source: "Написал(а) через Instagram",
      review:
        "Купили мраморную столешницу на кухню в Старстоун. Приезжал замерщик - бесплатно и через две недели поставили в срок, успели до Нового года. Цены адекватные от производителя со скидкой. Хотим заказать подоконники из того же камня. Рекомендую всем.)",
      rating: 5,
      image: review,
    },
  ],
};

export const partenersData = {
  titel: "нам доверяют",
  count: "172",
  bg:'',
  partners: [
    {
      id: 1,
      image: partners1,
    },
    {
      id: 2,
      image: partners2,
    },
    {
      id: 3,
      image: partners3,
    },
    {
      id: 4,
      image: partners4,
    },
    {
      id: 5,
      image: partners5,
    },
    {
      id: 6,
      image: partners6,
    },
  ],
};

export const ourContactData = {
  title: "НАШИ КОНТАКТЫ",
  number1: {
    icon:phoneIcon,
    number:"+998 (90) 347 01 00"
  },
  number2: {
    icon:phoneIcon,
    number:"+998 (90) 806 13 10",
  },
  address: {
    address:'Адрес: Бизнес-центр "Авалон", 1-этаж, ул. Ойбека 38а, г.Ташкент',
    icon:location
  },
  mail: {
    mail:"prostones.uz@gmail.com",
    icon:mailIcon
  },
};


export const paymentData = [
{
  id:1,
  image:uzcard
},
{
  id:2,
  image:visa
},
{
  id:3,
  image:masterCard
}
]

export const socialData =  [
  {
    id:1,
    icon:'',
    link:""
  },
  {
    id:2,
    icon:'',
    link:""
  },
  {
    id:3,
    icon:'',
    link:""
  },
  
]