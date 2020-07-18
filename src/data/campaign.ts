import logoBLM from './images/campaign/BLM_logo.png'; 
import * as artists from './artists';
import * as artworks from './artworks';

export interface ICampaignData {
    name: string,
    title: string,
    subtitle: string,
    foundation: {
        name: string,
        website: string,
        logo: string,
    },
    startDate: Date,
    endDate: Date,
    description: string,
    artworks:artworks.IArtworksData[],
    artists:artists.IArtistsData[],
}

export const blm: ICampaignData =
    {
        name: "BLM Campaign",
        title: "Black Lifes Matter",
        subtitle: "Take Action. Support Black Lives Matter.",
        foundation: {
            name: "Black Lives Matter",
            website: "https://blacklivesmatter.com/",
            logo: logoBLM,
        },
        startDate: new Date(2020, 6, 1, 0, 0, 0, 0),
        endDate: new Date(2020, 6, 31, 23, 59, 59, 0),
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rhoncus tortor eget erat euismod feugiat non sit amet quam. Quisque vel nisl sit amet metus semper laoreet. Sed venenatis hendrerit lorem, sed scelerisque tortor accumsan non. Phasellus efficitur turpis sed molestie mollis. Ut erat ex, congue ac dignissim nec, facilisis eu metus. Mauris risus dolor, vehicula eget dapibus nec, scelerisque ut dolor. Donec lacinia diam sed risus condimentum, a efficitur quam ultricies. Suspendisse potenti. Duis pellentesque purus ac ullamcorper interdum.",
        artworks:[artworks.kobeBryant, artworks.oluwaytoyinSalau, artworks.camilleAumontCarnel, artworks.jaeAdrianaParmer, artworks.amandineGay, artworks.blmStickers, artworks.blmCards],
        artists:[artists.priya, artists.johari],
    };