export interface IPerkData {
    name: string,
    description: string,
    price: number,
    groupArtworks: boolean,
}

export const tote: IPerkData = {
    name: "tote",
    description: "The perfect tote bag to show your support when going outside.",
    price: 20,
    groupArtworks: false,
}

export const poster: IPerkData = {
    name: "poster",
    description: "The perfect poster to remind us and the world that the fight is important.",
    price: 30,
    groupArtworks: false,
}

export const stickers: IPerkData = {
    name: "stickers",
    description: "The perfect stickers to show your support.",
    price: 15,
    groupArtworks: true,
}

export const cards: IPerkData = {
    name: "cards",
    description: "The smallest support but the only one with the complete collection of cards.",
    price: 8,
    groupArtworks: true,
}