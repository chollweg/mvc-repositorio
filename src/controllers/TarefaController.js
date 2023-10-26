const TarefaModel = require("../models/TarefaModel");


const tarefas = TarefaModel.listarTarefas;

async function getTarefas(req, res) {
  console.log(await TarefaModel.listarTarefas());
 // res.render("tarefas", { tarefas });
}
function addTarefa(req, res) {
  const { title } = req.body;
  const tarefa = new TarefaModel(Date.now(), title, false);
  tarefas.push(tarefa);
  res.redirect("/tarefas");
}

module.exports = { getTarefas, addTarefa };
