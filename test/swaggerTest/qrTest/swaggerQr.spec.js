import request from 'supertest';
import app from "../../../src/app";


describe('Validación de la ruta "/docs/api/v1/auth/qr/{alias}/{mount}"', () => {
    const alias = 'alias_del_usuario';
    const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDQwNDJiYTZjMzEwZWZlMGMzMDcwMDAiLCJpYXQiOjE2ODE5MzI5ODYsImV4cCI6MTY4MTkzMzg4Nn0.ea2OM59KgdQKvZs8d2s3gTJfsx5A1kIiFOj7WGyeTvk';
    const amount = 1250;
  
    it('debe obtener la cantidad a pagar con el código QR y devolver el estado 200', async () => {
      const response = await request(app)
        .get(`/docs/api/v1/auth/qr/${alias}/${amount}`)
        .set('Authorization', token);
  
      expect(response.status).toBe(200);
    });
});