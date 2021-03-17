import { React } from 'react';
import '../carditems/cardlist-style.css';
import { Card } from './../card/card.component';

export const CardList= (props)=>{
    return (
        <div className="card-list">
 {props.Monsters.map(monster=>(

 <Card key={monster.id} monster={monster} />))}
    </div>
   
    );
    
}
