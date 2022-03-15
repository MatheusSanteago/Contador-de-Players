function calcPontos(players) {
  let pontos = players.vitorias * 3 + players.empates;
  return pontos;
}
var players = [];
function addPlayer() {
  var nameValue = document.querySelector("#nameValue").value;
  if (nameValue == "") {
    alert("Por favor insira um nome");
  } else {
    var player = {
      nome: nameValue,
      vitorias: 0,
      empates: 0,
      derrotas: 0,
      pontos: 0,
    };

    players.push(player);
    showInView(players);
  }
}
showInView(players);
function showInView(players) {
  let elemento = "";
  for (var i = 0; i < players.length; i++) {
    elemento += `<tr>
        <td>${players[i].nome}</td>
        <td>${players[i].vitorias}</td>
        <td>${players[i].empates}</td>
        <td>${players[i].derrotas}</td>
        <td>${players[i].pontos}</td>
        <td><button onClick="addcionarVitoria(${i})">Vitória</button></td>
        <td><button onClick="adicionarEmpate(${i})">Empate</button></td>
        <td><input onClick="deletePlayer(${i})" id="nameValue" type="checkbox"></td>
        </tr>`;
  }
  let tabelPlayer = document.getElementById("tabelaJogadores");
  tabelPlayer.innerHTML = elemento;
}
function deletePlayer(i) {
  players.splice(i, 1);
  showInView(players);
}
function addcionarVitoria(i) {
  var winner = players[i];
  winner.vitorias++;
  for (let index = 0; index < players.length; index++) {
    players[index].derrotas++;
  }
  players[i].derrotas--;
  winner.pontos = calcPontos(winner);
  showInView(players);
}
function adicionarEmpate(i) {
  for (let i = 0; i < players.length; i++) {
    players[i].empates++;
    players[i].pontos = calcPontos(players[i]);
  }
  showInView(players);
}
