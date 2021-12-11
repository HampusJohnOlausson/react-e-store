export interface Product {
    id: number,
    title: string, 
    info: string, 
    price: number, 
    image: string,
    size: number
}

export const ProductData: Product[] = [
    {
        id: 1,
        title: 'Eytys Odessa Canvas Black', 
        info: 'The brand new Eytys Odessa silhouette is a brutalist interpretation of 50´s athletic shoes. A vegan-friendly, easy going lace-up style.', 
        price: 1599, 
        image: 'https://shelta.se/pub_images/original/EYT-OACB_1x.jpg?timestamp=1613295294',
        size: 0
    },
    {
        id: 2,
        title: 'The North Face EQBC Slide Vintage', 
        info: 'Inspired by the tried-and-true materials that The North Face use in their equipment collection, the street-style EQBC Slide is ideal for everything from chilling out to exploring new environments.', 
        price: 599, 
        image: 'https://shelta.se/pub_images/original/NF0A46B3L0E1_1.jpg?timestamp=1612434569', 
        size: 0
    },
    {
        id: 3,
        title: 'Nike Air Presto Pine Green Naija', 
        info: 'The team Nigeria football outfit from 2018 sold out all over the planet during the World Cup. This Nike Presto pays homage to the international Nigerian football team.', 
        price: 1399, 
        image: 'https://shelta.se/pub_images/original/CJ1229-300_1.jpg', 
        size: 0
    },
    {
        id: 4,
        title: 'Reebok Instapump Fury OG NM', 
        info: 'Do you wanna stroll around looking light Buzz Lightyear, buy these awesome lightning looking kicks!', 
        price: 1799, 
        image: 'https://shelta.se/pub_images/original/FV1577_1.jpg',

        size: 0
    },
    {
        id: 5,
        title: 'Jordan Air 1 Mid Black Gym Red', 
        info: 'Michael Jordans old school classics, with a new twist of black white and red combination. These will absolutely make you the coolest cat in town', 
        price: 1199, 
        image: 'https://shelta.se/pub_images/original/554724-069_1.jpg', 
        size: 0
    },
    {
        id: 6,
        title: 'Adidas Yeezy 350 V2 Yeezreel', 
        info: 'This 350 V2 is reminiscent of the Glow colorway that released in early 2019, but sets itself apart with the addition of new tones woven in the Primeknit upper. This model was released in both reflective and non-reflective variations.', 
        price: 2199, 
        image: 'https://shelta.se/pub_images/original/yeezreel.jpg', 
        size: 0
    },
    {
        id: 7,
        title: 'Clarks Originals x Wu Wear Wallabe', 
        info: 'Clarks Originals collaborates with Wu-Tang Clan´s nostalgic Wu-Wear clothing line. Upper in nubuck suede, and an originals Clarks crepe sole.', 
        price: 1699, 
        image: 'https://shelta.se/pub_images/original/26147073_1.jpg', 
        size: 0
    },
    {
        id: 8,
        title: 'Adidas Originals Holi Stan Smith MC', 
        info: 'Accompanying the adidas x Pharrell Williams "HOLI Pack" comes this Stan Smith shoe in a chalk coral pink / purple upper with Primeknit technology and a Breathable, lightweight upper with perforated 3-Stripes in honor of the Holi Festival in India.', 
        price: 1299, 
        image: 'https://shelta.se/pub_images/original/da9612_1.jpg', 
        size: 0
    }
]