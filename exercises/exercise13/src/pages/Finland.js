import Modal from "../components/Modal";
import Backdrop from "../components/Backdrop";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const FinlandPage = () => {
  const [showModal, setShowModal] = useState(false);
  const history = useHistory();

  const showModalHandler = () => {
    setShowModal(true);
  };

  const cancelModalHandler = () => {
    setShowModal(false);
  };

  const randomHandler = () => {
    const num = Math.random();
    if (num < 0.2) {
      history.push("/italy");
    } else if (num < 0.4 && num > 0.2) {
      history.push("/brazil");
    } else if (num < 0.6 && num > 0.4) {
      history.push("/france");
    } else if (num < 0.8 && num > 0.6) {
      history.push("/india");
    } else {
      history.push("/france");
    }
  };

  return (
    <div>
      <h2>You are at Helsinki airport. Where do you want to travel?</h2>
      <button onClick={showModalHandler}>go to random destination</button>
      {showModal && (
        <Modal onCancel={cancelModalHandler} onConfirm={randomHandler} />
      )}
      {showModal ? <Backdrop onClick={cancelModalHandler} /> : null}
    </div>
  );
};

export default FinlandPage;
