export default{
    showMasDos(){
        let reclutas2Meses = document.querySelector("#reclutas2Meses");
        let ws = new Worker ("../config/wsListas.js");

        ws.onmessage = (e) =>{
            let {message, data} = e.data;

            (message === "Mas de dos meses") ? reclutas2Meses.insertAdjacentHTML("beforeend", data) : null
        }
        
    },

    showTeam(){
        let ws = new Worker ("../config/wsListas.js");
        let selectTeam = document.querySelector("#selectTeam");
        let reclutasTeam = document.querySelector("#reclutasTeam");

        ws.onmessage = (e) =>{
            let {message, data} = e.data;

            if (message === "option") {
                selectTeam.insertAdjacentHTML("beforeend", data)
            } else if ( message === "reclutas por Team"){
                reclutasTeam.innerHTML = data;
            }
        }


        selectTeam.addEventListener("change", ()=>{
            let value = selectTeam.value;

            ws.postMessage({message: "selectValue", data : value})
        })

    },

    // showRSkill(){
    //     let ws = new Worker ("../config/wsListas.js");
    // },

    // showMSkill(){
    //     let ws = new Worker ("../config/wsListas.js");
    // },

    showMenorEdad(){
        let ws = new Worker ("../config/wsListas.js");

        let reclutasMenoresEdad = document.querySelector("#reclutasMenoresEdad");

        ws.onmessage = (e) =>{
            let {message, data} = e.data;

            (message === "menores de edad") ? reclutasMenoresEdad.insertAdjacentHTML("beforeend", data) : null
        }
    },

    // showReprobado(){
    //     let ws = new Worker ("../config/wsListas.js");
    // }
}