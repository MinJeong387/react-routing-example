import { Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h2 id="dashboard">Dashboard</h2>
      <p>This is the dashboard page</p>
      <ul>
        <li>
          <a href="#profile">Profile for user 1004</a>
        </li>
        <li>
          <a href="#settings">Settings</a>
        </li>
      </ul>
      {/* 자식 라우트 렌더링 영역 */}
      <Outlet />

      {/* <!-- url : /dashboard/profile/1004 --> */}

      {/*<!-- url : /dashboard/settings -->*/}
    </div>
  );
}

export default Dashboard;
