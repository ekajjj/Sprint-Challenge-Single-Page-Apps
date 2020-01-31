import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import WelcomePage from "./components/WelcomePage";
import { Route, Link } from 'react-router-dom';
import {Button} from 'reactstrap';



// Setup default app 


export default function App() {
  return (
    <main>
      <Header />
      <section className="navTop">
      <Button><Link to='/'>Home</Link></Button>
      <Button><Link to='/characters'>Characters</Link></Button>
      <Route exact path='/' component={WelcomePage}/>
      <Route path='/characters' component={CharacterList}/>
      </section>
    </main>
  );
}