import React, { useState } from 'react'
import Modal from '../Modal'
import style from './ChallengeCard.module.css'


const ChallengeCard = ({ name, img, id, description, git, deploy }) => {

    const [showModal, setShowModal] = useState(false)
    console.log(description)
    const openModal = () => {
        setShowModal(prev => !prev)
    }

    return (
        <>
            <div className={style.cardBody} data-aos="fade-up">
                <img className={style.image} src={img} alt={name} />
                <div className={style.info}>
                    <span className={style.id}>Challenge #{id}</span>
                    <hr className={style.division} />
                    <h2 className={style.name}>{name}</h2>
            <button onClick={openModal} className={style.btn}>
                View
            </button>
                </div>
            </div>
            <Modal showModal={showModal} setShowModal={setShowModal} name={name} description={description} image={img} git={git} deploy={deploy} />
        </>

    )
}

export default ChallengeCard
