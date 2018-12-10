// This file is generated by the Bot end to end testing framework
require('dotenv').config()
const request = require('request')

const API_ENDPOINT = process.env.API_ENDPOINT

describe('The API should work for', () => {

    it('[Hilfe] (location == Bamberg)', (done) => {
        request({
            uri: API_ENDPOINT + '/dialogflow/message',
            method: 'POST',
            json: {"responseId":"MC41ODcwMjYxNjkzNDY0MzcxMTU0NDQ1MDM1MjkzMw==","queryResult":{"queryText":"","parameters":{"location":"Bamberg"},"allRequiredParamsPresent":true,"fulfillmentMessages":[{"text":{"text":[""]}}],"outputContexts":[],"intent":{"name":"MC45MjE5MjA5NTE0OTQ4MTkyMTU0NDQ1MDM1MjkzMw==","displayName":"Hilfe"},"intentDetectionConfidence":1,"languageCode":"de"},"originalDetectIntentRequest":{"payload":{}},"session":"projects/MC45NzY1MzY2NTYzODIwNzMyMTU0NDQ1MDM1MjkzMw=="}
        }, (err, res, body) => {
            if (err) done.fail(err)
            expect(res.statusCode).toBe(200)
            done()
        })
    })

    it('[Abbrechen]', (done) => {
        request({
            uri: API_ENDPOINT + '/dialogflow/message',
            method: 'POST',
            json: {"responseId":"MC44ODQwMzgxMDkwMjc4NTkxMTU0NDQ1MDM1MjkzMw==","queryResult":{"queryText":"","parameters":{},"allRequiredParamsPresent":true,"fulfillmentMessages":[{"text":{"text":[""]}}],"outputContexts":[],"intent":{"name":"MC41OTYyNTYzMTQxMDUwMTI4MTU0NDQ1MDM1MjkzMw==","displayName":"Abbrechen"},"intentDetectionConfidence":1,"languageCode":"de"},"originalDetectIntentRequest":{"payload":{}},"session":"projects/MC4xNTU3NTUyMzAyODk1Njg0MTU0NDQ1MDM1MjkzMw=="}
        }, (err, res, body) => {
            if (err) done.fail(err)
            expect(res.statusCode).toBe(200)
            done()
        })
    })

    it('[Danke]', (done) => {
        request({
            uri: API_ENDPOINT + '/dialogflow/message',
            method: 'POST',
            json: {"responseId":"MC40OTgyNDcwMzQwMTQyMTg2NjE1NDQ0NTAzNTI5MzM=","queryResult":{"queryText":"","parameters":{},"allRequiredParamsPresent":true,"fulfillmentMessages":[{"text":{"text":[""]}}],"outputContexts":[],"intent":{"name":"MC44MTU1OTcxMTYxNDMzMzk3MTU0NDQ1MDM1MjkzMw==","displayName":"Danke"},"intentDetectionConfidence":1,"languageCode":"de"},"originalDetectIntentRequest":{"payload":{}},"session":"projects/MC45NDI3OTA1ODI0NzQ3NzczMTU0NDQ1MDM1MjkzMw=="}
        }, (err, res, body) => {
            if (err) done.fail(err)
            expect(res.statusCode).toBe(200)
            done()
        })
    })

})