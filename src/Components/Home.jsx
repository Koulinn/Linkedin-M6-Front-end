import { Container, Row, Col } from "react-bootstrap";
import LeftProfile from "./AuxComps/LeftProfile";
import Post from "../components-sara/Post";
import Sidebar from "./AuxComps/Sidebar";
import Feed from "./Feed";
import SideHome from "./SideHome";
import { useState } from "react";
import Spinner from "./AuxComps/Spinners";
import TransitionPage from "./AuxComps/TransitionPage";
import { useEffect } from "react";

const Home = (props) => {
  const [posts, setPosts] = useState([]);

  const renderAgain = () => {
    getAllPosts();
  };

  let count = 10

  const getAllPosts = async () => {
    try {
      let response = await fetch(
        `${process.env.REACT_APP_DEV_URL}posts`
        // "https://striveschool-api.herokuapp.com/api/posts/",
        // {
        //   method: "GET",
        //   headers: {
        //     Authorization:
        //       "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNWYwNmIzNTgxNzAwMTVjMjI3MDUiLCJpYXQiOjE2MzEwMzI0MTcsImV4cCI6MTYzMjI0MjAxN30.GuRCNEbL0_j5DW_1nAVACUZMQ9DKww6hz1cHkUQOD34",
        //   },
        // }
      );
      let dataRequested = await response.json();
      const data = dataRequested;
      setPosts(data);
    } catch (e) {
      console.log(e);
      return e;
    }
  };

  useEffect(() => getAllPosts(), []);

  return (
    <>
      <Container>
        <Row>
          <Col className="col-lg-2 px-0 d-none col-md-4  d-md-block">
            <LeftProfile />
          </Col>
          <Col className="col-lg-6 col-md-8 col-sm-12 pr-0">
            <Post renderAgain={renderAgain} />
            {posts
              .map((post, index) => (
                <Feed renderAgain={renderAgain} key={index} data={post} />
              ))
              .slice(posts.length - 25)
              .reverse()}
          </Col>
          <Col className="col-lg-4 d-none d-lg-block">
            <SideHome></SideHome>
          </Col>

          {/* <Col>
                        <Sidebar />
                        <Spinner />
                    </Col> */}
        </Row>
      </Container>
      {props.setShowTopNavBar(true)}
    </>
  );
};

export default Home;
