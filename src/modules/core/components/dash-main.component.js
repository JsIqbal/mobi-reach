const DashBoardMain = () => {
    return (
        <main id="main-section">
            <header class="header">
                {/* header */}
                <div style={{background:"red" ,width:"100%" ,height:"30px"}}></div>
            </header>

            <section class="dash-card">
                <div class="card-content">
                    <div class="status">
                        <h5>130</h5>
                        <span>Customers</span>
                    </div>
                    
                    <div class="card-icon">
                        <i class="fas fa-file-invoice-dollar"></i>
                    </div>

                </div>

                <div class="card-content">
                    <div class="status">
                        <h5>250</h5>
                        <span>Projects</span>
                    </div>
                    
                    <div class="card-icon">
                        <i class="fas fa-file-invoice-dollar"></i>
                    </div>

                </div>

                <div class="card-content">
                    <div class="status">
                        <h5>155</h5>
                        <span>Order</span>
                    </div>
                    
                    <div class="card-icon">
                        <i class="fas fa-file-invoice-dollar"></i>
                    </div>

                </div>

                <div class="card-content">
                    <div class="status">
                        <h5>100k</h5>
                        <span>Income</span>
                    </div>
                    
                    <div class="card-icon">
                        <i class="fas fa-file-invoice-dollar"></i>
                    </div>

                </div>

            </section>

            <section class="project-status">
                <div class="project-content">
                    <div class="project-head">
                        <h4>Reccent Project</h4>
                        <a href="" class="project-head-btn">See All</a>
                    </div>

                    <table class="project-table">
                        <thead>
                            <tr>
                                <td>Project Title</td>
                                <td>Department</td>
                                <td>Status</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Web Devlopment</td>
                                <td>Devlopment Team</td>
                                <td>
                                    <div class="td-status review"></div>
                                    Review
                                </td>
                            </tr>

                            <tr>
                                <td>UI/UX Design</td>
                                <td>UI Team</td>
                                <td>
                                    <div class="td-status progress"></div>
                                    In Progress
                                </td>
                            </tr>

                            <tr>
                                <td>App Devlopment</td>
                                <td>Application Team</td>
                                <td>
                                    <div class="td-status pending"></div>
                                    Pending
                                </td>
                            </tr>

                            <tr>
                                <td>Web Devlopment</td>
                                <td>Devlopment Team</td>
                                <td>
                                    <div class="td-status review"></div>
                                    Review
                                </td>
                            </tr>

                            <tr>
                                <td>UI/UX Design</td>
                                <td>UI Team</td>
                                <td>
                                    <div class="td-status progress"></div>
                                    In Progress
                                </td>
                            </tr>

                            <tr>
                                <td>App Devlopment</td>
                                <td>Application Team</td>
                                <td>
                                    <div class="td-status pending"></div>
                                    Pending
                                </td>
                            </tr>

                            <tr>
                                <td>Web Devlopment</td>
                                <td>Devlopment Team</td>
                                <td>
                                    <div class="td-status review"></div>
                                    Review
                                </td>
                            </tr>

                            <tr>
                                <td>UI/UX Design</td>
                                <td>UI Team</td>
                                <td>
                                    <div class="td-status progress"></div>
                                    In Progress
                                </td>
                            </tr>

                            <tr>
                                <td>App Devlopment</td>
                                <td>Application Team</td>
                                <td>
                                    <div class="td-status pending"></div>
                                    Pending
                                </td>
                            </tr>

                            <tr>
                                <td>UI/UX Design</td>
                                <td>UI Team</td>
                                <td>
                                    <div class="td-status progress"></div>
                                    In Progress
                                </td>
                            </tr>

                            <tr>
                                <td>Web Devlopment</td>
                                <td>Devlopment Team</td>
                                <td>
                                    <div class="td-status review"></div>
                                    Review
                                </td>
                            </tr>

                        </tbody>
                    </table>

                </div>

                <div class="project-content">
                    <div class="project-head">
                        <h4>All Customers</h4>
                        <a href="_" class="project-head-btn">See All</a>
                    </div>

                </div>

            </section>
        </main>
    );
}
 
export default DashBoardMain;