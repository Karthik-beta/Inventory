import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from 'recharts'

const data = Array.from({ length: 12 }, (_, index) => {
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  return {
    name: monthNames[index],
    stockIn: Math.floor(Math.random() * 3000) + 500, // Stock added
    stockOut: Math.floor(Math.random() * 2000) + 300, // Stock sold
  }
})

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
        {/* <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" /> */}
        <XAxis
          dataKey="name"
          stroke="rgb(107 114 128)" /* Tailwind gray-500 */
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="rgb(107 114 128)" /* Tailwind gray-500 */
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value} units`}
        />
        <Tooltip
          formatter={(value) => `${value} units`}
          contentStyle={{ backgroundColor: '#ffffff', borderRadius: '8px', border: '1px solid #e0e0e0' }}
        />
        <Legend />
        <Bar
          dataKey="stockIn"
          fill="rgb(34 197 94)" /* Tailwind emerald-500 */
          radius={[4, 4, 0, 0]}
          name="Stock In"
        />
        <Bar
          dataKey="stockOut"
          fill="rgb(239 68 68)" /* Tailwind red-500 */
          radius={[4, 4, 0, 0]}
          name="Stock Out"
        />
      </BarChart>
    </ResponsiveContainer>
  )
}
