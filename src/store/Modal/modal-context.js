import React, {useState} from "react";

const ModalContext = React.createContext({
  show: false,
  showModalHandler: () => {},
  hideModalHandler: () => {}
})


const ModalContextProvider = props => {
  const [show, setShow] = useState(false)

  const showModalHandler = (event) => {
    event.preventDefault()
    setShow(true)
  }

  const hideModalHandler = (event) => {
    event.preventDefault()
    setShow(false)
  }

  return (
    <ModalContext.Provider value={{show, showModalHandler, hideModalHandler}}>
      {props.children}
    </ModalContext.Provider>
  )
}