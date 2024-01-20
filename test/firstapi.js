const axios=require('axios')
 module.exports={
    "Api test Get":  function(){

        
        axios
        .get('http://localhost:8000')
        .then((response)=>{
           
            result(response)
               
                
           
            
        //  browser
        // .assert.textEq(response.statusCode,200)
    })
        
        
        .catch((error)=>{
            result(error) 
            
        //   browser.assert.fail("API test is fail")
            
           
        })
         async function result(result_data){
             var results={
            "status":result_data.status,
            "status_Message":result_data.statusText,
            "body":result_data.data,
            "headers":result_data.headers,
            "Method":result_data.config.method,
            "Url":result_data.config.url
            }
            console.log(results)
            await fetch('http://localhost:8000/datas',{
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(results)
        }); 

        }
         

        
        
    }
 }