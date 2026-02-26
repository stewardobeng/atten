import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

export default function Layout() {
  return (
    <div className="flex h-screen w-full bg-[#f5f7fa] text-slate-900 font-sans overflow-hidden">
      <Sidebar />
      <main className="flex-1 overflow-y-auto flex flex-col">
        <Outlet />
      </main>
    </div>
  );
}
