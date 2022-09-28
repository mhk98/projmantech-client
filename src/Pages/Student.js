import React from "react";

const Student = ({ student, handleDelete }) => {

    // Data and function destructure from students component

  const { name, sub, roll, birth } = student;
  console.log(Student);
  return (
   
      <tr>
        <td class="border border-slate-300 ...">{name}</td>
        <td class="border border-slate-300 ...">{sub}</td>
        <td class="border border-slate-300 ...">{roll}</td>
        <td class="border border-slate-300 ...">{birth}</td>
        <td onClick={ () => handleDelete(student._id)} class="cursor-pointer text-red-500 text-xl border border-slate-300 ...">X</td>
      </tr>
   
  );
};

export default Student
