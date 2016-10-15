import React, { Component } from "react";

import {
  CodePane,
  Fill,
  Layout,
  Heading
} from "spectacle";

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
    console.log(transform);
    return transform(input, { presets: ['es2015', 'react', 'stage-2'] }).code;
    // return input;
  }
  render() {
    return (
      <div>
        <Layout style={{ marginLeft: -400 }}>
          <Fill style={{paddingRight: "5px"}}>
            <Heading size={5} caps textColor="primary">
              JSX
            </Heading>
            <CodeEdit onChange={this.handleChange} value={this.state.text}/>
          </Fill>
          <Fill style={{paddingLeft: "5px"}}>
            <Heading size={5} caps textColor="primary">
              Transformed
            </Heading>
            <CodeEdit value={this.transform(this.state.text)} readOnly/>
          </Fill>
        </Layout>
      </div>
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
