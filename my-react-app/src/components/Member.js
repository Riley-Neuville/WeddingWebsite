import React, { useState } from "react";
import "../Member.css";

function Member(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div className="member" onClick={handleModalToggle}>
        <h1>{props.name}</h1>
        <p>{props.description}</p>
      </div>
      {isModalOpen && (
        <div className="modal-overlay" onClick={handleModalToggle}>
          <div className="modal-content">
            <img src={props.imageSrc} alt={`${props.name}`} />
          </div>
        </div>
      )}
    </>
  );
}

export default Member;
