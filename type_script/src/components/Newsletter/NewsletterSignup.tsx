import { useFetcher } from "react-router-dom";

import classes from "./NewsletterSignup.module.css";
import { FormEventHandler, useEffect, useRef } from "react";

function NewsletterSignup() {
  const ref = useRef<HTMLInputElement>(null);
  const { data, submit, state } = useFetcher();
  const isSubmitting = state === "submitting";

  const submitHandler: FormEventHandler = (event) => {
    event.preventDefault();
    submit(
      { email: ref.current!.value },
      { action: "/newsletter", method: "post" }
    );
  };

  useEffect(() => {
    if (state === "idle" && data && data.message) {
      window.alert(data.message);
    }
  }, [state, data]);

  return (
    <form
      method="post"
      onSubmit={submitHandler}
      action="/newsletter"
      className={classes.newsletter}
    >
      <input
        type="email"
        name="email"
        ref={ref}
        placeholder="Sign up for newsletter..."
        aria-label="Sign up for newsletter"
      />
      <button>{isSubmitting ? "Submitting..." : "Sign up"}</button>
    </form>
  );
}

export default NewsletterSignup;
