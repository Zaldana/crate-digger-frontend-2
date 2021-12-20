import React, { useEffect, useState, useContext } from 'react'
import { AuthContext } from '../../../context/AuthContext';
import AxiosBackend from '../../../lib/axios/AxiosBackend';
import EmailHook from "../../hooks/EmailHook"
import FirstNameHook from "../../hooks/FirstNameHook"
import LastNameHook from "../../hooks/LastNameHook"
import PasswordHook from "../../hooks/PasswordHook"
import ConfirmPasswordHook from "../../hooks/ConfirmPasswordHook"
import UsernameHook from "../../hooks/UsernameHook"
import { useNavigate } from "react-router-dom";
import { Line, Pie, } from 'react-chartjs-2';
import { toast } from 'react-toastify';

import {
    Row,
    Container,
    Breadcrumb,
    Accordion,
    Button,
    Modal,
    Form,
} from 'react-bootstrap'

import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
    Title,
    LinearScale,
    CategoryScale,
    ArcElement,
} from 'chart.js'

ChartJS.register(
    LinearScale,
    CategoryScale,
    PointElement,
    LineElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
    Filler,
    RadialLinearScale,
);


function Profile() {

    const [ , setUserInfo] = useState([]);
    const [userFirstName, setUserFirstName] = useState("");
    const [userLastName, setUserLastName] = useState("");
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [collectionLength, setCollectionLength] = useState(0);
    const [wishlistLength, setWishlistLength] = useState(0);
    const [show, setShow] = useState(false);

    const [genreTally, setGenreTally] = useState([])
    const [genreLabel, setGenreLabel] = useState([])

    const [decData, setDecData] = useState(0);
    const [janData, setJanData] = useState(0);
    const [febData, setFebData] = useState(0);
    const [marData, setMarData] = useState(0);
    const [aprData, setAprData] = useState(0);
    const [mayData, setMayData] = useState(0);
    const [junData, setJunData] = useState(0);
    const [julData, setJulData] = useState(0);
    const [augData, setAugData] = useState(0);
    const [sepData, setSepData] = useState(0);
    const [octData, setOctData] = useState(0);
    const [novData, setNovData] = useState(0);

    const [decNewData, setDecNewData] = useState(0);
    const [janNewData, setJanNewData] = useState(0);
    const [febNewData, setFebNewData] = useState(0);
    const [marNewData, setMarNewData] = useState(0);
    const [aprNewData, setAprNewData] = useState(0);
    const [mayNewData, setMayNewData] = useState(0);
    const [junNewData, setJunNewData] = useState(0);
    const [julNewData, setJulNewData] = useState(0);
    const [augNewData, setAugNewData] = useState(0);
    const [sepNewData, setSepNewData] = useState(0);
    const [octNewData, setOctNewData] = useState(0);
    const [novNewData, setNovNewData] = useState(0);

    const [
        firstName,
        handleFirstNameOnChange,
        firstNameError,
        setFirstNameOnFocus,
        setFirstNameOnBlur,
    ] = FirstNameHook();

    const [
        lastName,
        handleLastNameOnChange,
        lastNameError,
        setLastNameOnFocus,
        setLastNameOnBlur,
    ] = LastNameHook();

    const [
        username,
        handleUsernameOnChange,
        usernameError,
        setUsernameOnFocus,
        setUsernameOnBlur,
    ] = UsernameHook();

    const [
        password,
        handlePasswordOnChange,
        passwordError,
        setPasswordOnFocus,
        setPasswordOnBlur,
    ] = PasswordHook();

    const [
        confirmPassword,
        handleConfirmPasswordOnChange,
        confirmPasswordError,
        setConfirmPasswordOnFocus,
        setConfirmPasswordOnBlur,
    ] = ConfirmPasswordHook();

    const [
        email,
        handleEmailOnChange,
        emailError,
        setEmailOnFocus,
        setEmailOnBlur,
    ] = EmailHook();

    const navigate = useNavigate();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const collectionGraph = {
        labels: ['December', 'January', 'February', 'March',
            'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November'],
        datasets: [
            {
                label: 'New Stuff',
                fill: true,
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                yAxisID: 'y',
                data: [
                    decNewData,
                    janNewData,
                    febNewData,
                    marNewData,
                    aprNewData,
                    mayNewData,
                    junNewData,
                    julNewData,
                    augNewData,
                    sepNewData,
                    octNewData,
                    novNewData,
                ]
            },
            {
                label: 'Total Collection',
                fill: true,
                backgroundColor: 'rgba(245, 146, 95, .8)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                yAxisID: 'y',
                data: [
                    decData,
                    janData,
                    febData,
                    marData,
                    aprData,
                    mayData,
                    junData,
                    julData,
                    augData,
                    sepData,
                    octData,
                    novData,
                ]
            }
        ]
    }

    const genreGraph = {
        labels: genreLabel,
        datasets: [
            {
                label: 'Genre Count',
                data: genreTally,
                backgroundColor: [
                    'rgba(228, 103, 109, 0.8)',
                    'rgba(228, 165, 103, 0.8)',
                    'rgba(228, 226, 103, 0.8)',
                    'rgba(165, 228, 103, 0.8)',
                    'rgba(103, 228, 147, 0.8)',
                    'rgba(103, 215, 228, 0.8)',
                    'rgba(103, 165, 228, 0.8)',
                    'rgba(128, 103, 228, 0.8)',
                    'rgba(228, 103, 219, 0.8)',
                    'rgba(134, 39, 43, 0.8)',
                    'rgba(134, 39, 124, 0.8)',
                    'rgba(40, 39, 134, 0.8)',
                    'rgba(39, 97, 134, 0.6)',
                    'rgba(39, 134, 80, 0.8)',
                    'rgba(101, 134, 39, 0.8)'
                ],
                borderColor: [
                    'rgba(228, 103, 109, 0.8)',
                    'rgba(228, 165, 103, 0.8)',
                    'rgba(228, 226, 103, 0.8)',
                    'rgba(165, 228, 103, 0.8)',
                    'rgba(103, 228, 147, 0.8)',
                    'rgba(103, 215, 228, 0.8)',
                    'rgba(103, 165, 228, 0.8)',
                    'rgba(128, 103, 228, 0.8)',
                    'rgba(228, 103, 219, 0.8)',
                    'rgba(134, 39, 43, 0.8)',
                    'rgba(134, 39, 124, 0.8)',
                    'rgba(40, 39, 134, 0.8)',
                    'rgba(39, 97, 134, 0.8)',
                    'rgba(39, 134, 80, 0.8)',
                    'rgba(101, 134, 39, 0.8)'
                ]
            }
        ]
    }

    useEffect(() => {
        getUser()
        fetchCollection()
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

        } catch (e) {
            console.log(e);
        }
    }

    async function fetchCollection() {

        try {

            let collectionResult = await AxiosBackend.get(
                'collection/',
            );
            
            let collectionArray = collectionResult.data.userCollection
            
            
            let genreArray = []
            let genreCounts = {}
            let genreLabelArray = []
            let genreTallyArray=[]
            collectionArray.map((item) => (genreArray.push(...item.albumGenre)))
            genreArray.forEach(function (x) { genreCounts[x] = (genreCounts[x] || 0) + 1; });
            for (var property in genreCounts) {
                if (!genreCounts.hasOwnProperty(property)) {
                    continue;
                }
                genreLabelArray.push(property);
                genreTallyArray.push(genreCounts[property]);
            }
            setGenreLabel(genreLabelArray)
            setGenreTally(genreTallyArray)

            let dateArray = []
            collectionArray.map((item) => (
                dateArray.push(new Date(item.createdAt).getUTCMonth())
            ))

            const dec = dateArray.filter(item => item === 11)
            const jan = dateArray.filter(item => item === 0)
            const feb = dateArray.filter(item => item === 1)
            const mar = dateArray.filter(item => item === 2)
            const apr = dateArray.filter(item => item === 3)
            const may = dateArray.filter(item => item === 4)
            const jun = dateArray.filter(item => item === 5)
            const jul = dateArray.filter(item => item === 6)
            const aug = dateArray.filter(item => item === 7)
            const sep = dateArray.filter(item => item === 8)
            const oct = dateArray.filter(item => item === 9)
            const nov = dateArray.filter(item => item === 10)

            setDecNewData(dec.length)
            setJanNewData(jan.length)
            setFebNewData(feb.length)
            setMarNewData(mar.length)
            setAprNewData(apr.length)
            setMayNewData(may.length)
            setJunNewData(jun.length)
            setJulNewData(jul.length)
            setAugNewData(aug.length)
            setSepNewData(sep.length)
            setOctNewData(oct.length)
            setNovNewData(nov.length)

            setDecData(dec.length)
            setJanData(dec.length + jan.length)
            setFebData(dec.length + jan.length + feb.length)
            setMarData(dec.length + jan.length + feb.length + mar.length)
            setAprData(dec.length + jan.length + feb.length + mar.length + apr.length)
            setMayData(dec.length + jan.length + feb.length + mar.length + apr.length)
            setJunData(dec.length + jan.length + feb.length + mar.length + apr.length + jun.length)
            setJulData(dec.length + jan.length + feb.length + mar.length + apr.length + jun.length)
            setAugData(dec.length + jan.length + feb.length + mar.length + apr.length + jun.length + aug.length)
            setSepData(dec.length + jan.length + feb.length + mar.length + apr.length + jun.length + aug.length + sep.length)
            setOctData(dec.length + jan.length + feb.length + mar.length + apr.length + jun.length + aug.length + sep.length + oct.length)
            setNovData(dec.length + jan.length + feb.length + mar.length + apr.length + jun.length + aug.length + sep.length + oct.length + nov.length)

        } catch (e) {
            console.log(e);
        }
    }

    async function handleSubmit(e) {

        e.preventDefault();

        try {

            await AxiosBackend.put(
                'users/edit-user/',
                {
                    firstName,
                    lastName,
                    username,
                    email,
                    password,
                    confirmPassword
                }
            );

            toast.success("Changes Saved Please Sign In", {
                position: "top-center",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

            logout()
            

        } catch (e) {

            let errorMessage = Object.values((e.response.data.error))

            toast.error(errorMessage.toString(), {
                position: "top-center",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

        }
    }

    const {
        dispatch,
    } = useContext(AuthContext)

    function logout() {

        navigate("/sign-in");
        dispatch({
            type: "LOGOUT",
        });
        window.localStorage.removeItem("jwtToken");
    }

    return (
        <Container style={{fontFamily: "Spartan"}}>
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
                    <Accordion.Item
                        eventKey="0"
                        style={{
                            backgroundColor: "rgba(0, 0, 0, 0.425)",
                            boxShadow: "7px 7px 13px rgba(0, 0, 0, 0.75)",
                            color: "whitesmoke"
                        }}
                    >
                        <Accordion.Header>User Info</Accordion.Header>
                        <Accordion.Body style={{ backgroundColor: "black" }}>
                            <p><b>Name:</b> {userFirstName}</p>
                            <p><b>Last Name:</b> {userLastName}</p>
                            <p><b>Username:</b> {userName}</p>
                            <p><b>email:</b> {userEmail}</p>
                            <p><b>Wishlist Size:</b> {wishlistLength} Records</p>
                            <p><b>Collection Size:</b> {collectionLength} Records and Counting!</p>
                            <br/>
                            <Container fluid="true" className="d-flex justify-content-end">
                                <Button onClick={handleShow}>Edit User Info</Button>
                            </Container>
                            </Accordion.Body>
                        </Accordion.Item>
                </Accordion>
                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                    style={{color: "black"}}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Edit User Info</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form size="lg" onSubmit={handleSubmit} >
                            <Form.Group>
                                <Form.Label >First Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="firstName"
                                    placeholder="First Name"
                                    onFocus={() => setFirstNameOnFocus(true)}
                                    onBlur={() => setFirstNameOnBlur(true)}
                                    onChange={handleFirstNameOnChange}
                                />
                                <Form.Text muted>{firstNameError && firstNameError}</Form.Text>
                            </Form.Group>
                            <br />
                            <Form.Group>
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="lastName"
                                    placeholder="Last Name"
                                    onFocus={() => setLastNameOnFocus(true)}
                                    onBlur={() => setLastNameOnBlur(true)}
                                    onChange={handleLastNameOnChange}
                                />
                                <Form.Text muted>{lastNameError && lastNameError}</Form.Text>
                            </Form.Group>
                            <br />
                            <Form.Group>
                                <Form.Label>Username</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="username"
                                    placeholder="Username"
                                    onFocus={() => setUsernameOnFocus(true)}
                                    onBlur={() => setUsernameOnBlur(true)}
                                    onChange={handleUsernameOnChange}
                                />
                                <Form.Text muted>{usernameError && usernameError}</Form.Text>
                            </Form.Group>
                            <br />
                            <Form.Group>
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    id="email"
                                    placeholder="name@example.com"
                                    onChange={handleEmailOnChange}
                                    onFocus={() => setEmailOnFocus(true)}
                                    onBlur={() => setEmailOnBlur(true)}
                                />
                                <Form.Text muted>{emailError && emailError}</Form.Text>
                            </Form.Group>
                            <br />
                            <Form.Group>
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    id="password"
                                    placeholder="Password"
                                    onChange={handlePasswordOnChange}
                                    onFocus={() => setPasswordOnFocus(true)}
                                    onBlur={() => setPasswordOnBlur(true)}
                                />
                                <Form.Text>{passwordError && passwordError}</Form.Text>
                            </Form.Group>
                            <br />
                            <Form.Group>
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    id="confirmPassword"
                                    placeholder="Confirm Password"
                                    onChange={handleConfirmPasswordOnChange}
                                    onFocus={() => setConfirmPasswordOnFocus(true)}
                                    onBlur={() => setConfirmPasswordOnBlur(true)}
                                />
                                <Form.Text>{confirmPasswordError && confirmPasswordError}</Form.Text>
                            </Form.Group>
                            <br/>
                            <Container className="d-flex justify-content-end">
                                <Button
                                    type="submit"
                                    style={{marginRight: "10px"}}
                                >Submit</Button>
                                <Button 
                                    variant="danger"
                                    onClick={handleClose}
                                >Cancel</Button>
                            </Container>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <p>All fields are required</p>
                       
                    </Modal.Footer>
                </Modal>
            </Row>
            <Row>
                <Container
                    style={{
                        backgroundColor: "rgba(0, 0, 0, 0.425)",
                        borderRadius: "18px",
                        paddingBottom: "24px",
                        paddingTop: "24px",
                        marginTop: "24px",
                        boxShadow: "7px 7px 13px rgba(0, 0, 0, 0.75)",
                        height: "600px",
                    }}
                >
                    <Pie
                        data={genreGraph}
                        options={
                            {
                                responsive: true,
                                maintainAspectRatio: false,
                                plugins: {
                                    legend: {
                                        display: true,
                                        position: 'bottom',
                                        labels: {
                                            color: "white",
                                            font: {
                                                size: 16
                                            }
                                        }
                                    },
                                    title: {
                                        display: true,
                                        text: 'Genre Breakdown',
                                        position: 'top',
                                        color: 'white',
                                        font: {
                                            size: 24,
                                        }
                                    },
                                }

                            }
                        }
                    />
                </Container>
            </Row>
            <Row>
                <Container style={{
                    backgroundColor: "rgba(0, 0, 0, 0.425)",
                    borderRadius: "18px",
                    paddingBottom: "24px",
                    paddingTop: "24px",
                    marginTop: "30px",
                    boxShadow: "7px 7px 13px rgba(0, 0, 0, 0.75)",
                    height: "450px",
                }}>
                    <Line
                        data={collectionGraph}
                        options={{
                            responsive: true,
                            maintainAspectRatio: false,
                            interaction: {
                                mode: 'index',
                                intersect: false,
                            },
                            plugins: {
                                legend: {
                                    display: true,
                                    position: 'bottom',
                                        labels: {
                                            color: "white",
                                            font: {
                                                size: 16
                                                }
                                        }
                                },
                                title: {
                                    display: true,
                                    text: 'Collection Numbers',
                                    position: 'top',
                                    color: 'white',
                                        font: {
                                            size: 24,
                                        }
                                },
                            },
                            scales: {
                                y: {
                                    type: 'linear',
                                    display: true,
                                    position: 'left',
                                        ticks: {
                                             color: "white",
                                                font: {
                                                    size: 14,
                                                }
                                        }
                                    },
                                    x: {
                                        display: true,
                                            ticks: {
                                                color: "white",
                                                 font: {
                                                    size: 16,
                                                }
                                            }
                                        },
                                    }
                                }
                            }
                        />
                </Container>
            </Row>
        </Container>
    )
}

export default Profile