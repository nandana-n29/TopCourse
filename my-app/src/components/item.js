import './item.css';

function Item(props)
{
    const name=props.name;
    return(
    <p className="nirma">{name}</p>
    
    );
    
}

export default Item;