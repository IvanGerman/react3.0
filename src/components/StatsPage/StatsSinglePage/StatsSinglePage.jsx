import { useParams } from "react-router-dom";


const StatsSinglePage = () => {

  const params = useParams ();
  console.log('params---',params);

  return (
    <div className="stats-single-page">
      StatsSinglePage
      <br/>
      {`${params.statsid}`}
    </div>
  )
}

export default StatsSinglePage;