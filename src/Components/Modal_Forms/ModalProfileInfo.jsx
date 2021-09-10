import React from 'react'
import { Modal, Button, Form, Col } from 'react-bootstrap'
import { useState, useEffect } from 'react'

function ModalProfileInfo(props) {
  const [error, setError] = useState(false)
  const [formData, setFormData] = useState({
    surname: window.localStorage.getItem('surname'),
    title: window.localStorage.getItem('title'),
    name: window.localStorage.getItem('name'),
    bio: window.localStorage.getItem('bio'),
    area: window.localStorage.getItem('area')
  })

  const handleForm = (key, value) => {
    setFormData({
      ...formData,
      [key]: value
    })
  }

  const updateProfileInfo = async () => {
    try {
      let response = await fetch(
        // 'https://striveschool-api.herokuapp.com/api/profile/'
        `${process.env.REACT_APP_DEV_URL}profile/me/${window.localStorage.getItem('_id')}`
        , {
          method: 'PUT',
          headers: {
            "Authorization": "Bearer " + window.localStorage.getItem('user_Token'),
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)

        })
      let sent = await response.json()
      console.log(sent)
      props.setChangeUserdata(!props.changeUserData)
      let userDataKeyList = Object.keys(formData)
      userDataKeyList.forEach(key => window.localStorage.setItem(key, formData[key]))
      props.onHide()
      setError(false)
    } catch (e) {
      setError(true)
      console.log(e)
      return e
    }
  }

  return (
    <>

      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <p className="edit-title">Edit info</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>


            <Form.Row>
              <Form.Group as={Col} controlId="name">
                <Form.Label className={error ? 'text-danger fw-bold' : ''}>First Name* {error ? 'Required' : ''}</Form.Label>
                <Form.Control type="text" className="change-border" defaultValue={window.localStorage.getItem('name')} onChange={(e) => handleForm('name', e.target.value)} />
                <p className="make-blue">Add former name</p>
              </Form.Group>
              <Form.Group as={Col} controlId="surname">
                <Form.Label className={error ? 'text-danger fw-bold' : ''}>Last Name* {error ? 'Required' : ''}</Form.Label>
                <Form.Control type="text" className="change-border" defaultValue={window.localStorage.getItem('surname')} onChange={(e) => handleForm('surname', e.target.value)} />
              </Form.Group>
            </Form.Row>

            <div>
              <span className="make-gray">+ Record name pronunciation</span><br></br>
              <span className="make-gray-2">Name pronunciation can only be added using our mobile app.</span>
            </div>
            <br></br>


            <Form.Group>
              <Form.Label>Pronouns</Form.Label>
              <Form.Control type="text" className="change-border" placeholder="He/His" />
              <span className="make-gray-2">Let others know how to refer to you. <span className="make-blue-2">Learn more</span></span><br></br>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" className="mercado-match" width="16" height="16" focusable="false">
                <path d="M8 3a8.59 8.59 0 00-8 5 8.54 8.54 0 008 5 8.55 8.55 0 008-5 8.55 8.55 0 00-8-5zm0 8a3 3 0 113-3 3 3 0 01-3 3zm2-3a2 2 0 11-2-2 2 2 0 012 2z"></path>
              </svg>
              <span className="make-blue-2 mx-1">Visible to : All LinkedIn members</span>
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col} controlId="title">
                <Form.Label className={error ? 'text-danger fw-bold' : ''}>Headline* {error ? 'Required' : ''}</Form.Label>
                <Form.Control className="change-border" as='textarea' type="text" defaultValue={window.localStorage.getItem('title')} onChange={(e) => handleForm('title', e.target.value)} />
                <div>
                  <p className="make-blue-3"><span>+</span> Add current position</p>
                </div>
              </Form.Group>
            </Form.Row>


            <Form.Group>
              <Form.Label>Education</Form.Label>
              <Form.Control className="change-border" type="text" placeholder="ex: Strive School" />
              <p className="make-blue">Add new education</p>

              <div className="check-check">

                <label className="b-contain">
                  <input type="checkbox" className="custom-checkbox2" />
                  <span>Show education in my intro</span>
                </label>
              </div>
            </Form.Group>


            <Form.Group>
              <Form.Label>Country/Region*</Form.Label>
              <Form.Control className="change-border" type="text" placeholder="ex: United Kingdom" />
            </Form.Group>
            <Form.Row>
              <Form.Group className="col-4">
                <Form.Label>Postal code</Form.Label>
                <Form.Control className="change-border" type="text" placeholder="ex: L25 59AA" />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label className={error ? 'text-danger fw-bold' : ''}>Locations within this area {error ? 'Required' : ''}</Form.Label>
                <Form.Control className="change-border" type="text" defaultValue={window.localStorage.getItem('area')} onChange={(e) => handleForm('area', e.target.value)} />
              </Form.Group>
            </Form.Row>

            <Form.Group>
              <Form.Label>Industry* </Form.Label>
              <Form.Control className="change-border" type="text" placeholder="ex: United Kingdom" />
            </Form.Group>

            <div className="contact-info">
              <span>Contact info</span>
              <div className="split-2">
                <p>Profile URL, Email, WeChat ID</p>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false"><path d="M21.13 2.86a3 3 0 00-4.17 0l-13 13L2 22l6.19-2L21.13 7a3 3 0 000-4.16zM6.77 18.57l-1.35-1.34L16.64 6 18 7.35z"></path></svg>

              </div>

            </div>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button onClick={props.onHide}>Close</Button> */}
          <Button className="custom-btn" onClick={() => updateProfileInfo()}>Save</Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default ModalProfileInfo
