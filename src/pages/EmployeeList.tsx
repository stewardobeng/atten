import { Search, Plus, Filter, MoreHorizontal } from 'lucide-react';
import { Link } from 'react-router-dom';

const employees = [
  { id: 'EMP-001', name: 'Sarah Jenkins', role: 'Senior Sales Exec', dept: 'Sales', status: 'Active', avatar: 'https://i.pravatar.cc/150?u=sarah' },
  { id: 'EMP-042', name: 'Michael Chen', role: 'Frontend Developer', dept: 'Engineering', status: 'Active', avatar: 'https://i.pravatar.cc/150?u=michael' },
  { id: 'EMP-103', name: 'Jessica Wu', role: 'Product Designer', dept: 'Design', status: 'On Leave', avatar: 'https://i.pravatar.cc/150?u=jessica' },
  { id: 'EMP-088', name: 'David Miller', role: 'Support Specialist', dept: 'Support', status: 'Active', avatar: 'https://i.pravatar.cc/150?u=david' },
  { id: 'EMP-015', name: 'Emily Davis', role: 'Marketing Manager', dept: 'Marketing', status: 'Active', avatar: 'https://i.pravatar.cc/150?u=emily' },
];

export default function EmployeeList() {
  return (
    <div className="flex-1 flex flex-col h-full bg-[#f8fafc] overflow-y-auto">
      <header className="bg-white border-b border-slate-200 px-8 py-5 flex justify-between items-center sticky top-0 z-20 shadow-sm">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Employees</h2>
          <p className="text-slate-500 text-sm mt-1">Manage your team members and their profiles.</p>
        </div>
        <div className="flex gap-3 items-center">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Search employees..." 
              className="pl-9 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-64 bg-slate-50"
            />
          </div>
          <button className="p-2 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors">
            <Filter className="w-5 h-5" />
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-semibold transition-all shadow-sm">
            <Plus className="w-4 h-4" />
            Add Employee
          </button>
        </div>
      </header>

      <div className="p-8 max-w-7xl mx-auto w-full">
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-xs uppercase tracking-wider text-slate-500 font-semibold">
                  <th className="px-6 py-4">Employee</th>
                  <th className="px-6 py-4">ID</th>
                  <th className="px-6 py-4">Role</th>
                  <th className="px-6 py-4">Department</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {employees.map((emp, i) => (
                  <tr key={i} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4">
                      <Link to={`/employee/${emp.id}`} className="flex items-center gap-3 group">
                        <img src={emp.avatar} alt={emp.name} className="w-10 h-10 rounded-full object-cover border border-slate-200" />
                        <div>
                          <p className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{emp.name}</p>
                          <p className="text-xs text-slate-500">{emp.name.toLowerCase().replace(' ', '.')}@company.com</p>
                        </div>
                      </Link>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-slate-500">{emp.id}</td>
                    <td className="px-6 py-4 text-sm text-slate-700">{emp.role}</td>
                    <td className="px-6 py-4">
                      <span className="px-2.5 py-1 bg-slate-100 text-slate-600 rounded-md text-xs font-medium">{emp.dept}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium flex items-center gap-1.5 w-fit
                        ${emp.status === 'Active' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}
                      >
                        <div className={`w-1.5 h-1.5 rounded-full ${emp.status === 'Active' ? 'bg-emerald-500' : 'bg-amber-500'}`}></div>
                        {emp.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="p-1.5 text-slate-400 hover:text-slate-600 rounded-md hover:bg-slate-100 transition-colors">
                        <MoreHorizontal className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 border-t border-slate-200 flex justify-between items-center text-sm text-slate-500 bg-slate-50/50">
            <span>Showing 1 to 5 of 124 employees</span>
            <div className="flex gap-2">
              <button className="px-3 py-1.5 border border-slate-200 rounded-md hover:bg-slate-50 font-medium bg-white">Previous</button>
              <button className="px-3 py-1.5 border border-slate-200 rounded-md hover:bg-slate-50 font-medium bg-white">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
