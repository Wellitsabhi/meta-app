export default function UserProfile({ params }) {
    const { username } = params;
    
    // Fetch or generate skills based on the username (mock data here)
    const skills = ['JavaScript', 'React', 'Next.js'];
  
    return (
      <div>
        <h1>{username} &apos;s Profile</h1>
        <h2>Skills:</h2>
        <ul>
          {skills.map(skill => <li key={skill}>{skill}</li>)}
        </ul>
      </div>
    );
  }
  

// Function to dynamically generate metadata
export async function generateMetadata({ params }) {
    const { username } = params;
  
    // Example logic to generate a dynamic og:image URL based on user data
    const ogImageUrl = `https://jsonplaceholder.typicode.com/${username}`;
  
    return {
      title: `${username}'s Profile`,
      description: `${username}'s profile page with dynamic metadata`,
      openGraph: {
        title: `${username}'s Profile`,
        description: `${username}'s profile page`,
        images: [
          {
            url: ogImageUrl,
            width: 800,
            height: 600,
            alt: `${username}'s Profile Image`,
          },
        ],
      },
    };
  }