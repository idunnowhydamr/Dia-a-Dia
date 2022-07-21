const { Router } = require("express");
const router = Router();
const DB = require("../config/config.js");
const bcrypt = require("bcrypt");

router.get("/", (req, res) => {
  res.status(200).json({
    message: "Ruta status 200",
  });
});



router.post("/total", async (req, res) => {
  try {
    const { total, userid} = req.body;
    sql = `INSERT INTO totales(id_total, total, usuarioid, fecha) VALUES (id_total.nextval, :total, :userid, SYSDATE)`
    await DB.Open(sql, [total, userid], true);
    res.json({
      msg: "Guardado correctamente.",
    });
  } catch (error) {
    res.status(404).json({ msg: "No se pudo guardar." });
  }
});

router.get("/total/:userid", async (req, res) => {
  try {
    let sql = `Select *
  from (select * from totales
  order by fecha desc )
  where rownum = 1 AND usuarioid = ${req.params.userid}`;
    let totales = [];
    let result = await DB.Open(sql, [], false);
    result.rows.map((total) => {
      let userSchema = {
        id: total[0],
        total: total[1],
        usuarioid: total[2],
        fecha: total[3],
      };
      totales.push(userSchema);
    });
    res.json(totales);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put("/updateEvent/", async (req, res) => {
  try {
    const {idEvento} = req.body;
    let sql = "UPDATE objetivos SET cumplido = 1 WHERE id_objetivo = :idEvento";
    await DB.Open(sql, [idEvento], true);
    res.json({msg: "Guardado Correctamente"});

  } catch (error) {
    res.json(error);
  }
})

router.delete("/event/:idEvento", async (req, res) => {
  //Se elimina
  try {
    let sql = `DELETE FROM objetivos where id_objetivo=${req.params.idEvento}`;
    await DB.Open(sql, [], true);
    res.json({ msg: "Eliminado correctamente." });
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/event", async (req, res) => {
  //Se recibe la informacion del frontend
  try {
    const { objetive, date1, IdActivo } = req.body;
    console.log(date1);
    let sql =
      "INSERT INTO objetivos(id_objetivo, objetivo, fecha, movimientoid, cumplido) VALUES (id_objetivo.nextval, :objetive, :date1, :IdActivo, 0)";
    await DB.Open(sql, [objetive, date1, IdActivo], true);

    res.json({ msg: "Guardado Correctamente." });
  } catch (error) {
    res.status(404).json({ msg: "No se pudo guardar." });
  }
});

router.delete("/active/:idActivo", async (req, res) => {
  //Se elimina
  try {
    const { idActivo } = req.params;
    let sql = "delete from movimientos where id_movimiento=:idActivo";
    await DB.Open(sql, [idActivo], true);
    res.json({ msg: "Eliminado correctamente." });
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/active", async (req, res) => {
  try {
    //Se recibe la informacion del frontend
    const { nombreActivo, valorActivo, idAccion, idUsuario } = req.body;

    sql =
      "INSERT INTO movimientos(id_movimiento, nombre, valor, pygId, usuarioId) VALUES (id_movimiento.nextval, :nombreActivo, :valor,:idAccion, :idUsuario)";
    await DB.Open(sql, [nombreActivo, valorActivo, idAccion, idUsuario], true);

    res.json({
      msg: "Guardado correctamente.",
    });
  } catch (error) {
    res.status(404).json({ msg: "No se pudo guardar." });
  }
  //Se guarda el activo
  try {
    await activeModel.create({
      nombre: nombreActivo,
      valor: valorActivo,
      accionId: idAccion,
      usuarioId: idUsuario,
    });
    res.json({ msg: "Guardado correctamente." });
  } catch (error) {
    res.status(404).json({ msg: "No se pudo guardar." });
  }
});

//Metodo para hacer inner join de las tablas objetivos y activos
router.get("/objetive/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    let sql = `SELECT objetivos.id_objetivo, objetivos.objetivo, objetivos.fecha, movimientos.nombre, movimientos.valor, pyg.accion, objetivos.cumplido FROM objetivos INNER JOIN movimientos ON objetivos.movimientoid = movimientos.id_movimiento INNER JOIN usuarios ON movimientos.usuarioid = usuarios.id_usuario INNER JOIN pyg ON movimientos.pygid = pyg.id_pyg WHERE usuarios.id_usuario= ${userId}`;
    let objetives = [];
    let result = await DB.Open(sql, [], false);
    result.rows.map((objetive) => {
      let userSchema = {
        id: objetive[0],
        objetivo: objetive[1],
        start: objetive[2],
        title: objetive[3],
        valor: objetive[4],
        accion: objetive[5],
        cumplido: objetive[6]
      };
      objetives.push(userSchema);
    });
    res.json(objetives);
  } catch (error) {
    console.log(error);
  }
});

//Metodo para hacer inner join de las tablas usuarios y activos
router.get("/active/:userId", async (req, res) => {
  try {
    let sql = `select id_movimiento as id, nombre as title, valor from movimientos inner join usuarios on usuarios.id_usuario = movimientos.usuarioid where usuarios.id_usuario= ${req.params.userId}`;
    let result = await DB.Open(sql, [], false);
    let moves = [];
    result.rows.map((move) => {
      let userSchema = {
        id: move[0],
        title: move[1],
        valor: move[2],
      };
      moves.push(userSchema);
    });
    res.json(moves);
  } catch (error) {
    res.status(404).json({ msg: "Error" });
  }
});

router.post("/login", async (req, res) => {
  try {
    let user = req.body.user;
    let sql = `select * from usuarios WHERE usuario = '${user}'`;

    let result = await DB.Open(sql, [], false);
    Users = [];
    result.rows.map((user) => {
      let userSchema = {
        id: user[0],
        PRIMER_NOMBRE: user[1],
        SEGUNDO_NOMBRE: user[2],
        PRIMER_APELLIDO: user[3],
        SEGUNDO_APELLIDO: user[4],
        CORREO: user[5],
        CONTRASENA: user[6],
        USUARIO: user[7],
      };
      Users.push(userSchema);
    });
    //Se compara la contraseña enviada del frontend y la existente en la bd
    const match = await bcrypt.compare(req.body.password, Users[0].CONTRASENA);
    if (!match) return res.status(400).json({ msg: "Contraseña Erronea" });
    res.json(Users);
  } catch (error) {
    res.status(404).json({ msg: "Usuario no encontrado" });
  }
});

router.post("/register", async (req, res) => {
  //Se recibe la informaciond del frontend
  const {
    usuario,
    nombre1,
    nombre2,
    apellido1,
    apellido2,
    email,
    password,
    password2,
  } = req.body;
  //Se comparan las contraseñas enviadas por el frontend
  if (password !== password2)
    return res
      .status(400)
      .json({ msg: "Contraseña y confirmar contraseña son incorrectos." });

  //Se modifica la contraseña enviada
  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(password, salt);
  //Se crea el usuario en la bd.
  sql =
    "INSERT INTO usuarios(id_usuario,primer_nombre,segundo_nombre,primer_apellido,segundo_apellido,correo,contrasena,usuario) VALUES (id_usuario.nextval,:nombre1,:nombre2,:apellido1,:apellido2,:email,:hashPassword,:usuario)";
  try {
    await DB.Open(
      sql,
      [nombre1, nombre2, apellido1, apellido2, email, hashPassword, usuario],
      true
    );

    res.json({
      message: "Todo bien todo correcto y yo me que alegro",
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
