import { proxy, useSnapshot } from 'valtio';
import { devtools } from 'valtio/utils';

export const feedback = proxy({
  alert: <></>,
  loading: false,
});

devtools(feedback, 'Feedback');

// This component is wired up to the application layout.
//
// To launch an alert, modal, or other transient component,
// pass the JSX component directly into the feedback store.
//
export const Feedback = () => {
  const feedbackStore = useSnapshot(feedback);

  const Alert = feedbackStore.alert?.type;
  const children = feedbackStore.alert?.props.children;

  return <>{feedbackStore.alert && <Alert>{children}</Alert>}</>;
};
