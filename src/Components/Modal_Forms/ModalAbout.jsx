import React from 'react'
import { Modal, Button, Form, Col } from 'react-bootstrap'
import { useState } from 'react'

function ModalAbout(props) {
  const [formData, setFormData] = useState({
    bio: window.localStorage.getItem('bio'),
  })

  const handleForm = (key, value) => {
    setFormData({
      ...formData,
      [key]: value
    })
  }

  const updateProfileInfo = async () => {
    try {
      let response = await fetch(`${process.env.REACT_APP_DEV_URL}profile/me/${window.localStorage.getItem('_id')}`, 
      {
        method: 'PUT',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)

      })
      let sent = await response.json()
      props.setChangeUserdata(!props.changeUserData)
      props.onHide()
    } catch (e) {
      console.log(e)
      return e
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
          <p className="edit-title">Edit info</p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="bio" className="descriptionAbout" >
              <Form.Label><span className="sum-title ">Summary </span></Form.Label>
              <Form.Control type="text" as='textarea' defaultValue={window.localStorage.getItem('bio')} rows={5} onChange={(e) => handleForm('bio', e.target.value)} />
            </Form.Group>
          </Form.Row>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        {/* <Button onClick={props.onHide}>Close</Button> */}
        <Button className="custom-btn"
          onClick={() => updateProfileInfo()}
        >Save</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalAbout
