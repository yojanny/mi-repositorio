function ShowChildren(props) {
  console.log(props);
  return (
    <div className="show-children">
      <h4>{props.children}</h4>
    </div>
  );
}

export default ShowChildren;
