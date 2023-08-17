// Some async function to fetch user data
function fetchUserData(userId) {
  return fetch(`/api/users/${userId}`).then(res => res.json());
}

// Create the fetcher
const userDataFetcher = createFetcher(() => fetchUserData(123));

function UserProfile() {
  // This will either:
  // 1. "Suspend" and cause the nearest Suspense boundary to show a fallback
  // 2. Throw an error, which could be caught by an error boundary
  // 3. Return the user data
  const user = userDataFetcher.read();

  return <div>{user.name}</div>;
}

function App() {
  return (
      <Suspense fallback={<div>Loading...</div>}>
          <UserProfile />
      </Suspense>
  );
}
