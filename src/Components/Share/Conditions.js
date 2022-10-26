import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Conditions = () => {
    return (
        <div className='background text-white'>
            <Container>
                <Row>
                    <Col lg="3"></Col>
                    <Col lg="6">
                        <div>
                            <div className='mt-5'>
                                <h2 className='mb-3'>WELCOME to EDUMA</h2>
                                <h4>Terms and Conditions</h4>
                            </div>
                            <div>
                                <p>This Privacy Policy applies to all of the services offered by Google LLC and its affiliates, including YouTube, Android, and services offered on third-party sites, such as advertising services. This Privacy Policy doesn’t apply to services that have separate privacy policies that do not incorporate this Privacy Policy.

                                    This Privacy Policy doesn’t apply to:

                                    The information practices of other companies and organizations that advertise our services
                                    Services offered by other companies or individuals, including products or sites they offer that may include Google services to which the policy applies, or products or sites displayed to you in search results, or linked from our services</p>
                            </div>
                        </div>
                        <hr />
                        <p>Go to: <Link to='/registration'>Register</Link> </p>
                    </Col>
                    <Col lg="3"></Col>
                </Row>
            </Container>
        </div>
    );
};

export default Conditions;