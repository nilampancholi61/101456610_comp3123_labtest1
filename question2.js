// Question 2


  

const resolvedPromise = () => {
    setTimeout(() => {
        let success = {'resolved'};
        console.log(success);
    
    }, 500)
}

const rejectedPromise = () => {
    setTimeout(() => {
        try {
            throw new Error;{'error'};
        
        }catch (e) {
            console.error(e);
        }
    }, 500)
}

resolvedPromise()
rejectedPromise()