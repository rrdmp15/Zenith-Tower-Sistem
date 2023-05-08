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

        ws.onmessage = (e) =>{
            let {message, data} = e.data;
            
            (message === "option") ? selectTeam.insertAdjacentHTML("beforeend", data) : ""
            
            selectTeam.addEventListener("change", ()=>{
                (console.log(selectTeam.value))
            })
        }


    },

    // showRSkill(){
    //     let ws = new Worker ("../config/wsListas.js");
    // },

    // showMSkill(){
    //     let ws = new Worker ("../config/wsListas.js");
    // },

    // showMenorEdad(){
    //     let ws = new Worker ("../config/wsListas.js");
    // },

    // showReprobado(){
    //     let ws = new Worker ("../config/wsListas.js");
    // }
}