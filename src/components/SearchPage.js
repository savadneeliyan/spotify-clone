import React, { useEffect, useState } from 'react'
import { useStateProvider } from '../utils/StateProvider';
import axios from 'axios';
import { BollywoodHits } from '../contents';

function SearchPage() {

    const [{ token }, dispatch] = useStateProvider();
    const [data, setData] = useState()

    useEffect(() => {
        const getuserinfo = async () => {
            const { data } = await axios.get(`https://api.spotify.com/v1/browse/categories?limit=50`,
              {
                headers: {
                  Authorization: "Bearer " + token,
                  "content-Type": "application/json",
                },
              }
            );
            setData(data)
            console.log(data)

            const genre = await axios.get(`https://api.spotify.com/v1/browse/categories?limit=50`,
            {
                headers: {
                  Authorization: "Bearer " + token,
                  "content-Type": "application/json",
                },
              }) 
            console.log(genre)
        }
        getuserinfo()
    }, [])


  return (
    <div className='searchpage'>
        <h2>Browse all</h2>
        <div className="search-grid">
            {
                data?.categories?.items?.map((item,i) => (
                    <div className="pagelist" style={{backgroundColor:"red"}} key={i} >
                        <h2>{item.name}</h2>
                        <img src={item.icons[0].url} alt="" />
                    </div>
                ))
                
            }

            

            {/* <div className="pagelist" style={{backgroundColor:"red"}}>
                <h2>Podcasts</h2>
                <img src="https://i.scdn.co/image/ab6765630000ba8a2b41fc062049680d64487588" alt="" />
            </div>

            <div className="pagelist" style={{backgroundColor:"red"}}>
                <h2>Podcasts</h2>
                <img src="https://i.scdn.co/image/ab6765630000ba8a2b41fc062049680d64487588" alt="" />
            </div>

            <div className="pagelist" style={{backgroundColor:"red"}}>
                <h2>Podcasts</h2>
                <img src="https://i.scdn.co/image/ab6765630000ba8a2b41fc062049680d64487588" alt="" />
            </div>

            <div className="pagelist" style={{backgroundColor:"red"}}>
                <h2>Podcasts</h2>
                <img src="https://i.scdn.co/image/ab6765630000ba8a2b41fc062049680d64487588" alt="" />
            </div>

            <div className="pagelist" style={{backgroundColor:"red"}}>
                <h2>Podcasts</h2>
                <img src="https://i.scdn.co/image/ab6765630000ba8a2b41fc062049680d64487588" alt="" />
            </div>

            <div className="pagelist" style={{backgroundColor:"red"}}>
                <h2>Podcasts</h2>
                <img src="https://i.scdn.co/image/ab6765630000ba8a2b41fc062049680d64487588" alt="" />
            </div>

            <div className="pagelist" style={{backgroundColor:"red"}}>
                <h2>Podcasts</h2>
                <img src="https://i.scdn.co/image/ab6765630000ba8a2b41fc062049680d64487588" alt="" />
            </div>

            <div className="pagelist" style={{backgroundColor:"red"}}>
                <h2>Podcasts</h2>
                <img src="https://i.scdn.co/image/ab6765630000ba8a2b41fc062049680d64487588" alt="" />
            </div>

            <div className="pagelist" style={{backgroundColor:"red"}}>
                <h2>Podcasts</h2>
                <img src="https://i.scdn.co/image/ab6765630000ba8a2b41fc062049680d64487588" alt="" />
            </div>

            <div className="pagelist" style={{backgroundColor:"red"}}>
                <h2>Podcasts</h2>
                <img src="https://i.scdn.co/image/ab6765630000ba8a2b41fc062049680d64487588" alt="" />
            </div>

            <div className="pagelist" style={{backgroundColor:"red"}}>
                <h2>Podcasts</h2>
                <img src="https://i.scdn.co/image/ab6765630000ba8a2b41fc062049680d64487588" alt="" />
            </div>

            <div className="pagelist" style={{backgroundColor:"red"}}>
                <h2>Podcasts</h2>
                <img src="https://i.scdn.co/image/ab6765630000ba8a2b41fc062049680d64487588" alt="" />
            </div>

            <div className="pagelist" style={{backgroundColor:"red"}}>
                <h2>Podcasts</h2>
                <img src="https://i.scdn.co/image/ab6765630000ba8a2b41fc062049680d64487588" alt="" />
            </div>

            <div className="pagelist" style={{backgroundColor:"red"}}>
                <h2>Podcasts</h2>
                <img src="https://i.scdn.co/image/ab6765630000ba8a2b41fc062049680d64487588" alt="" />
            </div>

            <div className="pagelist" style={{backgroundColor:"red"}}>
                <h2>Podcasts</h2>
                <img src="https://i.scdn.co/image/ab6765630000ba8a2b41fc062049680d64487588" alt="" />
            </div>

            <div className="pagelist" style={{backgroundColor:"red"}}>
                <h2>Podcasts</h2>
                <img src="https://i.scdn.co/image/ab6765630000ba8a2b41fc062049680d64487588" alt="" />
            </div>

            <div className="pagelist" style={{backgroundColor:"red"}}>
                <h2>Podcasts</h2>
                <img src="https://i.scdn.co/image/ab6765630000ba8a2b41fc062049680d64487588" alt="" />
            </div>

            <div className="pagelist" style={{backgroundColor:"red"}}>
                <h2>Podcasts</h2>
                <img src="https://i.scdn.co/image/ab6765630000ba8a2b41fc062049680d64487588" alt="" />
            </div>

            <div className="pagelist" style={{backgroundColor:"red"}}>
                <h2>Podcasts</h2>
                <img src="https://i.scdn.co/image/ab6765630000ba8a2b41fc062049680d64487588" alt="" />
            </div>

            <div className="pagelist" style={{backgroundColor:"red"}}>
                <h2>Podcasts</h2>
                <img src="https://i.scdn.co/image/ab6765630000ba8a2b41fc062049680d64487588" alt="" />
            </div> */}
        </div>
    </div>
  )
}

export default SearchPage