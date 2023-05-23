import React from "react";

function Homepage() {
  return (
    <>
      <div className="flex justify-center h-screen items-center gap-x-4">
        <button className="rounded-full bg-emerald-600 w-48 h-12">Admin</button>
        <button className="rounded-full bg-emerald-600 w-48 h-12">User</button>
      </div>
    </>
  );
}

export default Homepage;
