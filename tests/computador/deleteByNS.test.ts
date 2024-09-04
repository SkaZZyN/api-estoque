import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";

describe("Computador - Delete", () => {

    it ("Deleta Registro", async () =>{

        const res1 = await testServer.post("/computador").send({
            patrimonio: 16870,
	        marca: "HP",
	        modelo: "elitedesk",
	        numeroSerie: "teste NS",
	        setor: "Teste Setor"
         });
 
        expect(res1.statusCode).toEqual(StatusCodes.CREATED);

        const resApagada = await testServer.delete("/computador/${res1.body}").send();

        expect(resApagada.statusCode).toEqual(StatusCodes.NO_CONTENT);
    });

    it ("Tenta Deletar Registro que não existe", async () =>{

        const res1 = await testServer.delete("/computador/9999").send();
 
         expect(res1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
         expect(res1.body).toHaveProperty("errors.default");
     });
});