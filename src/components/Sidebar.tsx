import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Clock, Users, Calendar, Wallet, Settings, LogOut, BarChart3 } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function Sidebar() {
  const navItems = [
    { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
    { name: 'Live Attendance', path: '/live-attendance', icon: Clock },
    { name: 'Employees', path: '/employee', icon: Users },
    { name: 'Schedule', path: '/schedule', icon: Calendar },
    { name: 'Payroll', path: '/payroll', icon: Wallet },
    { name: 'Reports', path: '/reports', icon: BarChart3 },
    { name: 'Settings', path: '/settings', icon: Settings },
  ];

  return (
    <aside className="w-64 flex-shrink-0 border-r border-slate-200 bg-white flex flex-col justify-between h-full z-10">
      <div className="flex flex-col gap-4 p-4">
        <div className="flex gap-3 items-center mb-6 px-2">
          <div className="bg-gradient-to-tr from-emerald-500 to-emerald-700 rounded-full h-10 w-10 flex items-center justify-center text-white font-bold text-xs shadow-sm">
            AC
          </div>
          <div className="flex flex-col">
            <h1 className="text-slate-900 text-base font-semibold leading-tight">Acme Corp</h1>
            <p className="text-slate-500 text-xs font-medium">Enterprise Admin</p>
          </div>
        </div>
        <nav className="flex flex-col gap-1">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                cn(
                  'flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors group text-sm font-medium',
                  isActive
                    ? 'bg-emerald-50 text-emerald-700'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                )
              }
            >
              <item.icon className="w-5 h-5" />
              <span>{item.name}</span>
            </NavLink>
          ))}
        </nav>
      </div>
      <div className="p-4 border-t border-slate-200">
        <button className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-red-50 group transition-colors w-full text-left">
          <LogOut className="w-5 h-5 text-slate-500 group-hover:text-red-600 transition-colors" />
          <span className="text-slate-600 text-sm font-medium group-hover:text-red-600 transition-colors">Sign Out</span>
        </button>
      </div>
    </aside>
  );
}
