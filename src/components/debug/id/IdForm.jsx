import React from "react";

const IdForm = () => {
  return (
    <div className="flex flex-col p-4">
      <h1 className="text-3xl my-3">This is a simple form</h1>
      <form>
        <div className="mx-2">
          <label htmlFor="userNameId">User Name</label>
          <input
            type="text"
            id="userNameId"
            className="border mx-2 rounded border-slate-300"
          />
        </div>
      </form>
    </div>
  );
};

export default IdForm;
