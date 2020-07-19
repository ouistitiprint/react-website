export interface IPerkData {
    name: string,
    type: "tote" | "poster" | "stickers" | "cards",
    description: string,
    value: {
        good: number,
        shipping: number,
        donation: number,
    },
    groupArtworks: boolean,
}

export const tote: IPerkData = {
    name: "Tote Bag",
    type: "tote",
    description: "The perfect tote bag to show your support when going outside.",
    value: {
        good: 20,
        shipping: 0,
        donation: 5,
    },
    groupArtworks: false,
}

export const poster: IPerkData = {
    name: "A4 Poster",
    type: "poster",
    description: "The perfect poster to remind us and the world that the fight is important.",
    value: {
        good: 30,
        shipping: 0,
        donation: 10,
    },
    groupArtworks: false,
}

export const stickers: IPerkData = {
    name: "5x Stickers",
    type: "stickers",
    description: "The perfect stickers to show your support.",
    value: {
        good: 15,
        shipping: 0,
        donation: 3,
    },
    groupArtworks: true,
}

export const cards: IPerkData = {
    name: "Complete Collection",
    type: "cards",
    description: "All the artworks of the campaign printed on high quality cards with a matte finish.",
    value: {
        good: 8,
        shipping: 0,
        donation: 2,
    },
    groupArtworks: true,
}