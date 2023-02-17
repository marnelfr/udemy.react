import React, {useState} from "react";

const ModalContext = React.createContext({
  show: false,
  hideModalHandler: () => {},
  showModalHandler: () => {}
})

export const ModalContextProvider = props => {
  const [show, setShow] = useState(false)

  const hideModalHandler = event => {
    event.preventDefault()
    setShow(false)
  }

  const showModalHandler = event => {
    event.preventDefault()
    setShow(true)
  }

  return (
    <ModalContext.Provider value={{show, hideModalHandler, showModalHandler}}>
      {props.children}
    </ModalContext.Provider>
  )
}

export default ModalContext