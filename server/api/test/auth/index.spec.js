import request from 'supertest';
import app from '../../../index';
import mongoose from 'mongoose';

describe("POST /api/auth/login", () => {
    test("should response with 409", async() => {
        const response = await request(app).post("/api/v1/auth/login").send({
            "email": "mballack@gmail.com",
            "password": "123455677"
        });
        expect(response.statusCode).toBe(409);
    })
})

describe("POST /api/auth/login", () => {
    test("should response with 200", async() => {
        const response = await request(app).post("/api/v1/auth/login").send({
            "email": "thegrozzo@gmail.com",
            "password": "@@Spm12@@"
        });
        expect(response.statusCode).toBe(200);
    })
})

describe("POST /api/auth/login", () => {
    test("should response with data", async() => {
        const response = await request(app).post("/api/v1/auth/login").send({
            "email": "thegrozzo@gmail.com",
            "password": "@@Spm12@@"
        });
        expect(response.body.data.token).toBeDefined();
    })
})

describe("POST /api/auth/register", () => {
    test("should response with data", async() => {
        const response = await request(app).post("/api/v1/auth/register").send({
            "name": "Manolito",
            "lastname": "Hadson Fernandes",
            "email": "micorreo24@gmail.com",
            "password": "@@123Pm@@",
            "phone": "9845114524"
        });
        expect(response.statusCode).toBe(400);
    })
})