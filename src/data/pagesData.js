export const pagesData = {
  home: {
    slug: "home",
    metaTitle: "Woj-Płot | Usługi ślusarskie",
    metaDescription:
      "Firma Woj-Płot, działająca na rynku od 2000 roku, oferuje najwyższej jakości usługi ślusarskie, w tym bramy, ogrodzenia, balustrady, kraty, kute meble oraz konstrukcje metalowe. Specjalizujemy się również w wszelkiego rodzaju kowalstwie artystycznym. Działamy na terenie Lęborka i Pomorza, zapewniając profesjonalizm i precyzję w każdym projekcie. Zapraszamy do współpracy!",
    metaImage: "/images/home-image.jpg",
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
};
