import React from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";

import { storiesOf } from "@storybook/react";

import { theme } from "../style/theming";
import CreatorCard from "./CreatorCard";

const defaultUrlPicture = "https://instagram.fzrh2-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/106808164_174997347332027_716198515821114913_n.jpg?_nc_ht=instagram.fzrh2-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=Uhi-D7HTPXQAX-1ISVC&oh=1ed5275c8045206730a07c5b56fdc7c5&oe=5F3A62B7"
const defaultName = "Priya Ducommun"
const defaultdescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rhoncus tortor eget erat euismod feugiat non sit amet quam. Quisque vel nisl sit amet metus semper laoreet."
const defaultListSocial = [
    {name:'instagram',
    url:'https://www.instagram.com/i.dont.drink_coffee/'},
    {name: 'facebook',
    url:'https://www.behance.net/priyaducommun'},
    {name: 'pinterest',
    url:'https://www.behance.net/priyaducommun'},
]

storiesOf("CreatorCard", module)
  .addDecorator(story => (
    <MuiThemeProvider theme={theme}>
            {story()}
    </MuiThemeProvider>
  ))

  .add("default", () => <CreatorCard urlPicture={defaultUrlPicture}  name={defaultName} description={defaultdescription} listSocial={defaultListSocial}/>);

  
