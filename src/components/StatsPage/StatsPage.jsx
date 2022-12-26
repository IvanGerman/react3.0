import { NavLink } from "react-router-dom";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const StatsPage = () => {

  const params = useParams();
  const location = useLocation();
  //const navigate = useNavigate();
  console.log('params---',params);
  console.log('location---',location);
  //console.log('navigate---',navigate);

  return (
    <div className="stats-page">
      StatsPage
      <div></div>
      <br/>
      <NavLink to = {'/statssingle/statsid1'}>
        <div>statsid11111</div>
      </NavLink>
      <br/>
      <NavLink to = {'/statssingle/statsid2'}>
        <div>statsid22222</div>
      </NavLink>
    </div>
  )
}

export default StatsPage;