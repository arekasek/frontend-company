export const pagesData = {
  home: {
    slug: "home",
    metaTitle: "Woj-Płot | Usługi Ślusarskie i Kowalstwo Artystyczne Lębork",
    metaDescription:
      "Firma Woj-Płot, działająca na rynku od 2000 roku z bazą w Lęborku, oferuje najwyższej jakości usługi z zakresu kowalstwa w tym bramy, ogrodzenia, balustrady, kraty, meble oraz konstrukcje metalowe.",
    metaImage: "/logo.png",
    layout: [
      {
        blockType: "TwoColumn",
        heading: "Firma Woj-Płot istnieje na rynku od 2000r.",
        text: "Oferujemy szeroki zakres usług w zakresie metaloplastyki, w tym bramy, ogrodzenia, balustrady, kraty, meble kute, a także różnego rodzaju konstrukcje metalowe.",
        images: [
          {
            image: {
              url: "/media/realizacje-1.avif",
              alt: "Główne zdjęcie 1",
            },
          },
          { image: { url: "/media/Główne_2.avif", alt: "Główne zdjęcie 2" } },
          { image: { url: "/media/Główne_3.avif", alt: "Główne zdjęcie 3" } },
        ],
        direction: "left",
      },
      {
        blockType: "PricingBlock",
        pricingItems: [
          {
            image: {
              url: "/media/balustrada-główna.avif",
              alt: "Balustrada-główna",
            },
            description: "Balustrady",
            pageLink: { slug: "/balustrady" },
          },
          {
            image: { url: "/media/brama-główna.avif", alt: "Brama-główna" },
            description: "Bramy",
            pageLink: { slug: "/bramy" },
          },
          {
            image: {
              url: "/media/ogrodzenia-główne.avif",
              alt: "Ogrodzenia-główne",
            },
            description: "Ogrodzenia",
            pageLink: { slug: "/ogrodzenia" },
          },
          {
            image: { url: "/media/furtka-główna.avif", alt: "Furtka-główne" },
            description: "Furtki",
            pageLink: { slug: "/furtki" },
          },
          {
            image: {
              url: "/media/konstrukcje-główne.avif",
              alt: "Konstrukcja-główna",
            },
            description: "Konstrukcje",
            pageLink: { slug: "/konstrukcje" },
          },
          {
            image: { url: "/media/meble-główne.avif", alt: "Meble-główna" },
            description: "Meble",
            pageLink: { slug: "/meble" },
          },
        ],
      },
      {
        blockType: "PauseBlock",
        texts: [
          {
            text: "Firma Woj-Płot od blisko 25 lat specjalizuje się w produkcji metalowych ogrodzeń, balustrad, krat oraz kutych bram i mebli.",
          },
          {
            text: "Nasza oferta obejmuje szeroki wybór autorskich wzorów oraz bogactwo elementów ozdobnych, takich jak listki, kwiaty, groty czy rozety.",
          },
          {
            text: "Gwarantujemy najwyższą jakość naszych usług, dbając o każdy detal wykonania. Opcjonalnie oferujemy cynkowanie, które znacząco wydłuża trwałość produktów, zapewniając im odporność na warunki atmosferyczne.",
          },
          {
            text: "Zbudowaliśmy solidną reputację dzięki zadowoleniu naszych klientów, którzy doceniają naszą jakość, terminowość i rzetelność.",
          },
          {
            text: "Każdy projekt może być spersonalizowany – jesteśmy otwarci na indywidualne pomysły i realizujemy projekty według wskazań klientów.",
          },
          {
            text: "Zapraszamy do współpracy i tworzenia unikatowych, trwałych rozwiązań, które nie tylko spełniają funkcję użytkową, ale również stanowią estetyczne dopełnienie przestrzeni.",
          },
        ],
        image: {
          url: "/media/dlaczego-my-zdjecie.avif",
          alt: "dlaczego my zdjęcie",
        },
      },
      {
        blockType: "Gallery",
        heading: "Nasze Realizacje",
        text: "Zobacz nasze najnowsze projekty.",
        image: {
          url: "/media/realizacje-główna.avif",
          alt: "Gallery Background",
        },
        images: [
          { image: { url: "/media/realizacje-3.avif", alt: "Realizacja 3" } },
          { image: { url: "/media/realizacje-4.avif", alt: "Realizacja 4" } },
          { image: { url: "/media/realizacje-5.avif", alt: "Realizacja 5" } },
        ],
        direction: "left",
      },
    ],
  },
  balustrady: {
    slug: "balustrady",
    metaTitle: "Woj-Płot | Balustrady",
    metaDescription: "Oferujemy szeroką gamę balustrad...",
    metaImage: "/media/balustrada-tło.avif",
    layout: [
      {
        blockType: "Show",
        heading: "Balustrady",
        text: "Nasze balustrady wykonane są z wyjątkową dbałością o każdy detal, co gwarantuje nie tylko estetyczny wygląd, ale również bezpieczeństwo i długowieczność. Realizujemy zarówno nowoczesne, minimalistyczne projekty, jak i klasyczne, zdobione wzory, w tym balustrady kute o artystycznym charakterze. Każdy projekt dopasowujemy do indywidualnych potrzeb klienta, oferując balustrady idealne zarówno do wnętrz, jak i na zewnątrz budynków. Oferujemy szeroki wachlarz stylów i wykończeń, aby spełnić oczekiwania nawet najbardziej wymagających klientów. Zapewniamy również profesjonalny montaż, który jest gwarancją trwałości i stabilności balustrady przez wiele lat.",
        image: {
          url: "/media/balustrada-tło.avif",
          alt: "Balustrady Background",
        },
        images: [
          {
            id: 1,
            image: { url: "/media/balustrady/1.avif", alt: "Balustrada 1" },
          },
          {
            id: 2,
            image: { url: "/media/balustrady/2.avif", alt: "Balustrada 2" },
          },
          {
            id: 3,
            image: { url: "/media/balustrady/3.avif", alt: "Balustrada 3" },
          },
          {
            id: 4,
            image: { url: "/media/balustrady/4.avif", alt: "Balustrada 4" },
          },
          {
            id: 5,
            image: { url: "/media/balustrady/5.avif", alt: "Balustrada 5" },
          },
          {
            id: 6,
            image: { url: "/media/balustrady/6.avif", alt: "Balustrada 6" },
          },
          {
            id: 7,
            image: { url: "/media/balustrady/7.avif", alt: "Balustrada 7" },
          },
          {
            id: 8,
            image: { url: "/media/balustrady/8.avif", alt: "Balustrada 8" },
          },
          {
            id: 9,
            image: { url: "/media/balustrady/9.avif", alt: "Balustrada 9" },
          },
          {
            id: 10,
            image: { url: "/media/balustrady/10.avif", alt: "Balustrada 10" },
          },
          {
            id: 11,
            image: { url: "/media/balustrady/11.avif", alt: "Balustrada 11" },
          },
          {
            id: 12,
            image: { url: "/media/balustrady/12.avif", alt: "Balustrada 12" },
          },
          {
            id: 13,
            image: { url: "/media/balustrady/13.avif", alt: "Balustrada 13" },
          },
          {
            id: 14,
            image: { url: "/media/balustrady/14.avif", alt: "Balustrada 14" },
          },
          {
            id: 15,
            image: { url: "/media/balustrady/15.avif", alt: "Balustrada 15" },
          },
          {
            id: 16,
            image: { url: "/media/balustrady/16.avif", alt: "Balustrada 16" },
          },
        ],
      },
    ],
  },
  bramy: {
    slug: "bramy",
    metaTitle: "Woj-Płot | Bramy",
    metaDescription: "Oferujemy szeroką gamę balustrad...",
    metaImage: "/media/balustrada-tło.avif",
    layout: [
      {
        blockType: "Show",
        heading: "Bramy",
        text: "Nasze bramy kute metalowe łączą tradycyjny rzemiosło z nowoczesnym designem, oferując zarówno estetykę, jak i bezpieczeństwo. Wykonane z solidnych materiałów, zapewniają unikalny charakter i wytrzymałość. Oferujemy szeroki wybór wzorów – od eleganckich i klasycznych po nowoczesne i minimalistyczne – które idealnie dopasowują się do stylu Twojego domu. ",
        image: {
          url: "/media/balustrada-tło.avif",
          alt: "Bramy Background",
        },
        images: [
          {
            id: 1,
            image: { url: "/media/bramy/1.avif", alt: "bramy 1" },
          },
          {
            id: 2,
            image: { url: "/media/bramy/2.avif", alt: "bramy 2" },
          },
          {
            id: 3,
            image: { url: "/media/bramy/3.avif", alt: "bramy 3" },
          },
          {
            id: 4,
            image: { url: "/media/bramy/4.avif", alt: "bramy 4" },
          },
          {
            id: 5,
            image: { url: "/media/bramy/5.avif", alt: "bramy 5" },
          },
          {
            id: 6,
            image: { url: "/media/bramy/6.avif", alt: "bramy 6" },
          },
          {
            id: 7,
            image: { url: "/media/bramy/7.avif", alt: "bramy 7" },
          },
          {
            id: 8,
            image: { url: "/media/bramy/8.avif", alt: "bramy 8" },
          },
          {
            id: 9,
            image: { url: "/media/bramy/9.avif", alt: "bramy 9" },
          },
          {
            id: 10,
            image: { url: "/media/bramy/10.avif", alt: "bramy 10" },
          },
          {
            id: 11,
            image: { url: "/media/bramy/11.avif", alt: "bramy 11" },
          },
          {
            id: 12,
            image: { url: "/media/bramy/12.avif", alt: "bramy 12" },
          },
          {
            id: 13,
            image: { url: "/media/bramy/13.avif", alt: "bramy 13" },
          },
          {
            id: 14,
            image: { url: "/media/bramy/14.avif", alt: "bramy 14" },
          },
          {
            id: 15,
            image: { url: "/media/bramy/15.avif", alt: "bramy 15" },
          },
          {
            id: 16,
            image: { url: "/media/bramy/16.avif", alt: "bramy 16" },
          },
        ],
      },
    ],
  },
  ogrodzenia: {
    slug: "ogrodzenia",
    metaTitle: "Woj-Płot | Ogrodzenia Artystyczne Lębork",
    metaDescription:
      "Oferujemy szeroką gamę ogrodzeń, wykonane są z wyjątkową dbałością o każdy szczegół, co zapewnia nie tylko atrakcyjny wygląd, ale także bezpieczeństwo i trwałość na długie lata.",
    metaImage: "/media/ogrodzenie-tło.avif",
    layout: [
      {
        blockType: "Show",
        heading: "Ogrodzenia",
        text: "Nasze ogrodzenia wykonane są z wyjątkową dbałością o każdy szczegół, co zapewnia nie tylko atrakcyjny wygląd, ale także bezpieczeństwo i trwałość na długie lata. Realizujemy zarówno nowoczesne, minimalistyczne projekty, jak i klasyczne, ozdobne wzory, w tym ogrodzenia kute o artystycznym charakterze. Każdy projekt dopasowujemy do indywidualnych potrzeb klienta, oferując rozwiązania idealne zarówno dla posesji prywatnych, jak i przestrzeni publicznych. Proponujemy szeroką gamę stylów i wykończeń, aby sprostać oczekiwaniom nawet najbardziej wymagających klientów. Zapewniamy również profesjonalny montaż, gwarantujący solidność i stabilność ogrodzenia na wiele lat.",
        image: {
          url: "/media/ogrodzenie-tło.avif",
          alt: "Ogrodzenia Background",
        },
        images: [
          {
            id: 1,
            image: { url: "/media/ogrodzenia/1.avif", alt: "Ogrodzenie 1" },
          },
          {
            id: 2,
            image: { url: "/media/ogrodzenia/2.avif", alt: "Ogrodzenie 2" },
          },
          {
            id: 3,
            image: { url: "/media/ogrodzenia/3.avif", alt: "Ogrodzenie 3" },
          },
          {
            id: 4,
            image: { url: "/media/ogrodzenia/4.avif", alt: "Ogrodzenie 4" },
          },
          {
            id: 5,
            image: { url: "/media/ogrodzenia/5.avif", alt: "Ogrodzenie 5" },
          },
          {
            id: 6,
            image: { url: "/media/ogrodzenia/6.avif", alt: "Ogrodzenie 6" },
          },
          {
            id: 7,
            image: { url: "/media/ogrodzenia/7.avif", alt: "Ogrodzenie 7" },
          },
          {
            id: 8,
            image: { url: "/media/ogrodzenia/8.avif", alt: "Ogrodzenie 8" },
          },
          {
            id: 9,
            image: { url: "/media/ogrodzenia/9.avif", alt: "Ogrodzenie 9" },
          },
          {
            id: 10,
            image: { url: "/media/ogrodzenia/10.avif", alt: "Ogrodzenie 10" },
          },
          {
            id: 11,
            image: { url: "/media/ogrodzenia/11.avif", alt: "Ogrodzenie 11" },
          },
          {
            id: 12,
            image: { url: "/media/ogrodzenia/12.avif", alt: "Ogrodzenie 12" },
          },
          {
            id: 13,
            image: { url: "/media/ogrodzenia/13.avif", alt: "Ogrodzenie 13" },
          },
          {
            id: 14,
            image: { url: "/media/ogrodzenia/14.avif", alt: "Ogrodzenie 14" },
          },
          {
            id: 15,
            image: { url: "/media/ogrodzenia/15.avif", alt: "Ogrodzenie 15" },
          },
          {
            id: 16,
            image: { url: "/media/ogrodzenia/16.avif", alt: "Ogrodzenie 16" },
          },
          {
            id: 17,
            image: { url: "/media/ogrodzenia/17.avif", alt: "Ogrodzenie 17" },
          },
          {
            id: 18,
            image: { url: "/media/ogrodzenia/18.avif", alt: "Ogrodzenie 18" },
          },
        ],
      },
    ],
  },
  furtki: {
    slug: "furtki",
    metaTitle: "Woj-Płot | Furtki Artystyczne Lębork",
    metaDescription:
      "Oferujemy szeroką gamę furtek z wyjątkową dbałością o każdy szczegół, co gwarantuje nie tylko elegancki wygląd, ale również trwałość i bezpieczeństwo.",
    metaImage: "/media/furtka-tło.avif",
    layout: [
      {
        blockType: "Show",
        heading: "Furtki",
        text: "Nasze furtki są tworzone z wyjątkową dbałością o każdy szczegół, co gwarantuje nie tylko elegancki wygląd, ale również trwałość i bezpieczeństwo. Oferujemy zarówno nowoczesne, minimalistyczne projekty, jak i klasyczne, dekoracyjne wzory, w tym furtki kute o artystycznym charakterze. Każdą furtkę dopasowujemy do indywidualnych potrzeb klienta, aby idealnie komponowała się z ogrodzeniem i otoczeniem. Dostępny jest szeroki wybór stylów i wykończeń, co pozwala nam sprostać oczekiwaniom nawet najbardziej wymagających klientów. Zapewniamy również fachowy montaż, który stanowi gwarancję solidności i długowieczności furtek na lata.",
        image: {
          url: "/media/furtka-tło.avif",
          alt: "furtka Background",
        },
        images: [
          {
            id: 1,
            image: { url: "/media/furtki/1.avif", alt: "furtka 1" },
          },
          {
            id: 2,
            image: { url: "/media/furtki/2.avif", alt: "furtka 2" },
          },
          {
            id: 3,
            image: { url: "/media/furtki/3.avif", alt: "furtka 3" },
          },
          {
            id: 4,
            image: { url: "/media/furtki/4.avif", alt: "furtka 4" },
          },
          {
            id: 5,
            image: { url: "/media/furtki/5.avif", alt: "furtka 5" },
          },
          {
            id: 6,
            image: { url: "/media/furtki/6.avif", alt: "furtka 6" },
          },
          {
            id: 7,
            image: { url: "/media/furtki/7.avif", alt: "furtka 7" },
          },
          {
            id: 8,
            image: { url: "/media/furtki/8.avif", alt: "furtka 8" },
          },
          {
            id: 9,
            image: { url: "/media/furtki/9.avif", alt: "furtka 9" },
          },
          {
            id: 10,
            image: { url: "/media/furtki/10.avif", alt: "furtka 10" },
          },
          {
            id: 11,
            image: { url: "/media/furtki/11.avif", alt: "furtka 11" },
          },
          {
            id: 12,
            image: { url: "/media/furtki/12.avif", alt: "furtka 12" },
          },
          {
            id: 13,
            image: { url: "/media/furtki/13.avif", alt: "furtka 13" },
          },
          {
            id: 14,
            image: { url: "/media/furtki/14.avif", alt: "furtka 14" },
          },
          {
            id: 15,
            image: { url: "/media/furtki/15.avif", alt: "furtka 15" },
          },
          {
            id: 16,
            image: { url: "/media/furtki/16.avif", alt: "furtka 16" },
          },
        ],
      },
    ],
  },
  konstrukcje: {
    slug: "konstrukcje",
    metaTitle: "Woj-Płot | Konstrukcje Metalowe Lębork",
    metaDescription:
      "Nasze konstrukcje metalowe, takie jak wiaty, przęsła i inne elementy, wykonujemy z najwyższą starannością, dbając o solidność, trwałość oraz estetykę.",
    metaImage: "/media/konstrukcje-tło.avif",
    layout: [
      {
        blockType: "Show",
        heading: "Konstrukcje",
        text: "Nasze konstrukcje metalowe, takie jak wiaty, przęsła i inne elementy, wykonujemy z najwyższą starannością, dbając o solidność, trwałość oraz estetykę. Realizujemy zarówno nowoczesne, minimalistyczne projekty, jak i bardziej tradycyjne rozwiązania, dostosowane do specyficznych potrzeb klienta. Każda konstrukcja jest projektowana z myślą o jej wytrzymałości i funkcjonalności, co sprawia, że doskonale sprawdza się w różnych warunkach atmosferycznych. Oferujemy szeroki wybór stylów, wykończeń oraz rozmiarów, by spełnić wymagania nawet najbardziej wymagających klientów. Zapewniamy również profesjonalny montaż, który gwarantuje stabilność i długowieczność naszych konstrukcji na lata.",
        image: {
          url: "/media/konstrukcja-tło.avif",
          alt: "konstrukcje Background",
        },
        images: [
          {
            id: 1,
            image: { url: "/media/konstrukcje/1.avif", alt: "konstrukcja 1" },
          },
          {
            id: 2,
            image: { url: "/media/konstrukcje/2.avif", alt: "konstrukcja 2" },
          },
          {
            id: 3,
            image: { url: "/media/konstrukcje/3.avif", alt: "konstrukcja 3" },
          },
          {
            id: 4,
            image: { url: "/media/konstrukcje/4.avif", alt: "konstrukcja 4" },
          },
          {
            id: 5,
            image: { url: "/media/konstrukcje/5.avif", alt: "konstrukcja 5" },
          },
          {
            id: 6,
            image: { url: "/media/konstrukcje/6.avif", alt: "konstrukcja 6" },
          },
          {
            id: 7,
            image: { url: "/media/konstrukcje/7.avif", alt: "konstrukcja 7" },
          },
          {
            id: 8,
            image: { url: "/media/konstrukcje/8.avif", alt: "konstrukcja 8" },
          },
          {
            id: 9,
            image: { url: "/media/konstrukcje/9.avif", alt: "konstrukcja 9" },
          },
          {
            id: 10,
            image: { url: "/media/konstrukcje/10.avif", alt: "konstrukcja 10" },
          },
          {
            id: 11,
            image: { url: "/media/konstrukcje/11.avif", alt: "konstrukcja 11" },
          },
          {
            id: 12,
            image: { url: "/media/konstrukcje/12.avif", alt: "konstrukcja 12" },
          },
          {
            id: 13,
            image: { url: "/media/konstrukcje/13.avif", alt: "konstrukcja 13" },
          },
          {
            id: 14,
            image: { url: "/media/konstrukcje/14.avif", alt: "konstrukcja 14" },
          },
          {
            id: 15,
            image: { url: "/media/konstrukcje/15.avif", alt: "konstrukcja 15" },
          },
          {
            id: 16,
            image: { url: "/media/konstrukcje/16.avif", alt: "konstrukcja 16" },
          },
        ],
      },
    ],
  },
  meble: {
    slug: "meble",
    metaTitle: "Woj-Płot | Meble Kute Lębork",
    metaDescription:
      "Nasze meble kute to połączenie wytrzymałości i elegancji, tworzone z dbałością o każdy detal, aby zapewnić wyjątkowy styl i trwałość na lata.",
    metaImage: "/media/meble-tło.avif",
    layout: [
      {
        blockType: "Show",
        heading: "Meble Kute",
        text: "Nasze meble kute to połączenie wytrzymałości, elegancji oraz wyjątkowego rzemiosła. Wykonujemy zarówno nowoczesne, minimalistyczne projekty, jak i klasyczne, dekoracyjne wzory, które idealnie komponują się w różnorodnych wnętrzach oraz przestrzeniach zewnętrznych. Każdy mebel jest projektowany z myślą o funkcjonalności i estetyce, oferując niepowtarzalny styl i trwałość. Dzięki szerokiemu wyborowi stylów i wykończeń nasze meble spełniają oczekiwania nawet najbardziej wymagających klientów. Zapewniamy również fachowy montaż, gwarantujący stabilność i solidność na długie lata.",
        image: {
          url: "/media/meble-tło.avif",
          alt: "meble Background",
        },
        images: [
          {
            id: 1,
            image: { url: "/media/meble/1.avif", alt: "mebel 1" },
          },
          {
            id: 2,
            image: { url: "/media/meble/2.avif", alt: "mebel 2" },
          },
          {
            id: 3,
            image: { url: "/media/meble/3.avif", alt: "mebel 3" },
          },
          {
            id: 4,
            image: { url: "/media/meble/4.avif", alt: "mebel 4" },
          },
          {
            id: 5,
            image: { url: "/media/meble/5.avif", alt: "mebel 5" },
          },
          {
            id: 6,
            image: { url: "/media/meble/6.avif", alt: "mebel 6" },
          },
          {
            id: 7,
            image: { url: "/media/meble/7.avif", alt: "mebel 7" },
          },
          {
            id: 8,
            image: { url: "/media/meble/8.avif", alt: "mebel 8" },
          },
          {
            id: 9,
            image: { url: "/media/meble/9.avif", alt: "mebel 9" },
          },
          {
            id: 10,
            image: { url: "/media/meble/10.avif", alt: "mebel 10" },
          },
          {
            id: 11,
            image: { url: "/media/meble/11.avif", alt: "mebel 11" },
          },
          {
            id: 12,
            image: { url: "/media/meble/12.avif", alt: "mebel 12" },
          },
          {
            id: 13,
            image: { url: "/media/meble/13.avif", alt: "mebel 13" },
          },
          {
            id: 14,
            image: { url: "/media/meble/14.avif", alt: "mebel 14" },
          },
          {
            id: 15,
            image: { url: "/media/meble/15.avif", alt: "mebel 15" },
          },
          {
            id: 16,
            image: { url: "/media/meble/16.avif", alt: "mebel 16" },
          },
        ],
      },
    ],
  },
};
