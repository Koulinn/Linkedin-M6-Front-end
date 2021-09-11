import { Container, Row, Col } from "react-bootstrap";
// import "../Styles/Murilo.css";
import Dashboard from "../components-sara/Dashboard";
import RightProfileCard from "./SideCards/RightProfileCard";
import UserDisplay from "./UserDisplay";
import About from "../components-sara/About";
import Activity from "../components-sara/Activity";
import Featured from "../components-sara/Featured";
import Experience from "./ProfileComp/Experience/Experience";
import Interests from "./skills/interests/Interests";
import Skills from "./skills/interests/Skills";
import CreatePost from "../components-sara/CreatePost";

const Profile = (props) => {
  props.setShowTopNavBar(true)
  return (
    <Container>
      <Row>
        <Col className="col-lg-8 pXaxis">
          <UserDisplay
          // userData={props.userData}
          />
          <Row>
            <Col className="col-12 mt-3 px-0">
              <Dashboard></Dashboard>
              <About></About>
              <Featured></Featured>
              <Activity></Activity>
            </Col>
          </Row>
          <Experience></Experience>
          <Row>
            <Col className="px-0">
              <Skills></Skills>
              <Interests></Interests>
            </Col>
          </Row>
        </Col>

        <Col className="col-4">
          <RightProfileCard
          // userData={props.userData}
          ></RightProfileCard>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
