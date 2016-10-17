import React from 'react';
import {
  Appear,
  CodePane,
  Fill,
  Layout,
  Heading
} from "spectacle";

const PaneHeading = ({title}) => (
  <Heading size={5} caps textColor="primary">
    {title}
  </Heading>
);

const TwoPane = ({Left, Right, leftHeading, rightHeading}) => (
  <Layout>
    <Appear>
      <Fill>
        <PaneHeading title={leftHeading} />
          {Left}
      </Fill>
    </Appear>
    <Fill>
      <div style={{width: 20}}></div>
    </Fill>
    <Appear>
      <Fill>
        <PaneHeading title={rightHeading} />
          {Right}
      </Fill>
    </Appear>
  </Layout>
);
export default TwoPane;
