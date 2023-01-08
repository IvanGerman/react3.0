export const myHoc = (Component) => {

  const ContainerComponent = (props) => {
    console.log('its an example of the use of HOC, every Component on which we apply the HOC myHoc will get this console.log feature, this way we can supply every Component with some common data or logic and avoid doublicated code. HOC allows us to stamp ContainerComponents which provide their inner/child components with some common data or logic as written above');
    return <Component {...props} />
  };
  return ContainerComponent;

} 