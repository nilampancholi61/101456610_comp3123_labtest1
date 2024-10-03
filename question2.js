// Question 2


  

const resolvedPromise = () => {
    setTimeout(() => {
        let success = {'message': 'resolved'};
        console.log(success);
    
    }, 500)
}

const rejectedPromise = () => {
    setTimeout(() => {
        try {
            throw new Error('error : delayed');
        
        }catch (e) {
            console.error(e);
        }
    }, 500)
}

resolvedPromise()
rejectedPromise()