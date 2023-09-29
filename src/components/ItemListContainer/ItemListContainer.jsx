import React, { useState, useEffect } from 'react';
import Title from '../Title/Title';
import ItemCount from '../ItemCount/index';
import ItemList from '../ItemList/itemlist';
import { useParams } from 'react-router-dom';

const animes = [

  { id: 1, image: "https://m.media-amazon.com/images/I/51wzUGWR9kL._AC_UF894,1000_QL80_.jpg", category: 'primera', title: "Portgas D Ace" },

  { id: 2, image: "https://d2r9epyceweg5n.cloudfront.net/stores/002/854/187/products/figura-de-acci-n-de-son-goku-para-ni-os-figuritas-de-modelo-de-anime-de-jpg_q901-d5ff9ea398df92e30316841596620060-640-0.jpg", category: 'segunda', title: "Goku SSJ" },

  { id: 3, image: "https://2.bp.blogspot.com/-OKYVVq1pjLw/UYkgNRPmWlI/AAAAAAAA-gU/ZqsFAVQlDXI/s1600/news_large_rukawa_sub.jpg", category: 'segunda', title: "Rukawa" },

];



export const ItemListContainer = (props) => {

  const [data, setData] = useState([]);

  const { listaid } = useParams();

  useEffect(() => {

    const getData = new Promise(resolve => {

      setTimeout(() => {
        resolve(animes);

      }, 3000);

    });


    if (listaid) {

      getData.then(res => setData(res.filter(animes => animes.category === listaid)));
    } else {
      getData.then(res => setData(res));
    }

  }, [listaid])

  const onAdd = (quantity) => {
    console.log(`Compraste ${quantity} unidades`)

  }

  return (
    <>
      <Title greeting={props.texto} />
      <ItemCount initial={1} stock={5} onAdd={onAdd} />
      <ItemList data={data} />
    </>
  );
}

export default ItemListContainer
