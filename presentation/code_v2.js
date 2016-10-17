import React, { Component } from "react";
import TwoPane from './TwoPane';

import {transform} from 'babel-standalone';
import CodeEdit from "./CodeEdit";

class Code extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.template
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(newText) {
    this.setState({text: newText});
  }
  transform(input) {
    return transform(input, { presets: ['es2015', 'react', 'stage-2'] }).code;
    // return input;
  }
  render() {
    return (
      <TwoPane
        leftHeading="JSX"
        Left={<CodeEdit onChange={this.handleChange} value={this.state.text}/>}
        rightHeading="Transformed"
        Right={<CodeEdit value={this.transform(this.state.text)} readOnly/>}
      />
    );
  }
}

// const Code = function ({children, source, lang = "jsx"}) {
//   return (
    // <Layout style={{ marginLeft: -200 }}>
    //   <Fill style={{paddingRight: "5px"}}>
    //     <CodePane
    //       lang={lang}
    //       source={source}
    //     />
    //   </Fill>
    //   <Fill style={{paddingLeft: "5px"}}>
    //     {children}
    //   </Fill>
    // </Layout>
//   );
// };

export default Code;
