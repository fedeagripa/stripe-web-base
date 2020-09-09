# Feedback for React app

- I like the abstraction of the services - billingServices, paymentServices, etc.
- uses locales for certain strings
- good routing
- UI/UX could be better but it's ok for a take home
- Good encapsulation of components
- Easy to understand code, liked the folder layout
- Liked the simplicity of redux-tools, we used something similar in the past in a redux app
- No error handling for an incorrect card in the billing form 
- Note on state management: uses redux for the state management because the boilerplate uses it. 
  This project adds hooks around it, which is ok, which you can see in certain areas:
  - Migrating out from redux state to contexts and hooks
  - Really complex applications that deserves the also complex implementation
  - Similar to Omella's starter project boilerplate, which uses redux for general state management
  This is not wrong at all, and it is in fact something similar to what we have right now, but 
  on a brand new project and simple as this one, I would have gone purely with hooks and replace redux
  with contexts which plays nicely with hooks.
  For isntance, keep the redux usage for the framework or general app stuff while using context for business 
  logic. The project makes it seem like context aren't super familiar, but it still does a good job making
  use of completely valid tools to get the job done. (We just really like hooks/contexts)
- UI/UX was rough at first but improved greatly with additional commits the next day!
- Would have been nice to see some test coverage aside the general ones provided by the boilerplate

(Please also see `FEEDBACK.md` in PR for `stripe_base` project as well)
