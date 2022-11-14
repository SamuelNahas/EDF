import pool from "../config/conexao.js";

class UserService{

      static async salvar(body){
        const user = new User();
          user.parse(body);     
            try {
              await pool.query(`INSERT INTO User (cpf, nome, email, curso, periodo, semestre)
              VALUES
              ($1, $2, $3, $4, $5, $6)`,
              [user.cpf, user.nome, user.email, user.curso, user.periodo, user.semestre]);
            } catch (e) {
              console.log(`Houve algum erro ${e}`)
            }
       }
 }

 export default UserService;