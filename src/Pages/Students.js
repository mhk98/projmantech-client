import useStudents from "../hooks/useStudents";
import Student from "./Student";

const Students = () => {
  // Data collect from useStudents component

  const [students, setStudents] = useStudents();

  // Data remove from UI using delete method

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure?");

    if (proceed) {
      const url = `http://localhost:5000/student/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remaining = students.filter((student) => student._id !== id);
          setStudents(remaining);
        });
    }
  };
  return (
    <div className="px-48">
      <table class="table w-full my-16">
        <thead>
          <tr>
            <th class="border border-slate-300 ...">Student name</th>
            <th class="border border-slate-300 ...">Subject</th>
            <th class="border border-slate-300 ...">roll</th>
            <th class="border border-slate-300 ...">Date of birth</th>
            <th class="border border-slate-300 ...">
              <p className="text-red-500 text-xl">X</p>
              <p>delete</p>
            </th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <Student
              key={student._id}
              student={student}
              handleDelete={handleDelete}
            ></Student>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Students
