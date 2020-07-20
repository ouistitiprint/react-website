export function getTotalPrice (perk: IPerkData): (number) {
    return Object.values(perk.value).reduce((totalPrice, value) => totalPrice + value ,0);
}

export interface IPerkData {
    name: string,
    type: "tote" | "poster" | "stickers" | "cards",
    description: string,
    value: {
        product: number,
        shipping: number,
        donation: number,
    }, 
    currencyCode: string,
    calcTotalPrice: (perk: IPerkData) => number,
    groupArtworks: boolean,
}

export const tote: IPerkData = {
    name: "Tote Bag",
    type: "tote",
    description: "The perfect tote bag to show your support when going outside.",
    value: {
        product: 20,
        shipping: 0,
        donation: 5,
    },
    currencyCode: '€',
    calcTotalPrice: getTotalPrice,
    groupArtworks: false,
}

export const poster: IPerkData = {
    name: "A4 Poster",
    type: "poster",
    description: "The perfect poster to remind us and the world that the fight is important.",
    value: {
        product: 30,
        shipping: 0,
        donation: 10,
    },
    currencyCode: '€',
    calcTotalPrice: getTotalPrice,
    groupArtworks: false,
}

export const stickers: IPerkData = {
    name: "5x Stickers",
    type: "stickers",
    description: "The perfect stickers to show your support.",
    value: {
        product: 15,
        shipping: 0,
        donation: 3,
    },
    currencyCode: '€',
    calcTotalPrice: getTotalPrice,
    groupArtworks: true,
}

export const cards: IPerkData = {
    name: "Complete Collection",
    type: "cards",
    description: "All the artworks of the campaign printed on high quality cards with a matte finish.",
    value: {
        product: 8,
        shipping: 0,
        donation: 2,
    },
    currencyCode: '€',
    calcTotalPrice: getTotalPrice,
    groupArtworks: true,
}