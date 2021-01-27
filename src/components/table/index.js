import TableRow from '../table-row';
import './table.scss';

const Table = () => {
    return (
        <div className="overflow">
            <div className="asb-table">
                <TableRow header />
                <TableRow
                    name="Courtney Henry"
                    place="Lagos state"
                    address="775 Rolling Grreb Rd."
                    status={{
                        type: "none",
                        value: 2
                    }}
                    entries={{
                        count: 19,
                        text: "Homogenous"
                    }}
                    risk={{
                        type: "low",
                        text: "Low Risk"
                    }}
                />
            </div>
        </div>
    )
}

export default Table;