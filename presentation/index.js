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
  Markdown,
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
import TwoPane from './TwoPane';
import Code from "./Code";
// Import Examples
import Example from './Example';
// Require CSS
import 'normalize.css';
import "spectacle/lib/themes/default/index.css";


const images = {
  coding: require("../assets/coding.jpg"),
  control: require("../assets/control.jpg"),
  website: require("../assets/website.jpg"),
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

          <Slide bgColor="primary">
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
              <Appear><ListItem>Was ist JSX?</ListItem></Appear>
              <Appear><ListItem>Bezug zu XML</ListItem></Appear>
              <Appear><ListItem>Beispiele</ListItem></Appear>
            </List>
          </Slide>

          <Slide bgColor="tertiary" notes="Type-Safe, Errors werden während compilierung erkannt.">
            <Heading size={4} caps lineHeight={1.5} textColor="primary">
            Was ist JSX?
            </Heading>
            <List textColor="secondary" textAlign="left">
              <Appear><ListItem>XML-ähnliche Syntax-Erweiterung zu ECMAScript</ListItem></Appear>
              <Appear><ListItem>Wird von Preprozessoren transformiert</ListItem></Appear>
              <Appear><ListItem>Optimierungen während Kompilierung in JS</ListItem></Appear>
              <Appear><ListItem>Type-Safe</ListItem></Appear>
              <Appear><ListItem>Vereinfacht Templating (HTML-Syntax)</ListItem></Appear>
              <Appear><ListItem>Besonders im Zusammenhang mit React zu finden</ListItem></Appear>
            </List>
          </Slide>

          <Slide bgColor="tertiary">
            <Heading size={4} caps lineHeight={1.5} textColor="primary">
            Bezug zu XML
            </Heading>
            <List textColor="secondary" textAlign="left">
              <Appear><ListItem><Markdown source="`< JSXElementName JSXAttributes(optional) / >`" /></ListItem></Appear>
              <Appear><ListItem>Strukturierung mit child-Elementen</ListItem></Appear>
              <Appear><ListItem>Baumstruktur</ListItem></Appear>
            </List>
          </Slide>

          <Slide bgColor="tertiary">
            <Code template={Example.jsx} />
          </Slide>

        </Deck>
      </Spectacle>
    );
  }
}
