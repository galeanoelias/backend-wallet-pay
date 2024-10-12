import request from 'supertest';
import app from "../../../src/app";


describe('Test de la aplicación Swagger', () => {
    it('debe devolver el estado 200 al realizar una solicitud GET a /docs/api/v1', async () => {
        const response = await request(app).get("/docs/api/v1").redirects(1);
        expect(response.statusCode).toBe(200);
    });
});


describe('Validación de la ruta "/docs/api/v1/auth/user"', () => {
    it('debe devolver el estado 200 y los usuarios', async () => {
        const response = await request(app).get("/docs/api/v1/auth/user");

        expect(response.status).toBe(200);
        expect(response.body).toBeDefined();
        expect(Array.isArray(response.body));
    }, 100000);
});


describe('Validación de la ruta "/docs/api/v1/auth/user/register"', () => {
    it('debe devolver el estado 200 y el usuario creado', async () => {
        const newUser = {
            username: 'Usuario',
            email: 'correo@correo.com',
            password: '12345aB!',
            dni: 12345678,
            fullname: 'Unknown'
        };

        const response = await request(app)
            .post("/docs/api/v1/auth/user/register")
            .send(newUser);

        expect(response.status).toBe(200);
        expect(response.body).toBeDefined();
    });
});


describe('Validación de la ruta "/docs/api/v1/auth/user/login"', () => {
    it('debe devolver el estado 200 y los datos del usuario', async () => {
        const credentials = {
            email: 'correo@correo.com',
            password: '12345aB!'
        };

        const response = await request(app)
            .post("/docs/api/v1/auth/user/login")
            .send(credentials);

        expect(response.status).toBe(200);
        expect(response.body).toBeDefined();
    });
});


describe('Validación de la ruta "/docs/api/v1/auth/user/{id}"', () => {
    it('debe devolver el estado 200 y los datos del usuario', async () => {
        const userId = 'id_del_usuario';
        const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDQwNDJiYTZjMzEwZWZlMGMzMDcwMDAiLCJpYXQiOjE2ODE5MzI5ODYsImV4cCI6MTY4MTkzMzg4Nn0.ea2OM59KgdQKvZs8d2s3gTJfsx5A1kIiFOj7WGyeTvk';

        const response = await request(app)
            .get(`/docs/api/v1/auth/user/${userId}`)
            .set('Authorization', token);

        expect(response.status).toBe(200);
        expect(response.body).toBeDefined();
    });
});


describe('Validación de las rutas "/docs/api/v1/auth/user/{id}"', () => {
    it('debe actualizar un usuario y devolver el estado 200', async () => {
        const userId = 'id_del_usuario';
        const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDQwNDJiYTZjMzEwZWZlMGMzMDcwMDAiLCJpYXQiOjE2ODE5MzI5ODYsImV4cCI6MTY4MTkzMzg4Nn0.ea2OM59KgdQKvZs8d2s3gTJfsx5A1kIiFOj7WGyeTvk';
        const updatedUser = {
            username: 'Usuario',
            email: 'correo@correo.com',
            password: '12345aB!',
            urlProfile: 'https://res.cloudinary.com/dinhl5zhi/image/upload/v1685514045/users/fsz2gipbpdkntuxprcty.jpg',
            dni: 12345678,
            fullname: 'Unknown',
            alias: 'Nombre.de.alias',
            cvu: '00000062624512345678',
            phone: 1100000000,
            adress: 'Av. calle falsa 123',
            balance: '50500'
        };

        const response = await request(app)
            .patch(`/docs/api/v1/auth/user/${userId}`)
            .set('Authorization', token)
            .send(updatedUser);

        expect(response.status).toBe(200);
    });
});


describe('Validación de las rutas "/docs/api/v1/auth/user/{id}"', () => {
    it('debe eliminar un usuario y devolver el estado 200', async () => {
        const userId = 'id_del_usuario';
        const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDQwNDJiYTZjMzEwZWZlMGMzMDcwMDAiLCJpYXQiOjE2ODE5MzI5ODYsImV4cCI6MTY4MTkzMzg4Nn0.ea2OM59KgdQKvZs8d2s3gTJfsx5A1kIiFOj7WGyeTvk';

        const response = await request(app)
            .delete(`/docs/api/v1/auth/user/${userId}`)
            .set('Authorization', token);

        expect(response.status).toBe(200);
    });
});


describe('Validación de la ruta "/docs/api/v1/auth/user/updatepass/{id}"', () => {
    it('debe actualizar la contraseña de un usuario y devolver el estado 200', async () => {
      const userId = 'id_del_usuario';
      const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDQwNDJiYTZjMzEwZWZlMGMzMDcwMDAiLCJpYXQiOjE2ODE5MzI5ODYsImV4cCI6MTY4MTkzMzg4Nn0.ea2OM59KgdQKvZs8d2s3gTJfsx5A1kIiFOj7WGyeTvk';
      const updatedPassword = {
        actualPass: '12345aB!',
        newPass: '123456aB!'
      };
  
      const response = await request(app)
        .patch(`/docs/api/v1/auth/user/updatepass/${userId}`)
        .set('Authorization', token)
        .send(updatedPassword);
  
      expect(response.status).toBe(200);
    });
  });
