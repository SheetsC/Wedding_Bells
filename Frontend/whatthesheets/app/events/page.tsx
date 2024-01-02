import { permanentRedirect } from 'next/navigation';

export default function Page() {
  
  permanentRedirect('/events/1');

  
  return <div>Redirecting...</div>;
}
