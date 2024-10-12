import request from 'supertest';
import app from "../src/app";

describe('Test de la api, ruta raiz', () => {
  it('debe devolver el estado 404 al realizar una solicitud GET a /', async () => {
    const response = await request(app).get("/").send('Cannot GET /');
    expect(response.statusCode).toBe(404);
  });
});