const usableBuildFinder = (LAST_BUILD, config, USABLE_BUILDS, tries) => {

    console.log(`${tries}th Method Call`)

    if(USABLE_BUILDS.length == config.numOfBuilds){
        console.log("조건식 만족")
    }
    else if(USABLE_BUILDS.length != config.numOfBuilds){

        promiseRequest(LAST_BUILD, config, USABLE_BUILDS).then((USABLE_BUILDS) => {
            console.log(USABLE_BUILDS)
            return usableBuildFinder(LAST_BUILD - 1, config, USABLE_BUILDS, tries + 1)
        })

    }

};

const promiseRequest = (BUILD_NUMBER, config, USABLE_BUILDS) => {

    return new Promise((resolve ,reject) => {

        resolve([])

    })

}

usableBuildFinder(163, {}, [], 1)