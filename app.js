const events = [
  {
    date: "Monday, July 13",
    time: "12:00 PM",
    title: "Bride drops off personal items at Engaged",
    owner: "Family",
    priority: "normal",
    category: "Setup",
    place: "Engaged Wedding Library",
    note: "Drop off personal items at 1018 Oxmoor Road, Homewood, AL 35209."
  },
  {
    date: "Thursday, July 16",
    time: "Before noon",
    title: "Pack wedding weekend essentials",
    owner: "Carlton",
    priority: "important",
    category: "Travel",
    place: "Nashville",
    note: "Keep tux pickup, Airbnb address, ceremony clothes, toast notes, and father-of-the-Bride items together."
  },
  {
    date: "Thursday, July 16",
    time: "Noon",
    title: "Leave Nashville for Birmingham",
    owner: "Carlton",
    priority: "critical",
    category: "Travel",
    place: "Nashville to Birmingham",
    note: "Carlton and Jade plan to leave around noon and spend Thursday night at The Airbnb."
  },
  {
    date: "Thursday, July 16",
    time: "After arrival",
    title: "Pick up tux",
    owner: "Carlton",
    priority: "critical",
    category: "Wardrobe",
    place: "Mr. Burch Formal Wear",
    note: "Call if timing gets tight: +1 (205) 871-3589."
  },
  {
    date: "Thursday, July 16",
    time: "4:00 PM",
    title: "Meet John Pearson about paper lanterns",
    owner: "Family",
    priority: "important",
    category: "Decor",
    place: "The Farrell",
    note: "Carlton and Kerri meet John Pearson at The Farrell to discuss hanging paper lanterns. Phone: 205-566-7175."
  },
  {
    date: "Friday, July 17",
    time: "5:00 PM",
    title: "Rehearsal",
    owner: "Family",
    priority: "important",
    category: "Rehearsal",
    place: "The Farrell",
    note: "Rehearsal at The Farrell."
  },
  {
    date: "Friday, July 17",
    time: "6:00 PM",
    title: "Rehearsal dinner",
    owner: "Family",
    priority: "important",
    category: "Dinner",
    place: "The Cyprus Room at The Fennec",
    note: "Rehearsal dinner at 1630 2nd Ave S, Birmingham, AL 35233."
  },
  {
    date: "Saturday, July 18",
    time: "8:00 AM",
    title: "Venue open for vendor setup",
    owner: "Vendor",
    priority: "important",
    category: "Venue",
    place: "The Farrell",
    note: "Door code is not listed. Decor to Adore setup is scheduled 9:00 AM-12:00 PM. Delta Florals also sets up."
  },
  {
    date: "Saturday, July 18",
    time: "8:30 AM",
    title: "Bride and Bridesmaids meet up",
    owner: "Family",
    priority: "normal",
    category: "Getting Ready",
    place: "The Airbnb",
    note: "Breakfast and lunch provided by Jane Allison Crewse, 615-512-6503. Mackenzie Teter arrives and sets up."
  },
  {
    date: "Saturday, July 18",
    time: "9:00 AM",
    title: "Hair and makeup begins",
    owner: "Vendor",
    priority: "normal",
    category: "Hair and Makeup",
    place: "The Airbnb",
    note: "Hair and makeup schedule runs from 9:00 AM to 1:00 PM."
  },
  {
    date: "Saturday, July 18",
    time: "9:00 AM",
    title: "Hair: Sloan and Katelyn",
    owner: "Family",
    priority: "normal",
    category: "Hair and Makeup",
    place: "The Airbnb",
    note: "9:00 AM hair appointments for Sloan and Katelyn."
  },
  {
    date: "Saturday, July 18",
    time: "9:30 AM",
    title: "Hair: McClain and Hannah",
    owner: "Family",
    priority: "normal",
    category: "Hair and Makeup",
    place: "The Airbnb",
    note: "9:30 AM hair appointments for McClain and Hannah."
  },
  {
    date: "Saturday, July 18",
    time: "10:00 AM",
    title: "Hair: Christine; makeup: Sloan",
    owner: "Family",
    priority: "normal",
    category: "Hair and Makeup",
    place: "The Airbnb",
    note: "10:00 AM hair appointment for Christine and makeup appointment for Sloan."
  },
  {
    date: "Saturday, July 18",
    time: "10:30 AM",
    title: "Makeup: Katelyn and Sarah",
    owner: "Family",
    priority: "normal",
    category: "Hair and Makeup",
    place: "The Airbnb",
    note: "10:30 AM makeup appointments for Katelyn and Sarah."
  },
  {
    date: "Saturday, July 18",
    time: "11:00 AM",
    title: "Bride hair and makeup",
    owner: "Family",
    priority: "important",
    category: "Hair and Makeup",
    place: "The Airbnb",
    note: "Bride is scheduled for both hair and makeup."
  },
  {
    date: "Saturday, July 18",
    time: "11:00 AM",
    title: "Groom and Groomsmen meet up",
    owner: "Family",
    priority: "normal",
    category: "Getting Ready",
    place: "Groomsmens' House",
    note: "Lunch provided by MOG, 205-243-6581."
  },
  {
    date: "Saturday, July 18",
    time: "11:00 AM",
    title: "Bouquets and boutonnieres delivered",
    owner: "Vendor",
    priority: "normal",
    category: "Floral",
    place: "The Farrell",
    note: "Bouquets and boutonnieres delivered to The Farrell."
  },
  {
    date: "Saturday, July 18",
    time: "After 11:00 AM",
    title: "Pick up coconut cake",
    owner: "Jade",
    priority: "critical",
    category: "Cake",
    place: "Chez Fonfon",
    note: "Pick up 1 coconut cake. Chez Fonfon opens at 11:00 AM."
  },
  {
    date: "Saturday, July 18",
    time: "11:30 AM",
    title: "Bride hair and makeup",
    owner: "Family",
    priority: "important",
    category: "Hair and Makeup",
    place: "The Airbnb",
    note: "Bride is scheduled for both hair and makeup."
  },
  {
    date: "Saturday, July 18",
    time: "12:00 PM",
    title: "Hair: Kat; makeup: Christine",
    owner: "Family",
    priority: "normal",
    category: "Hair and Makeup",
    place: "The Airbnb",
    note: "12:00 PM hair appointment for Kat and makeup appointment for Christine."
  },
  {
    date: "Saturday, July 18",
    time: "12:30 PM",
    title: "Makeup: Kat",
    owner: "Family",
    priority: "normal",
    category: "Hair and Makeup",
    place: "The Airbnb",
    note: "12:30 PM makeup appointment for Kat."
  },
  {
    date: "Saturday, July 18",
    time: "12:30 PM",
    title: "Photographers arrive",
    owner: "Vendor",
    priority: "normal",
    category: "Photography",
    place: "The Airbnb",
    note: "Dacy Lee Photography arrives."
  },
  {
    date: "Saturday, July 18",
    time: "12:30 PM",
    title: "Getting ready and detail photos",
    owner: "Family",
    priority: "normal",
    category: "Photography",
    place: "The Airbnb",
    note: "Getting ready and detail photos begin."
  },
  {
    date: "Saturday, July 18",
    time: "12:45 PM",
    title: "MOG gets dressed",
    owner: "Family",
    priority: "normal",
    category: "Wardrobe",
    place: "Groomsmens' House",
    note: "Mother of the Groom gets dressed before the Groom and Groomsmen dressing block."
  },
  {
    date: "Saturday, July 18",
    time: "1:00 PM",
    title: "Hair and makeup complete",
    owner: "Vendor",
    priority: "important",
    category: "Hair and Makeup",
    place: "The Airbnb",
    note: "Hair and makeup complete."
  },
  {
    date: "Saturday, July 18",
    time: "1:00 PM",
    title: "Bride gets dressed",
    owner: "Family",
    priority: "important",
    category: "Wardrobe",
    place: "The Airbnb",
    note: "Mother of Bride and Sloan Wyse help Bride with jewelry and shoes for photos."
  },
  {
    date: "Saturday, July 18",
    time: "1:15 PM",
    title: "Groom and Groomsmen get dressed",
    owner: "Family",
    priority: "normal",
    category: "Wardrobe",
    place: "Groomsmens' House",
    note: "FOG Stacey pins boutonniere on Groom for photos."
  },
  {
    date: "Saturday, July 18",
    time: "1:30 PM",
    title: "Bridesmaids get dressed",
    owner: "Family",
    priority: "normal",
    category: "Wardrobe",
    place: "The Airbnb",
    note: "Bridesmaids get dressed after the Bride."
  },
  {
    date: "Saturday, July 18",
    time: "1:45 PM",
    title: "First look with Father of the Bride",
    owner: "Carlton",
    priority: "critical",
    category: "Photography",
    place: "The Airbnb",
    note: "Carlton should be ready and nearby before this time."
  },
  {
    date: "Saturday, July 18",
    time: "2:00 PM",
    title: "Bride's family photos and Bridesmaids",
    owner: "Carlton",
    priority: "critical",
    category: "Photography",
    place: "The Airbnb",
    note: "Father-of-the-Bride family photo window."
  },
  {
    date: "Saturday, July 18",
    time: "2:30 PM",
    title: "Cake delivered to The Farrell by Jade Novak",
    owner: "Jade",
    priority: "critical",
    category: "Cake",
    place: "The Farrell",
    note: "Deliver the coconut cake by 2:30 PM. Cake stand provided by the Bride."
  },
  {
    date: "Saturday, July 18",
    time: "2:30 PM",
    title: "Wedding coordinator arrives",
    owner: "Vendor",
    priority: "normal",
    category: "Coordination",
    place: "The Farrell",
    note: "Symone Shaw-Denton arrives at The Farrell."
  },
  {
    date: "Saturday, July 18",
    time: "2:30 PM",
    title: "Groom and Groomsmen arrive",
    owner: "Family",
    priority: "normal",
    category: "Arrival",
    place: "The Farrell",
    note: "Groom and Groomsmen arrive at The Farrell."
  },
  {
    date: "Saturday, July 18",
    time: "3:00 PM",
    title: "Classic car arrives at The Airbnb",
    owner: "Vendor",
    priority: "important",
    category: "Transportation",
    place: "The Airbnb",
    note: "Coats Classic Cars arrives at The Airbnb. Bride puts overnight bag in car."
  },
  {
    date: "Saturday, July 18",
    time: "3:00 PM",
    title: "DJ Lee arrives",
    owner: "Vendor",
    priority: "normal",
    category: "Entertainment",
    place: "The Farrell",
    note: "DJ Lee J arrives at The Farrell."
  },
  {
    date: "Saturday, July 18",
    time: "3:00 PM",
    title: "La Paz Catering arrives for food setup",
    owner: "Vendor",
    priority: "important",
    category: "Catering",
    place: "The Farrell",
    note: "La Paz Catering arrives at The Farrell to set up food."
  },
  {
    date: "Saturday, July 18",
    time: "3:00 PM",
    title: "Groom and Groomsmen photos",
    owner: "Family",
    priority: "normal",
    category: "Photography",
    place: "The Farrell",
    note: "Groom and Groomsmen photos at The Farrell."
  },
  {
    date: "Saturday, July 18",
    time: "3:15 PM",
    title: "Classic car takes Bride and Father of the Bride to The Farrell",
    owner: "Carlton",
    priority: "critical",
    category: "Transportation",
    place: "The Airbnb to The Farrell",
    note: "Pickup at The Airbnb and dropoff at The Farrell."
  },
  {
    date: "Saturday, July 18",
    time: "3:15 PM",
    title: "Jade and Jeff drive Bridesmaids to The Farrell",
    owner: "Family",
    priority: "important",
    category: "Transportation",
    place: "The Airbnb to The Farrell",
    note: "Jade and Jeff can drive Bridesmaids to The Farrell. Pickup: 1517 14th Street South, Birmingham, AL 35205. Dropoff: 2719 19th St S, Homewood, AL 35209."
  },
  {
    date: "Saturday, July 18",
    time: "3:30 PM",
    title: "Groom's family photos",
    owner: "Family",
    priority: "normal",
    category: "Photography",
    place: "The Farrell",
    note: "Groom's family photos at The Farrell."
  },
  {
    date: "Saturday, July 18",
    time: "3:30 PM",
    title: "Bride arrives at The Farrell",
    owner: "Family",
    priority: "important",
    category: "Arrival",
    place: "The Farrell",
    note: "Bride arrives at The Farrell. Groom should be tucked away before she arrives."
  },
  {
    date: "Saturday, July 18",
    time: "4:00 PM",
    title: "Ceremony musicians arrive",
    owner: "Vendor",
    priority: "normal",
    category: "Entertainment",
    place: "The Farrell",
    note: "Verite Strings arrives at The Farrell."
  },
  {
    date: "Saturday, July 18",
    time: "4:00 PM",
    title: "DJ meal ready",
    owner: "Vendor",
    priority: "normal",
    category: "Catering",
    place: "The Farrell",
    note: "One DJ meal provided by La Paz."
  },
  {
    date: "Saturday, July 18",
    time: "4:15 PM",
    title: "Ceremony and reception spaces guest ready",
    owner: "Vendor",
    priority: "important",
    category: "Venue",
    place: "The Farrell",
    note: "Final readiness checkpoint before guest arrival."
  },
  {
    date: "Saturday, July 18",
    time: "4:30 PM",
    title: "Prelude",
    owner: "Vendor",
    priority: "important",
    category: "Ceremony",
    place: "The Farrell",
    note: "Officiant: Steve Yeld, 205-401-0224. Music by Verite Strings. DJ provides the officiant microphone. Groomsmen serve as ushers."
  },
  {
    date: "Saturday, July 18",
    time: "4:30 PM",
    title: "All pre-ceremony photos complete",
    owner: "Family",
    priority: "important",
    category: "Photography",
    place: "The Farrell",
    note: "All pre-ceremony photos should be complete before the ceremony."
  },
  {
    date: "Saturday, July 18",
    time: "5:00 PM",
    title: "Food ready",
    owner: "Vendor",
    priority: "important",
    category: "Catering",
    place: "The Farrell",
    note: "Food from La Paz Catering should be ready at The Farrell."
  },
  {
    date: "Saturday, July 18",
    time: "5:00 PM - 5:30 PM",
    title: "Ceremony",
    owner: "Family",
    priority: "critical",
    category: "Ceremony",
    place: "The Farrell",
    note: "Ceremony at The Farrell."
  },
  {
    date: "Saturday, July 18",
    time: "5:30 PM - 6:30 PM",
    title: "Ceremony flip",
    owner: "Vendor",
    priority: "important",
    category: "Venue",
    place: "The Farrell",
    note: "Place Bridesmaids bouquets on highboy tables. Decor to Adore removes draping and resets tables. Florist resets florals as needed. Engaged team sets place cards."
  },
  {
    date: "Saturday, July 18",
    time: "5:35 PM",
    title: "Extended family photos",
    owner: "Carlton",
    priority: "important",
    category: "Photography",
    place: "The Farrell",
    note: "Stay photo-ready after the ceremony."
  },
  {
    date: "Saturday, July 18",
    time: "5:45 PM",
    title: "Cocktail hour begins",
    owner: "Family",
    priority: "normal",
    category: "Reception",
    place: "The Farrell",
    note: "Bar opens to guests. Music plays through venue speakers."
  },
  {
    date: "Saturday, July 18",
    time: "6:00 PM - 6:30 PM",
    title: "Bride and Groom private meal",
    owner: "Family",
    priority: "normal",
    category: "Reception",
    place: "Bridal suite",
    note: "Bride and Groom private meal in the bridal suite."
  },
  {
    date: "Saturday, July 18",
    time: "6:30 PM",
    title: "Reception begins",
    owner: "Family",
    priority: "important",
    category: "Reception",
    place: "The Farrell",
    note: "Guests enter the reception space."
  },
  {
    date: "Saturday, July 18",
    time: "6:40 PM",
    title: "Bride and Groom announced into reception",
    owner: "Family",
    priority: "important",
    category: "Reception",
    place: "The Farrell",
    note: "Announced as Mr. and Mrs. Cole."
  },
  {
    date: "Saturday, July 18",
    time: "6:42 PM",
    title: "Wedding party dances",
    owner: "Carlton",
    priority: "critical",
    category: "Reception",
    place: "The Farrell",
    note: "Bride and Groom: This Will Be by Natalie Cole. Father and Bride: I Say a Little Prayer by Aretha Franklin. Mother and Groom: My Wish by Rascal Flatts."
  },
  {
    date: "Saturday, July 18",
    time: "6:50 PM",
    title: "Toast by Father of the Bride",
    owner: "Carlton",
    priority: "critical",
    category: "Toast",
    place: "The Farrell",
    note: "Carlton toast. Keep notes ready."
  },
  {
    date: "Saturday, July 18",
    time: "6:52 PM",
    title: "Bride and Groom cut Bride's cake",
    owner: "Family",
    priority: "important",
    category: "Cake",
    place: "The Farrell",
    note: "Save the top tier. Bride's cake is not served to guests."
  },
  {
    date: "Saturday, July 18",
    time: "6:55 PM",
    title: "Buffet opens",
    owner: "Vendor",
    priority: "normal",
    category: "Catering",
    place: "The Farrell",
    note: "Vendors go through the buffet line: two planners and two photographers."
  },
  {
    date: "Saturday, July 18",
    time: "7:30 PM - 8:30 PM",
    title: "Bride and Groom photos outside",
    owner: "Family",
    priority: "normal",
    category: "Photography",
    place: "Outside The Farrell",
    note: "Bride and Groom photos outside The Farrell."
  },
  {
    date: "Saturday, July 18",
    time: "9:00 PM",
    title: "Late-night snack pass",
    owner: "Vendor",
    priority: "normal",
    category: "Catering",
    place: "The Farrell",
    note: "Cookie Fix late-night snack pass."
  },
  {
    date: "Saturday, July 18",
    time: "9:00 PM",
    title: "Bouquet toss",
    owner: "Family",
    priority: "normal",
    category: "Reception",
    place: "The Farrell",
    note: "Bouquet toss at The Farrell."
  },
  {
    date: "Saturday, July 18",
    time: "10:00 PM",
    title: "Sparkler exit and departure for Ross Bridge",
    owner: "Family",
    priority: "important",
    category: "Exit",
    place: "The Farrell to Ross Bridge",
    note: "Reception stops and guests head outside for the sparkler exit. Bride and Groom leave in the classic car for Ross Bridge."
  },
  {
    date: "Saturday, July 18",
    time: "10:30 PM - 11:30 PM",
    title: "Vendor cleanup and breakdown",
    owner: "Carlton",
    priority: "critical",
    category: "Cleanup",
    place: "The Farrell",
    note: "Personal items given to Kerri Foster, Carlton Davis, Jennifer Cole, and Stacey Cole."
  },
  {
    date: "Sunday, July 19",
    time: "Sunday, before leaving Birmingham",
    title: "Return tux or leave it with someone",
    owner: "Carlton",
    priority: "critical",
    category: "Wardrobe",
    place: "Birmingham",
    note: "Day after the wedding: leave the tux with someone in Birmingham or drop it off on the way out of town. Do not assume Mr. Burch Formal Wear is open on Sunday."
  }
];

const places = [
  {
    name: "The Farrell",
    type: "Wedding venue",
    address: "2719 19th St S, Homewood, AL 35209",
    phone: "Susan Zuber: 205-907-4222",
    detail: "Email: 2719thefarrell@gmail.com. Venue access starts wedding day at 8:00 AM.",
    maps: "https://www.google.com/maps/search/?api=1&query=2719+19th+St+S+Homewood+AL+35209"
  },
  {
    name: "The Airbnb",
    type: "Getting ready",
    address: "1517 14th Street South, Birmingham, AL 35205",
    phone: "Bride and Bridesmaids meet there at 8:30 AM.",
    detail: "Photographers arrive here at 12:30 PM. Classic car picks up Bride and Carlton here at 3:15 PM.",
    maps: "https://www.google.com/maps/search/?api=1&query=1517+14th+Street+South+Birmingham+AL+35205"
  },
  {
    name: "Groomsmens' House",
    type: "Groom getting ready",
    address: "3015 Parkridge Drive Apt 1, Birmingham, AL 35209",
    phone: "Groom and Groomsmen meet there at 11:00 AM.",
    detail: "Groom and Groomsmen getting-ready location.",
    maps: "https://www.google.com/maps/search/?api=1&query=3015+Parkridge+Drive+Apt+1+Birmingham+AL+35209"
  },
  {
    name: "Mr. Burch Formal Wear",
    type: "Tux pickup",
    address: "2829 Cahaba Rd, Birmingham, AL 35223",
    phone: "+1 (205) 871-3589",
    detail: "Carlton tux pickup on Thursday after arrival.",
    maps: "https://www.google.com/maps/search/?api=1&query=2829+Cahaba+Rd+Birmingham+AL+35223"
  },
  {
    name: "Chez Fonfon",
    type: "Coconut cake pickup",
    address: "2007 11th Ave S, Birmingham, AL 35205",
    phone: "Opens Saturday at 11:00 AM",
    detail: "Jade picks up 1 coconut cake Saturday and delivers it to The Farrell by 2:30 PM.",
    maps: "https://www.google.com/maps/search/?api=1&query=2007+11th+Ave+S+Birmingham+AL+35205"
  },
  {
    name: "The Cyprus Room at The Fennec",
    type: "Rehearsal dinner",
    address: "1630 2nd Ave S, Birmingham, AL 35233",
    phone: "Friday, July 17 at 6:00 PM",
    detail: "Rehearsal dinner location.",
    maps: "https://www.google.com/maps/search/?api=1&query=1630+2nd+Ave+S+Birmingham+AL+35233"
  },
  {
    name: "Ross Bridge",
    type: "Wedding-night destination",
    address: "4000 Grand Ave, Birmingham, AL 35226",
    phone: "Bride and Groom depart for Ross Bridge after the sparkler exit.",
    detail: "10:00 PM departure in the classic car.",
    maps: "https://www.google.com/maps/search/?api=1&query=4000+Grand+Ave+Birmingham+AL+35226"
  },
  {
    name: "Engaged Wedding Library",
    type: "Personal item dropoff",
    address: "1018 Oxmoor Road, Homewood, AL 35209",
    phone: "Monday, July 13 at 12:00 PM",
    detail: "Bride drops off personal items.",
    maps: "https://www.google.com/maps/search/?api=1&query=1018+Oxmoor+Road+Homewood+AL+35209"
  }
];

const contacts = [
  "Wedding coordinator: Symone Shaw-Denton, 205-902-0826",
  "Officiant: Steve Yeld, 205-401-0224",
  "Hair and makeup: StyledXMackenzie, Mackenzie Teter, 205-305-5046, styledXMackenzie@gmail.com",
  "Photography: Dacy Lee Photography, 205-222-8838, dacyleephotography@gmail.com",
  "Entertainment: Verite Strings, Laura Raymond, 601-955-7049, veritestrings@gmail.com",
  "Entertainment: DJ Lee J, Lee, 205-422-1158",
  "Floral: Delta Flowers, Lori Beasley, 205-504-0871, deltaflowershvr@gmail.com",
  "Catering: La Paz, Jill Williams, 205-879-2286",
  "Cake: Chez Fon Fon, contact info not listed in PDF",
  "Rentals: Decor to Adore, Laura Williams, 205-637-8695, laura@decortoadore.com",
  "Transportation: Coats Classic Cars, Kirsten Hansen-Dreijer, 205-413-0480, kirsten@coatscars.com"
];

const pdfNotes = [
  "Bride getting ready address: 1517 14th Street South Birmingham, AL 35205",
  "Groom getting ready address: 3015 Parkridge Drive Apt 1, Birmingham, AL 35209",
  "Ceremony and reception address: 2719 19th St S, Homewood, AL 35209",
  "Wedding coordinator: Symone Shaw-Denton, 205-902-0826",
  "Guest count: 124"
];

const personalItems = [
  "Guest Book and Pens",
  "Card Box or Tray",
  "Menu Cards - At every place setting",
  "Escort Cards - On escort card table",
  "Table Numbers",
  "Cake Knife and Server - Bring out with cake",
  "Toasting Flutes",
  "Special Champagne Bottle",
  "Decorative Cake Topper",
  "Personalized Cups",
  "Personalized Koozies and Baskets x2",
  "Cocktail Napkins",
  "Sparklers, Sand Bucket, Lighters for Send-Off",
  "Cake Stand",
  "Reserved Table Sign",
  "Bar Menus x2"
];

const packUpItems = [
  "Bride's Bouquet",
  "Bride's Cake",
  "Gifts and Cards",
  "Leftover Food"
];

const ownerFilter = document.querySelector("#ownerFilter");
const searchBox = document.querySelector("#searchBox");
const nextCards = document.querySelector("#nextCards");
const scheduleList = document.querySelector("#scheduleList");
const itemsList = document.querySelector("#itemsList");
const placeCards = document.querySelector("#placeCards");
const clockStatus = document.querySelector("#clockStatus");

const dateLookup = {
  "Monday, July 13": { year: 2026, month: 6, day: 13 },
  "Thursday, July 16": { year: 2026, month: 6, day: 16 },
  "Friday, July 17": { year: 2026, month: 6, day: 17 },
  "Saturday, July 18": { year: 2026, month: 6, day: 18 },
  "Sunday, July 19": { year: 2026, month: 6, day: 19 }
};

function eventMatches(event) {
  const ownerValue = ownerFilter.value;
  const searchValue = searchBox.value.trim().toLowerCase();
  const haystack = `${event.date} ${event.time} ${event.title} ${event.owner} ${event.category} ${event.place} ${event.note}`.toLowerCase();
  const personFilters = {
    Kate: ["kate", "bride"],
    Sloan: ["sloan"],
    Kerri: ["kerri", "mob", "mother of bride", "mother of the bride"]
  };
  const ownerMatch = personFilters[ownerValue]
    ? personFilters[ownerValue].some((term) => haystack.includes(term))
    : ownerValue === "all" || event.owner === ownerValue;
  return ownerMatch && (!searchValue || haystack.includes(searchValue));
}

function startTimeFromLabel(timeLabel) {
  if (timeLabel.includes("Before noon")) return "11:00 AM";
  if (timeLabel.includes("Noon")) return "12:00 PM";
  if (timeLabel.includes("After arrival")) return "4:00 PM";
  if (timeLabel.includes("After 11:00 AM")) return "11:05 AM";
  if (timeLabel.includes("Sunday, before leaving Birmingham")) return "10:00 AM";
  const match = timeLabel.match(/(\d{1,2}:\d{2}\s*[AP]M)/i);
  return match ? match[1].toUpperCase().replace(/\s+/, " ") : "9:00 AM";
}

function timeParts(timeLabel) {
  const match = timeLabel.match(/(\d{1,2}):(\d{2})\s*([AP]M)/i);
  if (!match) return { hours: 9, minutes: 0 };
  let hours = Number(match[1]);
  const minutes = Number(match[2]);
  const meridiem = match[3].toUpperCase();
  if (meridiem === "PM" && hours !== 12) hours += 12;
  if (meridiem === "AM" && hours === 12) hours = 0;
  return { hours, minutes };
}

function dateAt(dateLabel, timeLabel) {
  const date = dateLookup[dateLabel];
  const time = timeParts(timeLabel);
  return new Date(date.year, date.month, date.day, time.hours, time.minutes);
}

function eventStart(event) {
  const timePart = startTimeFromLabel(event.time);
  return dateAt(event.date, timePart);
}

function endTimeFromLabel(timeLabel) {
  const rangeMatch = timeLabel.match(/-\s*(\d{1,2}:\d{2}\s*[AP]M)/i);
  if (rangeMatch) return rangeMatch[1].toUpperCase().replace(/\s+/, " ");
  if (timeLabel.includes("Before noon")) return "12:00 PM";
  return null;
}

function eventEnd(event) {
  const endTime = endTimeFromLabel(event.time);
  if (endTime) return dateAt(event.date, endTime);
  return new Date(eventStart(event).getTime() + 30 * 60000);
}

function byScheduleTime(a, b) {
  return eventStart(a) - eventStart(b);
}

function minutesUntil(event, now) {
  return Math.round((eventStart(event).getTime() - now.getTime()) / 60000);
}

function formatRelative(minutes) {
  if (minutes < -90) return "Earlier";
  if (minutes < -5) return `${Math.abs(minutes)} min ago`;
  if (minutes <= 5) return "Now";
  if (minutes < 60) return `In ${minutes} min`;
  if (minutes < 10080) {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return mins ? `In ${hours} hr ${mins} min` : `In ${hours} hr`;
  }
  const days = Math.floor(minutes / 1440);
  return `In ${days} day${days === 1 ? "" : "s"}`;
}

function formatNowNextTime(item) {
  if (!Number.isFinite(item.minutesUntilStart) || !Number.isFinite(item.minutesAfterEnd)) {
    return "Time unavailable";
  }
  if (item.state === "ended") {
    const minutesAgo = Math.abs(item.minutesAfterEnd);
    if (minutesAgo < 60) return `Ended ${minutesAgo} min ago`;
    const hours = Math.floor(minutesAgo / 60);
    const mins = minutesAgo % 60;
    return mins ? `Ended ${hours} hr ${mins} min ago` : `Ended ${hours} hr ago`;
  }
  if (item.state === "current") return "Now";
  return formatRelative(item.minutesUntilStart);
}

function mapsLink(address) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
}

function directionsLink(origin, destination) {
  return `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(destination)}`;
}

function locationForEvent(event) {
  const place = event.place;

  if (place === "The Airbnb to The Farrell") {
    return {
      name: "The Airbnb to The Farrell",
      address: "Pickup: 1517 14th Street South, Birmingham, AL 35205. Dropoff: 2719 19th St S, Homewood, AL 35209",
      maps: directionsLink("1517 14th Street South, Birmingham, AL 35205", "2719 19th St S, Homewood, AL 35209")
    };
  }

  if (place === "Nashville to Birmingham") {
    return {
      name: "Nashville to Birmingham",
      address: "Nashville, TN to Birmingham, AL",
      maps: directionsLink("Nashville, TN", "Birmingham, AL")
    };
  }

  if (place === "The Farrell to Ross Bridge") {
    return {
      name: "The Farrell to Ross Bridge",
      address: "Pickup: 2719 19th St S, Homewood, AL 35209. Destination: 4000 Grand Ave, Birmingham, AL 35226",
      maps: directionsLink("2719 19th St S, Homewood, AL 35209", "4000 Grand Ave, Birmingham, AL 35226")
    };
  }

  if (place.includes("The Farrell") || place === "Bridal suite" || place === "Outside The Farrell") {
    return {
      name: place === "The Farrell" ? "The Farrell" : `${place} at The Farrell`,
      address: "2719 19th St S, Homewood, AL 35209",
      maps: mapsLink("2719 19th St S, Homewood, AL 35209")
    };
  }

  if (place.includes("The Airbnb") || place === "Getting ready location") {
    return {
      name: place,
      address: "1517 14th Street South, Birmingham, AL 35205",
      maps: mapsLink("1517 14th Street South, Birmingham, AL 35205")
    };
  }

  if (place.includes("Groomsmens' House")) {
    return {
      name: "Groomsmens' House",
      address: "3015 Parkridge Drive Apt 1, Birmingham, AL 35209",
      maps: mapsLink("3015 Parkridge Drive Apt 1, Birmingham, AL 35209")
    };
  }

  if (place === "Mr. Burch Formal Wear") {
    return {
      name: "Mr. Burch Formal Wear",
      address: "2829 Cahaba Rd, Birmingham, AL 35223",
      maps: mapsLink("2829 Cahaba Rd, Birmingham, AL 35223")
    };
  }

  if (place === "Chez Fonfon") {
    return {
      name: "Chez Fonfon",
      address: "2007 11th Ave S, Birmingham, AL 35205",
      maps: mapsLink("2007 11th Ave S, Birmingham, AL 35205")
    };
  }

  if (place === "The Cyprus Room at The Fennec") {
    return {
      name: "The Cyprus Room at The Fennec",
      address: "1630 2nd Ave S, Birmingham, AL 35233",
      maps: mapsLink("1630 2nd Ave S, Birmingham, AL 35233")
    };
  }

  if (place === "Engaged Wedding Library") {
    return {
      name: "Engaged Wedding Library",
      address: "1018 Oxmoor Road, Homewood, AL 35209",
      maps: mapsLink("1018 Oxmoor Road, Homewood, AL 35209")
    };
  }

  if (place === "Birmingham") {
    return {
      name: "Birmingham",
      address: "Birmingham, AL",
      maps: mapsLink("Birmingham, AL")
    };
  }

  if (place === "Nashville") {
    return {
      name: place,
      address: "Nashville, TN",
      maps: mapsLink("Nashville, TN")
    };
  }

  return {
    name: place,
    address: "",
    maps: ""
  };
}

function locationMarkup(event) {
  const location = locationForEvent(event);
  const address = location.address ? `<span>${location.address}</span>` : "";
  const link = location.maps ? `<a href="${location.maps}" target="_blank" rel="noreferrer">Open map</a>` : "";
  return `
    <div class="event-location">
      <strong>${location.name}</strong>
      ${address}
      ${link}
    </div>
  `;
}

function contactItemMarkup(contact) {
  const separator = contact.indexOf(":");
  if (separator === -1) return `<li>${contact}</li>`;
  const role = contact.slice(0, separator);
  const detail = contact.slice(separator + 1).trim();
  return `<li><strong>${role}:</strong> ${detail}</li>`;
}

function nowNextMarkup(item) {
  const event = item.event;
  return `
    <article class="event" data-owner="${event.owner}" data-priority="${event.priority}" data-state="${item.state}">
      <div>
        <div class="time">${formatNowNextTime(item)}</div>
        <div class="owner">${event.date} - ${event.time}</div>
      </div>
      <div>
        <h3>${event.title}</h3>
        <p>${event.note}</p>
        ${locationMarkup(event)}
      </div>
      <div class="meta">
        <span class="pill">${event.owner}</span>
        <span class="pill">${event.category}</span>
      </div>
    </article>
  `;
}

function renderNowNext() {
  const now = new Date();
  const nowItems = events
    .map((event) => {
      const start = eventStart(event);
      const end = eventEnd(event);
      const minutesUntilStart = Math.round((start.getTime() - now.getTime()) / 60000);
      const minutesAfterEnd = Math.round((now.getTime() - end.getTime()) / 60000);
      const state = now < start ? "upcoming" : now <= end ? "current" : "ended";
      return { event, start, end, minutesUntilStart, minutesAfterEnd, state };
    })
    .sort((a, b) => a.start - b.start);

  clockStatus.innerHTML = `
    <div>
      <strong>Current device time</strong>
      <span>${now.toLocaleString([], { weekday: "short", month: "short", day: "numeric", hour: "numeric", minute: "2-digit" })}</span>
    </div>
    <div>
      <strong>Status</strong>
      <span>${nowItems.some((item) => item.state === "current") ? "Something is happening now" : "Showing upcoming and completed events"}</span>
    </div>
  `;

  nextCards.innerHTML = nowItems.map(nowNextMarkup).join("");
}

function eventMarkup(event) {
  return `
    <article class="event" data-owner="${event.owner}" data-priority="${event.priority}">
      <div>
        <div class="time">${event.date}</div>
        <div class="owner">${event.time}</div>
      </div>
      <div>
        <h3>${event.title}</h3>
        <p>${event.note}</p>
        ${locationMarkup(event)}
      </div>
      <div class="meta">
        <span class="pill">${event.owner}</span>
        <span class="pill">${event.category}</span>
      </div>
    </article>
  `;
}

function renderEvents() {
  const filtered = events.filter(eventMatches).sort(byScheduleTime);

  scheduleList.innerHTML = filtered.length
    ? filtered.map(eventMarkup).join("")
    : `<div class="empty">No items match that filter yet.</div>`;
  renderNowNext();
}

function renderPlaces() {
  const placeMarkup = places.map((place) => `
    <article class="place">
      <div class="meta">
        <span class="pill">${place.type}</span>
      </div>
      <h3>${place.name}</h3>
      <p>${place.address}</p>
      <p>${place.phone}</p>
      <p>${place.detail}</p>
      <a href="${place.maps}" target="_blank" rel="noreferrer">Open map</a>
    </article>
  `).join("");

  const contactMarkup = `
    <article class="place contact-list">
      <div class="meta">
        <span class="pill">Vendor contacts</span>
      </div>
      <h3>Key Contacts</h3>
      <ul>
        ${contacts.map(contactItemMarkup).join("")}
      </ul>
    </article>
  `;

  const notesMarkup = `
    <article class="place contact-list">
      <div class="meta">
        <span class="pill">PDF notes</span>
      </div>
      <h3>Original Schedule Notes</h3>
      <ul>
        ${pdfNotes.map((note) => `<li>${note}</li>`).join("")}
      </ul>
    </article>
  `;

  placeCards.innerHTML = placeMarkup + contactMarkup + notesMarkup;
}

function renderItems() {
  const personalMarkup = personalItems.map((item, index) => `
    <article class="item-card">
      <span>${index + 1}</span>
      <p>${item}</p>
    </article>
  `).join("");

  const packUpMarkup = `
    <article class="item-card item-card-wide">
      <span>Pack</span>
      <p><strong>Additional items to pack up:</strong> ${packUpItems.join(", ")}.</p>
    </article>
    <article class="item-card item-card-wide">
      <span>Handoff</span>
      <p>Personal items may be given to Kerri Foster, Carlton Davis, Jennifer Cole, and Stacey Cole during vendor cleanup and breakdown.</p>
    </article>
  `;

  itemsList.innerHTML = personalMarkup + packUpMarkup;
}

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach((item) => item.classList.remove("is-active"));
    document.querySelectorAll(".view").forEach((view) => view.classList.remove("is-active"));
    tab.classList.add("is-active");
    document.querySelector(`#${tab.dataset.view}`).classList.add("is-active");
  });
});

ownerFilter.addEventListener("change", renderEvents);
searchBox.addEventListener("input", renderEvents);

renderEvents();
renderPlaces();
renderItems();
setInterval(renderNowNext, 60000);
