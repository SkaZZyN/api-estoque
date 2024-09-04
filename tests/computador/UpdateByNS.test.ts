import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";

describe("Computador - Update", () => {

    it ("Update NS", async () =>{

        const res1 = await testServer.post("/computador").send({
            patrimonio: 16870,
	        marca: "HP",
	        modelo: "elitedesk",
	        numeroSerie: "teste NS",
	        setor: "Teste Setor"
         });
 
         expect(res1.statusCode).toEqual(StatusCodes.CREATED);

        const resAtualizada = await testServer.put(`/computador/${res1.body}`).send({

            patrimonio: 17687,
	        marca: "upada",
	        modelo: "upada",
	        numeroSerie: "upada",
	        setor: "upada"

        });

        expect(resAtualizada.statusCode).toEqual(StatusCodes.NO_CONTENT);
     });

     it ("Tenta buscar registro que não existe", async () =>{

        const res1 = await testServer.get("/computador/9999").send();
 
         expect(res1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
         expect(res1.body).toHaveProperty("errors.default");
     });
});