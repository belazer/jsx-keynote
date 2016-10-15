import React from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/jsx/jsx';
import './CodeEdit.css';
import Codemirror from 'react-codemirror';
const options = {
	lineNumbers: true,
	readOnly: false,
	mode: 'jsx',
}
const CodeEdit = ({ value, onChange }) => <Codemirror value={value} onChange={onChange} options={options}/>
export default CodeEdit;
