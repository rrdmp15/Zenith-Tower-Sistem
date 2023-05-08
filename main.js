import listas from "./components/listas.js";
import myHeader from "./components/my-header.js";
import reclutas from "./api/reclutas.js";
import evaluacion from "./api/evaluacion.js";
import modulos from "./api/modulos.js";
import skill from "./api/skill.js";
import team from "./api/team.js";
import style from "./components/style.js";

reclutas.all();
evaluacion.all();
modulos.all();
skill.all();
team.all();
style.all();

// listas.showMSkill();
listas.showMasDos();
// listas.showMenorEdad();
// listas.showRSkill();
// listas.showReprobado();
listas.showTeam();