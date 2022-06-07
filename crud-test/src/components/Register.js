import React from "react";

const style = { width: "90%", border: "1px solid black" };

const Register = ({
  id,
  nombre,
  apellido,
  telefono,
  compañia,
  handleUpdateSubmit,
  handleDelete,
}) => {
  const [update, setUpdate] = React.useState(false);
  const [dataRecovery, setDataRecovery] = React.useState({});
  const [dataUpdate, setDataUpdate] = React.useState({
    id,
    nombre,
    apellido,
    telefono,
    compañia,
    handleUpdateSubmit,
    handleDelete,
  });
  const handleUpdate = () => {
    setUpdate(!update);
    handleUpdateSubmit(dataUpdate);
  };

  const handleInputs = (value, type) => {
    setDataUpdate({ ...dataUpdate, [type]: value });
  };
  return (
    <tr className="border-b ">
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
        {id}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {update ? (
          <input
            value={dataUpdate.nombre}
            onChange={(e) => handleInputs(e.target.value, "nombre")}
            name="nombre"
            placeholder={dataUpdate.nombre}
            style={style}
          />
        ) : (
          dataUpdate.nombre
        )}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {update ? (
          <input
            value={dataUpdate.apellido}
            onChange={(e) => handleInputs(e.target.value, "apellido")}
            name="apellido"
            placeholder={dataUpdate.apellido}
            style={style}
          />
        ) : (
          dataUpdate.apellido
        )}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {update ? (
          <input
            value={dataUpdate.telefono}
            onChange={(e) => handleInputs(e.target.value, "telefono")}
            name="telefono"
            placeholder={dataUpdate.telefono}
            style={style}
          />
        ) : (
          dataUpdate.telefono
        )}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {update ? (
          <input
            value={dataUpdate.compañia}
            onChange={(e) => handleInputs(e.target.value, "compañia")}
            name="compañia"
            placeholder={dataUpdate.compañia}
            style={style}
          />
        ) : (
          dataUpdate.compañia
        )}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap m-1">
        {!update ? (
          <>
            <button
              onClick={() => {
                setUpdate(!update);
                setDataRecovery({ ...dataUpdate });
              }}
              className="px-6 py-2 rounded bg-lime-400 hover:bg-lime-500 text-lime-100"
            >
              Update
            </button>
            <button
              onClick={() => handleDelete(id)}
              className="px-6 py-2 rounded bg-rose-400 hover:bg-rose-500 text-rose-100"
            >
              Delete
            </button>
          </>
        ) : (
          <>
            <button
              onClick={handleUpdate}
              className="px-6 py-2 rounded bg-lime-700 hover:bg-lime-500 text-lime-100"
            >
              confirm
            </button>
            <button
              onClick={() => {
                setUpdate(!update);
                setDataUpdate({ ...dataRecovery });
              }}
              className="px-6 py-2 rounded bg-rose-700 hover:bg-rose-500 text-rose-100"
            >
              Cancel
            </button>
          </>
        )}
      </td>
    </tr>
  );
};

export default Register;
