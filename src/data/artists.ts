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
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rhoncus tortor eget erat euismod feugiat non sit amet quam. Quisque vel nisl sit amet metus semper laoreet.",
        picture: picturePriya,
        listSocial: [{
            name: "instagram",
            url: "https://www.instagram.com/i.dont.drink_coffee/"
        }]
    };

export const joharistone: IArtistsData =
{
    name: "Johari Stone",
    description: "Hello, my name is Johari Stone and I am a 19-year-old graphic designer from Atlanta, GA.",
    picture: pictureJohari,
    listSocial: [{
        name: "instagram",
        url: "https://www.instagram.com/jxharis/"
    }]
};