import { useRef } from "react";

const AddPerson = (props) => {
  const FirstNameRef = useRef("");
  const LastNameRef = useRef("");
  const BirthDateRef = useRef("");

  const submitHandler = (event) => {
    event.preventDefault();

    const person = {
      fname: FirstNameRef.current.value,
      lname: LastNameRef.current.value,
      date: BirthDateRef.current.value,
    };

    props.onAddPerson(person);

    FirstNameRef.current.value = "";
    LastNameRef.current.value = "";
    BirthDateRef.current.value = "";
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="text">First Name: </label>
        <textarea rows="1" id="fname" ref={FirstNameRef}></textarea>
      </div>

      <div>
        <label htmlFor="text">Last Name: </label>
        <textarea rows="1" id="lname" ref={LastNameRef}></textarea>
      </div>

      <div>
        <label htmlFor="date">Date of Birth: </label>
        <input type="date" id="date" ref={BirthDateRef} />
      </div>

      <button>Add Person</button>
    </form>
  );
};
export default AddPerson;
