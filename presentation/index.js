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
// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  reduxAnimation: require("../assets/redux.gif"),
  clientServerInteraction: require("../assets/client-server-interaction.svg"),
  reduxDevtools: require("../assets/redux-devtools.png"),
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/plenigo-logo.png"),
  markdown: require("../assets/markdown.png"),
  man: require("../assets/man.jpg"),
  paywall: require("../assets/paywall.png"),
  about: require("../assets/about-business.png"),
  access: require("../assets/access.png"),
  tablet: require("../assets/tablet.jpg"),
  example: require("../assets/example.png"),
  integration: require("../assets/integration.png"),
  coding: require("../assets/coding.jpg"),
  api: require("../assets/api.png"),
  websiteBackground: require("../assets/websiteBackground.jpg"),
  plenigoSpring: require("../assets/plenigoSpring.png"),
  control: require("../assets/control.jpg"),
  dashboard: require("../assets/adminDashboard.png"),
  paywallApi: require("../assets/paywallAPI.png")
};

preloader(images);

const theme = createTheme({
  primary: "#00a6b4"
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

          <Slide bgImage={images.man.replace("/", "")} bgDarken={0.7}>
            <Heading size={2} caps fit lineHeight={1.5} textColor="tertiary">
              Praxissemester bei
            </Heading>
            <Image width="80%" src={images.logo}/>
            <Text textSize="1.5em" margin="100px 0px 0px 0px" textColor="tertiary">
              Fabian Beliza & Jonas Faber
            </Text>
          </Slide>

          <Slide bgColor="tertiary" notes="Bisher ist die technische Realisierung aufwändig und teuer, somit gerade für kleinere und mittlere Anbieter und Verlage kaum zu realisieren">
                <Layout>
                <Fill>
                  <Image src={images.paywall}/>
                </Fill>
                <Fill>
                  <Text textColor="primary" textSize="1.5em" textAlign="right">
                    plenigo ist eine Technologie Plattform, die den Vertrieb digitaler Produkte – Texte, Videos oder Musik – ermöglicht
                  </Text>
                </Fill>
            </Layout>
          </Slide>

          <Slide bgColor="tertiary" notes="Plenigo Kunden zahlen eine monatliche Miete sowie ein Provision auf Verkäufe">
            <Heading size={4} caps lineHeight={1.5} textColor="primary">Paid-Content</Heading>
              <Layout>
                <Fill>
                  <Image src={images.about}/>
                </Fill>
                <Fill>
                  <Text textSize="1.5em" textAlign="right">
                    <List>
                      <ListItem>Schlüsselfertige Lösung</ListItem>
                      <ListItem>Software-As-A-Service</ListItem>
                      <ListItem>Schnelle Implementierung</ListItem>
                      <ListItem>Plugins und SDKs</ListItem>
                    </List>
                  </Text>
                </Fill>
              </Layout>
          </Slide>

          <Slide bgColor="tertiary">
            <Heading size={4} caps lineHeight={1.5} textColor="primary">Was bietet plenigo?</Heading>
              <Layout>
                <Fill>
                  <Text textSize="1.5em" textAlign="right">
                    <List>
                      <ListItem>Paywall</ListItem>
                      <ListItem>Nutzerverwaltung</ListItem>
                      <ListItem>Produktverwaltung</ListItem>
                      <ListItem>Zahlungen</ListItem>
                      <ListItem>Rechnungsstellung</ListItem>
                      <ListItem>CRM-Funktionen</ListItem>
                    </List>
                  </Text>
                </Fill>
                <Fill>
                  <Image src={images.access}/>
                </Fill>
              </Layout>
          </Slide>

          <Slide bgImage={images.tablet.replace("/", "")} bgDarken={0.75} notes=
          "Markt digitaler Produkte. E-Publishing ist des am stärksten wachsende Segment. Plenigo peilt einen Umsatz von 13 Mio. € in 2018 an"
          >
            <Heading size={4} caps lineHeight={1.5} textColor="primary">
              Der Markt
            </Heading>
            <Text textSize="1.5em" textAlign="left" textColor="tertiary">
              Gesamtmarkt ca. € 3 Mrd. in 2016
            </Text>
            <br/>
            <Text textSize="1.5em" textAlign="left" textColor="tertiary">
              Der Markt ist segmentiert in:
            </Text>
            <List textColor="tertiary" textAlign="left">
              <ListItem><b>E-Publishing</b></ListItem>
              <ListItem>Musik / Radio</ListItem>
              <ListItem>Gaming</ListItem>
              <ListItem>TV / Video</ListItem>
            </List>
          </Slide>

          <Slide bgColor="tertiary">
            <Heading size={5} caps lineHeight={1.5} textColor="primary">
            Funktionsweise
            </Heading>
            <Layout>
              <Fill>
                <Image margin="-20px" width="100%" src={images.example}/>
              </Fill>
              <Fill>
                <Image margin="20px" width="100%" src={images.integration}/>
              </Fill>
            </Layout>
          </Slide>

          <Slide bgImage={images.coding.replace("/", "")} bgDarken={0.75}>
            <Heading size={1} fit caps lineHeight={1.5} textColor="primary">
              Projekt
            </Heading>
            <Appear>
              <Heading size={2} caps textColor="tertiary">
                1. Api-tests
              </Heading>
            </Appear>
          </Slide>

          <Slide bgColor="tertiary">
            <Image src={images.api} width="140%" margin="-90px 0px 0px -180px"/>
          </Slide>

          <Slide bgColor="tertiary" notes="Test-System nicht live! Anfragen an Pfad. Antwort mit Junit vergleichen">
            <Heading size={4} caps lineHeight={1.5} textColor="primary">
            Ablauf
            </Heading>
            <List textColor="secondary" textAlign="left">
              <Appear><ListItem>Testdaten erstellen</ListItem></Appear>
              <Appear><ListItem>Anfragen an API senden</ListItem></Appear>
              <Appear><ListItem>Antwort erhalten</ListItem></Appear>
              <Appear><ListItem>Antwort mit erwartetem Ergebnis vergleichen</ListItem></Appear>
            </List>
          </Slide>

          <Slide bgColor="tertiary" notes="Beispiel API-Doc. Bei POST-Anfragen mit Request Beispiel/Model">
            <Image src={images.paywallApi} width="120%" margin="-60px 0px 0px -90px"/>
          </Slide>

          <Slide bgColor="tertiary" transition={["fade"]} notes="Jersey für Webanfragen, Jackson als JSON Parser">
            <Heading size={4} caps textColor="primary">
            Test Beispiel
            </Heading>
            <CodePane source={require("raw!../assets/api.example")} lang="java" />
          </Slide>

          <Slide bgColor="tertiary" transition={["fade"]} notes="Probleme: Test-Flags nicht vorhanden, Dokumentation teilweise falsch">
            <Heading size={4} caps textColor="primary">
            Model Beispiel
            </Heading>
            <CodePane source={require("raw!../assets/paywall.example")} lang="java" />
          </Slide>

          <Slide bgImage={images.websiteBackground} bgDarken={0.75}>
            <Heading size={1} fit caps lineHeight={1.5} textColor="primary">
              Projekt
            </Heading>
            <Appear>
              <Heading size={2} caps textColor="tertiary">
                2. Umzug statische Webseite
              </Heading>
            </Appear>
          </Slide>

          <Slide bgColor="tertiary">
            <Image src={images.plenigoSpring} width="140%" margin="-90px 0px 0px -180px"/>
          </Slide>

          <Slide bgColor="tertiary" notes="Grails wäre bei Update zerschossen. Server liefert HTML aus. Client hält CSS usw. Gibt noch Backend für Händler">
            <Heading size={4} caps textColor="primary">
              Umzug von Grails auf Spring
            </Heading>
            <List>
              <Appear><ListItem>Alle Seiten vor dem Backend</ListItem></Appear>
              <Appear><ListItem>Rund 25 Seiten</ListItem></Appear>
              <Appear><ListItem>Client-Server Struktur</ListItem></Appear>
              <Appear><ListItem>Internationalisierung</ListItem></Appear>
              <Appear><ListItem>Nur notwendige Bilder, CSS und JS</ListItem></Appear>
            </List>
          </Slide>

          <Slide bgColor="tertiary">
            <Heading size={4} caps textColor="primary">
              Nicht nur statischer Inhalt
            </Heading>
            <List>
              <Appear><ListItem>Zwei Arten von Kunden
                <List>
                  <Appear><ListItem>Händler</ListItem></Appear>
                  <Appear><ListItem>Nutzer</ListItem></Appear>
                </List>
              </ListItem></Appear>
              <Appear><ListItem>Registrierung</ListItem></Appear>
              <Appear><ListItem>Login</ListItem></Appear>
              <Appear><ListItem>Zwei Faktor Authentifizierung
                <List>
                  <Appear><ListItem>SMS</ListItem></Appear>
                  <Appear><ListItem>Google Authentificator</ListItem></Appear>
                </List>
              </ListItem></Appear>
            </List>
          </Slide>

          <Slide bgImage={images.control} bgDarken={0.75}>
            <Heading size={1} fit caps lineHeight={1.5} textColor="primary">
              Projekt
            </Heading>
            <Appear>
              <Heading size={2} caps textColor="tertiary">
                3. Admin Dashboard
              </Heading>
            </Appear>
          </Slide>

          <Slide bgColor="tertiary">
            <Image src={images.dashboard} width="140%" margin="-90px 0px 0px -180px"/>
          </Slide>

          <Slide bgColor="tertiary">
            <Heading size={4} caps textColor="primary">
              Funktionen
            </Heading>
            <List>
              <Appear><ListItem>Nutzer Übersicht</ListItem></Appear>
              <Appear><ListItem>Firmen Übersicht</ListItem></Appear>
              <Appear><ListItem>Firmen Daten validieren</ListItem></Appear>
              <Appear><ListItem>Mail Vorlagen erstellen und bearbeiten</ListItem></Appear>
              <Appear><ListItem>Admin Nutzer verwalten</ListItem></Appear>
            </List>
          </Slide>

          <Slide align="center top" bgColor="primary">
            <Heading size={2} caps fit textColor="tertiary">
              View: React
            </Heading>
            <CodeSplit source={require("raw!../assets/interactive.example")}>
              <Interactive/>
            </CodeSplit>
          </Slide>

          <Slide bgColor="tertiary" notes="How Redux works.">
            <Image src={images.reduxAnimation.replace("/", "")} margin="0px auto 40px" height="60vh"/>
            <Heading size={3} caps textColor="primary" textFont="primary">
              Redux
            </Heading>
          </Slide>

          <Slide bgColor="tertiary" notes="Client Server Interaction">
            <Image src={images.clientServerInteraction.replace("/", "")} margin="0px auto 40px" height="60vh"/>
            <Heading size={3} caps textColor="primary" textFont="primary">
              Client Server Interaction
            </Heading>
          </Slide>

          <Slide transition={["fade"]} bgImage={images.reduxDevtools.replace("/", "")} bgDarken={0.2} />
          <Slide transition={["fade"]} bgImage={images.reduxDevtools.replace("/", "")} bgDarken={0.75}>
            <Heading size={1} caps fit textColor="primary">
              Demo
            </Heading>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
