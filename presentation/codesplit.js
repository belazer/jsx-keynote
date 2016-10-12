import React from "react";

import {
  CodePane,
  Fill,
  Layout
} from "spectacle";

const CodeSplit = function ({children, source, lang = "jsx"}) {
  return (
    <Layout style={{ marginLeft: -200 }}>
      <Fill style={{paddingRight: "5px"}}>
        <CodePane
          lang={lang}
          source={source}
        />
      </Fill>
      <Fill style={{paddingLeft: "5px"}}>
        {children}
      </Fill>
    </Layout>
  );
};

export default CodeSplit;
