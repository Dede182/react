import React from 'react';
const Menu = ({items})=>{
    return(
        <div className='center div'>
            {items.map((menuitem)=>{
                const {id,title,category,price,img,desc} = menuitem;
                return <article key = {id} className = "menu-item">
                    <img src = {img} alt = {title}/>
                    <div className='food-info'>
                        <header>
                            <h4>{title}</h4>
                            <h4 className='pricelist'>{price}</h4>
                        </header>
                        <p className='desc'>{desc}</p>
                    </div>
                </article>
            })}

        </div>
    )
}
export default Menu;