import ModuleHistoryIcon from '../../images/icons/module-history.svg';
import './module-history.scss';

const ModuleHistory = () => {
    return (
        <div className="module-history asb-card">
            <div className="card-body">
                <div className="title">
                    <div className="icon">
                        <img src={ModuleHistoryIcon} alt="icon" />
                    </div>
                    <span>Module History</span>
                </div>
                <div className="list-items">
                    <div className="line">
                        <div className="circle"></div>
                        <div className="circle"></div>
                        <div className="circle"></div>
                    </div>
                    <div className="items">
                        <div className="item">
                            <div className="name">
                                <p>Searched “Journal Entries” on Division module</p>
                            </div>
                            <div className="footer">
                                <p>22:10 15/09/2020</p>
                                <span className="dot"></span>
                                <p>Web</p>
                            </div>
                        </div>

                        <div className="item">
                            <div className="name">
                                <p>Searched “Journal Entries” on Division module</p>
                            </div>
                            <div className="footer">
                                <p>22:10 15/09/2020</p>
                                <span className="dot"></span>
                                <p>Web</p>
                            </div>
                        </div>

                        <div className="item">
                            <div className="name">
                                <p>Searched “Journal Entries” on Division module</p>
                            </div>
                            <div className="footer">
                                <p>22:10 15/09/2020</p>
                                <span className="dot"></span>
                                <p>Web</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModuleHistory;