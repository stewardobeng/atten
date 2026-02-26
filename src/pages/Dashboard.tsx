import { Calendar as CalendarIcon, Download, FileText, TrendingUp, TrendingDown, Users, Clock, AlertCircle, CheckCircle2 } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const attendanceData = [
  { day: '01', present: 80, absent: 20 },
  { day: '05', present: 85, absent: 15 },
  { day: '10', present: 82, absent: 18 },
  { day: '15', present: 88, absent: 12 },
  { day: '20', present: 90, absent: 10 },
  { day: '25', present: 85, absent: 15 },
  { day: '30', present: 92, absent: 8 },
];

export default function Dashboard() {
  return (
    <div className="flex-1 flex flex-col h-full bg-[#f8fafc] overflow-y-auto">
      <header className="bg-white border-b border-slate-200 px-8 py-5 flex justify-between items-center sticky top-0 z-20">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Reports & Analytics</h2>
          <p className="text-slate-500 text-sm mt-1">Monitor organizational health, attendance trends, and resource allocation.</p>
        </div>
        <div className="flex gap-3 items-center">
          <div className="flex items-center bg-white border border-slate-200 rounded-lg px-3 py-2 shadow-sm cursor-pointer hover:border-slate-300 transition-colors">
            <CalendarIcon className="w-4 h-4 text-slate-400 mr-2" />
            <span className="text-sm font-medium text-slate-700">Oct 01, 2023 - Oct 31, 2023</span>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition-all shadow-sm">
            <FileText className="w-4 h-4" />
            PDF
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-semibold transition-all shadow-sm">
            <Download className="w-4 h-4" />
            Export CSV
          </button>
        </div>
      </header>

      <div className="p-8 max-w-7xl mx-auto w-full space-y-6">
        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-blue-50 rounded-lg">
                <Users className="w-5 h-5 text-blue-600" />
              </div>
              <span className="flex items-center text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                <TrendingUp className="w-3 h-3 mr-1" />
                +2.4%
              </span>
            </div>
            <p className="text-slate-500 text-sm font-medium">Total Presence</p>
            <h3 className="text-2xl font-bold text-slate-900 mt-1">1,248</h3>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-amber-50 rounded-lg">
                <Clock className="w-5 h-5 text-amber-600" />
              </div>
              <span className="flex items-center text-xs font-medium text-red-600 bg-red-50 px-2 py-1 rounded-full">
                <TrendingUp className="w-3 h-3 mr-1" />
                +5.1%
              </span>
            </div>
            <p className="text-slate-500 text-sm font-medium">Avg Overtime</p>
            <h3 className="text-2xl font-bold text-slate-900 mt-1">2h 15m</h3>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-purple-50 rounded-lg">
                <AlertCircle className="w-5 h-5 text-purple-600" />
              </div>
              <span className="flex items-center text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                <TrendingDown className="w-3 h-3 mr-1" />
                -1.2%
              </span>
            </div>
            <p className="text-slate-500 text-sm font-medium">Absenteeism Rate</p>
            <h3 className="text-2xl font-bold text-slate-900 mt-1">3.2%</h3>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-teal-50 rounded-lg">
                <CheckCircle2 className="w-5 h-5 text-teal-600" />
              </div>
              <span className="flex items-center text-xs font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded-full">
                0.0%
              </span>
            </div>
            <p className="text-slate-500 text-sm font-medium">On-Time Arrival</p>
            <h3 className="text-2xl font-bold text-slate-900 mt-1">94.8%</h3>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-slate-900">Attendance Trends</h3>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  <span className="text-xs text-slate-500">Present</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                  <span className="text-xs text-slate-500">Absent</span>
                </div>
              </div>
            </div>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={attendanceData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorPresent" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                  <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                  <Tooltip />
                  <Area type="monotone" dataKey="present" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorPresent)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col">
            <h3 className="text-lg font-bold text-slate-900 mb-6">Department Presence</h3>
            <div className="flex-1 flex items-center justify-center relative">
              <div className="relative w-48 h-48">
                <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="40" fill="transparent" stroke="#f1f5f9" strokeWidth="8" />
                  <circle cx="50" cy="50" r="40" fill="transparent" stroke="#3b82f6" strokeWidth="8" strokeDasharray="180 251.2" strokeDashoffset="0" strokeLinecap="round" />
                  <circle cx="50" cy="50" r="40" fill="transparent" stroke="#f59e0b" strokeWidth="8" strokeDasharray="40 251.2" strokeDashoffset="-185" strokeLinecap="round" />
                  <circle cx="50" cy="50" r="40" fill="transparent" stroke="#10b981" strokeWidth="8" strokeDasharray="20 251.2" strokeDashoffset="-230" strokeLinecap="round" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl font-black text-slate-900">92%</span>
                  <span className="text-xs text-slate-500 font-medium uppercase tracking-wider">Overall</span>
                </div>
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  <span className="text-slate-600">Engineering</span>
                </div>
                <span className="font-bold text-slate-900">72%</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                  <span className="text-slate-600">Sales & Marketing</span>
                </div>
                <span className="font-bold text-slate-900">16%</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span className="text-slate-600">Human Resources</span>
                </div>
                <span className="font-bold text-slate-900">8%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
