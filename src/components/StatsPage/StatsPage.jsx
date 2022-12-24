import { NavLink } from "react-router-dom";

const StatsPage = () => {
  return (
    <div className="stats-page">
      StatsPage
      <div></div>
      <br/>
      <NavLink to = {'/statspage/statsid11111'}>
        <div>statsid11111</div>
      </NavLink>
      <br/>
      <NavLink to = {'/statspage/statsid22222'}>
        <div>statsid22222</div>
      </NavLink>
    </div>
  )
}

export default StatsPage;