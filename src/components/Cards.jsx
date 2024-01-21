import Card from './Card';

export default function Cards(props) {

   return <div>{
         props.characters.map((elements) =>(
            <Card key = {elements.id}
            id={elements.id}
            name = {elements.name}
            status = {elements.status}
            species = {elements.species}
            gender = {elements.gender}
            origin = {elements.origin.name}
            image = {elements.image}
            onClose={props.onClose}
            />

         ))
      }</div>;
}
