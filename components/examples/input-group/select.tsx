import { Input } from 'components/selia/input';
import { InputGroup, InputGroupAddon } from 'components/selia/input-group';
import {
  Select,
  SelectPopup,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectList,
} from 'components/selia/select';

export default function InputGroupSelectExample() {
  return (
    <InputGroup>
      <InputGroupAddon>
        <Select defaultValue="USD">
          <SelectTrigger>
            <SelectValue placeholder="USD" />
          </SelectTrigger>
          <SelectPopup className="max-lg:w-auto">
            <SelectList>
              <SelectItem value="USD">USD</SelectItem>
              <SelectItem value="EUR">EUR</SelectItem>
              <SelectItem value="GBP">GBP</SelectItem>
              <SelectItem value="JPY">JPY</SelectItem>
              <SelectItem value="KRW">KRW</SelectItem>
              <SelectItem value="CNY">CNY</SelectItem>
              <SelectItem value="INR">INR</SelectItem>
              <SelectItem value="BRL">BRL</SelectItem>
              <SelectItem value="ARS">ARS</SelectItem>
            </SelectList>
          </SelectPopup>
        </Select>
      </InputGroupAddon>
      <Input placeholder="Amount" />
    </InputGroup>
  );
}
