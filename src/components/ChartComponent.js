import Paper from '@material-ui/core/Paper';
import {
    ArgumentAxis,
    ValueAxis,
    Chart,
    LineSeries,
} from '@devexpress/dx-react-chart-material-ui';
import '@devexpress/dx-react-chart-bootstrap4/dist/dx-react-chart-bootstrap4.css';
const data = [
    { argument: 1, value: 10 },
    { argument: 2, value: 20 },
];

const ChartComponent = ({text,title}) => {
    return(
        <Paper>
            <div className="d-flex align-items-center">
                <p className='mb-0'>{text}</p>
                <h6 className='text-pink mb-0'>{title}</h6>
            </div>
            <Chart data={data}>
                <ArgumentAxis />
                <ValueAxis />

                <LineSeries valueField="value" argumentField="argument" />
            </Chart>
        </Paper>
    )
}
export default ChartComponent