/*
  JavaScript = o COMPORTAMENTO da página (o que acontece quando o usuário interage).
  Aqui usamos o DOM: o "mapa" do HTML que o JavaScript consegue ler e modificar.
*/
document.getElementById("ano").textContent = new Date().getFullYear();
const botaoTema = document.getElementById("botao-tema");
function aplicarTema(tema) {
  document.documentElement.dataset.theme = tema;
}
let temaSalvo = null;
try {
  temaSalvo = localStorage.getItem("tema");
} catch (erro) {

}
const sistemaPrefereEscuro = window.matchMedia("(prefers-color-scheme: dark)").matches;
aplicarTema(temaSalvo || (sistemaPrefereEscuro ? "dark" : "light"));
botaoTema.addEventListener("click", () => {
  const novoTema = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  aplicarTema(novoTema);
  try {
    localStorage.setItem("tema", novoTema);
  } catch (erro) {
    
  }
});
