import React from "react";
import Register from "../components/Register";

const initialState = [
  {
    apellido: "",
    compañia: "",
    id: 0,
    nombre: "",
    telefono: "",
  },
];

const Read = () => {
  const [data, setdato] = React.useState(initialState);
  const [updatePage, setUpdatePage] = React.useState(false);

  React.useEffect(() => {
    fetch("http://localhost:3001/api/info", {
      method: "GET",
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((json) => {
        setdato(json.data);
        // console.log(data);
      })
      .catch((err) => console.log(err));
  }, [updatePage]);

  const handleDelete = async (id) => {
    const data = { id };
    await fetch("http://localhost:3001/api/info", {
      method: "Delete",
      body: JSON.stringify(data),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then(() => setUpdatePage(!updatePage))
      .catch((err) => console.log(err));
  };
  const handleUpdateSubmit = async (element) => {
    console.log(element)
    await fetch("http://localhost:3001/api/info", {
      method: "PUT",
      body: JSON.stringify(element),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then(() => setUpdatePage(!updatePage))
      .catch((e) => console.log(e));
  };

  return (
    <div>
      <h1 className="m-4">
        C<b className="text-orange-700">R</b>UD -
        <b className="text-orange-700">Read</b>
      </h1>
      <div>
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full">
                  <thead className="border-b">
                    <tr>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        #
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        First Name
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Last Name
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Phone Number
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Company
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Options
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((element) => (
                      <Register
                        nombre={element.nombre}
                        apellido={element.apellido}
                        id={element.id}
                        telefono={element.telefono}
                        compañia={element.compañia}
                        key={element.id}
                        handleDelete={() => handleDelete(element.id)}
                        handleUpdateSubmit={handleUpdateSubmit}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Read;
