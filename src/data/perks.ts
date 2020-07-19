export interface IPerkData {
    name: string,
    type: "tote" | "poster" | "stickers" | "cards",
    description: string,
    price: number,
    groupArtworks: boolean,
}

export const tote: IPerkData = {
    name: "Tote Bag",
    type: "tote",
    description: "The perfect tote bag to show your support when going outside.",
    price: 20,
    groupArtworks: false,
}

export const poster: IPerkData = {
    name: "A4 Poster",
    type: "poster",
    description: "The perfect poster to remind us and the world that the fight is important.",
    price: 30,
    groupArtworks: false,
}

export const stickers: IPerkData = {
    name: "6x Stickers",
    type: "stickers",
    description: "The perfect stickers to show your support.",
    price: 15,
    groupArtworks: true,
}

export const cards: IPerkData = {
    name: "Complete Collection",
    type: "cards",
    description: "All the artworks of the campaign printed on high quality cards with a matte finish.",
    price: 8,
    groupArtworks: true,
}