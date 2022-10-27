import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import Footer from '../Footer/Footer';

const Faq = () => {
    return (
        <div>
            <div className='fqa'>
                <Container className=''>
                    <Row>
                        <Col lg="3"></Col>
                        <Col lg="6">
                            <div className='fqa-heading'>
                                <h3>Common 4 Questions & Answers</h3>
                            </div>
                            <hr className='text-white mb-5' />
                            <Accordion>
                                <Accordion.Item eventKey="0" className='mb-4'>
                                    <Accordion.Header> <b>What is cors?</b> </Accordion.Header>
                                    <Accordion.Body>

                                        Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.
                                        <br /> <br />

                                        An example of a cross-origin request: the front-end JavaScript code served from https://domain-a.com uses XMLHttpRequest to make a request for https://domain-b.com/data.json.
                                        <br /> <br />
                                        For security reasons, browsers restrict cross-origin HTTP requests initiated from scripts. For example, XMLHttpRequest and the Fetch API follow the same-origin policy. This means that a web application using those APIs can only request resources from the same origin the application was loaded from unless the response from other origins includes the right CORS headers. <br /> <br />
                                        The CORS mechanism supports secure cross-origin requests and data transfers between browsers and servers. Modern browsers use CORS in APIs such as XMLHttpRequest or Fetch to mitigate the risks of cross-origin HTTP requests. <br /> <br />
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1" className='mb-4'>
                                    <Accordion.Header> <b> Why are you using firebase?  What other options do you have to implement authentication?</b> </Accordion.Header>
                                    <Accordion.Body>
                                        The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience. When the device regains connection, the Realtime Database synchronizes the local data changes with the remote updates that occurred while the client was offline, merging any conflicts automatically. <br /> <br />

                                        The Realtime Database provides a flexible, expression-based rules language, called Firebase Realtime Database Security Rules, to define how your data should be structured and when data can be read from or written to. When integrated with Firebase Authentication, developers can define who has access to what data, and how they can access it. <br /> <br />

                                        The Realtime Database is a NoSQL database and as such has different optimizations and functionality compared to a relational database. The Realtime Database API is designed to only allow operations that can be executed quickly. This enables you to build a great realtime experience that can serve millions of users without compromising on responsiveness. Because of this, it is important to think about how users need to access your data and then structure it accordingly. <br /> <br />
                                        Authentication is common way to handle security for all applications. This is only way to answer the question “who you are?” to the application, when comes to stateless architecture or service oriented architecture we got lot of new concepts and technologies in the market. In this article we will learn how to handle authentication on RESTful APIs. <br /> <br />
                                        <ol>
                                            <li>
                                                Cookie-Based authentication
                                            </li>
                                            <li>
                                                Token-Based authentication
                                            </li>
                                            <li>
                                                Third party access(OAuth, API-token)
                                            </li>
                                            <li>  OpenId</li>
                                            <li>  SAML</li>
                                        </ol>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3" className='mb-4'>
                                    <Accordion.Header> <b>How does the private route work?</b> </Accordion.Header>
                                    <Accordion.Body>
                                        Private Routes in React Router (also called Protected Routes) require a user being authorized to visit a route (read: page). So if a user is not authorized for a specific page, they cannot access it. The most common example is authentication in a React application where a user can only access the protected pages when they are authorized (which means in this case being authenticated). Authorization goes beyond authentication though. For example, a user can also have roles and permissions which give a user access to specific areas of the application.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4" className='mb-4'>
                                    <Accordion.Header> <b>What is Node? How does Node work?</b> </Accordion.Header>
                                    <Accordion.Body>
                                        <b>Node.js</b> Scalability, latency, and throughput are key performance indicators for web servers. Keeping the latency low and the throughput high while scaling up and out is not easy. Node.js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node.js wastes no time or resources on waiting for I/O requests to return. <br /> <br />

                                        In the traditional approach to creating web servers, for each incoming request or connection the server spawns a new thread of execution or even forks a new process to handle the request and send a response. Conceptually, this makes perfect sense, but in practice it incurs a great deal of overhead. <br /> <br />

                                        While spawning threads incurs less memory and CPU overhead than forking processes, it can still be inefficient. The presence of a large number of threads can cause a heavily loaded system to spend precious cycles on thread scheduling and context switching, which adds latency and imposes limits on scalability and throughput. <br /> <br />
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Col>
                        <Col lg="3"></Col>
                    </Row>
                </Container>
            </div >
            <Footer></Footer>
        </div>
    );
};

export default Faq;