import { useState } from "react";

const Modal = () => {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => setShowModal(false);

  const MyModal = () => {
    return (
      <>
        <div className="modal-wrapper" onClick={closeModal} ></div>
        <div className="modal-container">
        <h2>Subscribe to our Newsletter</h2>
        <p>
          Subscribe to our newsletter and never miss our designs, latest
          news,etc. Our newsletter is sent once a weel, every Sunday.
        </p>
        <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            className="input-field"
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            className="input-field"
          />
        </div>
        <div>
        </div>
        <button type="submit" className="modal-btn " onClick={closeModal} >Subscribe</button>
      </form>

        </div>
      </>
    );
  };



  return(
    <div className="conatainer">
        <button className="modal-btn" onClick={()=>setShowModal(true)} >Subscribe</button>
        {showModal && <MyModal/>}
        
    </div>
  );
    
};

export default Modal;
