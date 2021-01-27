import TableRow from '../table-row';
import './table.scss';

const Table = () => {
    return (
        <div className="asb-table">
            <TableRow header />
            <TableRow
                name="Courtney Henry"
                place="Lagos state"
                address="775 Rolling Grreb Rd."
                status={{
                    type: "none",
                    value: "No issues"
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
            <TableRow
                name="Darell Steward"
                place="Lagos state"
                address="7529 E. Pecar St."
                status={{
                    type: "warning",
                    value: "2 Issues found"
                }}
                entries={{
                    count: 10,
                    text: "Homogenous"
                }}
                risk={{
                    type: "mid",
                    text: "Mid Risk"
                }}
            />
            <TableRow
                name="Cody Fisher"
                place="Lagos state"
                address="3605 Parker Rd."
                status={{
                    type: "none",
                    value: "No Issues"
                }}
                entries={{
                    count: 8,
                    text: "Homogenous"
                }}
                risk={{
                    type: "mid",
                    text: "Mid Risk"
                }}
            />
            <TableRow
                name="Bessie Cooper"
                place="Lagos state"
                address="775 Rolling Green Rd."
                status={{
                    type: "warning",
                    value: "1 Issue found"
                }}
                entries={{
                    count: 12,
                    text: "Homogenous"
                }}
                risk={{
                    type: "high",
                    text: "High Risk"
                }}
            />
            <TableRow
                name="Annette Black"
                place="Lagos state"
                address="8080 Railroad St."
                status={{
                    type: "none",
                    value: "No Issues"
                }}
                entries={{
                    count: 13,
                    text: "Homogenous"
                }}
                risk={{
                    type: "low",
                    text: "Low Risk"
                }}
            />
            <TableRow
                name="Jenny Wilson"
                place="Lagos state"
                address="8080 Railroad St."
                status={{
                    type: "warning",
                    value: "5 Issues found"
                }}
                entries={{
                    count: 18,
                    text: "Homogenous"
                }}
                risk={{
                    type: "high",
                    text: "High Risk"
                }}
            />
            <TableRow
                name="Darlene Robertson"
                place="Lagos state"
                address="3890 Poplar Dr."
                status={{
                    type: "warning",
                    value: "2 Issues found"
                }}
                entries={{
                    count: 6,
                    text: "Homogenous"
                }}
                risk={{
                    type: "mid",
                    text: "Mid Risk"
                }}
            />
            <TableRow
                name="Ralph Edwards"
                place="Lagos state"
                address="8558 Green Rd."
                status={{
                    type: "none",
                    value: "No Issues"
                }}
                entries={{
                    count: 14,
                    text: "Homogenous"
                }}
                risk={{
                    type: "low",
                    text: "Low Risk"
                }}
            />
        </div>
    )
}

export default Table;