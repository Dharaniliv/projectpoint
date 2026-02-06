export interface Project {
  id: string;
  name: string;
  city: string;
  state: string;
  address: string;
  type: string;
  status: "upcoming" | "ongoing" | "completed";
  priceRange: string;
  description: string;
  images: string[];
  contact: {
    phone: string;
    email: string;
    builder: string;
  };
  features: string[];
  units: string;
  possession: string;
}

export const projects: Project[] = [
  {
    id: "1",
    name: "Skyline Towers",
    city: "Mumbai",
    state: "Maharashtra",
    address: "Plot 45, Andheri East, Mumbai - 400069",
    type: "Residential",
    status: "ongoing",
    priceRange: "₹1.2 Cr - ₹3.5 Cr",
    description: "Experience luxury living at its finest with Skyline Towers. This premium residential project offers world-class amenities, stunning city views, and meticulously designed apartments that redefine modern living. Located in the heart of Mumbai, with excellent connectivity to major business districts and lifestyle destinations.",
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200",
    ],
    contact: {
      phone: "+91 98765 43210",
      email: "sales@skylinetowers.com",
      builder: "Prestige Developers",
    },
    features: ["Swimming Pool", "Gym", "Clubhouse", "24/7 Security", "Power Backup", "Parking"],
    units: "2, 3, 4 BHK",
    possession: "December 2025",
  },
  {
    id: "2",
    name: "Green Valley Residency",
    city: "Bangalore",
    state: "Karnataka",
    address: "Whitefield Main Road, Bangalore - 560066",
    type: "Residential",
    status: "upcoming",
    priceRange: "₹85 L - ₹1.8 Cr",
    description: "Nestled amidst lush greenery, Green Valley Residency offers a perfect blend of nature and modern living. With spacious apartments, eco-friendly features, and proximity to IT hubs, this project is ideal for families seeking a peaceful yet connected lifestyle.",
    images: [
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1200",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200",
    ],
    contact: {
      phone: "+91 98123 45678",
      email: "info@greenvalley.in",
      builder: "Sobha Limited",
    },
    features: ["Organic Garden", "Jogging Track", "Kids Play Area", "Rainwater Harvesting", "EV Charging"],
    units: "2, 3 BHK",
    possession: "March 2026",
  },
  {
    id: "3",
    name: "Royal Business Park",
    city: "Pune",
    state: "Maharashtra",
    address: "Hinjewadi Phase 2, Pune - 411057",
    type: "Commercial",
    status: "completed",
    priceRange: "₹45 L - ₹2.5 Cr",
    description: "A state-of-the-art commercial complex designed for modern businesses. Royal Business Park offers premium office spaces with cutting-edge infrastructure, ample parking, and strategic location near IT parks.",
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200",
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=1200",
    ],
    contact: {
      phone: "+91 95678 12340",
      email: "leasing@royalbp.com",
      builder: "Godrej Properties",
    },
    features: ["High-Speed Elevators", "Central AC", "Food Court", "Conference Rooms", "24/7 Access"],
    units: "500 - 10,000 sq.ft",
    possession: "Ready to Move",
  },
  {
    id: "4",
    name: "Sunrise Heights",
    city: "Chennai",
    state: "Tamil Nadu",
    address: "OMR Road, Sholinganallur, Chennai - 600119",
    type: "Residential",
    status: "ongoing",
    priceRange: "₹65 L - ₹1.5 Cr",
    description: "Rise with the sun at Sunrise Heights. This premium residential tower offers panoramic views, modern amenities, and thoughtfully designed living spaces. Perfect for young professionals and families alike.",
    images: [
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200",
    ],
    contact: {
      phone: "+91 94432 56789",
      email: "sales@sunriseheights.in",
      builder: "Casagrand Builders",
    },
    features: ["Rooftop Lounge", "Indoor Games", "Library", "Yoga Deck", "Smart Home Ready"],
    units: "1, 2, 3 BHK",
    possession: "June 2025",
  },
  {
    id: "5",
    name: "Lotus Gardens",
    city: "Ahmedabad",
    state: "Gujarat",
    address: "SG Highway, Ahmedabad - 380054",
    type: "Villa",
    status: "upcoming",
    priceRange: "₹2.5 Cr - ₹5 Cr",
    description: "Luxury villa living at its finest. Lotus Gardens presents an exclusive collection of premium villas with private gardens, contemporary architecture, and world-class amenities in a gated community setting.",
    images: [
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1200",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200",
    ],
    contact: {
      phone: "+91 97897 65432",
      email: "villas@lotusgardens.com",
      builder: "Adani Realty",
    },
    features: ["Private Pool Option", "Home Theatre", "Landscaped Gardens", "Servant Quarters", "Triple Car Parking"],
    units: "4, 5 BHK Villas",
    possession: "December 2026",
  },
  {
    id: "6",
    name: "Metro Square",
    city: "Noida",
    state: "Delhi",
    address: "Sector 150, Noida - 201310",
    type: "Mixed Use",
    status: "ongoing",
    priceRange: "₹75 L - ₹4 Cr",
    description: "A landmark mixed-use development combining premium residences, retail spaces, and office towers. Metro Square offers the convenience of live-work-play lifestyle with direct metro connectivity.",
    images: [
      "https://images.unsplash.com/photo-1567521464027-f127ff144326?w=1200",
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200",
      "https://images.unsplash.com/photo-1464938050520-ef2571a5f52b?w=1200",
    ],
    contact: {
      phone: "+91 98100 12345",
      email: "info@metrosquare.in",
      builder: "DLF Limited",
    },
    features: ["Metro Connectivity", "Retail Mall", "Multiplex", "Co-working Spaces", "Sky Lounge"],
    units: "Studios, 2, 3 BHK & Offices",
    possession: "September 2025",
  },
];
