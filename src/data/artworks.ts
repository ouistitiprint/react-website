import * as artists from './artists';

import original_kobebryant from "./images/artworks/kobebryant/original.jpg";
import tote_kobebryant from "./images/artworks/kobebryant/tote.png";
import poster_kobebryant from "./images/artworks/kobebryant/poster.png";

import original_amandinegay from "./images/artworks/amandinegay/original.png";
import tote_amandinegay from "./images/artworks/amandinegay/tote.png";
import poster_amandinegay from "./images/artworks/amandinegay/poster.png";

import original_camilleaumontcarnel from "./images/artworks/camilleaumontcarnel/original.png";
import tote_camilleaumontcarnel from "./images/artworks/camilleaumontcarnel/tote.png";
import poster_camilleaumontcarnel from "./images/artworks/camilleaumontcarnel/poster.png";

import original_jaeadrianaparmer from "./images/artworks/jaeadrianaparmer/original.png";
import tote_jaeadrianaparmer from "./images/artworks/jaeadrianaparmer/tote.png";
import poster_jaeadrianaparmer from "./images/artworks/jaeadrianaparmer/poster.png";

import original_oluwaytoyinsalau from "./images/artworks/oluwaytoyinsalau/original.jpg";
import tote_oluwaytoyinsalau from "./images/artworks/oluwaytoyinsalau/tote.png";
import poster_oluwaytoyinsalau from "./images/artworks/oluwaytoyinsalau/poster.png";

import original_blmsticker01 from "./images/artworks/blmsticker01/original.png";
import stickers_blmsticker01 from "./images/artworks/blmsticker01/stickers.png";

import original_blmsticker02 from "./images/artworks/blmsticker02/original.png";

import original_blmsticker03 from "./images/artworks/blmsticker03/original.png";
import cards_blmsticker03 from "./images/artworks/blmsticker03/cards.png";

import original_blmsticker04 from "./images/artworks/blmsticker04/original.png";
import original_blmsticker05 from "./images/artworks/blmsticker05/original.png";

export interface IArtworksData {
    name: string,
    description: string,
    listLinks?:{ name: string; url: string; }[],
    originalPicture: string,
    artist:artists.IArtistsData,
    mockups:{
        poster?: string,
        tote?: string,
        stickers?: string,
        cards?: string,
    },
    api:{
        poster?: string,
        tote?: string,
        stickers?: string,
        cards?: string,
    }
}

const api_price_cards_blm: string = 'price_1H9lu9D8Gtwxp1HbcEhBgmFC';
const api_price_stickers_blm: string = 'price_1H9ln4D8Gtwxp1Hb1C5CmgXU';

export const kobeBryant: IArtworksData = {
    name: "Kobe Bryant",
    description: "Kobe Bryant was like a superhero to me. His skills, his words of wisdom, and how he touched the souls of millions was very appreciated. He was like family to everyone he met and when he died, he took part of the goodness of the world with him. Kobe Bryant died in a helicopter crash on Jan. 26, 2020. He was 41. Also killed in the crash was Bryant's 13-year-old daughter, Gianna, and seven others who were on board the aircraft. Bryant became one of the NBA's most popular players and the face of the Lakers during his career. Kobe was an 18-time All-Star champion who won five NBA championships, 4 NBA All-Star Game MVP awards and became one of the greatest basketball players of his generation during a 20-year career with the Lakers. He was the overall league MVP in 2008, a two-time NBA scoring champion and 12 All-Defensive selections. Kobe Bryant was a legend and will be greatly missed by millions of people around the world. As Kobe once said. “The most important thing is to try and inspire people so that they can be great in whatever they want to do.",
    originalPicture: original_kobebryant,
    artist: artists.joharistone,
    mockups:{
        poster: poster_kobebryant,
        tote: tote_kobebryant,
    },
    api:{
        cards: api_price_cards_blm,
        poster: 'price_1H9m3ZD8Gtwxp1HbJGkKZjFH',
        tote: 'price_1H9mUBD8Gtwxp1HbU4403hUe',
    },
}

export const oluwaytoyinSalau: IArtworksData = {
    name: "Oluwaytoyin Salau",
    description: "Oluwatoyin \"Toyin\" Ruth Salau was a 19-year-old woman who disappeared on Saturday, June 6, 2020, shortly after tweeting about recently being sexually assaulted. Toyin was at a Black Lives Matter protest in Tallahassee, Florida. She did not have a stable home, so she asked around seeking shelter after the protest. Salau was found dead on Saturday, June 13, 2020, and her death was confirmed on Monday, June 15, 2020. Toyin and I were fighting for the same reasons. We were both fighting for the equality and justice of African-Americans in the United States of America. Shortly after hearing about her death and learning that the murderer was no other than, an older African-American man was very disheartening. I felt angry for Toyin and every other victim of sexual assault, such as myself. African-American women are more likely to be raped by men than any other race in this country and it should not be that way. No woman or man, regardless of ethnicity, age, sexual orientation, etc. deserves to be traumatized over the sick obsession of the rape culture. To conclude, I pledged to myself that I will fight for what I believe is right. I will fight for the justice for Oluwatoyin Salau, Rayshard Brooks, Breonna Taylor and many other African-Americans who were brutally murdered by the police and many other racist citizens of America.",
    originalPicture: original_oluwaytoyinsalau,
    artist: artists.joharistone,
    mockups:{
        poster: poster_oluwaytoyinsalau,
        tote: tote_oluwaytoyinsalau,
    },
    api:{
        cards: api_price_cards_blm,
        poster: 'price_1H9m7TD8Gtwxp1HbmwpsURSF',
        tote: 'price_1H9mYkD8Gtwxp1HbA3A3Uvg2',
    },
}

export const amandineGay: IArtworksData = {
    name: "Amandine Gay",
    description: "Amandine Gay is a scholar, speaker, and filmmaker. Her first documentary “Ouvrir la Voix” enables the voice of black women from European colonial history in Africa and the West Indies.",
    listLinks:[
        {
            name: "Amandine Gay's Instagram",
            url: "https://www.instagram.com/orpheonegra",
        }
    ],
    originalPicture: original_amandinegay,
    artist: artists.priyaducommun,
    mockups:{
        poster: poster_amandinegay,
        tote: tote_amandinegay,
    },
    api:{
        cards: api_price_cards_blm,
        poster: 'price_1H9mAfD8Gtwxp1Hb9Tud3nXt',
        tote:'price_1H9mbbD8Gtwxp1HbenR2BqoK',
    },
}

export const camilleAumontCarnel: IArtworksData = {
    name: "Camille Aumont Carnel",
    description: "Camille Aumont Carnel; author, militant and female entrepreneur, she is the founder of @jemenbatsleclito and @jedisnonchef - to say out loud what others don’t. Her account @lafaqdecamille is a collective, inclusive, and anonymous guide to talk about sexual education.",
    listLinks:[
        {
            name: "Camille Aumont Carnel's Instagram",
            url: "https://www.instagram.com/camilleaumontcarnel",
        },
        {
            name: "@jemenbatsleclito on Instagram",
            url: "https://www.instagram.com/jemenbatsleclito",
        },
        {
            name: "@jedisnonchef on Instagram",
            url: "https://www.instagram.com/jedisnonchef",
        },
        {
            name: "@lafaqdecamille Instagram",
            url: "https://www.instagram.com/lafaqdecamille",
        },
    ],
    originalPicture: original_camilleaumontcarnel,
    artist: artists.priyaducommun,
    mockups:{
        poster: poster_camilleaumontcarnel,
        tote: tote_camilleaumontcarnel,
    },
    api:{
        cards: api_price_cards_blm,
        poster: 'price_1H9mDeD8Gtwxp1HbLMwnLNA4',
        tote: 'price_1H9meKD8Gtwxp1Hb3ZRZH8d4',
    },
}

export const jaeAdrianaParmer: IArtworksData = {
    name: "Jae Adriana Parmer",
    description: "Jae Adriana Parmer is a mental health advocate - she works to make adoption trauma, suicide, and wellness recognized. The community created is growing and she is making sure the adoptee’s voices are being heard!",
    listLinks:[
        {
            name: "Jae Adriana Parmer's Instagram",
            url: "https://www.instagram.com/iamadopted",
        }
    ],
    originalPicture: original_jaeadrianaparmer,
    artist: artists.priyaducommun,
    mockups:{
        poster: poster_jaeadrianaparmer,
        tote: tote_jaeadrianaparmer,
    },
    api:{
        cards: api_price_cards_blm,
        poster: 'price_1H9mFTD8Gtwxp1HbAzdgaRjU',
        tote: 'price_1H9mh9D8Gtwxp1Hb77cFslSw',
    },
}

export const blmstiocker01: IArtworksData = {
    name: "Sticker #1",
    description: "Hear us.",
    originalPicture: original_blmsticker01,
    artist: artists.priyaducommun,
    mockups:{
        stickers: stickers_blmsticker01,
    },
    api:{
        cards: api_price_cards_blm,
        stickers: api_price_stickers_blm,
    },
}

export const blmstiocker02: IArtworksData = {
    name: "Sticker #2",
    description: "Flower",
    originalPicture: original_blmsticker02,
    artist: artists.priyaducommun,
    mockups:{},
    api:{
        cards: api_price_cards_blm,
        stickers: api_price_stickers_blm,
    },
}

export const blmstiocker03: IArtworksData = {
    name: "Sticker #3",
    description: "Black Lives Matter",
    originalPicture: original_blmsticker03,
    artist: artists.priyaducommun,
    mockups:{
        cards: cards_blmsticker03
    },
    api:{
        cards: api_price_cards_blm,
        stickers: api_price_stickers_blm,
    },
}

export const blmstiocker04: IArtworksData = {
    name: "Sticker #4",
    description: "Together",
    originalPicture: original_blmsticker04,
    artist: artists.priyaducommun,
    mockups:{},
    api:{
        cards: api_price_cards_blm,
        stickers: api_price_stickers_blm,
    },
}

export const blmstiocker05: IArtworksData = {
    name: "Sticker #5",
    description: "Be An Ally",
    originalPicture: original_blmsticker05,
    artist: artists.priyaducommun,
    mockups:{},
    api:{
        cards: api_price_cards_blm,
        stickers: api_price_stickers_blm,
    },
}




