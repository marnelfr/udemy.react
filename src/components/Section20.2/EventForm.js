import { useNavigate } from 'react-router-dom';

import classes from './EventForm.module.css';
import {useCallback, useRef} from "react";
import {useDispatch} from "react-redux";
import {eventActions} from "../../store/Section20/events";

function EventForm({ method, event }) {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const descRef = useRef()
  const dateRef = useRef()
  const titleRef = useRef()
  const imageRef = useRef()

  const cancelHandler = useCallback(() => {
    navigate('..', {relative: 'path'});
  }, [navigate])

  const submitHandler = useCallback(e => {
    e.preventDefault()
    const editedEvent = {
      id: event.id,
      title: titleRef.current.value,
      date: dateRef.current.value,
      description: descRef.current.value,
      image: imageRef.current.value
    }
    dispatch(eventActions.edit(editedEvent))
    navigate('..', {relative: 'path'})
  }, [dispatch, navigate])

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" ref={titleRef} name="title" defaultValue={event.title} required />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input id="image" type="url" name="image" ref={imageRef} defaultValue={event.image} required />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input id="date" type="date" name="date" ref={dateRef} defaultValue={event.date} required />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea id="description" ref={descRef} defaultValue={event.description} name="description" rows="5" required />
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button>Save</button>
      </div>
    </form>
  );
}

export default EventForm;
