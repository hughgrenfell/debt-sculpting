import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Scatter,
    ResponsiveContainer,
  } from 'recharts';

import { moneyFormatter } from '../util/Calculator';

export default function Results({ projectState }) {

    const dscr = 1.45;

    const data = [];

    projectState.cashFlows.map((element) => 
        data.push({
            name: element.title,
            uv: Math.round(element.amount / dscr),
            cashFlows: element.amount,
            cnt: Math.round(element.amount / dscr),
        }))

    return (
        <div className="h-full w-full">
            <h2>Results</h2>
            <table>
                <tbody>
                    <tr>
                        <th></th>
                        {projectState.cashFlows.map((item) => {
                            return <th key={ item.id }>{item.title}</th> 
                        })}
                    </tr>
                    <tr>
                        <td>Value:</td>
                        {projectState.cashFlows.map((item) => {
                            return <th key={ item.id }>{moneyFormatter.format(item.amount)}</th> 
                        })}
                    </tr>
                    <tr>
                        <td>Date:</td>
                        {projectState.cashFlows.map((item) => {
                            return <th key={ item.id }>{item.date}</th> 
                        })}
                    </tr>
                </tbody>
            </table>
            <div className="w-full h-4/6">
                <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart
                    width={500}
                    height={400}
                    data={data}
                    margin={{
                        top: 20,
                        right: 20,
                        bottom: 20,
                        left: 20,
                    }}
                    >
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis dataKey="name" scale="band" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="cashFlows" label="Cash Flows" barSize={20} fill="#413ea0" />
                    <Line type="monotone" dataKey="uv" stroke="#ff7300" />
                    <Scatter dataKey="cnt" fill="red" />
                    </ComposedChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}