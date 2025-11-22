import { Navbar } from 'components/navbar';
import { Outlet } from 'react-router';

export default function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
