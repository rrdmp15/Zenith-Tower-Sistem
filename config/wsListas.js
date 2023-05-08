const fetchReclutas = async()=>{
    try {
        const res = await fetch(`http://localhost:4001/reclutas`);
        const resul = await res.json();

        let campers = [];
        let plantilla;
        resul.forEach( e => {
            // validacion reclutas que tienen mas de dos meses
            let camperMasDosMeses;
            let timepoEntrada = calcularTiempoEntrada(e.date_enter);
            (timepoEntrada >= 2) ? camperMasDosMeses = e.id : null

            if (camperMasDosMeses){
              campers.unshift(camperMasDosMeses);  
            }

            // validacion reclutas por team

        });

        for (const i of campers) {
            let camper = await (await fetch(`http://localhost:4001/reclutas/${i}`)).json();
            
            plantilla = `
            <li>${camper.name}</li>
            `
            postMessage({message : "Mas de dos meses", data  : plantilla})
        }
        
    } catch (error) {
        console.log(error)
    }
}

fetchReclutas();

function calcularTiempoEntrada(date_enter){
    let hoy = new Date();
    let dateEnter = new Date(date_enter)
    let timepoEntrada = hoy.getMonth() - dateEnter.getMonth();

    return timepoEntrada
}

let teamId = [];

const fetchTeams = async ()=>{
    try {
        const res = await fetch(`http://localhost:4001/team`);
        const resul = await res.json();
        let plantilla;

        for (const i of resul) {
            plantilla = `
                <option value="${i.id}">${i.name}</option>
            `
            postMessage({message : "option", data  : plantilla})
            teamId.unshift(i.id)
        }
        
        console.log(teamId)
        
    } catch (error) {
        console.log(error);
    }
}

fetchTeams();






