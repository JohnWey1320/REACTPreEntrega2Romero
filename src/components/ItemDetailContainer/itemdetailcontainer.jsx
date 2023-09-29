import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/itemdetail";
import { useParams } from "react-router-dom";



const messi = [
    { id: 1, image: "https://m.media-amazon.com/images/I/51wzUGWR9kL._AC_UF894,1000_QL80_.jpg", category: "primera", title: "Portgas D Ace" },
    { id: 2, image: "https://d2r9epyceweg5n.cloudfront.net/stores/002/854/187/products/figura-de-acci-n-de-son-goku-para-ni-os-figuritas-de-modelo-de-anime-de-jpg_q901-d5ff9ea398df92e30316841596620060-640-0.jpg", category: "segunda", title: "Goku SSJ" },
    { id: 3, image: "https://2.bp.blogspot.com/-OKYVVq1pjLw/UYkgNRPmWlI/AAAAAAAA-gU/ZqsFAVQlDXI/s1600/news_large_rukawa_sub.jpg", category: "segunda", title: "Rukawa" },
];

export const ItemDetailContainer = () => {

    const [data, setData] = useState({});
    const { detalleid } = useParams();

    useEffect(() => {
        const getData = new Promise(resolve => {

            setTimeout(() => {
                resolve(messi);
            }, 1000);

        });

        getData.then(res => setData(res.find(animes => animes.id === parseInt(detalleid))));

    }, [])

    return (

        <ItemDetail data={data} />

    );

}

export default ItemDetailContainer