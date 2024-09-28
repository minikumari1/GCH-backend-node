const ngrok = require('ngrok')

const token="2mgpNDrnHVWt3gqTktZOA4IsAR7_5qV4puXujaLmg3z5hGw2X"

const runNgrokServer=async()=>{

    console.log("Starting NGROK")

    const res=await ngrok.connect({authtoken: token,addr:5000});
    console.log(res)

}


runNgrokServer()
