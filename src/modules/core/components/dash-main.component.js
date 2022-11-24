import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { 
    ResponsiveContainer, 
    BarChart, 
    PieChart, 
    Area, 
    Bar, 
    XAxis, 
    YAxis, 
    Tooltip, 
    AreaChart, 
    CartesianGrid, 
    Pie, 
    LineChart, 
    Line, 
    Legend 
} from 'recharts';
import PieReChart, { PieGoogle } from '../../platform/view/recharts/components/piechart.component';
import { areaChartData } from '../../features/chart-data';
import PieChartComponent from '../../platform/view/recharts/components/piechart.component';
import Example from '../../platform/view/recharts/components/piechart.component';
import Logout from '../common/components/logout.component';

const DashBoardMain = () => {
    return (
        <main id="main-section">
            <header class="header">
                {/* header */}
                <Navbar bg="dark" variant="dark">
                    <Container className='container' >
                    <Navbar.Brand href="#home">Dashboard</Navbar.Brand>
                    <Nav className="ms-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Logout className="ms-auto" />
                    </Nav>
                    </Container>
                </Navbar>
            </header>

            <section class="dash-card">
               
                

                <div className="card-content" style={{display: "flex"}}><span style={{overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", width: "145px", display: "block"}}>Live Campaigns </span><span class="jss144">9</span></div>

                

                <div className="card-content" style={{display: "flex"}}><span style={{overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", width: "145px", display: "block"}}>Live Campaigns </span><span class="jss144">9</span></div>

                <div className="card-content" style={{display: "flex"}}><span style={{overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", width: "145px", display: "block"}}>Live Campaigns </span><span class="jss144">9</span></div>

                <div className="card-content" style={{display: "flex"}}><span style={{overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", width: "145px", display: "block"}}>Live Campaigns </span><span class="jss144">9</span></div>
                <div className="card-content" style={{display: "flex"}}><span style={{overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", width: "145px", display: "block"}}>Live Campaigns </span><span class="jss144">9</span></div>
                <div className="card-content" style={{display: "flex"}}><span style={{overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", width: "145px", display: "block"}}>Live Campaigns </span><span class="jss144">9</span></div>

            </section>

            <section class="project-status">
                <div class="project-content">
                    <div class="project-head">
                        <h4>Bar</h4>
                        <a href="" class="project-head-btn">See All</a>
                    </div>

                    <ResponsiveContainer width='100%' aspect={3}>
                <AreaChart
                    width={500}
                    height={400}
                    data={areaChartData}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="uv" stroke="red" fill="#144D43" />
                </AreaChart>
            </ResponsiveContainer>

                </div>

                <div class="project-content">
                    <div class="project-head">
                        <h4>Pie</h4>
                        <a href="_" class="project-head-btn">See All</a>
                        <Example />
                    </div>

                </div>

            </section>
        </main>
    );
}
 
export default DashBoardMain;