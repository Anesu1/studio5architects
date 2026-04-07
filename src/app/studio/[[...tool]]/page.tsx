import { redirect } from 'next/navigation';

// Redirect to the hosted Sanity Studio (manage.sanity.io or your project's studio URL)
// This avoids version conflicts with the embedded studio while keeping data fetching working
export default function StudioPage() {
  redirect(`https://studio5architects.sanity.studio`);
}
