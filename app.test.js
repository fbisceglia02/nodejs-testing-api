import supertest from 'supertest'
import app from './app.js'
import { describe } from 'yargs'
import { request } from 'http'

describe("POST /users", () => {
    
    describe("given an username and a password", () => {
        // the server should save user and password to db 
        // server will respond with json containing user id
        test("should respond with a 200 status code", async () => {
            // respond with status 200
            const response = await request(app).post("/users").send({
                username: "username",
                password: "passwod"
            })
            expect(response.statusCode).toBe(200)
        })
        
        // server responses with json specified in content type header, so the client know what types is the data
    })

    describe("when the username and password are missing", () => {
        //if the client fails, the server should respond status 400 

    })
    // describe blocks are used here to organize the code better
})