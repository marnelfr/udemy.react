import React, {useEffect, useState} from "react";

const ModalContext = React.createContext({
  show: false,
  showModalHandler: () => {},
  hideModalHandler: () => {}
})

export const ModalContextProvider = props => {
  const [show, setShow] = useState(false)

  const showModalHandler = () => {
    setShow(true)
  }

  const hideModalHandler = () => {
    setShow(false)
  }

  return (
    <ModalContext.Provider value={{show, showModalHandler, hideModalHandler}}>
      {props.children}
    </ModalContext.Provider>
  )
}

export default ModalContext