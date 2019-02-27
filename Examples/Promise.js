let request = require('request');
let Promise = require('bluebird');

class AsyncMachine {

    constructor(){
        console.log("비동기 머신 실행.")
    }

    Async_Json_Call(){

        return new Promise((resolve,reject) => {

            request(`https://jsonplaceholder.typicode.com/albums/1/photos`,(err ,res, body) =>{

                if(err){
                    reject(err)
                }

                let JSON_BODY = JSON.parse(body)
                resolve(JSON_BODY)
            })

        })

    }

}

// 비동기 머신 인스턴스화
let AM = new AsyncMachine()

/*
 * Async_Json_Call() 함수는 Promise 객체를 반환하므로 then , catch , finally를 사용할 수 있게 된다.
 * .then 메소드의 콜백 파라미터는 resolve가 전송하는 데이터를 이용한다.
 * .catch 메소드의 콜백 파라미터는 resolve가 전송하는 데이터를 이용한다.
 * .finally 메소드는 어떤 파라미터도 받지 않는다. 요청의 결과에 상관없이 동작하는 마지막 메소드이기 때문이다.
 */
AM.Async_Json_Call()

    .then((res) => {

    console.log(res)

    })

    .catch((err) => {

    console.log(err)

    })

    .finally(()=>{

    console.log('수행 완료.')

    })