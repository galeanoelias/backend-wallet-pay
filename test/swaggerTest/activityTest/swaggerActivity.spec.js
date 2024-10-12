import request from 'supertest';
import app from "../../../src/app";


describe('Validación de la ruta "/docs/api/v1/auth/activity/transfer"', () => {
    const userId = 'id_del_usuario';
    const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDQwNDJiYTZjMzEwZWZlMGMzMDcwMDAiLCJpYXQiOjE2ODE5MzI5ODYsImV4cCI6MTY4MTkzMzg4Nn0.ea2OM59KgdQKvZs8d2s3gTJfsx5A1kIiFOj7WGyeTvk';
  
    it('debe realizar una transferencia y devolver el estado 200', async () => {
      const response = await request(app)
        .post(`/docs/api/v1/auth/activity/transfer?id=${userId}`)
        .set('Authorization', token)
        .send({
          UserAccountId: '638d039e8ce24f8a608e5a37',
          amount: 1250,
          description: 'Esta es la descripción de tu pago...',
          type: 'transfer',
          cvu: '1234567891234567891234',
          alias: 'panza.vino.rock',
          payment: {
            method: 'card',
            cardId: '264'
          }
        });
  
      expect(response.status).toBe(200);
    });
});


describe('Validación de la ruta "/docs/api/v1/auth/activity/activities/{id}/{amount}"', () => {
    const userId = 'id_del_usuario';
    const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDQwNDJiYTZjMzEwZWZlMGMzMDcwMDAiLCJpYXQiOjE2ODE5MzI5ODYsImV4cCI6MTY4MTkzMzg4Nn0.ea2OM59KgdQKvZs8d2s3gTJfsx5A1kIiFOj7WGyeTvk';
    const amount = 1000;
  
    it('debe obtener las actividades del usuario y devolver el estado 200', async () => {
      const response = await request(app)
        .get(`/docs/api/v1/auth/activity/activities/${userId}/${amount}`)
        .set('Authorization', token);
  
      expect(response.status).toBe(200);
    });
});


describe('Validación de la ruta "/docs/api/v1/auth/activity/recent/{id}/{amount}"', () => {
    const userId = 'id_del_usuario';
    const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDQwNDJiYTZjMzEwZWZlMGMzMDcwMDAiLCJpYXQiOjE2ODE5MzI5ODYsImV4cCI6MTY4MTkzMzg4Nn0.ea2OM59KgdQKvZs8d2s3gTJfsx5A1kIiFOj7WGyeTvk';
    const amount = 1000;
  
    it('debe obtener las actividades recientes del usuario y devolver el estado 200', async () => {
      const response = await request(app)
        .get(`/docs/api/v1/auth/activity/recent/${userId}/${amount}`)
        .set('Authorization', token);
  
      expect(response.status).toBe(200);
    });
});