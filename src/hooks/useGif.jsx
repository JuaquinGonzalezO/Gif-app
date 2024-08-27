import { useState } from "react"

export const useGif = () =>{
    const [gif, setGif] = useState('')

    const reqGif = async() =>{
    await fetch(`https://media4.giphy.com/media/DHxUqpUvXA4UFspThw/200.webp?cid=45fd91729lo6rtibeqwqfvj133sadnzqwk3yln5iu3waveko&ep=v1_gifs_random&rid=200.webp&ct=g`).then(async(resp)=>{
        await resp.json().then(({data}) =>{
            setGif(data.images.original.url)
        })

        

    }).catch(console.error)
   }

   const handleGetGif = () =>{
    reqGif()

    
   }
   return{
    handleGetGif,
    gif
   }
}