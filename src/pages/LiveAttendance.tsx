import { Search, Bell, Plus, CheckCircle2, Clock, Coffee, UserX, Filter, Download, MoreVertical } from 'lucide-react';

const attendanceLog = [
  { id: 'EMP-001', name: 'Sarah Jenkins', email: 'sarah.j@company.com', dept: 'Sales', time: '08:55 AM', status: 'Present', avatar: 'https://i.pravatar.cc/150?u=sarah' },
  { id: 'EMP-042', name: 'Michael Chen', email: 'm.chen@company.com', dept: 'Engineering', time: '09:12 AM', status: 'Late', avatar: 'https://i.pravatar.cc/150?u=michael' },
  { id: 'EMP-103', name: 'Jessica Wu', email: 'jessica.w@company.com', dept: 'Design', time: '08:58 AM', status: 'Present', avatar: 'https://i.pravatar.cc/150?u=jessica' },
  { id: 'EMP-088', name: 'David Miller', email: 'david.m@company.com', dept: 'Support', time: '--:--', status: 'Absent', avatar: 'https://i.pravatar.cc/150?u=david' },
  { id: 'EMP-015', name: 'Emily Davis', email: 'emily.d@company.com', dept: 'Marketing', time: '09:00 AM', status: 'Present', avatar: 'https://i.pravatar.cc/150?u=emily' },
  { id: 'EMP-067', name: 'James Wilson', email: 'james.w@company.com', dept: 'Engineering', time: '08:45 AM', status: 'On Break', avatar: 'https://i.pravatar.cc/150?u=james' },
];

export default function LiveAttendance() {
  return (
    <div className="flex-1 flex flex-col h-full bg-white overflow-y-auto">
      <header className="bg-white border-b border-slate-200 px-8 py-5 flex justify-between items-center sticky top-0 z-20">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Live Attendance</h2>
          <p className="text-slate-500 text-sm mt-1">Real-time staff monitoring and status updates</p>
        </div>
        <div className="flex gap-4 items-center">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Search employee..." 
              className="pl-9 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-64 bg-slate-50"
            />
          </div>
          <button className="p-2 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors">
            <Bell className="w-5 h-5" />
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-semibold transition-all shadow-sm">
            <Plus className="w-4 h-4" />
            New Entry
          </button>
        </div>
      </header>

      <div className="p-8 max-w-7xl mx-auto w-full space-y-6">
        {/* Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between h-32">
            <div className="flex justify-between items-start">
              <span className="text-slate-500 text-sm font-medium">Total Present</span>
              <div className="p-1.5 rounded-md bg-emerald-50 text-emerald-600">
                <CheckCircle2 className="w-4 h-4" />
              </div>
            </div>
            <div>
              <span className="text-3xl font-bold text-slate-900">1,245</span>
              <span className="text-emerald-600 text-xs font-semibold ml-2">↑ 2.4%</span>
              <span className="text-slate-400 text-xs ml-1">vs yesterday</span>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between h-32">
            <div className="flex justify-between items-start">
              <span className="text-slate-500 text-sm font-medium">Late Arrival</span>
              <div className="p-1.5 rounded-md bg-amber-50 text-amber-600">
                <Clock className="w-4 h-4" />
              </div>
            </div>
            <div>
              <span className="text-3xl font-bold text-slate-900">34</span>
              <span className="text-amber-600 text-xs font-semibold ml-2">↑ 12%</span>
              <span className="text-slate-400 text-xs ml-1">vs yesterday</span>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between h-32">
            <div className="flex justify-between items-start">
              <span className="text-slate-500 text-sm font-medium">On Break</span>
              <div className="p-1.5 rounded-md bg-blue-50 text-blue-600">
                <Coffee className="w-4 h-4" />
              </div>
            </div>
            <div>
              <span className="text-3xl font-bold text-slate-900">128</span>
              <span className="text-emerald-600 text-xs font-semibold ml-2">↓ 5%</span>
              <span className="text-slate-400 text-xs ml-1">active now</span>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between h-32">
            <div className="flex justify-between items-start">
              <span className="text-slate-500 text-sm font-medium">Absent Today</span>
              <div className="p-1.5 rounded-md bg-red-50 text-red-600">
                <UserX className="w-4 h-4" />
              </div>
            </div>
            <div>
              <span className="text-3xl font-bold text-slate-900">56</span>
              <span className="text-slate-400 text-xs font-semibold ml-2">— 0%</span>
              <span className="text-slate-400 text-xs ml-1">vs yesterday</span>
            </div>
          </div>
        </div>

        {/* Heatmap Section */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-lg font-bold text-slate-900">Staff Presence Heatmap</h3>
              <p className="text-sm text-slate-500">Distribution over the last 24 hours</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                <span className="text-xs text-slate-500">High Traffic</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                <span className="text-xs text-slate-500">Low Traffic</span>
              </div>
              <select className="text-sm border border-slate-200 rounded-lg px-3 py-1.5 bg-white text-slate-700 outline-none">
                <option>Last 24 Hours</option>
              </select>
            </div>
          </div>
          
          <div className="h-48 flex items-end gap-2 w-full pt-4">
            {/* Mock Heatmap Bars */}
            {[10, 15, 5, 20, 60, 100, 95, 70, 80, 40, 20, 10].map((val, i) => (
              <div key={i} className="flex-1 flex flex-col justify-end h-full group">
                <div 
                  className={`w-full rounded-t-sm transition-all duration-300 ${
                    val > 80 ? 'bg-blue-600' : 
                    val > 50 ? 'bg-blue-400' : 
                    val > 20 ? 'bg-blue-200' : 'bg-slate-100'
                  }`}
                  style={{ height: `${val}%` }}
                ></div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-2 text-xs text-slate-400">
            <span>10:00</span>
          </div>
        </div>

        {/* Attendance Log Table */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-5 border-b border-slate-200 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <h3 className="text-lg font-bold text-slate-900">Attendance Log</h3>
              <div className="flex gap-2 text-sm">
                <button className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full font-medium">All</button>
                <button className="px-3 py-1 text-slate-500 hover:bg-slate-50 rounded-full font-medium">Present</button>
                <button className="px-3 py-1 text-slate-500 hover:bg-slate-50 rounded-full font-medium">Late</button>
                <button className="px-3 py-1 text-slate-500 hover:bg-slate-50 rounded-full font-medium">Absent</button>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="flex items-center gap-2 px-3 py-1.5 border border-slate-200 rounded-lg text-sm text-slate-600 hover:bg-slate-50">
                <Filter className="w-4 h-4" /> Filter
              </button>
              <button className="flex items-center gap-2 px-3 py-1.5 border border-slate-200 rounded-lg text-sm text-slate-600 hover:bg-slate-50">
                <Download className="w-4 h-4" /> Export
              </button>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-xs uppercase tracking-wider text-slate-500 font-semibold">
                  <th className="px-6 py-4">Employee</th>
                  <th className="px-6 py-4">ID</th>
                  <th className="px-6 py-4">Department</th>
                  <th className="px-6 py-4">Check-In Time</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {attendanceLog.map((log, i) => (
                  <tr key={i} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img src={log.avatar} alt={log.name} className="w-9 h-9 rounded-full object-cover" />
                        <div>
                          <p className="text-sm font-medium text-slate-900">{log.name}</p>
                          <p className="text-xs text-slate-500">{log.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-500">{log.id}</td>
                    <td className="px-6 py-4">
                      <span className="px-2.5 py-1 bg-slate-100 text-slate-600 rounded-md text-xs font-medium">{log.dept}</span>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-slate-900">{log.time}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium flex items-center gap-1.5 w-fit
                        ${log.status === 'Present' ? 'bg-emerald-100 text-emerald-700' : 
                          log.status === 'Late' ? 'bg-amber-100 text-amber-700' : 
                          log.status === 'Absent' ? 'bg-red-100 text-red-700' : 
                          'bg-blue-100 text-blue-700'}`}
                      >
                        <div className={`w-1.5 h-1.5 rounded-full 
                          ${log.status === 'Present' ? 'bg-emerald-500' : 
                            log.status === 'Late' ? 'bg-amber-500' : 
                            log.status === 'Absent' ? 'bg-red-500' : 
                            'bg-blue-500'}`}
                        ></div>
                        {log.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="p-1 text-slate-400 hover:text-slate-600 rounded-md hover:bg-slate-100">
                        <MoreVertical className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="p-4 border-t border-slate-200 flex justify-between items-center text-sm text-slate-500">
            <span>Showing 1 to 6 of 42 results</span>
            <div className="flex gap-2">
              <button className="px-3 py-1 border border-slate-200 rounded-md hover:bg-slate-50">Previous</button>
              <button className="px-3 py-1 border border-slate-200 rounded-md hover:bg-slate-50">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
