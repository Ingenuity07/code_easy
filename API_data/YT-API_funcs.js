const axios = require('axios')

const YT_API = process.env.YT_API
const YT_KEY = process.env.YT_KEY

const videoData = async (url)=>{
    try{
        let params = new URLSearchParams(url.slice(url.indexOf('?')));
        const call = YT_API+"&key="+YT_KEY+"&part=snippet&"+"id="+params.get('v')

        console.log(call)

        const result = await axios.get(call)
        const data = result.data.items[0].snippet

        const body={
            url:url,
            title:data.title,
            img:data.thumbnails.high.url
        }
        return body

    }
    catch(er)
    {
        console.log(er.message)
    }
}

module.exports = {
    videoData
}