// SmartDrive™ - Car Data
const DEFAULT_CARS = [
  {
    id: "1",
    name: "Tesla Model 3",
    type: "Electric",
    price: 2500, // Changed from pointsMultiplier
    srPoints: 300,
    image: "https://www.topgear.com/sites/default/files/2023/09/1%20Tesla%20Model%203.jpg",
    features: ["Autopilot", "Glass Roof", "Pristine Condition", "Fully Sanitized"],
    specs: {
      transmission: "Automatic",
      fuel: "Electric",
      seats: 5,
    },
    description: "Affordable luxury meets sustainable driving. This Tesla Model 3 is in showroom condition, offering a smooth and silent ride through Metro Manila at a budget-friendly rate."
  },
  {
    id: "2",
    name: "BMW 5 Series",
    type: "Luxury Sedan",
    price: 3500, // Changed from pointsMultiplier
    srPoints: 500,
    image: "https://images.unsplash.com/photo-1716066242980-c864821b1b67?auto=format&fit=crop&w=1080&q=80",
    features: ["Leather Seats", "Sunroof", "Regularly Serviced", "High Performance"],
    specs: {
      transmission: "Automatic",
      fuel: "Gasoline",
      seats: 5,
    },
    description: "Experience the ultimate driving machine without the premium price tag. Our 5 Series is meticulously maintained to ensure a reliable and high-quality experience for your business trips in BGC."
  },
  {
    id: "3",
    name: "Range Rover Sport",
    type: "SUV",
    price: 4500, // Changed from pointsMultiplier
    srPoints: 650,
    image: "https://images.unsplash.com/photo-1653641305372-a084f9b78858?auto=format&fit=crop&w=1080&q=80",
    features: ["All-Wheel Drive", "Air Suspension", "Perfect Condition", "Spacious Interior"],
    specs: {
      transmission: "Automatic",
      fuel: "Gasoline",
      seats: 7,
    },
    description: "A top-tier SUV at an unbeatable value. This Range Rover Sport is kept in excellent condition, ready to take your family comfortably to Tagaytay with power and style."
  },
  {
    id: "4",
    name: "Audi A4",
    type: "Sedan",
    price: 2800, // Changed from pointsMultiplier
    srPoints: 350,
    image: "https://hips.hearstapps.com/hmg-prod/images/2021-audi-a4-45-tfsi-quattro-104-1607927016.jpg?crop=0.450xw:0.380xh;0.226xw,0.399xh&resize=2048:*",
    features: ["Virtual Cockpit", "Quattro Drive", "Good as New", "Fuel Efficient"],
    specs: {
      transmission: "Automatic",
      fuel: "Gasoline",
      seats: 5,
    },
    description: "Sleek, sporty, and incredibly affordable. This Audi A4 is in tip-top shape, offering a premium feel and high-quality performance for your daily drives in Makati."
  },
  {
    id: "5",
    name: "Mercedes C-Class",
    type: "Luxury Sedan",
    price: 3800, // Changed from pointsMultiplier
    srPoints: 550,
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1080&q=80",
    features: ["MBUX System", "Burmester Audio", "Impeccable Maintenance", "Safe & Secure"],
    specs: {
      transmission: "Automatic",
      fuel: "Hybrid",
      seats: 5,
    },
    description: "Indulge in Mercedes-Benz quality at a highly competitive rate. This C-Class is maintained to the highest standards, ensuring a flawless and luxurious arrival at any event."
  },
  {
    id: "6",
    name: "Porsche 911 Carrera",
    type: "Sports Car",
    price: 7500, // Changed from pointsMultiplier
    srPoints: 1000,
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1080&q=80",
    features: ["Sport Exhaust", "Bose Surround", "Pristine Handling", "Expertly Maintained"],
    specs: {
      transmission: "PDK",
      fuel: "Gasoline",
      seats: 2,
    },
    description: "The most affordable way to experience a legendary sports car. This 911 is in mint condition, offering high-quality thrills and precision engineering for a weekend drive on the Skyway."
  },
  {
    id: "7",
    name: "Ford Mustang GT",
    type: "Sports Car",
    price: 6800, // Changed from pointsMultiplier
    srPoints: 850,
    image: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1000&q=80",
    features: ["V8 Engine", "Convertible", "Premium Sound", "Track Ready"],
    specs: {
      transmission: "Manual",
      fuel: "Gasoline",
      seats: 4,
    },
    description: "Feel the roar of the American muscle on the road. This Mustang GT comes fully loaded with performance upgrades and a head-turning convertible top."
  },
  {
    id: "8",
    name: "Toyota Fortuner",
    type: "SUV",
    price: 3200, // Changed from pointsMultiplier
    srPoints: 400,
    image: "https://upload.wikimedia.org/wikipedia/commons/6/66/2015_Toyota_Fortuner_%28New_Zealand%29.jpg",
    features: ["4x4 Drive", "Spacious Cabin", "Roof Rack", "Modern Infotainment"],
    specs: {
      transmission: "Automatic",
      fuel: "Diesel",
      seats: 7,
    },
    description: "Reliable and tough, the Fortuner is perfect for family trips or off‑road adventures. Equipped with comfortable seating and advanced safety features."
  },
  {
    id: "9",
    name: "Honda Civic Type R",
    type: "Sedan",
    price: 4200, // Changed from pointsMultiplier
    srPoints: 600,
    image: "https://d62-a.sdn.cz/d_62/c_img_QJ_k/uWSl/new-honda-civic-e-hev-hybrid-europe-1.jpeg?fl=cro,0,0,1920,1080%7Cres,1200,,1%7Cjpg,80,,1",
    features: ["Turbocharged", "Sport Seats", "Rear Wing", "Dual Exhaust"],
    specs: {
      transmission: "Manual",
      fuel: "Gasoline",
      seats: 5,
    },
    description: "A hot hatch disguised as a sedan. The Civic Type R delivers exceptional handling and acceleration for enthusiasts who love to drive."
  },
  {
    id: "10",
    name: "Nissan GT-R",
    type: "Sports Car",
    price: 9000, // Changed from pointsMultiplier
    srPoints: 1500,
    image: "https://img.philkotse.com/temp/2024/07/26/1-a4cb-wm-c2df.webp",
    features: ["All-Wheel Drive", "Twin Turbo V6", "Carbon Fiber", "Launch Control"],
    specs: {
      transmission: "Dual-Clutch",
      fuel: "Gasoline",
      seats: 4,
    },
    description: "Nicknamed 'Godzilla', the GT-R is a Japanese supercar that combines blistering speed with precision engineering. Ready to dominate the highway."
  },
  {
    id: "11",
    name: "Jeep Wrangler Unlimited",
    type: "SUV",
    price: 3600, // Changed from pointsMultiplier
    srPoints: 500,
    image: "https://images.hgmsites.net/med/2025-jeep-wrangler-sport-s-2-door-4x4-angular-front-exterior-view_100967699_m.webp",
    features: ["4x4 Offroad", "Removable Top", "Rugged Design", "Trail Rated"],
    specs: {
      transmission: "Automatic",
      fuel: "Gasoline",
      seats: 5,
    },
    description: "Adventure-ready and iconic, the Wrangler Unlimited is perfect for exploring rough terrain or cruising around the metro with style."
  },
  {
    id: "12",
    name: "Hyundai Tucson",
    type: "SUV",
    price: 2600, // Changed from pointsMultiplier
    srPoints: 300,
    image: "https://www.topgear.com/sites/default/files/2024/12/hyundai-tucson-ultimate-17.jpg",
    features: ["Fuel Efficient", "Comfortable Ride", "Advanced Safety", "Spacious Interior"],
    specs: {
      transmission: "Automatic",
      fuel: "Gasoline",
      seats: 5,
    },
    description: "A reliable compact SUV with a smooth drive and modern features, ideal for families and daily commuting."
  },
  {
    id: "13",
    name: "Lamborghini Huracán EVO",
    type: "Sports Car",
    price: 15000, // Changed from pointsMultiplier
    srPoints: 2500,
    image: "https://www.topgear.com/sites/default/files/cars-car/carousel/2019/01/lamborghini_huracan_evo_grigio_artis_107_1.jpg",
    features: ["V10 Engine", "Aerodynamic Design", "Leather Interior", "Exotic Performance"],
    specs: {
      transmission: "7-Speed DCT",
      fuel: "Gasoline",
      seats: 2,
    },
    description: "Ultimate Italian supercar experience with blistering acceleration, sharp handling, and jaw-dropping looks."
  }
];

// Function to get the current fleet, initializing from default if necessary
function getFleet() {
  let fleet = JSON.parse(localStorage.getItem('fleetData'));
  // If no fleet, fleet is empty, or the first car doesn't have srPoints, re-initialize.
  if (!fleet || fleet.length === 0 || !fleet[0].srPoints) {
    // This ensures that if the data structure changes (e.g., adding srPoints), the fleet is updated.
    fleet = DEFAULT_CARS;
    localStorage.setItem('fleetData', JSON.stringify(fleet));
    console.log('Fleet data was outdated and has been reset from default.');
  }
  // Ensure all cars have a status property for soft-delete functionality
  fleet.forEach(car => {
    if (!car.status) {
      car.status = 'available';
    }
  });
  return fleet;
}

// The global CARS variable is now dynamic
let CARS = getFleet();

// Utility function to get car by ID
function getCarById(id) {
  return CARS.find(car => car.id === id);
}

// Utility function to get car by name
function getCarByName(name) {
  return CARS.find(car => car.name === name);
}

// Utility function to filter cars by type
function getCarsByType(type) {
  return CARS.filter(car => car.type === type);
}

// Utility function to get cars sorted by price
function getCarsSortedByPrice(order = 'asc') {
  return [...CARS].sort((a, b) => {
    return order === 'asc' ? a.price - b.price : b.price - a.price;
  });
}

// Utility function to calculate rental price
function calculateRentalPrice(dailyRate, days, insuranceIncluded = true) {
  const rental = dailyRate * days;
  const insurance = insuranceIncluded ? 500 : 0;
  const discount = rental >= 5000 ? 500 : 0;
  return {
    subtotal: rental,
    insurance: insurance,
    discount: discount,
    total: rental + insurance - discount
  };
}

// Utility function to format currency
function formatCurrency(amount) {
  return '₱' + amount.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
}

// Utility function to format date
function formatDate(dateString) {
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
}

// Utility function to generate reference number
function generateReferenceNumber() {
  const timestamp = Date.now();
  const random = Math.random().toString(36).substr(2, 9).toUpperCase();
  return `REF-${timestamp}-${random}`;
}

// Car types for filtering
const CAR_TYPES = ['Electric', 'Luxury Sedan', 'SUV', 'Sedan', 'Sports Car'];

// Rental locations
const RENTAL_LOCATIONS = [
  'Manila - Downtown',
  'Makati - BGC Area',
  'Quezon City - EDSA',
  'Pasay - Naia Area',
  'Laguna - Sta Rosa',
  'Cebu - Downtown'
];

// Insurance options
const INSURANCE_OPTIONS = [
  { id: 1, name: 'Comprehensive Coverage', price: 500, description: 'Full coverage including damages and accidents' },
  { id: 2, name: 'Basic Coverage', price: 300, description: 'Basic protection for major incidents' },
  { id: 3, name: 'No Insurance', price: 0, description: 'No additional insurance' }
];

// Payment methods
const PAYMENT_METHODS = [
  { id: 'credit-card', name: 'Credit Card', icon: '💳' },
  { id: 'gcash', name: 'GCash', icon: '📱' },
  { id: 'maya', name: 'Maya', icon: '💸' }
];

// License types
const LICENSE_TYPES = [
  'Non-Professional Driver\'s License',
  'Professional Driver\'s License',
  'International Driving Permit'
];