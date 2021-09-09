import { Card, FormControl, Button } from "react-bootstrap";
const Comments = () => {
  return (
    <Card>
      <Card.Body>
        <FormControl as="textarea" aria-label="With textarea" />
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};
export default Comments;
