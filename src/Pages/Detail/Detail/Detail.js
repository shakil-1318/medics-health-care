import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import Button from 'react-bootstrap/Button';
import './Detail.css'

const Detail = () => {
    let { id } = useParams();

    const [details, setDetails] = useState([]);

    const [singleDetail, setSingleDetail] = useState({});

    //  data load howa
    useEffect(() => {
        fetch("/detaildata.json")
            .then((res) => res.json())
            .then((data) => setDetails(data.detail));
    }, []);

    // call hbe jokon amar shob data load hye state e set hbe
    useEffect(() => {
        const found = details.find(
            (detail) => detail.content.id === id
        );
        setSingleDetail(found);
    }, [details]);

    return (

        <>
            <div className="row m-5 d-flex justify-content-center align-items-center">
                <Card style={{ width: '18rem' }}>
                    <Card.Img width='100' variant="top" src={singleDetail?.picture?.thumbnail} />
                    <Card.Body>
                        <Card.Title>{singleDetail?.name}</Card.Title>
                        <Card.Text>
                            {singleDetail?.content?.description}
                        </Card.Text>
                        <Link to='/home'>
                            <Button variant="primary">Go Home</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Detail;