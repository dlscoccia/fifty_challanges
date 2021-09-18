import React, { useState } from 'react'
import ChallangeCard from '../ChallangeCard'
import style from './Challanges.module.css'

const Challanges = ({ data }) => {
  const [challanges, setChallanges] = useState(data)

  const inputChange = (e) => {
    const search = e.target.value
    if (search === '') {
      setChallanges(data)
    } else {
      const filterChallanges = data.filter(challange => challange.name.toLowerCase().startsWith(search))
      setChallanges(filterChallanges)
    }
  }

  return (
    <main className={style.challangeContainer}>
      <div className='search'>
        <span className={style.searchText}>Search a challange</span>
        <input type='text' onChange={e => inputChange(e)} className={style.input}/>
      </div>
      <div className={style.challanges}>
        {
          challanges.length > 0 && 
          challanges.map(challange => (
            <ChallangeCard key={challange.id} name={challange.name} id={challange.id} img={challange.image} git={challange.githubUrl} deploy={challange.deployUrl}/>
          ))
        }
      </div>
    </main>
  )
}

export default Challanges
