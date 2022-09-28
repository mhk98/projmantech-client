import React from "react";
import { toast } from "react-toastify";

const AddStudent = () => {
  // Data add from ui using post method

  const handleStudentSubmit = (event) => {
    event.preventDefault();
    const newStudent = {
      name: event.target.name.value,
      sub: event.target.subject.value,
      roll: event.target.roll.value,
      birth: event.target.birth.value,
    };

    fetch("http://localhost:5000/student", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newStudent),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          toast("Thank you for successfully add student information");
          event.target.reset();
        }
      });
  };
  return (
    <div>
      <label
        for="my-modal-3"
        class="btn modal-button bg-white text-black hover:bg-[#F2F2F2]"
      >
        Add new
      </label>
      <input type="checkbox" id="my-modal-3" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box relative">
          <label
            for="my-modal-3"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div className="flex justify-center items-center w-full">
            <form onSubmit={handleStudentSubmit}>
              <h2 className="text-2xl font-bold">Student Information</h2>
              <div class="form-control w-full max-w-s">
                <label class="label">
                  <span class="label-text">Student Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  class="input input-bordered w-full max-w-xs"
                />
              </div>
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text">Subject</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  class="input input-bordered w-full max-w-xs"
                />
              </div>
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text">Roll</span>
                </label>
                <input
                  type="text"
                  name="roll"
                  placeholder=" "
                  class="input input-bordered w-full max-w-xs"
                />
              </div>
              <div class="form-control w-full max-w-xs mb-4">
                <label class="label">
                  <span class="label-text">Date of birth</span>
                </label>
                <input
                  type="text"
                  name="birth"
                  placeholder=" "
                  class="input input-bordered w-full max-w-xs"
                />
              </div>

              <input
                className="btn bg-primary border-0"
                type="submit"
                value="Submit"
                class="btn"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddStudent;
