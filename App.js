import React from 'react';
import ReactDOM from 'react-dom';
//import MyApp from './MyApp';
import Counter from './Counter'
import Todo from './Todo'
import logo from './logo.svg';
import './App.css';
//import ReactLogo from './ReactLogo';
function App() {
  return (
    <>
    <Counter></Counter>
    <Todo></Todo>
    </>
  );
}
// import logo from './logo.svg';
// import './App.css';
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p className="p1">
//           my first react project and react project
//         </p>
//         <h2 className="react">Hi Hello World</h2>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React js
//         </a>
//       </header>
//     </div> 
//   );
// }

// export default App;


// const MyApp = () => {
//   const [valueA, setValueA] =useState(0);
//   const [valueB, setValueB] =useState(0);
//   const [operations, setOperations] =useState('+');
//   const [result, setResult] =useState(0);

//   const handleSubmit = () =>{
//       if (operations === '+'){
//           setResult(parseInt(valueA)+parseInt(valueB));
//       }
//       if(operations === '-'){
//           setResult(valueA-valueB);
//       }
//       if(operations === '*'){
//           setResult(valueA*valueB);
//       }
//       if(operations === '/'){
//           setResult(valueA/valueB);
//       }
//   }
//  return(
//      <div>
//          <h3>Simple Calculator in React Js</h3>
//          <h3>Result: { result }</h3>
//          <div>
//              <input type='text' value={valueA} onChange={(e)=>setValueA(e.target.value)}/><br/>
//              <input type='text' value={valueB} onChange={(e)=>setValueB(e.target.value)}/><br/>
//              <button onClick={handleSubmit}>Submit</button>
//          </div>
//          <div>
//              <button onClick={()=> setOperations('+')}>+</button>
//              <button onClick={()=> setOperations('-')}>-</button>
//              <button onClick={()=> setOperations('*')}>*</button>
//              <button onClick={()=> setOperations('/')}>/</button>
//          </div>
//      </div>
//  )
// }
 export default App;