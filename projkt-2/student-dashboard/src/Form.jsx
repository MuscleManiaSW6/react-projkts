import { useState } from "react";

const Form = ({ dataBase }) => {
  const [nameValue, setNameValue] = useState("");

  const [subValue1, setSubValue1] = useState("");
  const [subValue2, setSubValue2] = useState("");
  const [subValue3, setSubValue3] = useState("");
  const [subValue4, setSubValue4] = useState("");
  const [subValue5, setSubValue5] = useState("");

  const [marksValue1, setMarksValue1] = useState("0");
  const [marksValue2, setMarksValue2] = useState("0");
  const [marksValue3, setMarksValue3] = useState("0");
  const [marksValue4, setMarksValue4] = useState("0");
  const [marksValue5, setMarksValue5] = useState("0");

  function handleSubmit() {
    if (nameValue.trim() == "") {
      alert("Please enter your name");
      return;
    }

    const studentInfo = {
      id: crypto.randomUUID(),
      name: nameValue,

      subjects: [
        { sub: subValue1, marks: marksValue1 },
        { sub: subValue2, marks: marksValue2 },
        { sub: subValue3, marks: marksValue3 },
        { sub: subValue4, marks: marksValue4 },
        { sub: subValue5, marks: marksValue5 },
      ],
    };

    const selectedSub = studentInfo.subjects
      .map((subj) => subj.sub)
      .filter((sub) => sub !== "");

    if (selectedSub.length === 0) {
      alert("Please select at least one subject");
      return;
    }

    if (new Set(selectedSub).size !== selectedSub.length) {
      alert("Please select unique subjects");
      return;
    }

    dataBase(studentInfo);

    resetForm();
  }

  function resetForm() {
    setNameValue("");
    setSubValue1("");
    setSubValue2("");
    setSubValue3("");
    setSubValue4("");
    setSubValue5("");
    setMarksValue1("0");
    setMarksValue2("0");
    setMarksValue3("0");
    setMarksValue4("0");
    setMarksValue5("0");
  }

  return (
    <div className="form-container">
      <Name nameInput={nameValue} setName={setNameValue} />

      <SelectSubjects
        subInput={subValue1}
        setSub={setSubValue1}
        subId={"subject-1"}
      >
        <SelectMarks
          marksInput={marksValue1}
          setMarks={setMarksValue1}
          marksId={"marks-1"}
        />
      </SelectSubjects>

      <SelectSubjects
        subInput={subValue2}
        setSub={setSubValue2}
        subId={"subject-2"}
      >
        <SelectMarks
          marksInput={marksValue2}
          setMarks={setMarksValue2}
          marksId={"marks-2"}
        />
      </SelectSubjects>

      <SelectSubjects
        subInput={subValue3}
        setSub={setSubValue3}
        subId={"subject-3"}
      >
        <SelectMarks
          marksInput={marksValue3}
          setMarks={setMarksValue3}
          marksId={"marks-3"}
        />
      </SelectSubjects>

      <SelectSubjects
        subInput={subValue4}
        setSub={setSubValue4}
        subId={"subject-4"}
      >
        <SelectMarks
          marksInput={marksValue4}
          setMarks={setMarksValue4}
          marksId={"marks-4"}
        />
      </SelectSubjects>

      <SelectSubjects
        subInput={subValue5}
        setSub={setSubValue5}
        subId={"subject-5"}
      >
        <SelectMarks
          marksInput={marksValue5}
          setMarks={setMarksValue5}
          marksId={"marks-5"}
        />
      </SelectSubjects>

      <SubmitBtn handleClick={handleSubmit} />
    </div>
  );
};

const Name = ({ nameInput, setName }) => {
  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <div className="name-container">
      <label htmlFor="student-name">Name: </label>
      <input
        value={nameInput}
        onChange={handleChange}
        placeholder="fullname"
        type="text"
        name="student-name"
        id="student-name"
      />
    </div>
  );
};

const SelectSubjects = ({ children, subId, subInput, setSub }) => {
  function handleChange(e) {
    setSub(e.target.value);
  }

  return (
    <div className="subject-marks-container">
      <label htmlFor={subId}>Subject: </label>
      <select
        value={subInput}
        onChange={handleChange}
        name="select-subject"
        id={subId}
      >
        <option disabled value="">
          {" "}
          Select a subject{" "}
        </option>
        <option value="Math">Math</option>
        <option value="English">English</option>
        <option value="Science">Science</option>
        <option value="Computer Application">Computer Application</option>
        <option value="Physical Education">Physical Education</option>
      </select>
      {children}
    </div>
  );
};

const SelectMarks = ({ marksId, marksInput, setMarks }) => {
  function handleChange(e) {
    setMarks(e.target.value);
  }

  return (
    <>
      <label htmlFor={marksId}>Marks: </label>
      <input
        value={marksInput}
        onChange={handleChange}
        type="number"
        name="select-marks"
        id={marksId}
        min={0}
        max={100}
      />
    </>
  );
};

const SubmitBtn = ({ handleClick }) => {
  return (
    <>
      <button onClick={handleClick} className="submit-button" type="button">
        Submit
      </button>
    </>
  );
};

export default Form;
