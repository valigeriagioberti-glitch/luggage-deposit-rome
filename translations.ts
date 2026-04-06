import { Language } from './types';

export const translations = {
  it: {
    nav: {
      howItWorks: "Come funziona",
      pricing: "Prezzi",
      reviews: "Recensioni",
      location: "Dove siamo",
      faq: "FAQ",
      blog: "Blog",
      bookNow: "Prenota Ora",
      bookStorage: "Prenota Deposito"
    },
    blog: {
      title: "Blog & Consigli di Viaggio",
      subtitle: "Scopri come goderti Roma al meglio con i nostri consigli su cosa vedere e come muoverti.",
      readMore: "Leggi di più",
      backToList: "Torna al Blog",
      postedOn: "Pubblicato il",
      noPosts: "Nessun articolo trovato."
    },
    hero: {
      openEveryDay: "Aperto tutti i giorni",
      titleStart: "Deposito bagagli vicino a",
      titleEnd: "Roma Termini",
      subtitle: "Lascia i tuoi bagagli al sicuro a soli 2 minuti dalla stazione Roma Termini e goditi Roma senza pensieri. Prenota online in meno di 1 minuto.",
      ctaBook: "Prenota deposito bagagli",
      ctaFind: "Vedi come trovarci",
      trust: {
        rating: "4.8 / 5 su Google",
        distance: "2 min da Termini",
        cancel: "Cancellazione gratuita"
      },
      badges: {
        price: "Da €5 al giorno",
        security: "Deposito sicuro e videosorvegliato"
      },
      card: {
        title: "Luggage Deposit Rome",
        distanceLabel: "Distanza",
        distanceValue: "2 minuti a piedi",
        distanceSub: "da Roma Termini",
        hoursLabel: "Orari di apertura",
        hoursValue: "08:30 - 22:30",
        hoursSub: "Aperto tutti i giorni",
        securityLabel: "Sicurezza",
        securityValue: "Sicuro, Videosorvegliato",
        securitySub: "Sorveglianza 24/7",
        bookNote: "Prenota online per garantire il posto.",
        reserveBtn: "Prenota Ora"
      }
    },
    stats: {
      bags: "10.000+ bagagli custoditi",
      distance: "2 min da Roma Termini",
      rating: "Voto: 4.8 / 5 su Google",
      support: "Assistenza: WhatsApp e in negozio"
    },
    services: {
      title: "Come funziona",
      subtitle: "Semplice, sicuro e veloce. Nessuna app da scaricare, prenota e lascia.",
      steps: [
        {
          title: "1. Prenota Online",
          desc: "Scegli le date e il numero di bagagli. Assicura il tuo spazio in meno di 1 minuto."
        },
        {
          title: "2. Lascia i bagagli",
          desc: "Mostra la conferma al nostro negozio. È a soli 2 minuti a piedi dalla stazione."
        },
        {
          title: "3. Goditi Roma",
          desc: "Esplora la Città Eterna a mani libere. Ritira i tuoi bagagli quando vuoi."
        }
      ]
    },
    pricing: {
      title: "Tariffe fisse convenienti",
      subtitle: "Paga per bagaglio, al giorno. Nessun costo extra.",
      from: "da",
      day: "/giorno",
      choose: "Scegli",
      popular: "Più Richiesto",
      items: [
        {
          name: "Bagaglio a Mano",
          price: "€5.00",
          popular: true,
          features: ["Dimensioni standard cabina", "Al giorno", "Sicuro, videosorvegliato", "Cancellazione gratuita"]
        },
        {
          name: "Bagaglio Medio",
          price: "€6.00",
          features: ["Valigia media", "Al giorno", "Sicuro, videosorvegliato", "Cancellazione gratuita"]
        },
        {
          name: "Bagaglio Grande",
          price: "€7.00",
          features: ["Valigia grande", "Al giorno", "Sicuro, videosorvegliato", "Cancellazione gratuita"]
        }
      ]
    },
    booking: {
      title: "Assicura il tuo posto online",
      subtitle: "Prenota in pochi secondi. Cancellazione gratuita.",
      loadForm: "Avvia Prenotazione",
      loadHint: "Clicca per avviare la procedura sicura"
    },
    location: {
      title: "Dove siamo",
      subtitle: "Ci troviamo in Via Gioberti 42, a soli 2 minuti dalla stazione Roma Termini.",
      loadMap: "Carica Mappa Interattiva",
      contactCard: {
        title: "Contattaci",
        addressLabel: "Indirizzo",
        directionsLabel: "Indicazioni",
        directionsText: "Esci da Termini lato Binario 24 (Via Giolitti). Attraversa e imbocca Via Gioberti.",
        getDirectionsBtn: "Ottieni Indicazioni"
      }
    },
    reviews: {
      title: "Scelto dai viaggiatori",
      subtitle: "Vedi cosa dicono i nostri clienti.",
      googleReviews: "su Google Reviews",
      list: [
        {
          author: "Darcy O’Shea",
          date: "22/09/2025",
          text: "Servizio eccellente, personale molto gentile e disponibile."
        },
        {
          author: "Juan Carlos",
          date: "22/09/2025",
          text: "Ottima opzione, servizio veloce e vicino a Termini. Circa 5€ a bagaglio per tutto il giorno, personale gentile, decisamente raccomandato."
        },
        {
          author: "Bridg M",
          date: "22/09/2025",
          text: "La prima volta è stata fluida e flessibile. La seconda volta ci hanno fatto pagare più di 5€ perché non avevamo prenotato. Ottimo se prenoti in anticipo."
        },
        {
          author: "Ahmed Said",
          date: "22/09/2025",
          text: "Il personale è estremamente cordiale e disponibile, tutto è andato liscio."
        },
        {
          author: "Ivy Rangwetsi",
          date: "22/09/2025",
          text: "Servizio molto veloce, semplice e conveniente."
        },
        {
          author: "Sebastian Gerlach",
          date: "21/09/2025",
          text: "Altamente raccomandato. Personale super cordiale, vicinissimo a Termini e ai bus per l'aeroporto. Facile, economico e senza attese."
        },
        {
          author: "Zhai Juan",
          date: "09/09/2025",
          text: "Servizio fantastico, deposito bagagli per l'intera giornata a 5€."
        }
      ]
    },
    faq: {
      title: "Domande Frequenti",
      items: [
        {
          q: "Devo prenotare in anticipo?",
          a: "Consigliamo vivamente di prenotare online per garantire il posto, specialmente in alta stagione. Tuttavia, accettiamo anche clienti senza prenotazione se abbiamo spazio."
        },
        {
          q: "Il mio bagaglio è al sicuro?",
          a: "Sì! La nostra struttura è sicura e monitorata da telecamere a circuito chiuso 24/7 per garantire la sicurezza dei tuoi effetti personali."
        },
        {
          q: "Posso lasciare oggetti ingombranti come bici o strumenti?",
          a: "Sì, abbiamo spazio per oggetti fuori misura. Controlla la tariffa 'Bagaglio Grande' o contattaci su WhatsApp per oggetti molto specifici."
        },
        {
          q: "Cosa succede se sono in ritardo per il ritiro?",
          a: "Siamo aperti fino alle 22:30. Se sei in ritardo, contattaci immediatamente via WhatsApp. I ritiri tardivi potrebbero comportare un costo aggiuntivo o il ritiro il giorno successivo."
        },
        {
          q: "Posso cancellare la mia prenotazione?",
          a: "Sì, le cancellazioni sono gratuite fino al momento del deposito. Contattaci per elaborare il rimborso."
        }
      ]
    },
    footer: {
      desc: "Deposito bagagli sicuro, monitorato ed economico nel cuore di Roma. Il modo intelligente per viaggiare a mani libere.",
      contactTitle: "Contattaci",
      linksTitle: "Link Rapidi",
      findUs: "Trovaci",
      rights: "Tutti i diritti riservati.",
      privacy: "Privacy Policy",
      terms: "Termini e Condizioni"
    },
    ai: {
      initialMessage: "Ciao! Sono il tuo Concierge Romano. Chiedimi del nostro deposito bagagli o consigli di viaggio vicino a Termini!",
      placeholder: "Chiedi informazioni...",
      apiMissing: "API Key mancante. Chat inattiva.",
      fallback: "Hai bisogno di parlare con una persona?",
      whatsapp: "Chat su WhatsApp",
      call: "Chiamaci",
      status: "Assistente IA"
    },
    notFound: {
      title: "Pagina non trovata",
      subtitle: "Spiacenti, la pagina che stai cercando non esiste o è stata spostata.",
      backHome: "Torna alla Home"
    }
  },
  en: {
    nav: {
      howItWorks: "How it works",
      pricing: "Pricing",
      reviews: "Reviews",
      location: "Location",
      faq: "FAQ",
      blog: "Blog",
      bookNow: "Book Now",
      bookStorage: "Book Storage"
    },
    blog: {
      title: "Blog & Travel Tips",
      subtitle: "Discover how to enjoy Rome at its best with our tips on what to see and how to get around.",
      readMore: "Read more",
      backToList: "Back to Blog",
      postedOn: "Posted on",
      noPosts: "No articles found."
    },
    hero: {
      openEveryDay: "Open every day",
      titleStart: "Luggage storage near",
      titleEnd: "Roma Termini",
      subtitle: "Drop your bags safely just 2 minutes from Roma Termini Station and enjoy Rome hands-free. Book online in under 1 minute.",
      ctaBook: "Book luggage storage",
      ctaFind: "See how to find us",
      trust: {
        rating: "4.8 / 5 on Google",
        distance: "2 mins from Termini",
        cancel: "Free cancellation"
      },
      badges: {
        price: "From €5 per day",
        security: "Secure storage & CCTV"
      },
      card: {
        title: "Luggage Deposit Rome",
        distanceLabel: "Distance",
        distanceValue: "2 minutes walk",
        distanceSub: "from Roma Termini",
        hoursLabel: "Opening Hours",
        hoursValue: "08:30 - 22:30",
        hoursSub: "Open every day",
        securityLabel: "Security",
        securityValue: "Secure, CCTV Monitored",
        securitySub: "24/7 Surveillance",
        bookNote: "Book online to guarantee your spot.",
        reserveBtn: "Reserve Now"
      }
    },
    stats: {
      bags: "10,000+ bags stored safely",
      distance: "2 mins from Roma Termini",
      rating: "Rating: 4.8 / 5 on Google",
      support: "Support: WhatsApp & in-store"
    },
    services: {
      title: "How it works",
      subtitle: "Simple, secure, and fast. No apps to download, just book and drop.",
      steps: [
        {
          title: "1. Book Online",
          desc: "Select your dates and number of bags. Secure your space in less than 1 minute."
        },
        {
          title: "2. Drop Off",
          desc: "Show your confirmation at our shop. It's just a 2-minute walk from the station."
        },
        {
          title: "3. Enjoy Rome",
          desc: "Explore the Eternal City hands-free. Pick up your bags whenever you're ready."
        }
      ]
    },
    pricing: {
      title: "Affordable flat rates",
      subtitle: "Pay per bag, per day. No extra cost.",
      from: "from",
      day: "/day",
      choose: "Choose",
      popular: "Most Popular",
      items: [
        {
          name: "Cabin Bag",
          price: "€5.00",
          popular: true,
          features: ["Standard cabin size", "Per day", "Secure, CCTV monitored", "Free cancellation"]
        },
        {
          name: "Medium Bag",
          price: "€6.00",
          features: ["Medium suitcase", "Per day", "Secure, CCTV monitored", "Free cancellation"]
        },
        {
          name: "Large Bag",
          price: "€7.00",
          features: ["Large suitcase", "Per day", "Secure, CCTV monitored", "Free cancellation"]
        }
      ]
    },
    booking: {
      title: "Secure your spot online",
      subtitle: "Book in seconds. Free cancellation.",
      loadForm: "Start Booking",
      loadHint: "Click to open the secure booking form"
    },
    location: {
      title: "Where to find us",
      subtitle: "We are located at V. Gioberti 42, just 2 minutes from Roma Termini.",
      loadMap: "Load Interactive Map",
      contactCard: {
        title: "Contact Us",
        addressLabel: "Address",
        directionsLabel: "Directions",
        directionsText: "Exit Termini via Track 24 side. Cross the street and walk down Via Gioberti.",
        getDirectionsBtn: "Get Directions"
      }
    },
    reviews: {
      title: "Trusted by travelers",
      subtitle: "See what our customers are saying.",
      googleReviews: "on Google Reviews",
      list: [
        {
          author: "Darcy O’Shea",
          date: "22/09/2025",
          text: "Excellent service, very supportive and helpful staff."
        },
        {
          author: "Juan Carlos",
          date: "22/09/2025",
          text: "Very good option, fast service and close to Termini. Around €5 per bag for the whole day, kind staff, definitely recommended."
        },
        {
          author: "Bridg M",
          date: "22/09/2025",
          text: "First time was smooth and flexible. Second time we were charged more than the €5 per bag shown on the site because we hadn’t pre-booked. Great if you book ahead, but the pricing info felt unclear."
        },
        {
          author: "Ahmed Said",
          date: "22/09/2025",
          text: "Staff are extremely friendly and helpful, everything went smoothly."
        },
        {
          author: "Ivy Rangwetsi",
          date: "22/09/2025",
          text: "Very quick, simple and convenient service."
        },
        {
          author: "Sebastian Gerlach",
          date: "21/09/2025",
          text: "Highly recommended. Super friendly staff, very close to Termini and airport buses. Smooth, easy, inexpensive and no waiting time."
        },
        {
          author: "Zhai Juan",
          date: "09/09/2025",
          text: "Fantastic service, bag drop for the day at €5."
        }
      ]
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          q: "Do I need to book in advance?",
          a: "We highly recommend booking online to guarantee your spot, especially during peak season. However, you can also walk in and pay at the store if we have space."
        },
        {
          q: "Is my luggage safe?",
          a: "Yes! Our facility is secure and monitored by 24/7 CCTV to ensure the safety of your belongings at all times."
        },
        {
          q: "Can I store large items like bikes or instruments?",
          a: "Yes, we have space for oversized items. Please check the 'Large Bag' pricing tier or contact us on WhatsApp for very specific items."
        },
        {
          q: "What happens if I'm late to pick up?",
          a: "We are open until 22:30. If you are running late, please contact us immediately via WhatsApp. Late pickups may incur an additional fee or next-day retrieval."
        },
        {
          q: "Can I cancel my booking?",
          a: "Yes, cancellations are free up until the drop-off time. Just contact us to process your refund."
        }
      ]
    },
    footer: {
      desc: "Secure, monitored, and affordable luggage storage in the heart of Rome. The smart way to travel hands-free.",
      contactTitle: "Contact Us",
      linksTitle: "Quick Links",
      findUs: "Find Us",
      rights: "All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms"
    },
    ai: {
      initialMessage: "Ciao! I'm your Roman Concierge. Ask me about our luggage service or for quick travel tips near Termini!",
      placeholder: "Ask about storage or Rome...",
      apiMissing: "API Key missing. Chat inactive.",
      fallback: "Need to speak to a human?",
      whatsapp: "Chat on WhatsApp",
      call: "Call Us",
      status: "AI Assistant"
    },
    notFound: {
      title: "Page Not Found",
      subtitle: "Sorry, the page you are looking for doesn't exist or has been moved.",
      backHome: "Back to Home"
    }
  }
};