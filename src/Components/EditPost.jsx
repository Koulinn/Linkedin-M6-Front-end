import { useRef, useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import EditModalPost from "./EditModalPost";

const EditPost = (props) => {
  let menuRef = useRef();

  useEffect(() => {
    let handler = (event) => {
      if (!menuRef.current.contains(event.target)) {
        props.setShowEdit(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  return (
    <div ref={menuRef} className="edit-post-user d-flex py-1">

   
       <div className="d-flex py-2 edit-post align-items-center" onClick={() => props.setShow(true)}>
          <div className="pl-3">
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
              <path d="M21.13 2.86a3 3 0 00-4.17 0l-13 13L2 22l6.19-2L21.13 7a3 3 0 000-4.16zM6.77 18.57l-1.35-1.34L16.64 6 18 7.35z"></path>
            </svg>
          </div>
          <div className="pl-2">
            <h6>Edit post</h6>
            <p className="edit-font mb-0">Edit your post and make it great</p>
          </div>
       </div>
       <div className="d-flex py-2 delete-post align-items-center" onClick={() => props.setShowDelete(true)}>
          <div className="pl-3">
         <FaTrashAlt className="trash" />
          </div>
          <div className="pl-2">

            {/* <div
        className="d-flex py-2 edit-post align-items-center"
        onClick={() => props.setShow(true)}
      >
        <div className="pl-3">
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
            <path d="M21.13 2.86a3 3 0 00-4.17 0l-13 13L2 22l6.19-2L21.13 7a3 3 0 000-4.16zM6.77 18.57l-1.35-1.34L16.64 6 18 7.35z"></path>
          </svg>
        </div>
        <div className="pl-2">
          <h6>Edit post</h6>
          <p className="edit-font mb-0">Edit your post and make it great</p>
        </div>
      </div>
      <div
        className="d-flex py-2 delete-post align-items-center"
        onClick={() => props.setShowDelete(true)}
      >
        <div className="pl-3">
          <FaTrashAlt className="trash" />
        </div>
        <div className="delete-btn"> */}

          <h6>Delete post</h6>
          <p className="edit-font mb-0">Delete here, but please, do another</p>
        </div>
      </div>
    </div>
  );
};

export default EditPost;
