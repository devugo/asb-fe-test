import DivisionSummary from "../division-summary"
import ModuleHistory from "../module-history";
import Table from "../table";

import './main-content.scss';

const MainContent = () => {
    return (
        <div className="main-content">
            <div className="asb-container">
                <div className="content left">
                    <DivisionSummary />
                    <ModuleHistory />
                </div>
                <div className="content right">
                    <Table />
                </div>
            </div>
        </div>
    )
}

export default MainContent;