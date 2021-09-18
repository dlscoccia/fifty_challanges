import React from 'react'
import style from './ChallangeCard.module.css'


const ChallangeCard = ({name, image, id }) => {
    return (
        <div className={style.cardBody} data-aos="fade-up">
            <img className={style.image} src='https://dummyimage.com/600x400/000/fff' alt={name} />
            <div className={style.info}>
                <span className={style.id}>Challange #{id}</span>
                <hr className={style.division} />
                <h2 className={style.name}>{name}</h2>
            </div>
        </div>
    )
}

export default ChallangeCard
