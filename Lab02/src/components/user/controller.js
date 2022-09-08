// Importamos db
import * as DB from "../../db"


// vamos a crear CRUD

export const findAll = (req, res) => {
    return res.json({
      ok: true,
      data: DB.findAll(),
    });
  };
  
  export const findOne = (req, res) => {
    const { id } = req.params;
  
    return res.json({
      ok: true,
      data: DB.findOne(id),
    });
  };
  
  export const create = (req, res) => {
    const { body } = req;
  
    DB.store(body);
  
    return res.status(201).json({
      ok: true,
      data: "User created",
    });
  };
  
  export const update = (req, res) => {
    const { id } = req.params;
    const { body } = req;
  
    DB.update(id, body);
  
    return res.json({
      ok: true,
      data: "User updated",
    });
  };
  
  export const remove = (req, res) => {
    const { id } = req.params;
  
    DB.remove(id);
  
    return res.json({
      ok: true,
      data: "User deleted",
    });
  };