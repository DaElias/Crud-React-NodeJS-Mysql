import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Create from "./Pages/Create";
import Error from "./Pages/Error";
import Home from "./Pages/Home";
import Read from "./Pages/Read";

const App = () => {
  const handleCreate = (e) => {
    e.preventDefault();
    console.log(e);
  };
  const handleUpdate = (e) => {
    e.preventDefault();
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  // React.useEffect(async () => {
    // await fetch("http://localhost:3001/api/info", {
    //   method: "GET",
    // })
    //   .then((response) => response.json())
    //   .then((json) => console.log(json))
    //   .catch((err) => console.log(err));
  // }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="create"
            element={<Create handleSubmint={handleCreate} />}
          />
          <Route path="read" element={<Read />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
