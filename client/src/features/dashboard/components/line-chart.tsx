import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';

// Generate dynamic demo data
const generateDemoData = () => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
  return months.map((month) => ({
    month,
    stock: Math.floor(Math.random() * 500) + 500, // Random stock between 500 and 1000
    sold: Math.floor(Math.random() * 400) + 300, // Random sold between 300 and 700
  }));
};

const data = generateDemoData();

export function LineChartComponent() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data}>
        <XAxis dataKey="month" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="stock" stroke="#8884d8" strokeWidth={2} dot={{ r: 4 }} />
        <Line type="monotone" dataKey="sold" stroke="#82ca9d" strokeWidth={2} dot={{ r: 4 }} />
      </LineChart>
    </ResponsiveContainer>
  );
}