import React from 'react';
import data from './data';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"
const All = props =>{
    return( 
        <ul>
            {data.map(u => 
                <article key = {u.id} className = "menu-item">
                <img src = {u.img} alt = {u.title}/>
                <div className='food-info'>
                    <header>
                        <h4>{u.title}</h4>
                        <h4 className='pricelist'>{u.price}</h4>
                    </header>
                    <p className='desc'>{u.desc}</p>
                </div>
            </article>)
            }
        </ul>
    )
}
const Breakfast = props =>{
  return(
    <div>
      {data.filter(u => u.category == 'breakfast').map(
        u=> <article key = {u.id} className = "menu-item">
        <img src = {u.img} alt = {u.title}/>
        <div className='food-info'>
            <header>
                <h4>{u.title}</h4>
                <h4 className='pricelist'>{u.price}</h4>
            </header>
            <p className='desc'>{u.desc}</p>
        </div>
    </article>
      )}
    </div>
  )
}
const Dinner = props =>{
  return(
    <div>
      {data.filter(u => u.category == 'dinner').map(
        u=> <article key = {u.id} className = "menu-item">
        <img src = {u.img} alt = {u.title}/>
        <div className='food-info'>
            <header>
                <h4>{u.title}</h4>
                <h4 className='pricelist'>{u.price}</h4>
            </header>
            <p className='desc'>{u.desc}</p>
        </div>
    </article>
      )}
    </div>
  )
}
function App(){
    return (
        <Router>
          <div>
            <button><Link to="/all">all</Link></button>
            <button><Link to="/breakfast">breakfast</Link></button>
            <button><Link to="/dinner">dinner</Link></button>
          </div>
          <Switch>
            <Route path = "/all"><All/></Route>
            <Route path = "/breakfast"><Breakfast/></Route>
            <Route path = "/dinner"><Dinner/></Route>
          </Switch>
        </Router>
    );

}
export default App;