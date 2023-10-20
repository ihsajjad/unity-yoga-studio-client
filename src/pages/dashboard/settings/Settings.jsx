const Settings = () => {
  return (
    <div>
      <h1 className="text-center md:text-4xl text-3xl text-[var(--secondary-color)] font-bold">Add Events</h1>
      <div className="flex flex-col gap-12">
        {/* Home Page Banner Starts Here */}
        <div className="flex flex-col gap-4">
          <h2 className="md:text-3xl text-2xl text-[var(--secondary-color)] font-bold">Home Page Banner</h2>
          <div>
            <div>
              <label htmlFor="home-heading" className="font-bold">
                Home Page Banner Heading :
              </label>
              <div id="home-heading" className="flex">
                <input
                  type="text"
                  className="w-full border-2 border-[var(--secondary-color)] py-1 px-2 outline-none rounded-l"
                />{" "}
                <button className="bg-[var(--secondary-color)] -ml-2 text-white p-1 px-2 rounded-r">
                  Save
                </button>
              </div>
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="home-heading" className="font-bold">
                Home Page Banner Text :
              </label>
              <div id="home-heading" className="flex">
                <textarea
                  rows={3}
                  type="text"
                  className="w-full border-2 border-[var(--secondary-color)] py-1 px-2 outline-none rounded-l"
                />{" "}
                <button className="bg-[var(--secondary-color)] -ml-2 text-white p-1 px-2 rounded-r">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Home Page Banner Ends Here */}

        {/* Contact Information Starts Here */}
        <div className="flex flex-col gap-4">
          <h2 className="md:text-3xl text-2xl text-[var(--secondary-color)] font-bold">Contact Information</h2>
          <div>
            <div>
              <label htmlFor="home-heading" className="font-bold">
                Email :
              </label>
              <div id="home-heading" className="flex">
                <input
                  type="text"
                  className="w-full border-2 border-[var(--secondary-color)] py-1 px-2 outline-none rounded-l"
                />{" "}
                <button className="bg-[var(--secondary-color)] -ml-2 text-white p-1 px-2 rounded-r">
                  Save
                </button>
              </div>
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="home-heading" className="font-bold">
                Mobile Number :
              </label>
              <div id="home-heading" className="flex">
                <input
                  type="text"
                  className="w-full border-2 border-[var(--secondary-color)] py-1 px-2 outline-none rounded-l"
                />{" "}
                <button className="bg-[var(--secondary-color)] -ml-2 text-white p-1 px-2 rounded-r">
                  Save
                </button>
              </div>
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="home-heading" className="font-bold">
                Adderess :
              </label>
              <div id="home-heading" className="flex">
                <input
                  type="text"
                  className="w-full border-2 border-[var(--secondary-color)] py-1 px-2 outline-none rounded-l"
                />{" "}
                <button className="bg-[var(--secondary-color)] -ml-2 text-white p-1 px-2 rounded-r">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Contact Information Ends Here */}

        {/* About Content Starts Here */}
        <div className="flex flex-col gap-4">
          <h2 className="md:text-3xl text-2xl text-[var(--secondary-color)] font-bold">About Content</h2>
          <div>
            <div>
              <label htmlFor="home-heading" className="font-bold">
                About Text :
              </label>
              <div id="home-heading" className="flex">
                <textarea
                  rows={3}
                  type="text"
                  className="w-full border-2 border-[var(--secondary-color)] py-1 px-2 outline-none rounded-l"
                />{" "}
                <button className="bg-[var(--secondary-color)] -ml-2 text-white p-1 px-2 rounded-r">
                  Save
                </button>
              </div>
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="home-heading" className="font-bold">
                Mission Text :
              </label>
              <div id="home-heading" className="flex">
                <textarea
                  rows={3}
                  type="text"
                  className="w-full border-2 border-[var(--secondary-color)] py-1 px-2 outline-none rounded-l"
                />{" "}
                <button className="bg-[var(--secondary-color)] -ml-2 text-white p-1 px-2 rounded-r">
                  Save
                </button>
              </div>
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="home-heading" className="font-bold">
                Add Image to Gallary :
              </label>
              <div id="home-heading" className="flex">
                <input
                  type="file"
                  className="w-full border-2 border-[var(--secondary-color)] py-1 px-2 outline-none rounded-l"
                />{" "}
                <button className="bg-[var(--secondary-color)] -ml-2 text-white p-1 px-2 rounded-r">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* About Content Ends Here */}

        {/* Brand Content Starts Here */}
        <div className="flex flex-col gap-4">
          <h2 className="md:text-3xl text-2xl text-[var(--secondary-color)] font-bold">About Content</h2>
          <div>
            <div>
              <label htmlFor="home-heading" className="font-bold">
                Studio Name :
              </label>
              <div id="home-heading" className="flex">
                <input
                  type="text"
                  className="w-full border-2 border-[var(--secondary-color)] py-1 px-2 outline-none rounded-l"
                />{" "}
                <button className="bg-[var(--secondary-color)] -ml-2 text-white p-1 px-2 rounded-r">
                  Save
                </button>
              </div>
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="home-heading" className="font-bold">
                Add Logo :
              </label>
              <div id="home-heading" className="flex">
                <input
                  type="file"
                  className="w-full border-2 border-[var(--secondary-color)] py-1 px-2 outline-none rounded-l"
                />{" "}
                <button className="bg-[var(--secondary-color)] -ml-2 text-white p-1 px-2 rounded-r">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Brand Content Ends Here */}
      </div>
    </div>
  );
};

export default Settings;
