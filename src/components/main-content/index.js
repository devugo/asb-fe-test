import DivisionSummary from "../division-summary"
import ModuleHistory from "../module-history";
import Table from "../table";
import { MainContentContainer } from "./container";

import './main-content.scss';

const MainContent = () => {
    return (
       <MainContentContainer
            leftSide={
                <>
                <DivisionSummary />
                <ModuleHistory /> 
                </>
            }
            rightSide={
                <Table />
            }
       />
    )
}

export default MainContent;