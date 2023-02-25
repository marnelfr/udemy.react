import classes from './NewsletterSignup.module.css';
import {useFetcher} from "react-router-dom";
import {useEffect, useRef} from "react";

function NewsletterSignup() {
  const {Form, data, state} = useFetcher()
  const ref = useRef()

  const isSubmitting = state === 'submitting'

  useEffect(() => {
    if(state === 'idle' && data && data.message) {
      alert(data.message)
      ref.current.value = ''
    }
  }, [data, state])

  return (
    <Form method="post" action="/newsletter" className={classes.newsletter}>
      <input
        type="email"
        name="email"
        ref={ref}
        placeholder="Sign up for newsletter..."
        aria-label="Sign up for newsletter"
      />
      <button>{isSubmitting ? 'Submitting...' : 'Sign up'}</button>
    </Form>
  );
}

export default NewsletterSignup;