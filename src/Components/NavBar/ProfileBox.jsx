import { Button, Col, Image, ListGroup, Row } from "react-bootstrap"
import "../../Styles/Ingrid.css"
import { withRouter } from "react-router"

const ProfileBox = (props) => (
  <ListGroup id="profile-Box" className="list-groupMod">
    <ListGroup.Item className="ListGroupItem">
      <div className="image-colMod d-flex">
        <Image
          src={window.localStorage.getItem('image')}
          width="48px"
          roundedCircle
          className="align-self-start inner-avatar"
        />
        <Col>
          <span className="font-weight-bolder">{window.localStorage.getItem('name') + ' ' + window.localStorage.getItem('surname')}</span>
          <p className="m-0">
            {window.localStorage.getItem('title')}
          </p>
        </Col>
      </div>
      <div className="d-grid mt-2 font-weight-bolder">
        <Button onClick={() => props.history.push('profile')} id="btn-blockMod" variant="outline-primary" block>
          View Profile
        </Button>
      </div>
    </ListGroup.Item>
    <ListGroup.Item>
      <span className="font-weight-bolder">Account</span>
      <Button variant="link" className="btn-linkMod">
        Settings & Privacy
      </Button>
      <Button variant="link" className="btn-linkMod">
        Help
      </Button>
      <Button variant="link" className="btn-linkMod">
        Language
      </Button>
    </ListGroup.Item>
    <ListGroup.Item>
      <span className="font-weight-bolder">Manage</span>
      <Button variant="link" className="btn-linkMod">
        Posts & Activity
      </Button>
      <Button variant="link" className="btn-linkMod">
        Job Posting Account
      </Button>
    </ListGroup.Item>
    <ListGroup.Item>
      <Button variant="link" className="btn-linkMod" onClick={() => {
        props.history.push('/')
        window.localStorage.clear()
        props.setShowTopNavBar(false)
      }}>
        Sign Out
      </Button>
    </ListGroup.Item>
  </ListGroup>
)
export default withRouter(ProfileBox)
