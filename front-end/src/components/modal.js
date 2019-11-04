import React from 'react';
import { Modal, Button, Form, Col } from 'react-bootstrap';
// import ToastMsg from './toast';

function BookingModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Create Booking
          </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Row>
                        <Col>
                            <Form.Control placeholder="Start Time" />
                        </Col>
                        <Col>
                            <Form.Control placeholder="End Time" />
                        </Col>
                    </Form.Row>
                    <br />
                    <Button variant="primary" size="lg" block>
                        Check for Available Rooms
  </Button>
                    <br />
                    <div class="text-center">
                        <Button variant="primary" type="submit" style={{ marginRight: 8 }}>
                            Submit
                        </Button>
                        <Button onClick={props.onHide}>Close</Button>
                    </div>
                </Form>
            </Modal.Body>
            <Modal.Footer>

            </Modal.Footer>

            {/* <ToastMsg /> */}
        </Modal>
    );
}

export default BookingModal;