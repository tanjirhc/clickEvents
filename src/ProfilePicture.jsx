
function ProfilePicture() {
  
    const imageUrl = './src/assets/tanjir.jpg';
    const handleClick = () => {
      console.log('Image clicked');
    }

    return(<img onClick={handleClick} src={imageUrl}></img>);
}   
export default ProfilePicture;