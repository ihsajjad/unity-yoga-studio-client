const Settings = () => {
  return (
    <div>
      <h3 className="section-title">Settings</h3>

      <div>
        <div>
          <label htmlFor="home-heading" className="font-bold">
            Home Page Banner Heading :
          </label>
          <div id="home-heading" className="flex">
            <input
              type="text"
              className="border-2 border-[var(--secondary-color)] py-1 px-2 outline-none rounded-l"
            />{" "}
            <button className="bg-[var(--secondary-color)] -ml-2 text-white p-1 px-2 rounded-r">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
