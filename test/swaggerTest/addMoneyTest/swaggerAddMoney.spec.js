import request from 'supertest';
import app from "../../../src/app";


describe('Validación de la ruta "/docs/api/v1/auth/addMoney/{id}"', () => {
    const id = 'user1.alias1.pay1';
    const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDQwNDJiYTZjMzEwZWZlMGMzMDcwMDAiLCJpYXQiOjE2ODE5MzI5ODYsImV4cCI6MTY4MTkzMzg4Nn0.ea2OM59KgdQKvZs8d2s3gTJfsx5A1kIiFOj7WGyeTvk';
  
    it('debe agregar dinero a la cuenta y devolver el estado 200', async () => {
      const requestBody = {
        cardNumber: '1234567890',
        cvv: '123',
        balance: 1000.0
      };
  
      const response = await request(app)
        .post(`/docs/api/v1/auth/addMoney/${id}`)
        .set('Authorization', token)
        .send(requestBody);
  
      expect(response.status).toBe(200);
    });
});