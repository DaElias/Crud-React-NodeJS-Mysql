const { Router } = require("express");
const promisePool = require("../lib/database");
const router = Router();

router.get("/", async (req, res) => {
  try {
    const [rows] = await promisePool.query("select * from Usuario ");
    res.json({
      data: rows,
    });
  } catch (error) {
    res.status(400).json({ error });
  }
});

router.post("/", async (req, res) => {
  try {
    const { nombre, apellido, telefono, compañia } = req.body;
    await promisePool.query(
      `insert into Usuario (nombre, apellido,telefono, compañia) values("${nombre}","${apellido}","${telefono}","${compañia}");`
    );
    res.json({
      data: { nombre, apellido, telefono, compañia },
    });
  } catch (error) {
    res.status(400).json({ error });
  }
});

router.put("/", async (req, res) => {
  try {
    const { id, nombre, apellido, telefono, compañia } = req.body;
    const [rows] =
      await promisePool.query(`update Usuario set nombre = "${nombre}", apellido = "${apellido}", telefono = "${telefono}", compañia = "${compañia}" where id = ${id}; 
    `);
    res.json({
      data: { nombre, apellido, telefono, compañia },
      info: rows.info,
    });
  } catch (error) {
    res.status(400).json({ error });
  }
});

router.delete("/", async (req, res) => {
  try {
    const { id } = req.body;
    await promisePool.query(`delete from Usuario where id=${id}`);
    res.json({ msg: "done!!" });
  } catch (error) {
    res.status(400).json({ error });
  }
});

module.exports = router;
