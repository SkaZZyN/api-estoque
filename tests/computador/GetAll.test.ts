import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";

describe("Computador - GetAll", () => {

    it ("Busca Registro", async () =>{

       const res1 = await testServer.post("/computador").send({
            patrimonio: 16870,
	        marca: "HP",
	        modelo: "elitedesk",
	        numeroSerie: "teste NS",
	        setor: "Teste Setor"
        });

        expect(res1.statusCode).toEqual(StatusCodes.CREATED);

        const resBusca = await testServer.get("/computador").send();

        expect(Number(resBusca.header["x-total-count"])).toBeGreaterThan(0);
        expect(resBusca.statusCode).toEqual(StatusCodes.OK);
        expect(resBusca.body.length).toBeGreaterThan(0);
    });

});