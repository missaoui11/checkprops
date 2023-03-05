import PropTypes from 'prop-types';

const Profile = ({ fullName, bio, profession, handleName, children }) => {
  return (
    <div style={{ backgroundColor: 'lightblue', padding: '20px', textAlign: 'center' }}>
      <img src={children} alt="profile" style={{ width: '200px', borderRadius: '50%' }} />
      <h2 style={{ color: 'white' }}>Name: {fullName}</h2>
      <p style={{ color: 'white' }}>Bio: {bio}</p>
      <p style={{ color: 'white' }}>Profession: {profession}</p>
      <button onClick={() => handleName(fullName)}>Click Me</button>
    </div>
  );
};

Profile.propTypes = {
  fullName: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
  handleName: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

Profile.defaultProps = {
  fullName: 'ahmed',
  bio: 'No bio available',
  profession: 'No profession available',
};

export default Profile;

