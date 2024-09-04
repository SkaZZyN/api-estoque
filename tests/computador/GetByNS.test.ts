import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";

describe("Computador - Get NS", () => {

     it ("Buscar Registro NS", async () =>{

        const res1 = await testServer.post("/computador").send({
            patrimonio: 16870,
	        marca: "HP",
	        modelo: "elitedesk",
	        numeroSerie: "teste NS",
	        setor: "Teste Setor"
         });
 
         expect(res1.statusCode).toEqual(StatusCodes.CREATED);

        const resBusca = await testServer.get("/computador/${res1.body}").send();

        expect(resBusca.statusCode).toEqual(StatusCodes.OK);
        expect(resBusca.body).toHaveProperty("patrimonio");
        expect(resBusca.body).toHaveProperty("marca");
        expect(resBusca.body).toHaveProperty("modelo");
        expect(resBusca.body).toHaveProperty("numeroSerie");
        expect(resBusca.body).toHaveProperty("setor");
     });

     it ("Tenta buscar registro que não existe", async () =>{

        const res1 = await testServer.get("/computador/9999").send();
 
         expect(res1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
         expect(res1.body).toHaveProperty("errors.default");
     });
});