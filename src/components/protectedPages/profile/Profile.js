import React, { useEffect, useState } from 'react'
import AxiosBackend from '../../../lib/axios/AxiosBackend';

import {
    Row,
    Container,
    Breadcrumb,
    Accordion,
    Button,
} from 'react-bootstrap'

function Profile() {

    const [userInfo, setUserInfo] = useState([]);
    const [userFirstName, setUserFirstName] = useState("");
    const [userLastName, setUserLastName] = useState("");
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [collectionLength, setCollectionLength] = useState(0);
    const [wishlistLength, setWishlistLength] = useState(0);

    useEffect(() => {
        getUser()
    }, [])

    async function getUser() {

        try {

            let user = await AxiosBackend.get('users/user-info');

            setUserInfo(user.data.user);
            setUserFirstName(user.data.user.firstName);
            setUserLastName(user.data.user.lastName);
            setUserName(user.data.user.username);
            setUserEmail(user.data.user.email);
            setCollectionLength(user.data.user.vinylCollection.length);
            setWishlistLength(user.data.user.wishlist.length);

            console.log(user.data.user);

        } catch (e) {
            console.log(e);
        }
    }

    return (
        <Container>
            <Row className="g-0">
                <Breadcrumb className="breadcrumb-styles">
                    <Breadcrumb.Item href="/protected-home">Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="/album-search">Album Search</Breadcrumb.Item>
                    <Breadcrumb.Item href="/artist-search">Artist Search</Breadcrumb.Item>
                    <Breadcrumb.Item href="/wishlist">Wishlist</Breadcrumb.Item>
                    <Breadcrumb.Item href="/collection">Collection</Breadcrumb.Item>
                    <Breadcrumb.Item active>Profile</Breadcrumb.Item>
                </Breadcrumb>
            </Row>
            <Row>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>User info</Accordion.Header>
                            <Accordion.Body>
                            <p><b>Name:</b> {userFirstName}</p>
                            <p><b>Last Name:</b> {userLastName}</p>
                            <p><b>Username:</b> {userName}</p>
                            <p><b>email:</b> {userEmail}</p>
                            <p><b>Collection Size:</b> {collectionLength} records and counting!</p>
                            <br />
                            <Container className="d-flex justify-content-end">
                                <Button>Edit User Info</Button>
                            </Container>
                            </Accordion.Body>
                        </Accordion.Item>
                </Accordion>
            </Row>
            <Row>
                <Container>

                </Container>
            </Row>
        </Container>
    )
}

export default Profile