import p_img1 from './p_img1.png'
import p_img2_1 from './p_img2_1.png'
import p_img2_2 from './p_img2_2.png'
import p_img2_3 from './p_img2_3.png'
import p_img2_4 from './p_img2_4.png'
import p_img3 from './p_img3.png'
import p_img4 from './p_img4.png'
import p_img5 from './p_img5.png'
import p_img6 from './p_img6.png'
import p_img7 from './p_img7.png'
import p_img8 from './p_img8.png'
import p_img9 from './p_img9.png'
import p_img10 from './p_img10.png'
import p_img11 from './p_img11.png'
import p_img12 from './p_img12.png'
import p_img13 from './p_img13.png'
import p_img14 from './p_img14.png'
import p_img15 from './p_img15.png'
import p_img16 from './p_img16.png'
import p_img17 from './p_img17.png'
import p_img18 from './p_img18.png'
import p_img19 from './p_img19.png'
import p_img20 from './p_img20.png'
import p_img21 from './p_img21.png'
import p_img22 from './p_img22.png'
import p_img23 from './p_img23.png'
import p_img24 from './p_img24.png'
import p_img25 from './p_img25.png'
import p_img26 from './p_img26.png'
import p_img27 from './p_img27.png'
import p_img28 from './p_img28.png'
import p_img29 from './p_img29.png'
import p_img30 from './p_img30.png'
import p_img31 from './p_img31.png'
import p_img32 from './p_img32.png'
import p_img33 from './p_img33.png'
import p_img34 from './p_img34.png'
import p_img35 from './p_img35.png'
import p_img36 from './p_img36.png'
import p_img37 from './p_img37.png'
import p_img38 from './p_img38.png'
import p_img39 from './p_img39.png'
import p_img40 from './p_img40.png'
import p_img41 from './p_img41.png'
import p_img42 from './p_img42.png'
import p_img43 from './p_img43.png'
import p_img44 from './p_img44.png'
import p_img45 from './p_img45.png'
import p_img46 from './p_img46.png'
import p_img47 from './p_img47.png'
import p_img48 from './p_img48.png'
import p_img49 from './p_img49.png'
import p_img50 from './p_img50.png'
import p_img51 from './p_img51.png'
import p_img52 from './p_img52.png'


import logo from './logo.png'
import hero_image_new from './hero_image_new.png'
import cart_icon from './cart_icon.png'
import bin_icon from './bin_icon.png'
import dropdown_icon from './dropdown_icon.png'
import exchange_icon from './exchange_icon.png'
import profile_icon from './profile_icon.png'
import quality_icon from './quality_icon.png'
import search_icon from './search_icon.png'
import star_dull_icon from './star_dull_icon.png'
import star_icon from './star_icon.png'
import support_img from './support_img.png'
import menu_icon from './menu_icon.png'
import about_img from './about_img.png'
import contact_img from './contact_img.png'
import razorpay_logo from './razorpay_logo.png'
import stripe_logo from './stripe_logo.png'
import cross_icon from './cross_icon.png'
import category_clothes from './cloth-category.png'
import category_bags from './bag-category.png'
import category_makeup from './makeup-category.png'
import category_shoes from './shoe-category.png'

export const assets = {
    logo,
    hero_image_new,
    cart_icon,
    dropdown_icon,
    exchange_icon,
    profile_icon,
    quality_icon,
    search_icon,
    star_dull_icon,
    star_icon,
    bin_icon,
    support_img,
    menu_icon,
    about_img,
    contact_img,
    razorpay_logo,
    stripe_logo,
    cross_icon, 
    category_clothes,
    category_bags,
    category_makeup,
    category_shoes
}

export const products = [
    {
        _id: "aaaaa",
        name: "RGB Gaming Keyboard",
        description: "A sleek, high-performance laptop with a minimalist design, featuring the latest technology for superior speed and efficiency. Ideal for both work and play, it combines a powerful processor with long-lasting battery life.",
        price: 100,
        image: [p_img1],
        category: "Accessories",
        subCategory: "Computers and Laptops",
        sizes: ["S", "M", "L"],
        date: 1716634345448,
        bestseller: true
    },
    {
        _id: "aaaab",
        name: "MacBook Pro 13",
        description: "Compact, powerful, and efficient, the MacBook Pro 13 with the M1 chip offers stunning performance, a vibrant Retina display, and all-day battery life. Perfect for professionals on the go.",
        price: 200,
        image: [p_img2_1,p_img2_2,p_img2_3,p_img2_4],
        category: "Devices",
        subCategory: "Computers and Laptops",
        sizes: ["13'", "15'", "17'"],
        date: 1716621345448,
        bestseller: true
    },
    {
        _id: "aaaac",
        name: "16GB DDR4 RAM",
        description: "An essential upgrade for your computer, this 16GB DDR4 RAM enhances system performance, enabling smooth multitasking and faster load times for applications.",
        price: 220,
        image: [p_img3],
        category: "Components",
        subCategory: "Computers and Laptops",
        sizes: ["S", "L", "XL"],
        date: 1716234545448,
        bestseller: true
    },
    {
        _id: "aaaad",
        name: "Dell UltraSharp 24inch Monitor",
        description: "Experience crystal-clear visuals with this Dell UltraSharp 24inch monitor. Featuring an ultra-high resolution and vibrant colors, it’s perfect for professional work, gaming, and entertainment.",
        price: 110,
        image: [p_img4],
        category: "Devices",
        subCategory: "Computers and Laptops",
        sizes: ["13'", "15'", "17'"],
        date: 1716621345448,
        bestseller: true
    },
    {
        _id: "aaaae",
        name: "TechPouch Laptop Backpack",
        description: "A durable and stylish laptop backpack designed to protect your device while offering ample space for accessories, books, and other essentials. Features padded compartments for added security.",
        price: 130,
        image: [p_img5],
        category: "Accessories",
        subCategory: "Computers and Laptops",
        sizes: ["M", "L", "XL"],
        date: 1716622345448,
        bestseller: true
    },
    {
        _id: "aaaaf",
        name: "1TB External Hard Drive",
        description: "A compact and reliable storage solution with 1TB of space, perfect for backing up important data or expanding your device’s storage capacity. It offers fast transfer speeds and high durability.",
        price: 140,
        image: [p_img6],
        category: "Components",
        subCategory: "Computers and Laptops",
        sizes: ["S", "L", "XL"],
        date: 1716623423448,
        bestseller: true
    },
    {
        _id: "aaaag",
        name: "iPhone 11 Pro Max 64GB",
        description: "With a stunning OLED display, triple-camera system, and A13 Bionic chip, the iPhone 11 Pro Max is a powerful smartphone offering top-tier performance and unparalleled photo quality.",
        price: 190,
        image: [p_img7],
        category: "Devices",
        subCategory: "Mobile Devices",
        sizes: ["Red", "Purple", "Black"],
        date: 1716621542448,
        bestseller: false
    },
    {
        _id: "aaaah",
        name: "Golden MacBook Air",
        description: "A lightweight, luxurious MacBook Air with a golden finish. This laptop combines elegant aesthetics with incredible portability, perfect for those who want style without compromising on performance.",
        price: 140,
        image: [p_img8],
        category: "Devices",
        subCategory: "Computers and Laptops",
        sizes: ["13'", "15'", "17'"],
        date: 1716622345448,
        bestseller: false
    },
    {
        _id: "aaaai",
        name: "CoolMaster Laptop Cooling Pad",
        description: "Keep your laptop running cool and quiet with this high-performance cooling fan. Designed to prevent overheating, it features adjustable speeds and a sleek, ergonomic design.",
        price: 100,
        image: [p_img9],
        category: "Components",
        subCategory: "Computers and Laptops",
        sizes: ["M", "L", "XL"],
        date: 1716621235448,
        bestseller: false
    },
    {
        _id: "aaaaj",
        name: "Samsung Galaxy S21 128GB",
        description: "The Samsung Galaxy S21 offers cutting-edge technology with a stunning display, powerful camera, and impressive performance. Perfect for those who want a phone that does it all.",
        price: 110,
        image: [p_img10],
        category: "Devices",
        subCategory: "Mobile Devices",
        sizes: ["Red", "Purple", "Black"],
        date: 1716622235448,
        bestseller: false
    },
    {
        _id: "aaaak",
        name: "HP EliteDisplay Monitor",
        description: "A professional-grade monitor with crystal-clear display and vibrant colors, perfect for office environments or home use. Featuring adjustable height and tilt for comfortable viewing.",
        price: 120,
        image: [p_img11],
        category: "Devices",
        subCategory: "Computers and Laptops",
        sizes: ["13'", "15'", "17'"],
        date: 1716623345448,
        bestseller: false
    },
    {
        _id: "aaaal",
        name: "Apple MacBook Pro 16",
        description: "Apple’s high-end MacBook Pro with a 16-inch Retina display, fast processing power, and ample storage. Ideal for professionals and creatives looking for a premium laptop experience.",
        price: 150,
        image: [p_img12],
        category: "Devices",
        subCategory: "Computers and Laptops",
        sizes: ["13'", "15'", "17'"],
        date: 1716624445448,
        bestseller: false
    },
    {
        _id: "aaaam",
        name: "Basic Wired Keyboard",
        description: "A reliable and simple wired keyboard designed for everyday use. With responsive keys and a durable build, it’s perfect for typing, working, and browsing.",
        price: 130,
        image: [p_img13],
        category: "Accessories",
        subCategory: "Computers and Laptops",
        sizes: ["S", "M", "L", "XL"],
        date: 1716625545448,
        bestseller: false
    },
    {
        _id: "aaaan",
        name: "Universal Power Adapter",
        description: "A versatile power adapter that can charge various devices, from laptops to phones, with multiple plug types and safety features, ensuring reliable and fast charging.",
        price: 160,
        image: [p_img14],
        category: "Components",
        subCategory: "Computers and Laptops",
        sizes: ["S", "M", "L", "XL"],
        date: 1716626645448,
        bestseller: false
    },
    {
        _id: "aaaao",
        name: "iPhone X 64GB",
        description: "The iPhone X combines luxury and performance with its edge-to-edge OLED display, Face ID, and powerful A11 Bionic chip. A classic design for those who demand excellence.",
        price: 140,
        image: [p_img15],
        category: "Devices",
        subCategory: "Mobile Devices",
        sizes: ["Red", "Purple", "Black"],
        date: 1716627745448,
        bestseller: false
    },
    {
        _id: "aaaap",
        name: "ChillPad Pro Laptop Cooler",
        description: "Keep your laptop cool during intense work or gaming sessions with this portable cooling fan. Featuring multiple fan speeds and a slim design, it’s perfect for on-the-go use.",
        price: 170,
        image: [p_img16],
        category: "Components",
        subCategory: "Computers and Laptops",
        sizes: ["S", "M", "L", "XL"],
        date: 1716628845448,
        bestseller: false
    },
    {
        _id: "aaaaq",
        name: "Lenovo Z6 Pro",
        description: "The Lenovo Z6 Pro offers a powerful performance with a stunning camera, long-lasting battery life, and a sleek design. It’s an ideal smartphone for both work and leisure.",
        price: 150,
        image: [p_img17],
        category: "Devices",
        subCategory: "Mobile Devices",
        sizes: ["Red", "Purple", "Black"],
        date: 1716629945448,
        bestseller: false
    },
    {
        _id: "aaaar",
        name: "ASUS TUF Gaming Motherboard",
        description: "A high-quality motherboard with exceptional durability, designed to handle the most demanding gaming setups. Featuring robust power delivery and extensive connectivity options.",
        price: 180,
        image: [p_img18],
        category: "Components",
        subCategory: "Computers and Laptops",
        sizes: ["S", "M", "L", "XL"],
        date: 1716631045448,
        bestseller: false
    },
    {
        _id: "aaaas",
        name: "8GB DDR3 RAM",
        description: "A dependable 8GB DDR3 RAM designed to optimize performance for everyday computing tasks. Enhance your computer’s multitasking capabilities with this high-quality memory.",
        price: 160,
        image: [p_img19],
        category: "Components",
        subCategory: "Computers and Laptops",
        sizes: ["S", "M", "L", "XL"],
        date: 1716632145448,
        bestseller: false
    },
    {
        _id: "aaaat",
        name: "Apple AirPods Pro",
        description: "These wireless earbuds offer superior sound quality, active noise cancellation, and a customizable fit, making them perfect for music lovers, commuters, and athletes alike.",
        price: 190,
        image: [p_img20],
        category: "Accessories",
        subCategory: "Mobile Devices",
        sizes: ["S", "M", "L", "XL"],
        date: 1716633245448,
        bestseller: false
    },
    {
        _id: "aaaau",
        name: "Curved Gaming Monitor",
        description: "Immerse yourself in gaming with this 27inch curved monitor that offers vibrant colors, ultra-fast response times, and an enhanced gaming experience. The perfect addition to any gaming setup.",
        price: 170,
        image: [p_img21],
        category: "Accessories",
        subCategory: "Gaming and Entertainment",
        sizes: ["13'", "15'", "17'"],
        date: 1716634345448,
        bestseller: false
    },
    {
        _id: "aaaav",
        name: "Silicone Phone Case (Various Colors)",
        description: "Protect your phone with these durable, flexible silicone phone cases available in a variety of colors. Soft to the touch and designed to provide a snug fit for your device.",
        price: 200,
        image: [p_img22],
        category: "Accessories",
        subCategory: "Mobile Devices",
        sizes: ["S", "M", "L", "XL"],
        date: 1716635445448,
        bestseller: false
    },
    {
        _id: "aaaaw",
        name: "ArcticFlow Cooling Fan",
        description: "A compact and efficient cooling fan designed to keep your laptop or PC cool. Featuring multiple adjustable speeds and whisper-quiet operation, it’s ideal for extended use.",
        price: 180,
        image: [p_img23],
        category: "Components",
        subCategory: "Computers and Laptops",
        sizes: ["S", "M", "L", "XL"],
        date: 1716636545448,
        bestseller: false
    },
    {
        _id: "aaaax",
        name: "MSI MAG B550 TOMAHAWK Motherboard",
        description: "A high-performance motherboard featuring advanced cooling solutions, robust power delivery, and compatibility with the latest processors, ideal for gamers and creators.",
        price: 210,
        image: [p_img24],
        category: "Components",
        subCategory: "Computers and Laptops",
        sizes: ["S", "M", "L", "XL"],
        date: 1716637645448,
        bestseller: false
    },
    {
        _id: "aaaay",
        name: "Logitech MX Master 3 Wireless Mouse",
        description: "A precision-crafted wireless mouse with ergonomic design, customizable buttons, and long battery life, perfect for professionals and enthusiasts.",
        price: 190,
        image: [p_img25],
        category: "Components",
        subCategory: "Computers and Laptops",
        sizes: ["S", "M", "L", "XL"],
        date: 1716638745448,
        bestseller: false
    },
    {
        _id: "aaaaz",
        name: "Oculus Quest 2 VR Headset",
        description: "Immerse yourself in virtual reality with the Oculus Quest 2, featuring stunning visuals, comfortable design, and a standalone setup for endless entertainment.",
        price: 220,
        image: [p_img26],
        category: "Accessories",
        subCategory: "Gaming and Entertainment",
        sizes: ["S", "M", "L", "XL"],
        date: 1716639845448,
        bestseller: false
    },
    {
        _id: "aaaba",
        name: "Universal Laptop Replacement Battery",
        description: "A reliable replacement battery designed to provide extended hours of usage and compatibility with various laptop models for uninterrupted productivity.",
        price: 200,
        image: [p_img27],
        category: "Components",
        subCategory: "Computers and Laptops",
        sizes: ["S", "M", "L", "XL"],
        date: 1716640945448,
        bestseller: false
    },
    {
        _id: "aaabb",
        name: "Sony PlayStation 5",
        description: "The ultimate gaming console, offering breathtaking graphics, lightning-fast load times, and an extensive library of games for the ultimate gaming experience.",
        price: 230,
        image: [p_img28],
        category: "Devices",
        subCategory: "Gaming and Entertainment",
        sizes: ["825GB", "1TB", "2TB"],
        date: 1716642045448,
        bestseller: false
    },
    {
        _id: "aaabc",
        name: "Ergonomic Adjustable Laptop Stand",
        description: "A durable, lightweight stand designed to elevate your laptop for better posture and cooling. Adjustable angles provide maximum comfort during extended use.",
        price: 210,
        image: [p_img29],
        category: "Accessories",
        subCategory: "Computers and Laptops",
        sizes: ["S", "M", "L", "XL"],
        date: 1716643145448,
        bestseller: false
    },
    {
        _id: "aaabd",
        name: "TurboCool Desk Fan",
        description: "A compact and powerful cooling fan designed to keep your workspace or gaming setup cool and quiet during long hours of use.",
        price: 240,
        image: [p_img30],
        category: "Components",
        subCategory: "Computers and Laptops",
        sizes: ["S", "M", "L", "XL"],
        date: 1716644245448,
        bestseller: false
    },
    {
        _id: "aaabe",
        name: "Samsung Galaxy Book Pro 360",
        description: "A premium convertible laptop with a sleek design, AMOLED display, and powerful performance, perfect for multitasking and creative work.",
        price: 220,
        image: [p_img31],
        category: "Devices",
        subCategory: "Computers and Laptops",
        sizes: ["13'", "15'", "17'"],
        date: 1716645345448,
        bestseller: false
    },
    {
        _id: "aaabf",
        name: "Apple Pro Display XDR",
        description: "A stunning 32-inch Retina 6K display with exceptional brightness, color accuracy, and resolution, ideal for creative professionals seeking perfection.",
        price: 250,
        image: [p_img32],
        category: "Devices",
        subCategory: "Computers and Laptops",
        sizes: ["13'", "15'", "17'"],
        date: 1716646445448,
        bestseller: false
    },
    {
        _id: "aaabg",
        name: "Corsair Vengeance 32GB DDR4 RAM",
        description: "A high-performance RAM module offering unmatched speed and reliability for gaming and resource-intensive applications.",
        price: 230,
        image: [p_img33],
        category: "Components",
        subCategory: "Computers and Laptops",
        sizes: ["S", "M", "L", "XL"],
        date: 1716647545448,
        bestseller: false
    },
    {
        _id: "aaabh",
        name: "SanDisk Ultra Dual USB Drive 64GB",
        description: "A compact, high-speed flash drive with dual connectors for easy file transfers between USB-A and USB-C devices.",
        price: 260,
        image: [p_img34],
        category: "Accessories",
        subCategory: "Computers and Laptops",
        sizes: ["S", "M", "L", "XL"],
        date: 1716648645448,
        bestseller: false
    },
    {
        _id: "aaabi",
        name: "Xbox Series X",
        description: "A next-generation gaming console featuring true 4K gameplay, faster load times, and a vast library of games for endless entertainment.",
        price: 240,
        image: [p_img35],
        category: "Accessories",
        subCategory: "Gaming and Entertainment",
        sizes: ["S", "M", "L", "XL"],
        date: 1716649745448,
        bestseller: false
    },
    {
        _id: "aaabj",
        name: "Logitech C920 HD Pro Webcam",
        description: "A high-definition webcam with crystal-clear video quality, dual microphones, and low-light correction for professional-grade streaming and video calls.",
        price: 270,
        image: [p_img36],
        category: "Accessories",
        subCategory: "Gaming and Entertainment",
        sizes: ["S", "M", "L", "XL"],
        date: 1716650845448,
        bestseller: false
    },
    {
        _id: "aaabk",
        name: "Logitech M185 Wireless Mouse",
        description: "A compact and reliable wireless mouse offering seamless connectivity and long battery life, ideal for both work and travel.",
        price: 250,
        image: [p_img37],
        category: "Accessories",
        subCategory: "Computers and Laptops",
        sizes: ["S", "M", "L", "XL"],
        date: 1716651945448,
        bestseller: false
    },
    {
        _id: "aaabl",
        name: "HP Pavilion 15",
        description: "A versatile and powerful laptop featuring a sleek design, fast processing speeds, and a long-lasting battery for everyday productivity.",
        price: 280,
        image: [p_img38],
        category: "Devices",
        subCategory: "Computers and Laptops",
        sizes: ["13'", "15'", "17'"],
        date: 1716653045448,
        bestseller: false
    },
    {
        _id: "aaabm",
        name: "HP Spectre x360",
        description: "A premium convertible laptop with a stunning touchscreen display, ultra-slim design, and exceptional performance for multitasking and creative tasks.",
        price: 260,
        image: [p_img39],
        category: "Devices",
        subCategory: "Computers and Laptops",
        sizes: ["13'", "15'", "17'"],
        date: 1716654145448,
        bestseller: false
    },
    {
        _id: "aaabn",
        name: "Alienware m15 R6 Gaming Laptop",
        description: "A cutting-edge gaming laptop with advanced graphics, customizable RGB lighting, and superior cooling, designed for hardcore gamers.",
        price: 290,
        image: [p_img40],
        category: "Devices",
        subCategory: "Gaming and Entertainment",
        sizes: ["13'", "15'", "17'"],
        date: 1716655245448,
        bestseller: false
    },
    {
        _id: "aaabo",
        name: "Apple MacBook Air M2",
        description: "A lightweight and powerful laptop with the Apple M2 chip, delivering excellent performance, stunning display, and all-day battery life.",
        price: 270,
        image: [p_img41],
        category: "Devices",
        subCategory: "Computers and Laptops",
        sizes: ["13'", "15'", "17'"],
        date: 1716656345448,
        bestseller: false
    },
    {
        _id: "aaabp",
        name: "Anker PowerCore 10000 Portable Charger",
        description: "A compact and high-capacity power bank that charges devices quickly and efficiently, perfect for travel or emergency use.",
        price: 300,
        image: [p_img42],
        category: "Components",
        subCategory: "Computers and Laptops",
        sizes: ["S", "M", "L", "XL"],
        date: 1716657445448,
        bestseller: false
    },
    {
        _id: "aaabq",
        name: "Apple Pencil 2nd Generation",
        description: "A precision stylus pen for seamless note-taking, drawing, and editing on compatible Apple devices. Features magnetic attachment for easy storage.",
        price: 280,
        image: [p_img43],
        category: "Components",
        subCategory: "Mobile Devices",
        sizes: ["S", "M", "L", "XL"],
        date: 1716658545448,
        bestseller: false
    },
    {
        _id: "aaabr",
        name: "Respawn 110 Gaming Chair",
        description: "A comfortable and ergonomic gaming chair with reclining functionality, padded armrests, and adjustable lumbar support for long gaming sessions.",
        price: 310,
        image: [p_img44],
        category: "Accessories",
        subCategory: "Gaming and Entertainment",
        sizes: ["S", "M", "L", "XL"],
        date: 1716659645448,
        bestseller: false
    },
    {
        _id: "aaabs",
        name: "Nintendo Switch OLED",
        description: "A versatile gaming console featuring a vibrant OLED screen, detachable controllers, and a library of family-friendly and multiplayer games.",
        price: 290,
        image: [p_img45],
        category: "Devices",
        subCategory: "Gaming and Entertainment",
        sizes: ["S", "M", "L", "XL"],
        date: 1716660745448,
        bestseller: false
    },
    {
        _id: "aaabt",
        name: "HyperX Cloud II Gaming Headset",
        description: "A durable and comfortable headset with 7.1 surround sound, noise-canceling microphone, and rich audio for an immersive gaming experience.",
        price: 320,
        image: [p_img46],
        category: "Devices",
        subCategory: "Gaming and Entertainment",
        sizes: ["S", "M", "L", "XL"],
        date: 1716661845448,
        bestseller: false
    },
    {
        _id: "aaabu",
        name: "Kingston Fury Beast 16GB RAM",
        description: "A performance-enhancing RAM module designed for speed and efficiency, perfect for gamers and high-performance computing needs.",
        price: 300,
        image: [p_img47],
        category: "Components",
        subCategory: "Mobile Devices",
        sizes: ["S", "M", "L", "XL"],
        date: 1716662945448,
        bestseller: false
    },
    {
        _id: "aaabv",
        name: "Sony PlayStation 4 Slim",
        description: " A sleek and compact gaming console offering a fantastic library of games, stunning visuals, and seamless online play.",
        price: 330,
        image: [p_img48],
        category: "Devices",
        subCategory: "Gaming and Entertainment",
        sizes: ["825GB", "1TB", "2TB"],
        date: 1716664045448,
        bestseller: false
    },
    {
        _id: "aaabw",
        name: "Raspberry Pi Camera Module 3",
        description: "A high-quality camera module compatible with Raspberry Pi boards, ideal for photography, video streaming, or AI projects.",
        price: 310,
        image: [p_img49],
        category: "Components",
        subCategory: "Mobile Devices",
        sizes: ["S", "M", "L", "XL"],
        date: 1716665145448,
        bestseller: false
    },
    {
        _id: "aaabx",
        name: "Raspberry Pi HQ Camera Module",
        description: "A professional-grade camera module for Raspberry Pi with an interchangeable lens system for advanced imaging projects.",
        price: 340,
        image: [p_img50],
        category: "Components",
        subCategory: "Mobile Devices",
        sizes: ["S", "M", "L", "XL"],
        date: 1716666245448, bestseller: false
    },
    {
        _id: "aaaby",
        name: "Corsair K95 RGB Mechanical Keyboard",
        description: "A premium mechanical keyboard with dynamic RGB lighting, customizable macros, and responsive keys for an exceptional gaming and typing experience.",
        price: 320,
        image: [p_img51],
        category: "Accessories",
        subCategory: "Gaming and Entertainment",
        sizes: ["S", "M", "L", "XL"],
        date: 1716667345448,
        bestseller: false
    },
    {
        _id: "aaabz",
        name: "HTC Vive Pro VR Headset",
        description: "A professional-grade VR headset with high-resolution visuals, immersive audio, and comfortable design for an unparalleled virtual reality experience.",
        price: 350,
        image: [p_img52],
        category: "Devices",
        subCategory: "Gaming and Entertainment",
        sizes: ["S", "M", "L", "XL"],
        date: 1716668445448,
        bestseller: false
    }

]