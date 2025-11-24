import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  CardHeaderAction,
} from 'components/selia/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectList,
  SelectTrigger,
  SelectValue,
} from 'components/selia/select';
import { cn } from 'lib/utils';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { data } from './data';

export function Chart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Sales</CardTitle>
        <CardHeaderAction>
          <Select defaultValue="Last Week">
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectList>
                <SelectItem value="Last Week">Last Week</SelectItem>
                <SelectItem value="Last Month">Last Month</SelectItem>
                <SelectItem value="Last Year">Last Year</SelectItem>
              </SelectList>
            </SelectContent>
          </Select>
        </CardHeaderAction>
      </CardHeader>
      <CardBody>
        <div
          className={cn(
            'w-full h-[200px] md:h-[480px] [&_*]:outline-none',
            '[&_.recharts-cartesian-axis-tick-value]:text-sm [&_.recharts-cartesian-axis-tick-value]:fill-dimmed',
          )}
        >
          <ResponsiveContainer>
            <AreaChart
              data={data}
              margin={{
                top: 8,
                right: 0,
                left: 20,
                bottom: 0,
              }}
            >
              <defs>
                <linearGradient id="colorSeries1" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#60a5fa" stopOpacity={0.38} />
                  <stop offset="95%" stopColor="#60a5fa" stopOpacity={0.08} />
                </linearGradient>
                <linearGradient id="colorSeries2" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="var(--color-primary)"
                    stopOpacity={0.25}
                  />
                  <stop
                    offset="95%"
                    stopColor="var(--color-primary)"
                    stopOpacity={0.07}
                  />
                </linearGradient>
              </defs>
              <CartesianGrid vertical={false} stroke="var(--color-separator)" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} />
              <YAxis axisLine={false} width={32} tickLine={false} />
              <Tooltip
                contentStyle={{
                  borderRadius: 'var(--radius)',
                  boxShadow: '0 3px 8px rgba(0,0,0,0.08)',
                  background: 'var(--color-popover)',
                  border: 'none',
                }}
                itemStyle={{
                  color: 'var(--color-muted)',
                  fontSize: 'var(--text-sm)',
                  display: 'flex',
                }}
                labelStyle={{
                  color: 'var(--color-foreground)',
                  fontSize: 'var(--text-sm)',
                  fontWeight: 600,
                  marginBottom: 4,
                }}
                cursor={false}
              />
              <Area
                type="monotone"
                dataKey="orders"
                name="Orders"
                stroke="var(--color-primary)"
                fillOpacity={1}
                fill="url(#colorSeries2)"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardBody>
    </Card>
  );
}
