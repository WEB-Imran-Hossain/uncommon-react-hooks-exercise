import { useId } from "react";

const IdForm = () => {
  // Generate unique IDs for form elements using the useId hook
  const userNameId = useId();
  const emailId = useId(); // New email field ID
  const passwordHintId = useId();

  return (
    <div className="flex flex-col p-4">
      <h1 className="text-3xl my-3">This is a simple form</h1>
      <form>
        {/* User Name Field */}
        <div className="mb-4">
          <label htmlFor={userNameId} className="block text-sm font-medium text-gray-700">
            User Name
          </label>
          <input
            type="text"
            id={userNameId}
            className="border rounded border-slate-300 px-3 py-2 w-64 mt-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label htmlFor={emailId} className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id={emailId}
            className="border rounded border-slate-300 px-3 py-2 w-64 mt-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Password Field with Hint */}
        <div className="mb-4">
          <label htmlFor={passwordHintId} className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id={passwordHintId}
            className="border rounded border-slate-300 px-3 py-2 w-64 mt-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            aria-describedby={passwordHintId}
          />
          <p id={passwordHintId} className="text-sm text-gray-500 mt-1">
            Password should be 8 characters long.
          </p>
        </div>
      </form>
    </div>
  );
};

export default IdForm;