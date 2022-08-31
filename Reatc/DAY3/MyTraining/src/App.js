
import './App.css';

import  mytraIning from './data/user.json'

function App() {
  console.log(mytraIning);
  return (
    <div className="App">
      <header>
       <h1>User list</h1>
      </header>
      <main>

        <ul>

          {mytraIning.map((user)=> {
            return(<>
            <li>
              <img src={user.picture.large}/>
             
            </li>
            <li>
              {user.login.username}

            </li>
            <li>
              {user.location.country}
              </li>
              <li>
                {user.dob.age}
                </li></>)
          })}
        </ul>
      
      </main>
    </div>
  );
}

export default App;
