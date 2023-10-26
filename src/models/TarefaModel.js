class TarefaModel {
  constructor(id, title, description) {
    this.id = id;
    this.title = title;
    this.description = description;
  }

  static async listarTarefas(){
    console.log("teste");
    const db = require("./DatabaseModel");
    let req = await db.query("SELECT * FROM tarefa");
    console.log(req);
    return req;
  }
}




module.exports = TarefaModel;
