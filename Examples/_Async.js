let request = require('request');
let Promise = require('bluebird');

class AsyncMachine {

    constructor(){
        console.log("비동기 머신 실행.")
    }

    Json_Call(){

        return new Promise((resolve, reject) => {

            request(`https://jsonplaceholder.typicode.com/albums/1/photos`,(err ,res, body) =>{

                if(err){
                    reject(err)
                }

                let JSON_BODY = JSON.parse(body)
                resolve(JSON_BODY)
            })

        })

    }

    async Async_Process(){

        console.log('##### Calling Async_Process() #####')

        // Json_Call() Promise 함수의 동작을 기다린다. await 키워드를 통해 다음의 Statement가 실행되지 않고 일시정지된다.
        let JSON_RESULT = await this.Json_Call().catch((err) => {
            console.log(err)
        })
        console.log(JSON_RESULT)
        console.log('##### Done. #####')

    }


}

// 비동기 머신 인스턴스화
let AM = new AsyncMachine()

AM.Async_Process()