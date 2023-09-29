import Item from "../Item/item";
import React from "react";

const ItemList = ({ data = [] }) => {

    return (

        data.map(animes => <Item key={animes.id} info={animes} />)

    );

}

export default ItemList;