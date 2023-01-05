import { Navigate, NavLink } from "react-router-dom";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const StatsPage = () => {

  const params = useParams();
  const location = useLocation();
  //const navigate = useNavigate();
  console.log('params---',params);
  console.log('location---',location);
  //console.log('navigate---',navigate);

  //return <Navigate to="/" replace={true} />

  function useNavigateComponent() {
    //alert('navigate')
    //const navigate = useNavigate();
    //navigate('/gamePage')
    return <Navigate to="/" replace={true} />
  };

  return (
    <div className="stats-page">
      StatsPage
      <div></div>
      <br/>
      <button onClick={useNavigateComponent}>Navigate Component</button>
      <br/><br/>
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