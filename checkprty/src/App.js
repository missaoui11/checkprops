import Profile from './profile/Profile';
import profileImage from './profile/profileImage.png';

function App() {
  const handleName = (fullName) => {
    alert(`Profile user's name is ${fullName}`);
  };

  return (
    <div>
      <Profile fullName="ahmed" bio="Frontend Developer" profession="dvp" handleName={handleName}>
        <img  src={profileImage} alt="./profile" />
      </Profile>
    </div>
  );
}

export default App;

