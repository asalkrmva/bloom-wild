const products = [
    {
        id: 1,
        img: 'https://www.bloomandwild.com/cdn-cgi/image/width=960,height=960,fit=cover,format=auto,quality=75/https://assets-0.bloomandwild.com/addon-carousel/the-anna-lb/12b299db-cabd-40d0-bcb6-4edee7a4558d.jpg',
        title: 'The Anna',
        subtitle: 'Letterbox Flowers',
        review: 7947,
        price: 26,
        category: 'flowers'
    },
    {
        id: 2,
        img: 'https://www.bloomandwild.com/cdn-cgi/image/width=960,height=960,fit=cover,format=auto,quality=75/https://assets-0.bloomandwild.com/letterbox-main/the-birthday-afternoon-tea-uic/07bef1bb-de75-452a-bfd9-df17d709c359.jpeg',
        title: 'The Birthday Afternoon Tea',
        subtitle: 'Luxury Gifts',
        review: 10,
        price: 36,
        category: 'birthday'
    },
    {
        id: 3,
        img: 'https://www.bloomandwild.com/cdn-cgi/image/width=960,height=960,fit=cover,format=auto,quality=75/https://assets-0.bloomandwild.com/letterbox-main/the-marshmallow-fizz-gift-set-uic/8457c4f7-cdd6-4ae1-af31-d09a147a9004.jpg',
        title: "The 'Little Toast to You' Gift Set",
        subtitle: 'Gifts',
        review: 1,
        price: 47,
        category: 'food&drink'
    },
    {
        id: 4,
        img: 'https://www.bloomandwild.com/cdn-cgi/image/width=960,height=960,fit=cover,format=auto,quality=75/https://assets-0.bloomandwild.com/letterbox-main/the-peach-orchid-butters/99020438-6fe9-4b3c-99bd-e195e3d5d383.jpeg',
        title: 'The Peach Orchid',
        subtitle: 'House Plants',
        review: 38,
        price: 44,
        category: 'plants'
    },
    {
        id: 5,
        img: 'https://www.bloomandwild.com/cdn-cgi/image/width=960,height=960,fit=cover,format=auto,quality=75/https://assets-0.bloomandwild.com/letterbox-main/the-marlene-uic/47d4020a-8b6a-4ff8-9857-48c3b8b3867d.png',
        title: 'The Marlene',
        subtitle: 'Hand-tied flowers',
        review: 20,
        price: 46,
        category: 'flowers'
    },
    {
        id: 6,
        img: 'https://www.bloomandwild.com/cdn-cgi/image/width=960,height=960,fit=cover,format=auto,quality=75/https://assets-0.bloomandwild.com/letterbox-main/the-nell-letterbox-birthday-cake/b15a3422-8be1-4a74-91cd-327ae7e38001.jpg',
        title: 'The Birthday Bouquet & Cake Bundle',
        subtitle: 'Flowers & Gifts',
        review: 67,
        price: 51,
        category: 'birthday'
    },
    {
        id: 7,
        img: 'https://www.bloomandwild.com/cdn-cgi/image/width=960,height=960,fit=cover,format=auto,quality=75/https://assets-0.bloomandwild.com/letterbox-main/the-daylesford-organic-hamper-2026/4f027dc2-64ba-4644-ac61-39a6b35f7ae1.jpeg',
        title: 'The Daylesford Hamper',
        subtitle: 'Gifts',
        review: 2,
        price: 39,
        category: 'food&drink'
    },
    {
        id: 8,
        img: 'https://www.bloomandwild.com/cdn-cgi/image/width=960,height=960,fit=cover,format=auto,quality=75/https://assets-0.bloomandwild.com/letterbox-main/the-pachira-money-tree-flam-uic/5662bc44-a6ba-471e-8f2d-47f2b46336eb.jpeg',
        title: 'The Pachiro Money Tree',
        subtitle: 'House Plants',
        review: 31,
        price: 42,
        category: 'plants'
    },
    {
        id: 9,
        img: 'https://www.bloomandwild.com/cdn-cgi/image/width=960,height=960,fit=cover,format=auto,quality=75/https://assets-0.bloomandwild.com/letterbox-main/the-yui-ht-uic/56bef448-3c90-4e27-9683-f923564b8056.jpeg',
        title: 'The Yui',
        subtitle: 'Hand-tied flowers',
        review: 435,
        price: 37,
        category: 'flowers'
    },
    {
        id: 10,
        img: 'https://www.bloomandwild.com/cdn-cgi/image/width=960,height=960,fit=cover,format=auto,quality=75/https://assets-0.bloomandwild.com/letterbox-main/the-hallie-mini-box-of-brownies-new/7f7f823f-e20b-445d-9ba3-d244c9e6f425.jpeg',
        title: 'The Summer Birthday Blooms',
        subtitle: 'Flowers & Gifts',
        review: 11,
        price: 38,
        category: 'birthday'
    },
    {
        id: 11,
        img: 'https://www.bloomandwild.com/cdn-cgi/image/width=960,height=960,fit=cover,format=auto,quality=75/https://assets-0.bloomandwild.com/letterbox-main/the-little-hug-through-the-letterbox-v2/99184389-9898-43c0-9513-16eae05d0d40.jpg',
        title: 'The Little Hug Through the Letterbox',
        subtitle: 'Letterbox Gifts',
        review: 150,
        price: 22,
        category: 'food&drink'
    },
    {
        id: 12,
        img: 'https://www.bloomandwild.com/cdn-cgi/image/width=960,height=960,fit=cover,format=auto,quality=75/https://assets-0.bloomandwild.com/letterbox-main/the-blue-hydrangea-uic/19b7efc7-bcbf-4374-bd13-e4b3cc0fc709.jpeg',
        title: 'The Blue Hydrangea',
        subtitle: 'House Plants',
        review: 5,
        price: 38,
        category: 'plants'
    },
    {
        id: 13,
        img: 'https://www.bloomandwild.com/cdn-cgi/image/width=960,height=960,fit=cover,format=auto,quality=75/https://assets-0.bloomandwild.com/letterbox-main/the-faye/39e98352-48e2-4eb2-b12e-b71c7a5234bc.jpg',
        title: 'The Faye',
        subtitle: 'Letterbox Flowers',
        review: 362,
        price: 28,
        category: 'flowers'
    },
    {
        id: 14,
        img: 'https://www.bloomandwild.com/cdn-cgi/image/width=960,height=960,fit=cover,format=auto,quality=75/https://assets-0.bloomandwild.com/letterbox-main/the-nyla-and-whispering-angel/a47eaaec-135b-47a9-8527-cccaf71dc905.jpeg',
        title: 'The Virgo Season Special',
        subtitle: 'Flowers & Gifts',
        review: 82,
        price: 50,
        category: 'birthday'
    },
    {
        id: 15,
        img: 'https://www.bloomandwild.com/cdn-cgi/image/width=960,height=960,fit=cover,format=auto,quality=75/https://assets-0.bloomandwild.com/letterbox-main/the-cream-tea-for-two-mini/bc3e91af-062c-46ba-80b7-8d10e39d154b.jpg',
        title: 'The Mini Cream Tea',
        subtitle: 'Gifts',
        review: 26,
        price: 28,
        category: 'food&drink'
    },
    {
        id: 16,
        img: 'https://www.bloomandwild.com/cdn-cgi/image/width=960,height=960,fit=cover,format=auto,quality=75/https://assets-0.bloomandwild.com/letterbox-main/lily-anthurium-uic/67d4386e-db13-48ae-8345-f4b0e614bc2c.jpeg',
        title: 'The Lily Anthurium',
        subtitle: 'House Plants',
        review: 27,
        price: 35,
        category: 'plants'
    },
    {
        id: 17,
        img: 'https://www.bloomandwild.com/cdn-cgi/image/width=960,height=960,fit=cover,format=auto,quality=75/https://assets-0.bloomandwild.com/letterbox-main/the-alejo-lb/d827d38b-5bac-4965-80c8-3f5c9ad6198e.jpg',
        title: 'The Alejo',
        subtitle: 'Letterbox Flowers',
        review: 71,
        price: 37,
        category: 'flowers'
    },
    {
        id: 18,
        img: 'https://www.bloomandwild.com/cdn-cgi/image/width=960,height=960,fit=cover,format=auto,quality=75/https://assets-0.bloomandwild.com/letterbox-main/the-marlene-uic/47d4020a-8b6a-4ff8-9857-48c3b8b3867d.png',
        title: 'The Marlene',
        subtitle: 'Hand-tied Flowers',
        review: 20,
        price: 46,
        category: 'birthday'
    },
    {
        id: 19,
        img: 'https://www.bloomandwild.com/cdn-cgi/image/width=960,height=960,fit=cover,format=auto,quality=75/https://assets-0.bloomandwild.com/letterbox-main/the-spring-letterbox-afternoon-tea/41bc86c3-68cc-4d83-a507-b896eaf39631.jpg',
        title: 'The Summer Letterbox Afternoon Tea',
        subtitle: 'Gifts',
        review: 19,
        price: 25,
        category: 'food&drink'
    },
    {
        id: 20,
        img: 'https://www.bloomandwild.com/cdn-cgi/image/width=960,height=960,fit=cover,format=auto,quality=75/https://assets-0.bloomandwild.com/letterbox-main/the-calla-lily-uic/765fb8fb-e632-4bd2-a15c-efc5ef42afc7.jpeg',
        title: 'The Calla Lily',
        subtitle: 'House Plants',
        review: 33,
        price: 30,
        category: 'plants'
    },
    {
        id: 21,
        img:'https://www.bloomandwild.com/cdn-cgi/image/width=960,height=960,fit=cover,format=auto,quality=75/https://assets-0.bloomandwild.com/letterbox-main/our-florist-s-pick-2609/ca3920cc-57e4-4a67-8dc7-3d8e3e7ba59b.jpg',
        title: "Our Florist's Pick",
        subtitle: 'Letterbox Flowers',
        review: 413,
        price: 34,
        category: 'flowers'
    },
    {
        id: 22,
        img: 'https://www.bloomandwild.com/cdn-cgi/image/width=960,height=960,fit=cover,format=auto,quality=75/https://assets-0.bloomandwild.com/letterbox-main/the-peacock-plant-m-uic/a21140a9-b2ba-4265-8466-a695d2e78031.jpeg',
        title: 'The Peacock Plant',
        subtitle: 'House Plants',
        review: 53,
        price: 35,
        category: 'plants'
    },
    {
        id: 23,
        img: 'https://www.bloomandwild.com/cdn-cgi/image/width=960,height=960,fit=cover,format=auto,quality=75/https://assets-0.bloomandwild.com/letterbox-main/the-letterbox-birthday-cake/cc6c45da-9bca-4ed2-9987-2b1b77536c04.jpg',
        title: 'The Letterbox Birthday Cake',
        subtitle: 'Letterbox Flowers',
        review: 2,
        price: 25,
        category: 'birthday'
    },
    {
        id: 24,
        img: 'https://www.bloomandwild.com/cdn-cgi/image/width=960,height=960,fit=cover,format=auto,quality=75/https://assets-0.bloomandwild.com/letterbox-main/the-birthday-chocolate-cherry-brownies/689ad775-8857-461d-b5aa-471aa64afe41.jpeg',
        title: 'The Happy Birthday Chocolate Cherry Brownies',
        subtitle: 'Gifts',
        review: 1,
        price: 19,
        category: 'food&drink'
    },
    {
        id: 25,
        img: 'https://www.bloomandwild.com/cdn-cgi/image/width=960,height=960,fit=cover,format=auto,quality=75/https://assets-0.bloomandwild.com/letterbox-main/the-citrus-tree/d5f591bd-2dc1-490b-8859-472ebcba7f63.jpg',
        title: 'The Lemon Tree',
        subtitle: 'House Plants',
        review: 62,
        price: 46,
        category: 'plants'
    },
    {
        id: 26,
        img: 'https://www.bloomandwild.com/cdn-cgi/image/width=960,height=960,fit=cover,format=auto,quality=75/https://assets-0.bloomandwild.com/letterbox-main/the-ramona-ht/9cac3ded-4d52-4515-8a2b-3cf9a655d2cd.jpg',
        title: 'The Ramona',
        subtitle: 'Hand-tied Flowers',
        review: 12,
        price: 41,
        category: 'flowers'
    },
    {
        id: 27,
        img: 'https://www.bloomandwild.com/cdn-cgi/image/width=960,height=960,fit=cover,format=auto,quality=75/https://assets-0.bloomandwild.com/letterbox-main/the-faye-and-birthday-biscuit/90fb0a68-0fa1-45ef-a940-ac8e26011c31.jpg',
        title: 'The Birthday Blooms & Biscuit',
        subtitle: 'Flowers & Gifts',
        review: 8,
        price: 36,
        category: 'birthday'
    },
    {
        id: 28,
        img: 'https://www.bloomandwild.com/cdn-cgi/image/width=960,height=960,fit=cover,format=auto,quality=75/https://assets-0.bloomandwild.com/letterbox-main/the-red-wine-nibbles-hamper-2026/9ac06eb4-82ee-414b-9b42-34bf3b9caf86.jpeg',
        title: 'The Big Night In Box',
        subtitle: 'Gifts',
        review: 2,
        price: 40,
        category: 'food&drink'
    },
    {
        id: 29,
        img: 'https://www.bloomandwild.com/cdn-cgi/image/width=960,height=960,fit=cover,format=auto,quality=75/https://assets-0.bloomandwild.com/letterbox-main/the-waterlily-orchid/5bd03874-87be-4679-8e3c-517f1ff47cb3.jpeg',
        title: 'The Waterlily Orchid',
        subtitle: 'House Plants',
        review: 7,
        price: 42,
        category: 'plants'
    },
    {
        id: 30,
        img: 'https://www.bloomandwild.com/cdn-cgi/image/width=960,height=960,fit=cover,format=auto,quality=75/https://assets-0.bloomandwild.com/letterbox-main/the-hattie/28dc85ac-4ea9-4db7-914f-8eb85bbdfde8.jpg',
        title: 'The Hadley',
        subtitle: 'Dried Flower',
        review: 26,
        price: 39,
        category: 'flowers'
    },
    {
        id: 31,
        img: 'https://www.bloomandwild.com/cdn-cgi/image/width=960,height=960,fit=cover,format=auto,quality=75/https://assets-0.bloomandwild.com/letterbox-main/the-claire-fin/32e16b88-397a-4674-8634-7ee3936c72d5.jpg',
        title: 'The Claire',
        subtitle: 'Letterbox Flowers',
        review: 20,
        price: 34,
        category: 'birthday'
    },
    {
        id: 32,
        img: 'https://www.bloomandwild.com/cdn-cgi/image/width=960,height=960,fit=cover,format=auto,quality=75/https://assets-0.bloomandwild.com/letterbox-main/the-letterbox-blondies/ec3640ab-f8a2-442e-8fda-0598cbd983ab.jpg',
        title: "The 'Hug in Post' Letterbox Blondies",
        subtitle: 'Gifts',
        review: 6,
        price: 22,
        category: 'food&drink'
    },
    {
        id: 33,
        img: 'https://www.bloomandwild.com/cdn-cgi/image/width=960,height=960,fit=cover,format=auto,quality=75/https://assets-0.bloomandwild.com/letterbox-main/the-marbled-pink-rose-2025-summer-stripe-pot-pink/975d9af7-b127-46c6-b121-dfffb3eeccf3.jpeg',
        title: 'The Marbled Pink Rose & Striped Pot',
        subtitle: 'Plant & Gift',
        review: 2,
        price: 44,
        category: 'plants'
    },
    {
        id: 34,
        img: 'https://www.bloomandwild.com/cdn-cgi/image/width=960,height=960,fit=cover,format=auto,quality=75/https://assets-0.bloomandwild.com/letterbox-main/the-caro/35a895c0-053f-4c28-9830-8e8641291430.jpg',
        title: 'The Caro',
        subtitle: 'Letterbox Flowers',
        review: 4,
        price: 37,
        category: 'flowers'
    },
    {
        id: 35,
        img: 'https://www.bloomandwild.com/cdn-cgi/image/width=960,height=960,fit=cover,format=auto,quality=75/https://assets-0.bloomandwild.com/letterbox-main/the-big-birthday-hamper/cdf8526b-9db7-4b94-b8a3-f6a73c5c5a78.jpg',
        title: 'The September Birthday Hamper',
        subtitle: 'Gifts',
        review: 2,
        price: 64,
        category: 'birthday'
    },
    {
        id: 36,
        img: 'https://www.bloomandwild.com/cdn-cgi/image/width=960,height=960,fit=cover,format=auto,quality=75/https://assets-0.bloomandwild.com/letterbox-main/the-grazing-hamper/d201f4ea-4029-40ef-8b17-6af9d2a5af01.jpg',
        title: 'The Picnic in a Box',
        subtitle: 'Gifts',
        review: 4,
        price: 37,
        category: 'food&drink'
    }
];

export default products;