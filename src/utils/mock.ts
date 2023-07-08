import { product } from "./types";
import P1 from "/public/p1.png"
import P2 from "/public/p2.png"
import P3 from "/public/p3.png"
import fc1 from '/public/fc1.png'
import fc3 from '/public/fc3.png'
import fc4  from '/public/fc4.png'
import fc5 from '/public/fc5.png'
import fc6 from  '/public/fc6.png'
import maleCat1 from "/public/maleCat1.png"
import maleCat2 from "/public/maleCat2.png"


export const products:product[] = [
    {
        id: 1,
        name: "Brushed Raglan Sweatshirt",
        category: "Female",
        price: 195,
        image: P1,
    },
    {
        id: 2,
        name: "Flex Sweatshirt",
        category: "Female",
        price: 175,
        image: P2,
    },
    {
        id: 3,
        name: "Brushed Raglan Sweatshirt",
        category: "Female",
        price: 195,
        image: P3,
    },
    {
        id: 4,
        name: "Lite Sweatpants",
        category: "Female",
        price: 150,
        image: fc5,
    },
    {
        id: 5,
        name: "Pink Fleece Sweatpants",
        category: "Female",
        price: 195,
        image: fc6,
    },
    {
        id: 6,
        name: "Flex Sweatpants",
        category: "Female",
        price: 175,
        image: fc3,
    },
    {
        id: 7,
        name: "Imperial Alpaca Hoodie",
        category: "Female",
        price: 525,
        image: fc4,
    },
    {
        id: 8,
        name: "Lite Sweatpants",
        category: "kids",
        price: 150,
        image: fc1,
    },
    {
        id: 9,
        name: "Brushed raglan SweatShirt",
        category: "Male",
        price: 195,
        image: maleCat1,
    },
    {
        id: 10,
        name: "Flex SweatShirt",
        category: "Male",
        price: 175,
        image: maleCat2,
    },

];

