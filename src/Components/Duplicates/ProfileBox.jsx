import { Button, Col, Image, ListGroup, Row } from "react-bootstrap"
import "../../Styles/Ingrid.css"
import { withRouter } from "react-router"

const ProfileBox = (props) => (
  <ListGroup id="profile-Box" className="list-groupMod">
    <ListGroup.Item className="ListGroupItem">
      <div className="image-colMod d-flex">
        <Image
          src="https://media-exp1.licdn.com/dms/image/C4D03AQErx2totdpx7w/profile-displayphoto-shrink_800_800/0/1613497757896?e=1632355200&v=beta&t=d7Rt8Arys31OsJVFU91XBSM-u2V0R9Mu3igTyN6Y-kM"
          width="48px"
          roundedCircle
          className="align-self-start"
        />
        {console.log(props, "Inside Profile box")}
        <Col>
          <span className="font-weight-bolder">
            {/* {props.userData[0].name + ' ' + props.userData[0].surname} */}
          </span>
          <p className="m-0">{/* {props.userData[0].title} */}</p>
        </Col>
      </div>
      <div className="d-grid mt-2 font-weight-bolder">
        <Button id="btn-blockMod" variant="outline-primary" block>
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
      <Button
        variant="link"
        className="btn-linkMod"
        onClick={() => {
          props.history.push("/")
          props.setShowTopNavBar(false)
          console.log(props)
        }}
      >
        Sign Out
      </Button>
    </ListGroup.Item>
  </ListGroup>
)
export default withRouter(ProfileBox)
