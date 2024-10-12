import request from 'supertest';
import app from "../../../src/app";


describe('Validación de la ruta "/docs/api/v1/auth/card/{id}/{user_number}"', () => {
    it('debe obtener las tarjetas de un usuario y devolver el estado 200', async () => {
        const userId = 'id_del_usuario';
        const userNumber = 1234567890;
        const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDQwNDJiYTZjMzEwZWZlMGMzMDcwMDAiLCJpYXQiOjE2ODE5MzI5ODYsImV4cCI6MTY4MTkzMzg4Nn0.ea2OM59KgdQKvZs8d2s3gTJfsx5A1kIiFOj7WGyeTvk';

        const response = await request(app)
            .get(`/docs/api/v1/auth/auth/card/${userId}/${userNumber}`)
            .set('Authorization', token);

        expect(response.status).toBe(200);
    });
});


describe('Validación de las rutas "/docs/api/v1/auth/card/{id}"', () => {
    const userId = 'id_del_usuario';
    const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDQwNDJiYTZjMzEwZWZlMGMzMDcwMDAiLCJpYXQiOjE2ODE5MzI5ODYsImV4cCI6MTY4MTkzMzg4Nn0.ea2OM59KgdQKvZs8d2s3gTJfsx5A1kIiFOj7WGyeTvk';

    it('debe crear una tarjeta para el usuario y devolver el estado 200', async () => {
        const response = await request(app)
            .post(`/docs/api/v1/auth/card/${userId}`)
            .set('Authorization', token)
            .send({
                type: 'credit',
                bank_emisor: 'Patagonia',
                bank: 'visa',
                expiration_date: '02/30',
                user_card: 'NOMBRE DE TARJETA',
                user_number: 1234567890,
                cvv: 264
            });

        expect(response.status).toBe(200);
    });
});


describe('Validación de las rutas "/docs/api/v1/auth/card/{id}"', () => {
    const userId = 'id_del_usuario';
    const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDQwNDJiYTZjMzEwZWZlMGMzMDcwMDAiLCJpYXQiOjE2ODE5MzI5ODYsImV4cCI6MTY4MTkzMzg4Nn0.ea2OM59KgdQKvZs8d2s3gTJfsx5A1kIiFOj7WGyeTvk';

    it('debe actualizar las tarjetas del usuario y devolver el estado 200', async () => {
        const response = await request(app)
            .patch(`/docs/api/v1/auth/card/${userId}`)
            .set('Authorization', token)
            .send({
                type: 'debit',
                bank_emisor: 'Nuevo Banco',
                bank: 'mastercard',
                expiration_date: '02/25',
                user_card: 'NUEVO NOMBRE DE TARJETA',
                user_number: 9876543210,
                cvv: 999
            });

        expect(response.status).toBe(200);
    });
});


describe('Validación de las rutas "/docs/api/v1/auth/card/{id}"', () => {
    const userId = 'id_del_usuario';
    const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDQwNDJiYTZjMzEwZWZlMGMzMDcwMDAiLCJpYXQiOjE2ODE5MzI5ODYsImV4cCI6MTY4MTkzMzg4Nn0.ea2OM59KgdQKvZs8d2s3gTJfsx5A1kIiFOj7WGyeTvk';

    it('debe eliminar la tarjeta del usuario y devolver el estado 200', async () => {
        const response = await request(app)
            .delete(`/docs/api/v1/auth/card/${userId}`)
            .set('Authorization', token);

        expect(response.status).toBe(200);
    });
});
