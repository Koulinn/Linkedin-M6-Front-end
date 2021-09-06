import { Container, Row, Col } from "react-bootstrap";
import LeftProfile from "./LeftProfile";
import Post from "../components-sara/Post";
import Sidebar from "./RaiaComponents/Sidebar";
import Feed from "./Feed";
import SideHome from "./SideHome";
import { useState } from "react";
import Spinner from "./RaiaComponents/Spinners";
import TransitionPage from "./RaiaComponents/TransitionPage";
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
        "https://striveschool-api.herokuapp.com/api/posts/",
        {
          method: "GET",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGY1MmE4MDBlZmU3ODAwMTU1YzM0OTciLCJpYXQiOjE2MjY2Nzk5MzcsImV4cCI6MTYyNzg4OTUzN30.dz6oZpHTTO13hJGMeiBb_EOnLwxxM7uJOC8wlwLKXY4",
          },
        }
      );
      console.log("inside get all POSTS AFTER FETCH", response);
      let dataRequested = await response.json();
      const data = dataRequested;
      console.log(data);
      setPosts(data.slice(data.length -25));
      console.log(dataRequested);
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
