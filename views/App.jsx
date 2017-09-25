import React from 'react';
// import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header.jsx';
import TableRow from './table.jsx';
class App extends React.Component {
   constructor() {
      super();
      this.state = {
         data: 
         [
            {
               "id":1,
               "name":"Foo",
               "age":"20",
               "lastname": 'x'
            },
				
            {
               "id":2,
               "name":"Bar",
               "age":"30",
               "lastname": 'y'
            },
				
            {
               "id":3,
               "name":"Baz",
               "age":"40",
               "lastname": 'z'
            }
         ]
      }
   }
	
   render() {
      return (
              <div>
            <Header/>
            <table>
            <thead><tr>
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            </tr></thead>
               <tbody>
                  {this.state.data.map((person,i) => <TableRow key = {i} 
                     data = {person} />)}
               </tbody>
            </table>
         </div>
      );
   }
}



export default App;