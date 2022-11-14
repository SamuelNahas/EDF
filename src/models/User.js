
 class User {

    constructor(){
        this.nome;
        this.email;
        this.curso;
        this.periodo;
        this.cpf;
        this.semestre;
    }

    parse(json){
        this.nome = json.nome;
        this.email = json.email;
        this.curso = json.curso;
        this.periodo = json.periodo;
        this.cpf = json.cpf;
        this.semestre = json.semestre;
    }

 }

 export default User;