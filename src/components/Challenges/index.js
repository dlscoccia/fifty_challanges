import React, { useState } from 'react'
import ChallengeCard from '../ChallengeCard'
import style from './Challenges.module.css'

const Challenges = ({ data }) => {
  const [challenges, setChallenges] = useState(data)

  const inputChange = (e) => {
    const search = e.target.value.toLowerCase().trim()
    if (search === '') {
      setChallenges(data)
    } else {
      const filterChallenges = data.filter(challenge => challenge.name.toLowerCase().startsWith(search))
      setChallenges(filterChallenges)
    }
  }

  return (
    <main className={style.challengeContainer}>
      <div className='search'>
        <span className={style.searchText}>Search a challenge</span>
        <input type='text' onChange={e => inputChange(e)} className={style.input}/>
      </div>
      <div className={style.challenges}>
        {
          challenges.length > 0 && 
          challenges.map(challenge => (
            <ChallengeCard key={challenge.id} name={challenge.name} id={challenge.id} img={challenge.image} git={challenge.githubUrl} deploy={challenge.deployUrl} description={challenge.description} />
          ))
        }
      </div>
    </main>
  )
}

export default Challenges
