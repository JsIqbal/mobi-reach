import DashBoardMain from "./dash-main.component";
import NavBar from "./common.nav-bar.component";

const Dashboard = () => {
    return (
        <section id="main-container">
            <NavBar />
            <DashBoardMain />
        </section>
    );
}

export default Dashboard;