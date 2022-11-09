const StartPage = (props) => { 
  return (
    <div>
      StartPage
      <p>{props.startPageData[0].key1}</p>
      <p>{props.startPageData[1].key2}</p>
    </div>
  )
}

export default StartPage;