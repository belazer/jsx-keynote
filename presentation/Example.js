const load = (filename) => require(`raw!../assets/${filename}`);
const Example = {
  jsx: load('jsx.example'),
};
export default Example;
