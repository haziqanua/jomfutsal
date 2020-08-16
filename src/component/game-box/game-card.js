import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button"
import InputGroup from "react-bootstrap/InputGroup"
import "./game-card.css";
import { GrLocation, GrCalendar, GrClock } from 'react-icons/gr';

function GameCard({id, venue, date, time, link}) {
  return (
    <Card className="grow card-size" style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Text>
          <InputGroup>
            <InputGroup.Text><GrLocation /></InputGroup.Text>
            <InputGroup.Text>{venue}</InputGroup.Text>
          </InputGroup>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text><GrCalendar/></InputGroup.Text>
            </InputGroup.Prepend>
            <InputGroup.Text>
            {date}
            </InputGroup.Text>
          </InputGroup>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text><GrClock/></InputGroup.Text>
            </InputGroup.Prepend>
            <InputGroup.Text>
              {time}
            </InputGroup.Text>
          </InputGroup>
        </Card.Text>
      </Card.Body>
      <Card.Footer>
      <Button variant="outline-dark">Join</Button>
      </Card.Footer>
    </Card>
  );
}

export default GameCard;
