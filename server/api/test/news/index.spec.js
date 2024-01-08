import request from 'supertest';
import app from '../../../index';
import mongoose from 'mongoose';
import New from '../../models/new';

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTgyMzA1ZDJjMGZlMjlkNmU4YTkxODAiLCJpYXQiOjE3MDQ2OTI1MzIsImV4cCI6MTcwNDc3ODkzMn0.8DnIhzpvtJ8xEfU96T9uOfwqUBXxREWlaqk1zZfGi-o"
describe("GET /news", () => {
    test("should response with 200", async() => {
        const response = await request(app).get("/api/v1/news").send().set('Authorization', `Bearer ${TOKEN}`);
        expect(response.statusCode).toBe(200);
    })
})

describe("GET /news", () => {
    test("should response with 200", async() => {
        const response = await request(app).get("/api/v1/news").send().set('Authorization', `Bearer ${TOKEN}`);
        expect(response).toBeDefined();
    })
})

describe("GET /news", () => {
    test("total should be lastTotal", async() => {
        const response = await request(app).get("/api/v1/news").send().set('Authorization', `Bearer ${TOKEN}`);
        expect(response.body.data).toHaveLength(await New.countDocuments());
    })
})

describe("POST /news", () => {
    test("should response with 200", async() => {
        const response = await request(app).post("/api/v1/news").send({
            "category": "emergencies",
            "detail": "Perro mordió a dueño de aparamento 506 en torre 2",
            "date": "2024-01-08T15:12:12.000Z"
        }).set('Authorization', `Bearer ${TOKEN}`);
        expect(response.statusCode).toBe(200);
    })
})

describe("PATCH /news/:id", () => {
    test("should response with 200", async() => {
        const response = await request(app).patch("/api/v1/news/659c38ed3a0d09b01831b44a").send({
            "author": "6473e52ca4a606e5f3319f87"
        }).set('Authorization', `Bearer ${TOKEN}`);
        expect(response.statusCode).toBe(200);
    })
})