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
import original_blmsticker04 from "./images/artworks/blmsticker04/original.png";
import original_blmsticker05 from "./images/artworks/blmsticker05/original.png";

export interface IArtworksData {
    name: string,
    description: string,
    originalPicture: string,
    artist:artists.IArtistsData,
    mockups:{
        poster?: string,
        tote?: string,
        stickers?: string,
        cards?: string,
    },
}

export const kobeBryant: IArtworksData = {
    name: "Kobe Bryant",
    description: "Kobe Bryant was like a superhero to me. His skills, his words of wisdom, and how he touched the souls of millions was very appreciated. He was like family to everyone he met and when he died, he took part of the goodness of the world with him. Kobe Bryant died in a helicopter crash on Jan. 26, 2020. He was 41. Also killed in the crash was Bryant's 13-year-old daughter, Gianna, and seven others who were on board the aircraft. Bryant became one of the NBA's most popular players and the face of the Lakers during his career. Kobe was an 18-time All-Star champion who won five NBA championships, 4 NBA All-Star Game MVP awards and became one of the greatest basketball players of his generation during a 20-year career with the Lakers. He was the overall league MVP in 2008, a two-time NBA scoring champion and 12 All-Defensive selections. Kobe Bryant was a legend and will be greatly missed by millions of people around the world. As Kobe once said. “The most important thing is to try and inspire people so that they can be great in whatever they want to do.",
    originalPicture: original_kobebryant,
    artist: artists.johari,
    mockups:{
        poster: poster_kobebryant,
        tote: tote_kobebryant,
    },
}

export const oluwaytoyinSalau: IArtworksData = {
    name: "Oluwaytoyin Salau",
    description: "Oluwatoyin \"Toyin\" Ruth Salau was a 19-year-old woman who disappeared on Saturday, June 6, 2020, shortly after tweeting about recently being sexually assaulted. Toyin was at a Black Lives Matter protest in Tallahassee, Florida. She did not have a stable home, so she asked around seeking shelter after the protest. Salau was found dead on Saturday, June 13, 2020, and her death was confirmed on Monday, June 15, 2020. Toyin and I were fighting for the same reasons. We were both fighting for the equality and justice of African-Americans in the United States of America. Shortly after hearing about her death and learning that the murderer was no other than, an older African-American man was very disheartening. I felt angry for Toyin and every other victim of sexual assault, such as myself. African-American women are more likely to be raped by men than any other race in this country and it should not be that way. No woman or man, regardless of ethnicity, age, sexual orientation, etc. deserves to be traumatized over the sick obsession of the rape culture. To conclude, I pledged to myself that I will fight for what I believe is right. I will fight for the justice for Oluwatoyin Salau, Rayshard Brooks, Breonna Taylor and many other African-Americans who were brutally murdered by the police and many other racist citizens of America.",
    originalPicture: original_oluwaytoyinsalau,
    artist: artists.johari,
    mockups:{
        poster: poster_oluwaytoyinsalau,
        tote: tote_oluwaytoyinsalau,
    },
}

export const amandineGay: IArtworksData = {
    name: "Amandine Gay",
    description: "Mauris malesuada tincidunt sodales. Nulla interdum iaculis magna. Nulla facilisi. Nulla et elementum ligula, vitae vehicula libero. Quisque nec elit eget mi fringilla ultricies id id felis. Nam sed euismod tortor. Proin vitae mattis elit, non porttitor metus. Sed lobortis justo congue sapien elementum aliquam. Aenean eu imperdiet nisl. Nullam suscipit odio ut urna pellentesque, pharetra porta orci aliquam. Vestibulum blandit sapien sit amet diam sodales egestas. Quisque lacus tortor, tristique in consectetur vitae, suscipit at libero. Ut vitae nunc tortor. Sed ac tortor eu est pellentesque euismod. Fusce pretium egestas ex, eu sagittis nunc. Suspendisse elementum sit amet lorem nec imperdiet.",
    originalPicture: original_amandinegay,
    artist: artists.priya,
    mockups:{
        poster: poster_amandinegay,
        tote: tote_amandinegay,
    },
}

export const camilleAumontCarnel: IArtworksData = {
    name: "Camille Aumont Carnel",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id imperdiet leo, non pharetra libero. Fusce vehicula ante posuere dapibus semper. Fusce ultricies rhoncus odio, et venenatis felis tristique id. Pellentesque quis lorem consectetur erat ultrices eleifend. Morbi pharetra luctus ipsum sit amet lacinia. Vestibulum feugiat, nunc at gravida venenatis, nibh mi ullamcorper diam, vitae faucibus sem turpis eget erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras egestas purus maximus felis hendrerit, sed rhoncus magna maximus. In tincidunt mollis dolor, a ullamcorper lectus pharetra et. Mauris facilisis erat non arcu cursus venenatis. Praesent facilisis mauris quis metus consectetur convallis.",
    originalPicture: original_camilleaumontcarnel,
    artist: artists.priya,
    mockups:{
        poster: poster_camilleaumontcarnel,
        tote: tote_camilleaumontcarnel,
    },
}

export const jaeAdrianaParmer: IArtworksData = {
    name: "Jae Adriana Parmer",
    description: "Aliquam facilisis nisi metus, sed hendrerit mauris fermentum quis. Donec sed sapien sed lectus lacinia fringilla vitae nec dolor. Integer gravida odio at leo posuere, sed venenatis nunc finibus. Pellentesque porttitor facilisis tortor ut aliquam. Duis finibus suscipit tristique. Etiam commodo placerat feugiat. Aliquam ac consequat justo. Vivamus id suscipit magna. Donec elementum egestas magna in placerat. Curabitur pharetra dolor vitae orci imperdiet convallis. Morbi rutrum orci ac libero tincidunt commodo. Nam non leo maximus odio tristique condimentum et nec turpis. Suspendisse nec sodales lectus. Vivamus eget accumsan est.",
    originalPicture: original_jaeadrianaparmer,
    artist: artists.priya,
    mockups:{
        poster: poster_jaeadrianaparmer,
        tote: tote_jaeadrianaparmer,
    },
}

export const blmstiocker01: IArtworksData = {
    name: "Sticker #1",
    description: "Hear us.",
    originalPicture: original_blmsticker01,
    artist: artists.priya,
    mockups:{
        stickers: stickers_blmsticker01,
    },
}

export const blmstiocker02: IArtworksData = {
    name: "Sticker #2",
    description: "Flower",
    originalPicture: original_blmsticker02,
    artist: artists.priya,
    mockups:{},
}

export const blmstiocker03: IArtworksData = {
    name: "Sticker #3",
    description: "Black Lives Matter",
    originalPicture: original_blmsticker03,
    artist: artists.priya,
    mockups:{},
}

export const blmstiocker04: IArtworksData = {
    name: "Sticker #4",
    description: "Together",
    originalPicture: original_blmsticker04,
    artist: artists.priya,
    mockups:{},
}

export const blmstiocker05: IArtworksData = {
    name: "Sticker #5",
    description: "Be An Ally",
    originalPicture: original_blmsticker05,
    artist: artists.priya,
    mockups:{},
}




