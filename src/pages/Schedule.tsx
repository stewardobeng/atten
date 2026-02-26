import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, Plus, Filter, Clock, Users, User, LayoutGrid } from 'lucide-react';

const scheduleData = [
  { id: 1, name: 'Sarah Jenkins', role: 'Sales', shift: '09:00 AM - 05:00 PM', status: 'Scheduled', type: 'Office', avatar: 'https://i.pravatar.cc/150?u=sarah' },
  { id: 2, name: 'Michael Chen', role: 'Engineering', shift: '10:00 AM - 06:00 PM', status: 'Scheduled', type: 'Remote', avatar: 'https://i.pravatar.cc/150?u=michael' },
  { id: 3, name: 'Jessica Wu', role: 'Design', shift: '08:00 AM - 04:00 PM', status: 'Time Off', type: 'Leave', avatar: 'https://i.pravatar.cc/150?u=jessica' },
  { id: 4, name: 'David Miller', role: 'Support', shift: '12:00 PM - 08:00 PM', status: 'Scheduled', type: 'Office', avatar: 'https://i.pravatar.cc/150?u=david' },
  { id: 5, name: 'Emily Davis', role: 'Marketing', shift: '09:00 AM - 05:00 PM', status: 'Scheduled', type: 'Hybrid', avatar: 'https://i.pravatar.cc/150?u=emily' },
];

const days = ['Mon, 23', 'Tue, 24', 'Wed, 25', 'Thu, 26', 'Fri, 27', 'Sat, 28', 'Sun, 29'];

export default function Schedule() {
  return (
    <div className="flex-1 flex flex-col h-full bg-[#f8fafc] overflow-y-auto">
      <header className="bg-white border-b border-slate-200 px-8 py-5 flex justify-between items-center sticky top-0 z-20 shadow-sm">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Shift Planning & Schedule</h2>
          <p className="text-slate-500 text-sm mt-1">Manage team shifts, availability, and time off requests.</p>
        </div>
        <div className="flex gap-3">
          <div className="flex items-center bg-white border border-slate-200 rounded-lg p-1 shadow-sm">
            <button className="px-3 py-1.5 text-sm font-medium rounded-md bg-slate-100 text-slate-900">Week</button>
            <button className="px-3 py-1.5 text-sm font-medium rounded-md text-slate-500 hover:text-slate-900 hover:bg-slate-50">Month</button>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-semibold transition-all shadow-sm">
            <Plus className="w-4 h-4" />
            Add Shift
          </button>
        </div>
      </header>

      <div className="p-8 max-w-7xl mx-auto w-full space-y-6">
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden p-5 flex justify-between items-center mb-6">
          <div className="flex items-center gap-4">
            <button className="p-1.5 hover:bg-slate-100 rounded-md text-slate-500 transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              <CalendarIcon className="w-5 h-5 text-slate-400" />
              <h3 className="text-lg font-bold text-slate-900">October 23 - 29, 2023</h3>
            </div>
            <button className="p-1.5 hover:bg-slate-100 rounded-md text-slate-500 transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          <div className="flex gap-2 text-sm">
            <button className="flex items-center gap-2 px-3 py-1.5 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50">
              <Filter className="w-4 h-4" /> Filters
            </button>
            <button className="flex items-center gap-2 px-3 py-1.5 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50">
              <LayoutGrid className="w-4 h-4" /> View Options
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[1000px]">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="px-6 py-4 w-64 border-r border-slate-200 z-10 sticky left-0 bg-slate-50">
                    <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-slate-500 font-semibold">
                      <Users className="w-4 h-4" />
                      Employee
                    </div>
                  </th>
                  {days.map((day, ix) => (
                    <th key={ix} className="px-4 py-4 min-w-[140px] text-center">
                      <div className="text-sm font-bold text-slate-900">{day.split(', ')[0]}</div>
                      <div className="text-xs text-slate-500 mt-0.5">{day.split(', ')[1]}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {scheduleData.map((emp, i) => (
                  <tr key={i} className="hover:bg-slate-50/50 transition-colors group">
                    <td className="px-6 py-4 border-r border-slate-200 bg-white group-hover:bg-slate-50/50 sticky left-0 z-10 transition-colors">
                      <div className="flex items-center gap-3">
                        <img src={emp.avatar} alt={emp.name} className="w-9 h-9 rounded-full object-cover border border-slate-100" />
                        <div>
                          <p className="text-sm font-semibold text-slate-900 truncate max-w-[140px]">{emp.name}</p>
                          <p className="text-xs text-slate-500">{emp.role}</p>
                        </div>
                      </div>
                    </td>
                    {days.map((_, dayIx) => {
                      const isWeekend = dayIx >= 5;
                      const hasShift = !isWeekend && (emp.status !== 'Time Off' || dayIx !== 2);
                      const isTimeOff = emp.status === 'Time Off' && dayIx === 2;

                      return (
                        <td key={dayIx} className={`p-2 border-r border-slate-100 last:border-r-0 ${isWeekend ? 'bg-slate-50/50' : ''}`}>
                          {hasShift ? (
                            <div className={`p-2 rounded-lg border text-xs flex flex-col gap-1 transition-all cursor-pointer hover:shadow-sm
                                ${emp.type === 'Remote' ? 'bg-purple-50 border-purple-100 hover:border-purple-200' : 
                                  emp.type === 'Hybrid' ? 'bg-blue-50 border-blue-100 hover:border-blue-200' : 
                                  'bg-emerald-50 border-emerald-100 hover:border-emerald-200'}`}
                            >
                              <span className="font-semibold text-slate-700">{emp.shift}</span>
                              <span className={`px-1.5 py-0.5 rounded-sm w-fit
                                ${emp.type === 'Remote' ? 'bg-purple-100 text-purple-700' : 
                                  emp.type === 'Hybrid' ? 'bg-blue-100 text-blue-700' : 
                                  'bg-emerald-100 text-emerald-700'}`}
                              >
                                {emp.type}
                              </span>
                            </div>
                          ) : isTimeOff ? (
                            <div className="p-2 rounded-lg border border-amber-200 bg-amber-50 text-xs flex flex-col gap-1">
                              <span className="font-semibold text-amber-700">Time Off</span>
                              <span className="text-amber-600/80">Approved</span>
                            </div>
                          ) : (
                            <div className="h-full w-full min-h-[50px] rounded-lg border border-dashed border-transparent hover:border-slate-300 flex items-center justify-center transition-colors group/cell cursor-pointer">
                                <Plus className="w-4 h-4 text-slate-300 opacity-0 group-hover/cell:opacity-100 transition-opacity" />
                            </div>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
