import React from 'react'
import { Modal, Button, Form, Col } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { format } from 'date-fns'


function ModalAddNewExperience(props) {
  const [error, setError] = useState(false)
  const [formData, setFormData] = useState({
    role: '',
    company: '',
    startDate: '',
    endDate: '',
    description: '',
    area: ''
  })
  const [endpoint, setEndpoint] = useState('')
  const [userImage, setUserImage] = useState('')
  const [userImagePath, setUserImagePath] = useState('')


  useEffect(() => {
    if (props.requestmethod === 'PUT'){
      setFormData(
        {
          role: props.userExperience.role,
          company: props.userExperience.company,
          startDate: props.userExperience.startDate
          // format(new Date(props.userExperience.startDate), 'yyyy-MM-dd')
          ,
          endDate: props.userExperience.endDate
          // format(new Date(props.userExperience.endDate), 'yyyy-MM-dd')
          ,
          description: props.userExperience.description,
          area: props.userExperience.area,
          
        }
      )
        
        
        if(Object.keys(props.userExperience).includes('image') ){
            setUserImagePath(props.userExperience.image)
        }
        
      }
  }, [])

  const handleForm = (key, value) => {
    setFormData({
      ...formData,
      [key]: value
    })
  }

  // POST Goes to the Token owner independently of the ID
  const postUserExperience = async () => {
    props.setIsLoading(true)
    
    try {
      if(props.requestmethod === 'PUT' && props.userExperience.image){
        formData.image = props.userExperience.image
      }

      let response = await fetch(props.endpoint, {
        method: props.requestmethod,
        headers: {
          // "Authorization": "Bearer " + window.localStorage.getItem('user_Token'),
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      })
      let newExperienceSent = await response.json()
      props.setIsLoading(false)
      props.setchangeuserdata(!props.changeUserData)
      console.log(newExperienceSent._id, 'new experience response')
      await addExperienceImage(newExperienceSent._id)
      setFormData({
        role: '',
        company: '',
        startDate: '',
        endDate: '',
        description: '',
        area: ''
      })

      setError(false)

      props.onHide()
    } catch (e) {
      setError(true)
      return e
    }
  }


  // Delete
  const deleteUserExperience = async () => {
    props.setIsLoading(true)
    try {
      let response = await fetch(props.endpoint, {
        method: 'DELETE',
        // headers: {
        //   "Authorization": "Bearer " + window.localStorage.getItem('user_Token')
        // },
      })
      props.setIsLoading(false)
      props.setchangeuserdata(!props.changeUserData)
      props.onHide()
    } catch (e) {
      console.log(e)
      return e
    }
  }

  const addExperienceImage = async (expID) => {

    try {
      let response = await fetch(
        // 'https://striveschool-api.herokuapp.com/api/profile/' + window.localStorage.getItem('_id') + '/experiences/' + expID + '/picture'
        `${process.env.REACT_APP_DEV_URL}profile/experience/${window.localStorage.getItem('_id')}/update/${expID}/image`
      , {
        method: 'PUT',
        // headers: {
        //   "Authorization": "Bearer " + window.localStorage.getItem('user_Token'),
        // },
        body: userImage

      })
      props.setchangeExpImg(!props.changeExpImg)
      props.onHide()
      setUserImage('')
      if(props.requestmethod === 'POST'){
        setUserImagePath('')
      }

    } catch (error) {
      console.log(error)
    }

  }




  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <p className="exp-title">Add experience</p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>

          <div className="network">
            <div className="one mb-3">
              <p className="my-0">Notify network</p>
              <span className="make-it-gray">If enabled, your network may be informed of job changes, education changes, and work anniversaries. It may take up to 2 hours to share your job changes with your network.</span>
              <span className="make-it-blue"> Learn how these are shared and when</span>
            </div>

            <div className="radio">
              <label className="switch-wrap">
                <input type="checkbox" />
                <div className="switch"></div>
              </label>
            </div>
          </div>

          <div className="split">
            <div className="first-section">
              <Form.Group controlId="role">
                <Form.Label className={error ? 'text-danger fw-bold' : ''}>Title* {error ? 'Required' : ''}</Form.Label>
                <Form.Control type="text" className="title-role" placeholder={endpoint === 'POST' ? "Enter propsrole" : formData.role} onChange={(e) => handleForm('role', e.target.value)} />
              </Form.Group>
            </div>
            <div className="first-section">
              <Form.Group controlId="company">
                <Form.Label className={error ? 'text-danger fw-bold' : ''}>Company name* {error ? 'Required' : ''}</Form.Label>
                <Form.Control type="text" placeholder={endpoint === 'POST' ? "Enter propsCompany" : formData.company} onChange={(e) => handleForm('company', e.target.value)} />
              </Form.Group>
            </div>
            <div className="first-section">
              <Form.Group controlId="area">
                <Form.Label className={error ? 'text-danger fw-bold' : ''}>Location (city,country) {error ? 'Required' : ''}</Form.Label>
                <Form.Control type="text" placeholder={endpoint === 'POST' ? "propsendare" : formData.area} onChange={(e) => handleForm('area', e.target.value)} />
              </Form.Group>



            </div>
            <div className="check-check">

              <label className="b-contain">
                <input type="checkbox" className="custom-checkbox" />
                <span>I am currently working on this role</span>
              </label>
            </div>

          </div>


          <Form.Row className="dateInputs">
            <Form.Group as={Col} controlId="startDate">
              <Form.Label className={error ? 'text-danger fw-bold' : ''}>Start Date {error ? 'Required' : ''}</Form.Label>
              <Form.Control type="date" value={endpoint === 'POST' ? "" : formData.startDate} onChange={(e) => handleForm('startDate', format(new Date(e.target.value), 'yyyy-MM-dd'))} />
            </Form.Group>
            <Form.Group as={Col} controlId="endDate">
              <Form.Label className={error ? 'text-danger fw-bold' : ''}>End Date {error ? 'Required' : ''}</Form.Label>
              <Form.Control type="date" value={endpoint === 'POST' ? "" : formData.endDate} onChange={(e) => handleForm('endDate', format(new Date(e.target.value), 'yyyy-MM-dd'))} />
            </Form.Group>

          </Form.Row>
        </Form>



        <div className="second-section">

          <Form.Group as={Col}>
            <Form.Label>Headline</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Industry*</Form.Label>
            <Form.Control type="text" />
          </Form.Group>

          <Form.Group as={Col} controlId="description">
            <Form.Label className={error ? 'text-danger fw-bold' : ''}>Description {error ? 'Required' : ''}</Form.Label>
            <Form.Control type="text" as="textarea" rows={5} placeholder={endpoint === 'POST' ? "addDescription" : formData.description} onChange={(e) => handleForm('description', e.target.value)} />
          </Form.Group>
          <Form>
           <div className="Media fix">
              <p className="mb-0">Media</p>
              <p className="make-it-gray font-small">Add or link to external documents, photos, sites, videos, and presentations.</p>
           </div>
            <Form.Group className="d-flex flex-nowrap">
              <div className="btn btn-blue d-flex justify-content-center align-items-center w-50 position-relative border-2-4rem pr-2">
              <span className="upLoadXPImage-YMod">Upload Image</span>
                <Form.File id="exampleFormControlFile1" className="upload-Exp-img position-absolute w-100 h-100"
                  onChange={(e) => {
                    let newUserImage = new FormData()
                    newUserImage.append('image', e.target.files[0])
                    console.log(e.target.files[0].name)
                    setUserImagePath(URL.createObjectURL(e.target.files[0]))
                    setUserImage(newUserImage)
                  }}
                  
                  />
              </div>
                  <div className="space-between"></div>
              <div className="btn btn-outline-primary btn-outline-uploadXPImage verticalAlign w-50 border-2-4rem pl-2"> <span>Link</span></div>
            </Form.Group>
            <div className='show-Exp-image-preview d-flex justify-content-center align-items-center'>
              {userImagePath.length > 5 && <img src={userImagePath} alt="" />}
            </div>
            
          </Form>
        </div>

      </Modal.Body>
      <Modal.Footer className="justify-content-between">
        {props.requestmethod === 'PUT' && <Button variant="" className="border-2-4rem connect_button"
          onClick={() => deleteUserExperience()}
        >Delete</Button>}

        <Button variant="" className="btn-blue saveExpImg-padding-Mod border-2-4rem"
          onClick={() => postUserExperience()}
        >Save</Button>
      </Modal.Footer>
    </Modal >
  )
}

export default ModalAddNewExperience
