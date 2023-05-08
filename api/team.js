export default{
    all(){
        let formTeam = document.querySelector("#formTeam");
        formTeam.addEventListener("submit", (e)=>{
            e.preventDefault();
            let data = Object.fromEntries(new FormData(e.target));
            opc[e.submitter.dataset.accion](data)
        })

        let formEliminarTeam = document.querySelector("#formEliminarTeam");
        formEliminarTeam.addEventListener("submit", (e)=>{
            e.preventDefault();
            let data = Object.fromEntries(new FormData(e.target));
            opc[e.submitter.dataset.accion](data)
        })

        let formBuscarTeam = document.querySelector("#formBuscarTeam");
        formBuscarTeam.addEventListener("submit", (e)=>{
            e.preventDefault();
            let data = Object.fromEntries(new FormData(e.target));
            opc[e.submitter.dataset.accion](data)
        })

        const opc = {
            "GET" : () => getUserAll(),
            "PUT" : (data) => putUser(data),
            "DELETE" : (data) => deleteUser(data),
            "SEARCH" : (data) => searchUser(data),
            "POST" : (data) => postUser(data)
        }

        let config  = {
            headers: new Headers({
                "Content-Type" : "application/json"
            }),
        };

        const getUserAll = async()=>{
            config.method = "GET";
            let res = await ( await fetch("http://localhost:4001/team",config)).json();
            console.log(res);
        }
        const postUser = async(data)=>{
            config.method = "POST";
            config.body = JSON.stringify(data);
            let res = await ( await fetch("http://localhost:4001/team",config)).json();
            console.log(res);
        }
        const putUser = async(data)=>{
            config.method = "PUT";
            config.body = JSON.stringify(data);
            let res = await ( await fetch(`http://localhost:4001/team/${data.id}`,config)).json();
            console.log(res);
        }
        const deleteUser = async(data)=>{
            config.method = "DELETE";
            let res = await ( await fetch(`http://localhost:4001/team/${data.id}`,config)).json();
            console.log(res);
        }
        const searchUser = async(data)=>{
            config.method = "GET";
            let res = await ( await fetch(`http://localhost:4001/team?q=${Object.values(data).join("")}`,config)).json();
            console.log(res);
        }
    }
}