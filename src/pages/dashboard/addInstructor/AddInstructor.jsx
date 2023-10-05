

const AddInstructor = () => {
  return (
    <div>
      <h1 className="font-bold text-[var(--secondary-color)] text-center text-4xl">Add Instructor</h1>
      <div className="">
        {/* new instructors form */}
        <div>
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="text-xl font-bold">Instructors Name</span>
              </label>
              <input type="text" placeholder="instructors name" className=" border-b-2 border-[var(--secondary-color)]" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-xl font-bold">Gender</span>
              </label>
              <select className="select border-2 border-[var(--secondary-color)] w-full ">
                <option disabled selected>Gender</option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-xl font-bold">Specialization</span>
              </label>
              <input type="text" placeholder="specialization" className=" border-b-2 border-[var(--secondary-color)]" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-xl font-bold">Bio</span>
              </label>
              <textarea className="textarea border-2 border-[var(--secondary-color)]" placeholder="Bio"></textarea>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-xl font-bold">Teaching Philosofy</span>
              </label>
              <input type="text" placeholder="teaching philosofy" className=" border-b-2 border-[var(--secondary-color)]" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-xl font-bold">Email</span>
              </label>
              <input type="text" placeholder="email" className=" border-b-2 border-[var(--secondary-color)]" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-xl font-bold">Phone</span>
              </label>
              <input type="text" placeholder="phone" className=" border-b-2 border-[var(--secondary-color)]" />
            </div>
          </div>
        </div>
        {/* present instructors */}
        <div>

        </div>
      </div>
    </div>
  );
};

export default AddInstructor;
