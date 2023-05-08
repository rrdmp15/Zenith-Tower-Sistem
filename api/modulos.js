export default{
    all(){
        let formModulo = document.querySelector("#formModulo");
        formModulo.addEventListener("submit", (e)=>{
            e.preventDefault();
            let data = Object.fromEntries(new FormData(e.target));
            opc[e.submitter.dataset.accion](data)
        })

        let formEliminarModulo = document.querySelector("#formEliminarModulo");
        formEliminarModulo.addEventListener("submit", (e)=>{
            e.preventDefault();
            let data = Object.fromEntries(new FormData(e.target));
            opc[e.submitter.dataset.accion](data)
        })

        let formBuscarModulo = document.querySelector("#formBuscarModulo");
        formBuscarModulo.addEventListener("submit", (e)=>{
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
            let res = await ( await fetch("http://localhost:4001/modulo_skill",config)).json();
            console.log(res);
        }
        const postUser = async(data)=>{
            config.method = "POST";
            config.body = JSON.stringify(data);
            let res = await ( await fetch("http://localhost:4001/modulo_skill",config)).json();
            console.log(res);
        }
        const putUser = async(data)=>{
            config.method = "PUT";
            config.body = JSON.stringify(data);
            let res = await ( await fetch(`http://localhost:4001/modulo_skill/${data.id}`,config)).json();
            console.log(res);
        }
        const deleteUser = async(data)=>{
            config.method = "DELETE";
            let res = await ( await fetch(`http://localhost:4001/modulo_skill/${data.id}`,config)).json();
            console.log(res);
        }
        const searchUser = async(data)=>{
            config.method = "GET";
            let res = await ( await fetch(`http://localhost:4001/modulo_skill?q=${Object.values(data).join("")}`,config)).json();
            console.log(res);
        }
    }
}