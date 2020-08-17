import blm_logo from './images/campaign/blm_logo2.png'; 
import blm_illustration from './images/campaign/blm_illustration.png';
import * as artists from './artists';
import * as artworks from './artworks';
import * as perks from './perks';

export interface ICampaignData {
    name: string,
    title: string,
    subtitle: string,
    illustration: string,
    foundation: IFoundationData,
    startDate: Date,
    endDate: Date,
    description: string,
    perksDescription: string,
    perks: IPerkCampaign[],
    artworks:artworks.IArtworksData[],
    artists:artists.IArtistsData[],
}

export interface IFoundationData {
    name: string,
    officialName: string,
    website: string,
    logo: string,
}

export interface IPerkCampaign {
    perk: perks.IPerkData,
    defaultArtwork: artworks.IArtworksData,
    artworks: artworks.IArtworksData[],
    groupDescription?: string,
}

export const blm: ICampaignData =
    {
        name: "BLM Campaign",
        title: "Black Lives Matter",
        subtitle: "Take Action. Support #BlackLivesMatter.",
        illustration: blm_illustration,
        foundation: {
            name: "#BlackLivesMatter",
            officialName: "Black Lives Matter Foundation, Inc",
            website: "https://blacklivesmatter.com/",
            logo: blm_logo,
        },
        startDate: new Date(2020, 7, 3, 0, 0, 0, 0),
        endDate: new Date(2020, 7, 23, 23, 59, 59, 0),
        description: "We want to celebrate Black people making the world a better place!  Therefore, we created a series of original artworks honoring Black people having an impact on their community. Using different mediums and formats, we aspired to give Black figures of activism and militantism space and help more voices come forward and speak out. Together with Ouistiti Print, we are happy to give you the opportunity to support our mission. We are selling for the benefit of #BlackLivesMatters, different perks customized with the portrait of impactful Black figures dear to us. We described why we chose this person for each artwork, so don't hesitate to get to know them more. Hear them now, and never let them go silent again.",
        perksDescription: "We picked 4 different mediums to help the voice of Black people be heard. You can get one of the portraits on an A2 poster or a Tote bag or chose to get the full collection on small cards and always carry them around with you. Finally, we created some unique stickers to help you spread the words. All the profits will be sent to #BlackLivesMatter.",
        perks:[
            {
                perk: perks.poster,
                defaultArtwork: artworks.amandineGay,
                artworks:[artworks.kobeBryant, artworks.oluwaytoyinSalau, artworks.jaeAdrianaParmer, artworks.amandineGay],
                groupDescription: "Original portraits of impactful Black people on high quality A2 poster."
            },
            {
                perk: perks.tote,
                defaultArtwork: artworks.kobeBryant,
                artworks:[artworks.kobeBryant, artworks.oluwaytoyinSalau, artworks.jaeAdrianaParmer, artworks.amandineGay],
                groupDescription: "Original portraits of impactful Black people printed on a textile tote bag."
            },
            {
                perk: perks.stickers,
                defaultArtwork: artworks.blmstiocker01,
                artworks:[artworks.blmstiocker01, artworks.blmstiocker02, artworks.blmstiocker03, artworks.blmstiocker04, artworks.blmstiocker05],
                groupDescription: "Recognizable visuals for Black Lives Matter turned into a set of stickers designed by Priya Ducommun."
            },
            {
                perk: perks.cards,
                defaultArtwork: artworks.blmstiocker03,
                artworks:[artworks.kobeBryant, artworks.oluwaytoyinSalau, artworks.jaeAdrianaParmer, artworks.amandineGay,artworks.blmstiocker01, artworks.blmstiocker02, artworks.blmstiocker03, artworks.blmstiocker04, artworks.blmstiocker05],
                groupDescription: "All the original artworks designed by Priya Ducommun and Johari Stone on high quality cards with a matte finish."
            },
        ],
        artworks:[artworks.kobeBryant, artworks.oluwaytoyinSalau, artworks.jaeAdrianaParmer, artworks.amandineGay],
        artists:[artists.priyaducommun, artists.joharistone],
    };