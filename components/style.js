export default{
    all(){

        //mostrar section


        let buscarData = document.querySelector("#buscarData");
        let buscar = document.querySelector(".buscar");
        let seleccionar = document.querySelector(".seleccionar");
        let agregarData = document.querySelector("#agregarData");
        let eliminarData = document.querySelector("#eliminarData");
        let agregar = document.querySelector(".agregar");
        let eliminar = document.querySelector(".eliminar");

        let reclutas = document.querySelector("#reclutas");
        let team = document.querySelector("#team");
        let skill = document.querySelector("#skill");
        let modulo = document.querySelector("#modulo");
        let evaluacion = document.querySelector("#evaluacion");

        let agregarReclutas = document.querySelector(".agregarReclutas");
        let agregarTeam = document.querySelector(".agregarTeam");
        let AgregarSkills = document.querySelector(".AgregarSkills");
        let agregarModuloSKill = document.querySelector(".agregarModuloSKill");
        let agregarEvaluacion = document.querySelector(".agregarEvaluacion");

        let volverAgregar = document.querySelector(".volverAgregar")

        let volverEliminar = document.querySelector(".volverEliminar")
        let volverEliminarReclutas = document.querySelector(".volverEliminarReclutas")
        let volverEliminarTeam = document.querySelector(".volverEliminarTeam")
        let volverEliminarSkill = document.querySelector(".volverEliminarSkill")
        let volverEliminarModulo = document.querySelector(".volverEliminarModulo")
        let volverEliminarEvaluacion = document.querySelector(".volverEliminarEvaluacion")


        let volverBuscar = document.querySelector(".volverBuscar")



        let volveragregarReclutas = document.querySelector(".volveragregarReclutas")
        let volveragregarTeam = document.querySelector(".volveragregarTeam")
        let volveragregarSkill = document.querySelector(".volveragregarSkill")
        let volveragregarModuloSKill = document.querySelector(".volveragregarModuloSKill")
        let volveragregarEvaluacion = document.querySelector(".volveragregarEvaluacion")

        



        buscarData.addEventListener("click", ()=>{
            buscar.classList.toggle('hidden');
            seleccionar.classList.toggle('hidden');
        })

        agregarData.addEventListener("click", ()=>{
            agregar.classList.toggle('hidden');
            seleccionar.classList.toggle('hidden');
        })

        eliminarData.addEventListener("click", ()=>{
            eliminar.classList.toggle('hidden');
            seleccionar.classList.toggle('hidden');
        })

        reclutas.addEventListener("click", ()=>{
            agregar.classList.toggle('hidden');
            agregarReclutas.classList.toggle('hidden');
        })

        team.addEventListener("click", ()=>{
            agregar.classList.toggle('hidden');
            agregarTeam.classList.toggle('hidden');
        })

        skill.addEventListener("click", ()=>{
            agregar.classList.toggle('hidden');
            AgregarSkills.classList.toggle('hidden');
        })

        modulo.addEventListener("click", ()=>{
            agregar.classList.toggle('hidden');
            agregarModuloSKill.classList.toggle('hidden');
        })

        evaluacion.addEventListener("click", ()=>{
            agregar.classList.toggle('hidden');
            agregarEvaluacion.classList.toggle('hidden');
        })

        volverAgregar.addEventListener("click", ()=>{
            agregar.classList.toggle('hidden');
            seleccionar.classList.toggle('hidden');
        })

        volverEliminar.addEventListener("click", ()=>{
            eliminar.classList.toggle('hidden');
            seleccionar.classList.toggle('hidden');
        })

        volverBuscar.addEventListener("click", ()=>{
            buscar.classList.toggle('hidden');
            seleccionar.classList.toggle('hidden');
        })

        volveragregarReclutas.addEventListener("click", ()=>{
            agregar.classList.toggle('hidden');
            agregarReclutas.classList.toggle('hidden');
        })

        volveragregarTeam.addEventListener("click", ()=>{
            agregar.classList.toggle('hidden');
            agregarTeam.classList.toggle('hidden');
        })

        volveragregarSkill.addEventListener("click", ()=>{
            agregar.classList.toggle('hidden');
            AgregarSkills.classList.toggle('hidden');
        })

        volveragregarModuloSKill.addEventListener("click", ()=>{
            agregar.classList.toggle('hidden');
            agregarModuloSKill.classList.toggle('hidden');
        })

        volveragregarEvaluacion.addEventListener("click", ()=>{
            agregar.classList.toggle('hidden');
            agregarEvaluacion.classList.toggle('hidden');
        })

        // mostrar select buscar

        let volverBuscarReclutas = document.querySelector(".volverBuscarReclutas")
        let volverBuscarTeam = document.querySelector(".volverBuscarTeam")
        let volverBuscarSkill = document.querySelector(".volverBuscarSkill")
        let volverBuscarModulo = document.querySelector(".volverBuscarModulo")
        let volverBuscarEvaluacion = document.querySelector(".volverBuscarEvaluacion")

        let selectBuscar = document.querySelector("#selectBuscar");

        let formBuscarReclutas = document.querySelector("#formBuscarReclutas");
        let formBuscarTeam = document.querySelector("#formBuscarTeam");
        let formBuscarSkill = document.querySelector("#formBuscarSkill");
        let formBuscarModulo = document.querySelector("#formBuscarModulo");
        let formBuscarEvaluacion = document.querySelector("#formBuscarEvaluacion");


        selectBuscar.addEventListener("change", ()=>{
            if(selectBuscar.value === "reclutas"){
                formBuscarReclutas.classList.add('show');
                formBuscarTeam.classList.remove('show');
                formBuscarSkill.classList.remove('show');
                formBuscarModulo.classList.remove('show');
                formBuscarEvaluacion.classList.remove('show');
            }else if (selectBuscar.value === "team"){
                formBuscarReclutas.classList.remove('show');
                formBuscarTeam.classList.add('show');
                formBuscarSkill.classList.remove('show');
                formBuscarModulo.classList.remove('show');
                formBuscarEvaluacion.classList.remove('show');
            }else if (selectBuscar.value === "skill"){
                formBuscarReclutas.classList.remove('show');
                formBuscarTeam.classList.remove('show');
                formBuscarSkill.classList.add('show');
                formBuscarModulo.classList.remove('show');
                formBuscarEvaluacion.classList.remove('show');
            }else if(selectBuscar.value === "modulo_skill"){
                formBuscarReclutas.classList.remove('show');
                formBuscarTeam.classList.remove('show');
                formBuscarSkill.classList.remove('show');
                formBuscarModulo.classList.add('show');
                formBuscarEvaluacion.classList.remove('show');
            }else if(selectBuscar.value === "evaluacion"){
                formBuscarReclutas.classList.remove('show');
                formBuscarTeam.classList.remove('show');
                formBuscarSkill.classList.remove('show');
                formBuscarModulo.classList.remove('show');
                formBuscarEvaluacion.classList.add('show');
            }
        })

                // mostrar select eliminar



    }
}