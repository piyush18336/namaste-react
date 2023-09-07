const heading = React.createElement('h1',{id:'heading'},'hello world for javascript');
//this {} empty object use for giving the attributes to the tags for e.g. {id:'heading'}
const root = ReactDOM.createRoot(document.getElementById('root'));

//creating the nested elements in the react

const parent = React.createElement('div',{id:'parent'},[
React.createElement('div',{id:'child'},
[
React.createElement('h1',{id:'heading'},'hello world for javascript'),
React.createElement('h2',{id:'heading2'},'hello world 2 for javascript')
]),
React.createElement('div',{id:'child2'},
[
React.createElement('h1',{id:'heading'},'hello world for javascript'),
React.createElement('h2',{id:'heading2'},'hello world 2 for javascript')
])
]
)

console.log(parent);

root.render(parent); 