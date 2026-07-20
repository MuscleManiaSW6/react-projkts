const Table = ({ renderData, handleClick }) => {
  function grades(data) {
    let grade;
    switch (true) {
      case data > 85:
        grade = "A";
        break;
      case data > 75:
        grade = "B";
        break;
      case data > 65:
        grade = "C";
        break;
      case data > 45:
        grade = "D";
        break;
      case data > 35:
        grade = "E";
        break;
      case data == 0:
        grade = "-";
        break;
      default:
        grade = "F";
    }

    return grade;
  }

  return (
    <div className="table-container">
      <table className="table">
        <thead className="table-head">
          <tr>
            <th>Name</th>
            <th>Subjects</th>
            <th>Marks</th>
            <th>Grades</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody className="table-body">
          {renderData.map((student) => {
            return student.subjects.map((subject, i) => (
              <tr key={`${student.id}-${i}`}>
                {i === 0 && (
                  <td rowSpan={student.subjects.length}>{student.name}</td>
                )}

                <td>{student.subjects[i].sub}</td>

                <td>{student.subjects[i].marks}</td>

                <td>{grades(student.subjects[i].marks)}</td>

                {i === 0 && (
                  <td rowSpan={student.subjects.length}>
                    {
                      <button
                        onClick={() => handleClick(student.id)}
                        className="delete-btn"
                      >
                        Delete
                      </button>
                    }
                  </td>
                )}
              </tr>
            ));
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
