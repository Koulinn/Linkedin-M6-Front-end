import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useState } from "react";

const CreatePost = (props) => {
  const [text, setText] = useState();
  const [img, setImg] = useState();
  const [imgToSend, setImgToSend] = useState('');

  const handleChange = (key, value) => {
    setText({[key]: value});
  };

  const handleSubmit = async () => {
    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/posts/",
        {
          method: "POST",
          headers: {
            "Authorization": "Bearer " + window.localStorage.getItem('user_Token'),
            "Content-Type": "application/json",
          },
          body: JSON.stringify(text),
        }
      );

      // console.log("GET DETAILS", response.json())
      let data = await response.json()
      let id = data._id
      console.log(id)
      if (imgToSend){
        sendImage(id)
      }else {
        props.handleClose()
        props.renderAgain()
      }
    } catch (e) {
      console.log(e);
      return e;
    }
  };

const sendImage = async (id) => {
  console.log("o que tem aqui", imgToSend)
  try {
    let response = await fetch("https://striveschool-api.herokuapp.com/api/posts/" + id,
      {
        method: "POST",
        headers: {
          "Authorization": "Bearer " + window.localStorage.getItem('user_Token'),
        },
        body: imgToSend
      }
    );
  } catch (e) {
    console.log(e);
    return e;
  }
  props.handleClose()
  props.renderAgain()
}

  const imageHandler = (e) => {
console.log("minha foto", e)
    let postImage = new FormData()
    postImage.append('post', e.target.files[0])
    setImgToSend(postImage)
    
    const reader = new FileReader();
    reader.onload = () =>{
      if(reader.readyState === 2){
        setImg(reader.result)
      }
    }
    reader.readAsDataURL(e.target.files[0])
  };

  return (
    <div className="create-post">
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <div className="create-post-header d-flex justify-content-between">
            <h2>Create a Post</h2>
          </div>
        </Modal.Header>
        <div className="create-post-body">
          <div className="create-post-user d-flex">
            <img src={`${window.localStorage.getItem("image")}`} alt="" />
            <div className="d-flex flex-column user-name-btn-container">
              <div className="user-name">
                {window.localStorage.getItem("name") +
                  " " +
                  window.localStorage.getItem("surname")}
              </div>
              <Button
                variant="light"
                className="btn-who-see-post d-flex align-items-center "
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    data-supported-dps="16x16"
                    fill="currentColor"
                    className="mercado-match"
                    width="16"
                    height="16"
                    focusable="false"
                  >
                    <path d="M8 1a7 7 0 107 7 7 7 0 00-7-7zM3 8a5 5 0 011-3l.55.55A1.5 1.5 0 015 6.62v1.07a.75.75 0 00.22.53l.56.56a.75.75 0 00.53.22H7v.69a.75.75 0 00.22.53l.56.56a.75.75 0 01.22.53V13a5 5 0 01-5-5zm6.24 4.83l2-2.46a.75.75 0 00.09-.8l-.58-1.16A.76.76 0 0010 8H7v-.19a.51.51 0 01.28-.45l.38-.19a.74.74 0 01.68 0L9 7.5l.38-.7a1 1 0 00.12-.48v-.85a.78.78 0 01.21-.53l1.07-1.09a5 5 0 01-1.54 9z"></path>
                  </svg>
                </span>
                <span className="mt-1 ml-1 btn-who-see-post-text">Anyone</span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    data-supported-dps="16x16"
                    fill="currentColor"
                    className="mercado-match"
                    width="16"
                    height="16"
                    focusable="false"
                  >
                    <path d="M8 11L3 6h10z" fill-rule="evenodd"></path>
                  </svg>
                </span>
              </Button>
            </div>
          </div>
          <Form>
          <div className="post-area-container">
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="What do you want to talk about?"
                className="post-area"
                onChange={(e) => handleChange('text', e.target.value)}
              />
            </Form.Group>
          </div>
          <div className="img-upload">
            {img &&
            <img src={img} className="img-fluid" alt="" />
            }
          </div>
          <div>
            <span className="btn-add-hashtag">Add hashtag</span>
          </div>
          <div className="create-post-body-footer d-flex pt-2">
            <div className="create-post-body-footer-icons d-flex justify-content-around">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill="currentColor"
                  className="mercado-match  "
                  width="24"
                  height="24"
                  focusable="false"
                >
                  <path d="M21 13h-8v8h-2v-8H3v-2h8V3h2v8h8z"></path>
                </svg>
              </span>
                <span className="input-file">
                
                  <label for="arquivo">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    data-supported-dps="24x24"
                    fill="currentColor"
                    className="mercado-match"
                    width="24"
                    height="24"
                    focusable="false"                  
                  >
                    <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z"></path>
                  </svg>
                  </label>
                  <input type="file" name="arquivo" id="arquivo" onChange={imageHandler}/>
                 
                </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill="currentColor"
                  className="mercado-match"
                  width="24"
                  height="24"
                  focusable="false"
                >
                  <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm-9 12V8l6 4z"></path>
                </svg>
              </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill="currentColor"
                  className="mercado-match"
                  width="24"
                  height="24"
                  focusable="false"
                >
                  <path d="M3 3v15a3 3 0 003 3h9v-6h6V3zm9 8H6v-1h6zm6-3H6V7h12zm-2 8h5l-5 5z"></path>
                </svg>
              </span>
            </div>
            <div className="btn-who-comment-contianer d-flex align-items-center w-100">
              <Button variant="light" className="btn-who-comment ">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    data-supported-dps="16x16"
                    fill="currentColor"
                    className="mercado-match ml-0"
                    width="16"
                    height="16"
                    focusable="false"
                  >
                    <path d="M5 8h5v1H5zm11-.5v.08a6 6 0 01-2.75 5L8 16v-3H5.5A5.51 5.51 0 010 7.5 5.62 5.62 0 015.74 2h4.76A5.5 5.5 0 0116 7.5zm-2 0A3.5 3.5 0 0010.5 4H5.74A3.62 3.62 0 002 7.5 3.53 3.53 0 005.5 11H10v1.33l2.17-1.39A4 4 0 0014 7.58zM5 7h6V6H5z"></path>
                  </svg>
                </span>
                <span className="btn-who-comment-text mt-1 ml-1">Anyone</span>
              </Button>
            </div>
            <div>
              <Button
                variant="light"
                className="btn-post mt-1 "
                onClick={handleSubmit}
              >
                Post
              </Button>
            </div>
          </div>
          </Form>
        </div>
      </Modal>
    </div>
  );
};

export default CreatePost;
