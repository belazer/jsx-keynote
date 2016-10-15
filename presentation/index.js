// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  // BlockQuote,
  // Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  // Link,
  ListItem,
  List,
  // Markdown,
  // Quote,
  Slide,
  Spectacle,
  Text
  // Table,
  // TableRow,
  // TableHeaderItem,
  // TableItem
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

import CodeSplit from "./codesplit";
import Code from "./code";
// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  coding: require("../assets/coding.jpg")
};

preloader(images);

const theme = createTheme({
  primary: "#3b5998"
});
const grey = "rgba(125, 125, 125, 0.8)";
theme.screen.progress.bar.bar.background = grey;
theme.screen.controls.nextIcon.fill = grey;
theme.screen.controls.prevIcon.fill = grey;

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["fade", "slide"]} transitionDuration={500} progress="bar">

          <Slide bgImage={images.coding} bgDarken={0.65}>
            <Heading size={1} caps textColor="tertiary">
              JSX
            </Heading>
            <Text textSize="1.5em" margin="100px 0px 0px 0px" textColor="tertiary">
              Fabian Beliza & Jonas Faber
            </Text>
          </Slide>

          <Slide bgColor="tertiary">
            <Heading size={4} caps lineHeight={1.5} textColor="primary">
            Inhalt
            </Heading>
            <List textColor="secondary" textAlign="left">
              <Appear><ListItem>Inhalt</ListItem></Appear>
              <Appear><ListItem>Inhalt</ListItem></Appear>
              <Appear><ListItem>Inhalt</ListItem></Appear>
              <Appear><ListItem>Inhalt</ListItem></Appear>
            </List>
          </Slide>
          <Slide bgColor="tertiary">
            <Code template={`<p>
Hallo
<Component name="World" />
</p>

const Component = ({name}) => <div>{name}</div>`} />
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
