import { Row, Col } from "react-bootstrap";
import SectionProfile from "../SectionProfile";
import ExperienceDetails from "./ExperienceDetails";
import { useState, useEffect } from "react";
import EducationSection from "../../AuxComps/EducationSection";
import Spinners from "../../AuxComps/Spinners"


const Experience = (props) => {
  const [userAllExperiences, setUserAllExperiences] = useState([])
  const [changeUserData, setchangeuserdata] = useState(false)
  const [changeExpImg, setchangeExpImg] = useState(true)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => getUserExperiences(), [])
  useEffect(() => getUserExperiences(), [changeUserData, changeExpImg])

  const getUserExperiences = async () => {
    setIsLoading(true)
    try {
      let response = await fetch(
        // 'https://striveschool-api.herokuapp.com/api/profile/' + window.localStorage.getItem('_id') + '/experiences', 
        `${process.env.REACT_APP_DEV_URL}profile/experience/${window.localStorage.getItem('_id')}`,
        {
          method: 'GET',
          // headers: {
          //   "Authorization": "Bearer " + window.localStorage.getItem('user_Token'),
          // },
        })
      let dataRequested = await response.json()

      setIsLoading(false)
      setUserAllExperiences(dataRequested)
    } catch (e) {
      console.log(e)
      return e
    }
  }
  return (
    <Row>
      <Col className="col-12 experience-area mt-4 px-0">
        <SectionProfile
          changeExpImg={changeExpImg}
          setchangeExpImg={setchangeExpImg}
          changeUserData={changeUserData}
          setIsLoading={setIsLoading}
          setchangeuserdata={setchangeuserdata}
          category={"Experience"} />

        {userAllExperiences.length > 0 ? 
          userAllExperiences.reverse().slice(0, 5).map(userExperience =>
            <ExperienceDetails
              changeExpImg={changeExpImg}
              setIsLoading={setIsLoading}
              setchangeExpImg={setchangeExpImg}
              changeUserData={changeUserData}

              setchangeuserdata={setchangeuserdata} key={userExperience._id}
              userExperience={userExperience} >

            </ExperienceDetails>) 
          : <p className="little-padding">Let's add your first experience</p>}
        {isLoading && <Spinners></Spinners>}
        <SectionProfile category={"Education"} />

        <EducationSection />

      </Col>
    </Row>
  );
};

export default Experience;
