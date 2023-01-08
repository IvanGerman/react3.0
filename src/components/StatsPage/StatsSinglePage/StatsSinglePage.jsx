import { useParams } from "react-router-dom";
import { myHoc } from "../../../hoc/myHoc";


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

const StatsSinglePageAfterHOCuse = myHoc(StatsSinglePage);

export default StatsSinglePageAfterHOCuse;
//export default StatsSinglePage;