import React, { useState } from 'react';
import data from './data';
import Menu from './menu';
import Catagory from './catagory';

const Allitems = ['all',...new Set(data.map((item)=>item.category))];
console.log(Allitems)

function App(){
  const [menuItems,setMenu] = useState(data);
  const [cata,setCata] = useState(Allitems);
  const filter = (catagory)=>{
    if(catagory === 'all'){
      setMenu(data);
      return;
    }
    const newItem = data.filter((item)=>item.category === catagory);
    setMenu(newItem);
  }
  return(
    <div>
      <main>
        <section className = "section">
          <div>
            <h2>Our Menu</h2>
          </div>
          <Catagory cata = {cata} filter = {filter}/>
          <Menu items = {menuItems}/>
        </section>
      </main>
    </div>
  )
}


  export default App;