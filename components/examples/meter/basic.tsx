import { Meter, MeterLabel, MeterValue } from 'components/selia/meter';

export default function MeterBasicExample() {
  return (
    <Meter value={50} className="w-full">
      <MeterLabel>Storage</MeterLabel>
      <MeterValue />
    </Meter>
  );
}
