import SummaryCard from '../../components/summary-card';

import './summary.scss';

const Summary = () => {
    return (
        <div className="summary">
            <div className="asb-container">
                <div className="content">
                    <div className="asb-row">
                        <SummaryCard 
                            type="Ongoing metric"
                            number={31454}
                        />
                        <SummaryCard 
                            type="Past metric"
                            number={2344}
                        />
                        <SummaryCard 
                           type="Missed metric"
                           number={14224}
                       />
                       <SummaryCard 
                          type="Failed metric"
                          number={635}
                      />
                      <SummaryCard 
                         type="Pending metric"
                         number={11334}
                     />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Summary;