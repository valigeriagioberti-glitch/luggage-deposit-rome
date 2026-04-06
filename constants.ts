// New External Booking URL
export const BOOKING_URL = "https://booking.luggagedepositrome.com/";
export const getBookingUrl = (language: string) => language === 'it' ? "https://booking.luggagedepositrome.com/it" : BOOKING_URL;

// Added missing JOTFORM_ID export
export const JOTFORM_ID = "230000000000000";

// Updated to the specific Google Maps Place Embed URL for "Luggage Deposit Rome"
export const GOOGLE_MAPS_EMBED_URL = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5939.485615617648!2d12.500256!3d41.898388!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f6144e63f6e33%3A0xf711ae9b8003f1c3!2sLuggage%20Deposit%20Rome%20-%20Luggage%20Storage%20Roma%20Termini!5e0!3m2!1sen!2sus!4v1765383279958!5m2!1sen!2sus";

// Updated Profile URL for buttons (Directions, Reviews)
export const GOOGLE_MAPS_PROFILE_URL = "https://maps.app.goo.gl/36CEYpEhnf4FwXWRA";

export const BUSINESS_INFO = {
  name: "Luggage Deposit Rome",
  address: "V. Gioberti, 42, 00185 Roma RM, Italy",
  phone: "+39 064467843",
  email: "valigeriagioberti@gmail.com",
  website: "https://luggagedepositroom.com",
  whatsapp: "393664530323"
};