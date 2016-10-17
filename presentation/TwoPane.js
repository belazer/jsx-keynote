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
  <Layout style={{ width:'100%', height: '100%'}}>
    <Appear>
      <Fill style={{width: '50%'}}>
        <PaneHeading title={leftHeading} />
        {Left}
      </Fill>
    </Appear>
    <Appear>
      <Fill style={{width: '50%'}}>
        <PaneHeading title={rightHeading} />
        {Right}
      </Fill>
    </Appear>
  </Layout>
);
export default TwoPane;
