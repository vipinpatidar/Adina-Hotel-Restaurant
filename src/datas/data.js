// rooms images
import Room1Img from "../assets/img/rooms/1.png";
import Room1ImgLg from "../assets/img/rooms/1-lg.png";
import Room2Img from "../assets/img/rooms/2.png";
import Room2ImgLg from "../assets/img/rooms/2-lg.png";
import Room3Img from "../assets/img/rooms/3.png";
import Room3ImgLg from "../assets/img/rooms/3-lg.png";
import Room4Img from "../assets/img/rooms/4.png";
import Room4ImgLg from "../assets/img/rooms/4-lg.png";
import Room5Img from "../assets/img/rooms/5.png";
import Room5ImgLg from "../assets/img/rooms/5-lg.png";
import Room6Img from "../assets/img/rooms/6.png";
import Room6ImgLg from "../assets/img/rooms/6-lg.png";
import Room7Img from "../assets/img/rooms/7.png";
import Room7ImgLg from "../assets/img/rooms/7-lg.png";
import Room8Img from "../assets/img/rooms/8.png";
import Room8ImgLg from "../assets/img/rooms/8-lg.png";
import Room9Img from "../assets/img/rooms/9.jpg";
import Room9ImgLg from "../assets/img/rooms/9-lg.jpg";
// import icons
import {
  FaWifi,
  FaCoffee,
  FaBath,
  FaParking,
  FaSwimmingPool,
  FaHotdog,
  FaStopwatch,
  FaCocktail,
} from "react-icons/fa";

export const roomData = [
  {
    id: 1,
    name: "Superior Room",
    description:
      "Newly renovated rooms, rich in terms of textures and colors, each Palace room has been redesigned for comfort. A four poster bed or Twin bed, walk in wardrobes and a spacious bathroom which will help you sink into the palatial experience. large French Windows over looking the gardens, provide a glimpse of royalty. ",
    facilities: [
      { name: "Wifi", icon: <FaWifi /> },
      { name: "Coffee", icon: <FaCoffee /> },
      { name: "Bath", icon: <FaBath /> },
      { name: "Parking Space", icon: <FaParking /> },
      { name: "Swimming Pool", icon: <FaSwimmingPool /> },
      { name: "Breakfast", icon: <FaHotdog /> },
      { name: "GYM", icon: <FaStopwatch /> },
      { name: "Drinks", icon: <FaCocktail /> },
    ],
    size: 30,
    maxPerson: 2,
    price: 115,
    image: Room1Img,
    imageLg: Room1ImgLg,
  },
  {
    id: 2,
    name: "Signature Room",
    description:
      "With floor-to-ceiling windows offering breathtaking views of the city skyline and Lake Michigan, it provides a memorable dining experience.The menu features American cuisine and an extensive wine list, making it a popular spot for special occasions and romantic dinners.",
    facilities: [
      { name: "Wifi", icon: <FaWifi /> },
      { name: "Coffee", icon: <FaCoffee /> },
      { name: "Bath", icon: <FaBath /> },
      { name: "Parking Space", icon: <FaParking /> },
      { name: "Swimming Pool", icon: <FaSwimmingPool /> },
      { name: "Breakfast", icon: <FaHotdog /> },
      { name: "GYM", icon: <FaStopwatch /> },
      { name: "Drinks", icon: <FaCocktail /> },
    ],
    size: 70,
    maxPerson: 3,
    price: 220,
    image: Room2Img,
    imageLg: Room2ImgLg,
  },
  {
    id: 3,
    name: "Deluxe Room",
    description:
      "While maintaining the palace's historic charm, the suites are decorated with Rajasthani artwork and transparent fabrics and have been recently renovated. These suites have a cozy atmosphere with marble or wood floors. These are 1-room suites divided into a living room and a bedroom.",
    facilities: [
      { name: "Wifi", icon: <FaWifi /> },
      { name: "Coffee", icon: <FaCoffee /> },
      { name: "Bath", icon: <FaBath /> },
      { name: "Parking Space", icon: <FaParking /> },
      { name: "Swimming Pool", icon: <FaSwimmingPool /> },
      { name: "Breakfast", icon: <FaHotdog /> },
      { name: "GYM", icon: <FaStopwatch /> },
      { name: "Drinks", icon: <FaCocktail /> },
    ],
    size: 50,
    maxPerson: 1,
    price: 265,
    image: Room3Img,
    imageLg: Room3ImgLg,
  },
  {
    id: 4,
    name: "Luxury Room",
    description:
      "These suites were the personal chambers of the Royal family with large French Windows over looking the gardens, provide a glimpse of royalty. These suites are equipped with a bedroom, drawing room and living room. offers a large lounge overlooking the gardens, extending to the terrace",
    facilities: [
      { name: "Wifi", icon: <FaWifi /> },
      { name: "Coffee", icon: <FaCoffee /> },
      { name: "Bath", icon: <FaBath /> },
      { name: "Parking Space", icon: <FaParking /> },
      { name: "Swimming Pool", icon: <FaSwimmingPool /> },
      { name: "Breakfast", icon: <FaHotdog /> },
      { name: "GYM", icon: <FaStopwatch /> },
      { name: "Drinks", icon: <FaCocktail /> },
    ],
    size: 50,
    maxPerson: 6,
    price: 289,
    image: Room4Img,
    imageLg: Room4ImgLg,
  },
  {
    id: 5,
    name: "Luxury Suite Room",
    description:
      "The Luxury Rooms are traditionally decorated with period furniture and provide an array of quality amenities. With garden view from the palace’s top floor, they reflect old world charm. large French Windows over looking the gardens, provide a glimpse of royalty. ",
    facilities: [
      { name: "Wifi", icon: <FaWifi /> },
      { name: "Coffee", icon: <FaCoffee /> },
      { name: "Bath", icon: <FaBath /> },
      { name: "Parking Space", icon: <FaParking /> },
      { name: "Swimming Pool", icon: <FaSwimmingPool /> },
      { name: "Breakfast", icon: <FaHotdog /> },
      { name: "GYM", icon: <FaStopwatch /> },
      { name: "Drinks", icon: <FaCocktail /> },
    ],
    size: 90,
    maxPerson: 4,
    price: 320,
    image: Room5Img,
    imageLg: Room5ImgLg,
  },
  {
    id: 6,
    name: "Deluxe Room",
    description:
      "Some of the Royal Suites were the personal chambers of the Maharaja of Jaipur. The décor with transports to the bygone era of the royalty. These are 1 room suites divided into a living area and a bedroom. offers a large lounge overlooking the gardens, extending to the terrace",
    facilities: [
      { name: "Wifi", icon: <FaWifi /> },
      { name: "Coffee", icon: <FaCoffee /> },
      { name: "Bath", icon: <FaBath /> },
      { name: "Parking Space", icon: <FaParking /> },
      { name: "Swimming Pool", icon: <FaSwimmingPool /> },
      { name: "Breakfast", icon: <FaHotdog /> },
      { name: "GYM", icon: <FaStopwatch /> },
      { name: "Drinks", icon: <FaCocktail /> },
    ],
    size: 45,
    maxPerson: 5,
    price: 344,
    image: Room6Img,
    imageLg: Room6ImgLg,
  },
  {
    id: 7,
    name: "Luxury Room",
    description:
      "These suites were the personal chambers of the Royal family with large French Windows over looking the gardens, provide a glimpse of royalty. These suites are equipped with a bedroom, drawing room and living room. large French Windows over looking the gardens, provide a glimpse of royalty.",
    facilities: [
      { name: "Wifi", icon: <FaWifi /> },
      { name: "Coffee", icon: <FaCoffee /> },
      { name: "Bath", icon: <FaBath /> },
      { name: "Parking Space", icon: <FaParking /> },
      { name: "Swimming Pool", icon: <FaSwimmingPool /> },
      { name: "Breakfast", icon: <FaHotdog /> },
      { name: "GYM", icon: <FaStopwatch /> },
      { name: "Drinks", icon: <FaCocktail /> },
    ],
    size: 84,
    maxPerson: 3,
    price: 389,
    image: Room7Img,
    imageLg: Room7ImgLg,
  },
  {
    id: 8,
    name: "Deluxe Room",
    description:
      "It offers a large lounge overlooking the gardens, extending to the terrace, a royal dining room and a master bedroom with dressing area. Many international dignitaries, celebrities have had a memorable experience during their stay. A four poster bed or Twin bed, walk in wardrobes and a spacious bathroom which will help you sink into the palatial experience.",
    facilities: [
      { name: "Wifi", icon: <FaWifi /> },
      { name: "Coffee", icon: <FaCoffee /> },
      { name: "Bath", icon: <FaBath /> },
      { name: "Parking Space", icon: <FaParking /> },
      { name: "Swimming Pool", icon: <FaSwimmingPool /> },
      { name: "Breakfast", icon: <FaHotdog /> },
      { name: "GYM", icon: <FaStopwatch /> },
      { name: "Drinks", icon: <FaCocktail /> },
    ],
    size: 48,
    maxPerson: 7,
    price: 499,
    image: Room8Img,
    imageLg: Room8ImgLg,
  },
  {
    id: 9,
    name: "Superior Room",
    description:
      "These suites were the personal chambers of the Royal family with large French Windows over looking the gardens, provide a glimpse of royalty. These suites are equipped with a bedroom, drawing room and living room. offers a large lounge overlooking the gardens, extending to the terrace",
    facilities: [
      { name: "Wifi", icon: <FaWifi /> },
      { name: "Coffee", icon: <FaCoffee /> },
      { name: "Bath", icon: <FaBath /> },
      { name: "Parking Space", icon: <FaParking /> },
      { name: "Swimming Pool", icon: <FaSwimmingPool /> },
      { name: "Breakfast", icon: <FaHotdog /> },
      { name: "GYM", icon: <FaStopwatch /> },
      { name: "Drinks", icon: <FaCocktail /> },
    ],
    size: 50,
    maxPerson: 8,
    price: 269,
    image: Room9Img,
    imageLg: Room9ImgLg,
  },
];
