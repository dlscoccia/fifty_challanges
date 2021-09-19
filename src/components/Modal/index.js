import React, { useRef } from 'react'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'
import { MdClose } from 'react-icons/md'

const Background = styled.div`
width: 100vw;
height: 100vh;
background: rgba(0,0,0, 0.8);
position: fixed;
top: 0;
left: 0;
display: flex;
justify-content: center;
align-items: center;
z-index: 20;
`

const ModalWrapper = styled.div`
width: 800px;
height: 500px;
box-shadow: 0 5px 16pc rgba(0,0,0,0.2);
background: #fff;
color: #000;
display: grid;
grid-template-columns: 1fr 1fr;
position: relative;
z-index: 10;
border-radius: 10px;
border: 2px solid var(--yellow);

@media screen and (max-width: 768px) {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  width: 90%;
  height: 90%;
  margin: 0 auto;
  padding-bottom: 1rem;
}
`

const ModalImg = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
border-radius: 10px 0 0 10px;
background: #000;
border-right: solid 2px var(--blue);

@media screen and (max-width: 768px) {
  border-radius: 10px 10px 0 0;
  border-bottom: solid 2px var(--blue);
  border-right: none;
}
`

const ModalContent = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
line-height: 1.8;
color: #141414;
font-family: 'Acme', sans-serif;
h1 {
font-size: 38px;

}

p {
margin: 1rem 0;
font-family: 'Raleway', sans-serif;
font-weight: 300;
font-style: italic;
color: var(--blue);
}

button {
  padding: 10px 24px;
  background-color: var(--blue);
  color: var(--yellow);
  border: none;
  border-radius: 10px;
}
`

const BtnContainer = styled.div`
display: flex;
width: 100%;
justify-content: space-evenly;
`

const CloseModalButton = styled(MdClose)`
cursor: pointer;
position: absolute;
top: 20px;
right: 20px;
width: 32px;
height: 32px;
padding: 0;
z-index: 10;

@media screen and (max-width: 768px) {
  top: 10px;
  right: 10px;
}
`

const Modal = ({ showModal, setShowModal, name, description, image, git, deploy }) => {

  const modalRef = useRef()
  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`
  })

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false)
    }
  }

  return (
    <>
      {
        showModal ? (
          <Background ref={modalRef} onClick={closeModal}>
            <animated.div style={animation}>
              <ModalWrapper showModal={showModal}>
                <ModalImg src={image} alt='modal' />
                <ModalContent>
                  <h1>{name}</h1>
                  <p>{description}</p>
                  <BtnContainer>
                    <button>
                      <a href={git} target='_blank' rel='noreferrer'>Code</a>
                    </button>
                    <button>
                      <a href={deploy} target='_blank' rel='noreferrer'>Live Demo</a>
                    </button>
                  </BtnContainer>
                </ModalContent>
                <CloseModalButton aria-label='close modal' onClick={() => setShowModal(prev => !prev)} />
              </ModalWrapper>
            </animated.div>
          </Background>
        ) : null
      }
    </>
  )
}

export default Modal
