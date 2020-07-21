import picturePriya from "./images/artists/priya-profile.jpg"
import pictureJohari from "./images/artists/johari-profile.jpg"

export interface IArtistsData {
    name: string,
    description: string,
    picture: string,
    listSocial:{ name: string; url: string; }[],
}

export const priyaducommun: IArtistsData =
    {
        name: "Priya Ducommun",
        description: "Priya has just returned from five years in Bangalore (South India). A storyteller first, her work engages with what she believes is worth fighting for and participates in being a changemaker.",
        picture: picturePriya,
        listSocial: [{
            name: "instagram",
            url: "https://www.instagram.com/i.dont.drink_coffee/"
        }]
    };

export const joharistone: IArtistsData =
{
    name: "Johari Stone",
    description: "Johari is a 19-year-old freelance graphic designer from Atlanta, GA. She owns Faithful Creations - a black-owned business and is the co-founder of Humble Dreamers Records.",
    picture: pictureJohari,
    listSocial: [{
        name: "instagram",
        url: "https://www.instagram.com/faithful.creations1/"
    }]
};