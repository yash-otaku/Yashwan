const sampleListings = [
  {
    title: "Ocean Breeze Villa",
    description: "Beautiful beachside villa with a private pool, sea-facing balcony, and modern interiors perfect for a relaxing vacation.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
    },
    price: 4200,
    location: "Goa",
    country: "India"
  },
  {
    title: "Sunset Paradise Resort",
    description: "Luxury villa near the beach with stunning sunset views and peaceful surroundings.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2"
    },
    price: 5300,
    location: "Malibu",
    country: "USA"
  },
  {
    title: "Coral Reef Stay",
    description: "Modern beach house featuring spacious rooms, tropical garden, and quick beach access.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
    },
    price: 3900,
    location: "Bali",
    country: "Indonesia"
  },
  {
    title: "Blue Wave Cottage",
    description: "Cozy beachfront cottage with stylish decor and a relaxing ocean breeze.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
    },
    price: 2800,
    location: "Phuket",
    country: "Thailand"
  },
  {
    title: "Golden Sands Villa",
    description: "Elegant villa with infinity pool and direct access to the sandy beach.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
    },
    price: 6100,
    location: "Santorini",
    country: "Greece"
  },
  {
    title: "Palm Tree Retreat",
    description: "Relaxing villa surrounded by palm trees and crystal-clear beach water.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
    },
    price: 4500,
    location: "Maldives",
    country: "Maldives"
  },
  {
    title: "Sea Pearl Residency",
    description: "Premium beach property with modern amenities and breathtaking sea views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1494526585095-c41746248156"
    },
    price: 5200,
    location: "Miami",
    country: "USA"
  },
  {
    title: "Azure Coast Villa",
    description: "Spacious luxury villa perfect for family vacations near the ocean.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1484154218962-a197022b5858"
    },
    price: 4800,
    location: "Nice",
    country: "France"
  },
  {
    title: "Island Escape House",
    description: "A peaceful island retreat with beautiful beaches and private outdoor seating.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464890100898-a385f744067f"
    },
    price: 3700,
    location: "Seychelles",
    country: "Seychelles"
  },
  {
    title: "Tropical Dream Villa",
    description: "Modern villa with tropical vibes and quick access to beach cafes and nightlife.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688"
    },
    price: 4300,
    location: "Ibiza",
    country: "Spain"
  },
  {
    title: "Lagoon View Stay",
    description: "Stylish beach property with lagoon views and premium interiors.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
    },
    price: 4100,
    location: "Mauritius",
    country: "Mauritius"
  },
  {
    title: "Sunny Shore Villa",
    description: "Beachfront home with cozy bedrooms and a relaxing outdoor lounge area.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1449844908441-8829872d2607"
    },
    price: 3600,
    location: "Gold Coast",
    country: "Australia"
  },
  {
    title: "Crystal Bay Resort",
    description: "Luxury stay featuring panoramic ocean views and premium facilities.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1460317442991-0ec209397118"
    },
    price: 6500,
    location: "Hawaii",
    country: "USA"
  },
  {
    title: "Coconut Beach House",
    description: "Affordable and peaceful beach house surrounded by coconut trees.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1430285561322-7808604715df"
    },
    price: 2500,
    location: "Kerala",
    country: "India"
  },
  {
    title: "Royal Tide Villa",
    description: "Premium seaside property with elegant rooms and oceanfront dining.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1494526585095-c41746248156"
    },
    price: 7200,
    location: "Dubai",
    country: "UAE"
  },
  {
    title: "Wave Whisper Cottage",
    description: "Charming beach cottage perfect for couples and peaceful vacations.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1472224371017-08207f84aaae"
    },
    price: 3100,
    location: "Langkawi",
    country: "Malaysia"
  },
  {
    title: "Pearl Ocean Retreat",
    description: "Luxury retreat with beach-facing rooms and beautiful night views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
    },
    price: 5700,
    location: "Bora Bora",
    country: "French Polynesia"
  },
  {
    title: "Silver Sand Residency",
    description: "Modern resort near the beach with a swimming pool and rooftop cafe.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
    },
    price: 4400,
    location: "Barcelona",
    country: "Spain"
  },
  {
    title: "Beach Heaven Villa",
    description: "Beautiful beachside villa offering comfort, privacy, and amazing sea views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1518780664697-55e3ad937233"
    },
    price: 6000,
    location: "Cancun",
    country: "Mexico"
  },
  {
    title: "Ocean Bliss Resort",
    description: "A luxurious beach property with modern design and tropical surroundings.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
    },
    price: 5500,
    location: "Fiji",
    country: "Fiji"
  }
]
 

module.exports = { data: sampleListings };
