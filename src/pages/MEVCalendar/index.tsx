import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const MTSCalendar = () => {
  return (
    <Container fluid className="mts-calendar__ctn">
      <Row>
        <Col
          xs={{ span: 12, offset: 0 }}
          sm={{ span: 12, offset: 0 }}
          md={{ span: 10, offset: 1 }}
          lg={{ span: 10, offset: 1 }}
          xl={{ span: 10, offset: 1 }}
          xxl={{ span: 10, offset: 1 }}
        >
          <iframe
            src="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3oN5kuh58-7vgi4wESb3uOZVu4l3riDTkTGeqKMxISEn1pj4FnkshUpQVq4QzbkHhHvDKaprta"
            style={{ border: 0 }}
            width="100%"
            height="800px"
          ></iframe>
        </Col>
      </Row>
    </Container>
  );
};

export default MTSCalendar;
