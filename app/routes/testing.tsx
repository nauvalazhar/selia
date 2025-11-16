import { Link } from 'react-router';

export async function loader() {
  console.log(process.cwd());
  return {
    message: 'Hello, world!',
  };
}

export default function Testing() {
  return (
    <div>
      Testing
      <Link to="/testing/nested">Nested</Link>
    </div>
  );
}
