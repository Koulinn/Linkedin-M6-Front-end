import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";
import "../Styles/Sara.css";

const DeleteModal = (props) => {
  const [text, setText] = useState();
  const [textEdit, setTextEdit] = useState();

  const handleChange = (key, value) => {
    setText({ [key]: value });
  };

  useEffect(() => {
    handleEdit();
  }, []);

  const handleEdit = async () => {
    console.log(props.id, "unique ID");
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/" + props.id,
        {
          method: "GET",
          headers: {
            Authorization:
              "Bearer " + window.localStorage.getItem("user_Token"),
          },
        }
      );
      let data = await response.json();
      setTextEdit(data.text);
    } catch (e) {
      console.log(e);
      return e;
    }
  };

  const handleSubmit = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/" + props.id,
        {
          method: "DELETE",
          headers: {
            Authorization:
              "Bearer " + window.localStorage.getItem("user_Token"),
          },
        }
      );
    } catch (e) {
      console.log(e);
      return e;
    }

    props.setShowDelete(false);
    props.renderAgain();
  };

  return (
    <div className="delete-post-container d-flex justify-content-center position-relative">
      <Modal
        show={props.showDelete}
        onHide={props.setShowDelete}
        modal-sm
        className="delete-modal"
      >
        <Modal.Header
          closeButton
          className="delete-modal-header pt-3 pb-0 d-flex justify-content-center"
        >
          <div className="create-post-header ">
            <h2 className=" ">Delete Post?</h2>
          </div>
        </Modal.Header>
        <div className="create-post-body px-0">
          <p className="text-center px-3">
            Are you sure you want to permanently remove this post from Linkedin?
          </p>

          <div className="create-post-body-footer  d-flex pt-2">
            <div className="px-3 btn-who-comment-contianer d-flex align-items-center justify-content-end w-100">
              <Button
                variant="light"
                className="btn-cancel-delete btn-cancel "
                onClick={() => props.setShowDelete(false)}
              >
                Cancel
              </Button>

              <Button
                variant="primary"
                className="btn-cancel-delete ml-1 "
                onClick={handleSubmit}
              >
                Delete
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default DeleteModal;
