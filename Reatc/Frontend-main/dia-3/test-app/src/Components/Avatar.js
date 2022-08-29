function Avatar(props) {
  const { firstName, image } = props;
  return <img src={image} alt={`Avatar de ${firstName}`} />;
}

export default Avatar;
