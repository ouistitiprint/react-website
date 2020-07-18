import blm_logo from './images/campaign/blm_logo.png'; 
import blm_illustration from './images/campaign/blm_illustration.png';
import * as artists from './artists';
import * as artworks from './artworks';
import * as perks from './perks';

export interface ICampaignData {
    name: string,
    title: string,
    subtitle: string,
    illustration: string,
    foundation: {
        name: string,
        website: string,
        logo: string,
    },
    startDate: Date,
    endDate: Date,
    description: string,
    perksDescription: string,
    perks: IPerkCampaign[],
    artworks:artworks.IArtworksData[],
    artists:artists.IArtistsData[],
}

export interface IPerkCampaign {
    perk: perks.IPerkData,
    defaultArtwork: artworks.IArtworksData,
    artworks: artworks.IArtworksData[],
}

export const blm: ICampaignData =
    {
        name: "BLM Campaign",
        title: "Black Lives Matter",
        subtitle: "Take Action. Support Black Lives Matter.",
        illustration: blm_illustration,
        foundation: {
            name: "Black Lives Matter",
            website: "https://blacklivesmatter.com/",
            logo: blm_logo,
        },
        startDate: new Date(2020, 6, 1, 0, 0, 0, 0),
        endDate: new Date(2020, 6, 31, 23, 59, 59, 0),
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rhoncus tortor eget erat euismod feugiat non sit amet quam. Quisque vel nisl sit amet metus semper laoreet. Sed venenatis hendrerit lorem, sed scelerisque tortor accumsan non. Phasellus efficitur turpis sed molestie mollis. Ut erat ex, congue ac dignissim nec, facilisis eu metus. Mauris risus dolor, vehicula eget dapibus nec, scelerisque ut dolor. Donec lacinia diam sed risus condimentum, a efficitur quam ultricies. Suspendisse potenti. Duis pellentesque purus ac ullamcorper interdum.",
        perksDescription: "This project is a little bit different from our previous project and as we decided to feature different black personalities, we divided each section per personality.",
        perks:[
            {
                perk: perks.poster,
                defaultArtwork: artworks.camilleAumontCarnel,
                artworks:[artworks.kobeBryant, artworks.oluwaytoyinSalau, artworks.camilleAumontCarnel, artworks.jaeAdrianaParmer, artworks.amandineGay],
            },
            {
                perk: perks.tote,
                defaultArtwork: artworks.kobeBryant,
                artworks:[artworks.kobeBryant, artworks.oluwaytoyinSalau, artworks.camilleAumontCarnel, artworks.jaeAdrianaParmer, artworks.amandineGay],
            },
            {
                perk: perks.stickers,
                defaultArtwork: artworks.blmstiocker04,
                artworks:[artworks.blmstiocker01, artworks.blmstiocker02, artworks.blmstiocker03, artworks.blmstiocker04, artworks.blmstiocker05],
            },
            {
                perk: perks.cards,
                defaultArtwork: artworks.amandineGay,
                artworks:[artworks.kobeBryant, artworks.oluwaytoyinSalau, artworks.camilleAumontCarnel, artworks.jaeAdrianaParmer, artworks.amandineGay,artworks.blmstiocker01, artworks.blmstiocker02, artworks.blmstiocker03, artworks.blmstiocker04, artworks.blmstiocker05],
            },
        ],
        artworks:[artworks.kobeBryant, artworks.oluwaytoyinSalau, artworks.camilleAumontCarnel, artworks.jaeAdrianaParmer, artworks.amandineGay],
        artists:[artists.priya, artists.johari],
    };