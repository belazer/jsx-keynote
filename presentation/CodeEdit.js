import React from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/jsx/jsx';
import './CodeEdit.css';
import Codemirror from 'react-codemirror';
const CodeEdit = ({
	value,
	onChange,
	readOnly = false,
	lineNumbers = true,
	mode = "jsx"
}) => <Codemirror value={value} onChange={onChange} options={{ lineNumbers, readOnly,	mode }}/>
export default CodeEdit;
