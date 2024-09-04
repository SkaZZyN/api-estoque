import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";

describe("Computador - Create", () => {

    it ("Cria Registro", async () =>{

       const res1 = await testServer.post("/computador").send({
            patrimonio: 16870,
	        marca: "HP",
	        modelo: "elitedesk",
	        numeroSerie: "teste NS",
	        setor: "Teste Setor"
        });

        expect(res1.statusCode).toEqual(StatusCodes.CREATED);
    });

    it ("Cria Registro", async () =>{

        const res1 = await testServer.post("/computador").send({
             patrimonio: null
         });
 
         expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
         expect(res1.body).toHaveProperty("errors.body.patrimonio");
     });
     it ("Cria Registro", async () =>{

        const res1 = await testServer.post("/computador").send({
             setor: null
         });
 
         expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
         expect(res1.body).toHaveProperty("errors.body.setor");
     });
     it ("Cria Registro", async () =>{

        const res1 = await testServer.post("/computador").send({
             marca: null
         });
 
         expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
         expect(res1.body).toHaveProperty("errors.body.marca");
     });
     it ("Cria Registro", async () =>{

        const res1 = await testServer.post("/computador").send({
             modelo: null
         });
 
         expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
         expect(res1.body).toHaveProperty("errors.body.modelo");
     });
     it ("Cria Registro", async () =>{

        const res1 = await testServer.post("/computador").send({
             numeroSerie: null
         });
 
         expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
         expect(res1.body).toHaveProperty("errors.body.numeroSerie");
     });

});