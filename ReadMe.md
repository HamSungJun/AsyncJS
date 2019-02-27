# 자바스크립트와 비동기 처리

## 요소

- `Promise`

- `async/await`

### [Promise](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise)

---

```javascript 1.6

    # Promise API : 비동기 요청과 콜백 함수에 대한 대안으로 등장.
    
    # States :
    
        ## Pending : 
        
            - 비동기 처리 로직이 완료되지 않은 상태.
            - Promise() 객체를 호출한 상태.
            
        ## Fulfilled :
         
            - 비동기 처리가 완료되어 결과 값은 반환한 상태.
            - Promise((resolve,reject)) 객체의 콜백 파라미터인 resolve 를 실행한 상태.
        
        ## Rejected : 
        
            - 비동기 처리 로직이 실패하거나 오류가 발생한 상태.
            - Promise((resolve,reject)) 객체의 콜백 파라미터인 resolve 를 실행한 상태. 
             

```

- [소스 예제](./Examples/Promise.js)

### [async/await](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/async_function)

---

~~~javascript 1.6

    # async 함수 선언
    
    async function name([param[, param[, ... param]]]) { 
        statements
    }
    
    const name = async ([param[, param[, ... param]]]) => {
    
    }
    
    # await : 
    
        - async 키워드로 선언된 함수 내부에서만 사용할 수 있는 키워드
        - 기대하는 반환 값은 Promise API 의 resolve 메소드가 전달하는 값이다.
    
    # 장점
    
        - async/await는 비동기 코드의 겉모습과 동작을 동기 코드처럼 받아들이도록 도와준다.
        
~~~

- [소스 예제](./Examples/_Async.js)


