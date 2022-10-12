import { Card } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import Dataform from "../components/Dataform";

export function Skills(){
    return (
        <Card className="mt-5 shadow-sm mx-auto" style={{ 
            width: "60%"}}>
            <CardHeader >
                Event
            </CardHeader>
            <Card.Body className="d-flex flex-column">
                <h3>duration</h3>
            </Card.Body>
        </Card>
    )
}