const fetchReclutas = async()=>{
    try {
        const res = await fetch(`http://localhost:4001/reclutas`);
        const resul = await res.json();

        let campers = [];
        let menoresDeEdad = [];
// validacion reclutas que tienen mas de dos meses   
        resul.forEach( e => {

            let camperMasDosMeses;
            let timepoEntrada = calcularTiempoEntrada(e.date_enter);
            (timepoEntrada >= 2) ? camperMasDosMeses = e.id : null

            if (camperMasDosMeses){
              campers.unshift(camperMasDosMeses);  
            }
        });

        for (const i of campers) {
            let camper = await (await fetch(`http://localhost:4001/reclutas/${i}`)).json();
            let plantilla;
            plantilla = `
            <div class="card">
                <h4>${camper.name}</h4>
                <p>id: ${camper.id}</p>
                <p>Telefono: ${camper.phone}</p>
                <p>Email: ${camper.email}</p>
                <p>Direccion: ${camper.adress}</p>
                <p>Fecha de nacimiento: ${camper.date_birth}</p>
                <p>Fecha de ingreso: ${camper.date_enter}</p>
            </div>
            `
            postMessage({message : "Mas de dos meses", data  : plantilla})
        }
// validacion reclutas que son menores de edad
        resul.forEach( e => {
            
            let camperMenorDeEdad;
            let edad = calcularNacimiento(e.date_birth);
            (edad <= 18) ? camperMenorDeEdad = e.id : null

            if (camperMenorDeEdad){
                menoresDeEdad.unshift(camperMenorDeEdad);  
            }
        });

        for (const i of menoresDeEdad) {
            let camperMenor = await (await fetch(`http://localhost:4001/reclutas/${i}`)).json();
            let plantilla;
            plantilla = `
            <div class="card">
                <h4>${camperMenor.name}</h4>
                <p>id: ${camperMenor.id}</p>
                <p>Telefono: ${camperMenor.phone}</p>
                <p>Email: ${camperMenor.email}</p>
                <p>Direccion: ${camperMenor.adress}</p>
                <p>Fecha de nacimiento: ${camperMenor.date_birth}</p>
                <p>Fecha de ingreso: ${camperMenor.date_enter}</p>
            </div>
            `
            postMessage({message : "menores de edad", data  : plantilla})
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

function calcularNacimiento(date_birth){
    let hoy = new Date();
    let cumpleanos = new Date(date_birth)
    let edad = hoy.getFullYear() - cumpleanos.getFullYear();

    return edad
}


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
        }

        let recluasTeam = async(id)=>{
            const res = await fetch(`http://localhost:4001/team/${id}/reclutas`);
            const resul = await res.json();
            let plantilla;
            
            let reclutas = resul.map(recluta => `
            <div class="card">
                <h4>${recluta.name}</h4>
                <p>id: ${recluta.id}</p>
                <p>Telefono: ${recluta.phone}</p>
                <p>Email: ${recluta.email}</p>
                <p>Direccion: ${recluta.adress}</p>
                <p>Fecha de nacimiento: ${recluta.date_birth}</p>
                <p>Fecha de ingreso: ${recluta.date_enter}</p>
            </div>
        `).join("\n");
            postMessage({message: "reclutas por Team", data : reclutas});
        }

        self.onmessage = (e) =>{
            let {message, data} = e.data;
            
            (message === "selectValue") ? recluasTeam(data) : ""
        }
    } catch (error) {
        console.log(error);
    }
}

fetchTeams();

//http://localhost:4001/team/2/reclutas
