import { Download, RefreshCw, TrendingUp, Clock, MinusCircle, FileCheck, Search, Filter, Edit, Settings, CheckCircle2, AlertCircle } from 'lucide-react';

const payrollData = [
  { id: '#8832', name: 'Marcus Johnson', role: 'Senior Developer', hours: '84.5 hrs', overtime: '4.5 hrs', deductions: '$0.00', status: 'Verified', avatar: 'https://i.pravatar.cc/150?u=marcus' },
  { id: '#8841', name: 'Sarah Connor', role: 'Product Manager', hours: '80.0 hrs', overtime: '0 hrs', deductions: '-$45.00', status: 'Ready', avatar: 'https://i.pravatar.cc/150?u=sarah' },
  { id: '#9021', name: 'David Chen', role: 'UX Designer', hours: '78.5 hrs', overtime: '0 hrs', deductions: '$0.00', status: 'Pending', avatar: 'https://i.pravatar.cc/150?u=david' },
  { id: '#9105', name: 'Alex Morgan', role: 'QA Engineer', hours: '82.0 hrs', overtime: '2.0 hrs', deductions: '$0.00', status: 'Verified', avatar: 'https://i.pravatar.cc/150?u=alex' },
];

export default function Payroll() {
  return (
    <div className="flex-1 flex flex-col h-full bg-[#f8fafc] overflow-y-auto">
      <header className="bg-white border-b border-slate-200 px-8 py-5 flex justify-between items-center sticky top-0 z-20 shadow-sm">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Payroll Integration & Export</h2>
          <p className="text-slate-500 text-sm mt-1">Review billable hours and sync with your payroll provider.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition-all shadow-sm">
            <Download className="w-4 h-4" />
            Export CSV
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg text-sm font-bold transition-all shadow-sm">
            <RefreshCw className="w-4 h-4" />
            Sync with Payroll
          </button>
        </div>
      </header>

      <div className="p-8 max-w-7xl mx-auto w-full space-y-8">
        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between h-32">
            <div className="flex justify-between items-start">
              <span className="text-slate-500 text-sm font-medium">Total Billable Hours</span>
              <div className="p-1.5 rounded-md bg-emerald-50 text-emerald-600">
                <TrendingUp className="w-4 h-4" />
              </div>
            </div>
            <div>
              <span className="text-3xl font-bold text-slate-900">12,450</span>
              <span className="text-emerald-600 text-xs font-semibold ml-2">+2.5%</span>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between h-32">
            <div className="flex justify-between items-start">
              <span className="text-slate-500 text-sm font-medium">Overtime Hours</span>
              <div className="p-1.5 rounded-md bg-amber-50 text-amber-600">
                <Clock className="w-4 h-4" />
              </div>
            </div>
            <div>
              <span className="text-3xl font-bold text-slate-900">450</span>
              <span className="text-amber-600 text-xs font-semibold ml-2">+1.2%</span>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between h-32">
            <div className="flex justify-between items-start">
              <span className="text-slate-500 text-sm font-medium">Total Deductions</span>
              <div className="p-1.5 rounded-md bg-red-50 text-red-600">
                <MinusCircle className="w-4 h-4" />
              </div>
            </div>
            <div>
              <span className="text-3xl font-bold text-slate-900">$1,240</span>
              <span className="text-red-600 text-xs font-semibold ml-2">-0.5%</span>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between h-32">
            <div className="flex justify-between items-start">
              <span className="text-slate-500 text-sm font-medium">Pending Verification</span>
              <div className="p-1.5 rounded-md bg-blue-50 text-blue-600">
                <FileCheck className="w-4 h-4" />
              </div>
            </div>
            <div>
              <span className="text-3xl font-bold text-slate-900">5</span>
              <span className="text-slate-500 text-xs font-normal ml-2">Employees</span>
            </div>
          </div>
        </div>

        {/* Data Table */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
          <div className="p-5 border-b border-slate-200 flex justify-between items-center bg-slate-50/50">
            <div className="flex items-center gap-4">
              <h3 className="text-lg font-semibold text-slate-900">Payroll Period: Oct 1 - Oct 15</h3>
              <span className="px-2 py-1 rounded-md bg-amber-100 text-amber-800 text-xs font-medium border border-amber-200">Processing</span>
            </div>
            <div className="flex gap-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                <input 
                  type="text" 
                  placeholder="Search employee..." 
                  className="pl-9 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 w-64"
                />
              </div>
              <button className="p-2 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors">
                <Filter className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-100 text-xs uppercase tracking-wider text-slate-500 font-semibold">
                  <th className="px-6 py-4 w-12">
                    <input type="checkbox" className="rounded border-slate-300 text-emerald-500 focus:ring-emerald-500 h-4 w-4 cursor-pointer" />
                  </th>
                  <th className="px-6 py-4">Employee</th>
                  <th className="px-6 py-4">Role</th>
                  <th className="px-6 py-4 text-right">Billable Hours</th>
                  <th className="px-6 py-4 text-right">Overtime</th>
                  <th className="px-6 py-4 text-right">Deductions</th>
                  <th className="px-6 py-4 text-center">Status</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {payrollData.map((row, i) => (
                  <tr key={i} className={`group hover:bg-slate-50 transition-colors bg-white ${i === 1 ? 'border-l-4 border-l-emerald-500 shadow-sm z-10 relative' : ''}`}>
                    <td className="px-6 py-4">
                      <input type="checkbox" defaultChecked={i === 1} className="rounded border-slate-300 text-emerald-500 focus:ring-emerald-500 h-4 w-4 cursor-pointer" />
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img src={row.avatar} alt={row.name} className="h-9 w-9 rounded-full object-cover" />
                        <div>
                          <p className="text-sm font-medium text-slate-900">{row.name}</p>
                          <p className="text-xs text-slate-500">ID: {row.id}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-500">{row.role}</td>
                    <td className="px-6 py-4 text-right text-sm font-medium text-slate-900">{row.hours}</td>
                    <td className="px-6 py-4 text-right text-sm font-medium text-amber-600">{row.overtime}</td>
                    <td className="px-6 py-4 text-right text-sm font-medium text-red-600">{row.deductions}</td>
                    <td className="px-6 py-4 text-center">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium border
                        ${row.status === 'Verified' ? 'bg-emerald-100 text-emerald-700 border-emerald-200' : 
                          row.status === 'Ready' ? 'bg-blue-100 text-blue-700 border-blue-200' : 
                          'bg-amber-100 text-amber-700 border-amber-200'}`}
                      >
                        {row.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-slate-400 hover:text-emerald-500 transition-colors">
                        <Edit className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="p-4 border-t border-slate-200 bg-slate-50/50 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <input type="checkbox" id="verify-all" className="rounded border-slate-300 text-emerald-500 focus:ring-emerald-500 h-4 w-4 cursor-pointer" />
              <label htmlFor="verify-all" className="text-sm font-semibold text-slate-900 cursor-pointer select-none">Verify All 4 Employees</label>
            </div>
            <div className="flex gap-2">
              <button className="px-3 py-1 text-sm border border-slate-300 rounded-md bg-white text-slate-500 disabled:opacity-50" disabled>Previous</button>
              <button className="px-3 py-1 text-sm border border-slate-300 rounded-md bg-white text-slate-700 hover:bg-slate-50">Next</button>
            </div>
          </div>
        </div>

        {/* Export Configuration & Status */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="bg-slate-900 p-5 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm">
                  <Settings className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white">Export Configuration</h3>
              </div>
              <span className="text-white/70 text-sm">Last modified: Today, 10:42 AM</span>
            </div>
            
            <div className="p-6 grid gap-6">
              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg border border-slate-200">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 bg-white rounded-lg border border-slate-200 flex items-center justify-center p-2 font-bold text-emerald-600 text-xl">
                    QB
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">QuickBooks Online</h4>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></div>
                      <p className="text-xs text-slate-500">Connected • Auto-sync enabled</p>
                    </div>
                  </div>
                </div>
                <button className="text-sm text-slate-500 hover:text-emerald-600 font-medium underline">Configure</button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-900">Export Format</label>
                  <select className="w-full rounded-lg border-slate-300 text-sm focus:border-emerald-500 focus:ring-emerald-500 shadow-sm p-2.5 bg-white border outline-none">
                    <option>Standard Payroll CSV</option>
                    <option>ADP Compatible Format</option>
                    <option>QuickBooks IIF</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-900">Date Range</label>
                  <select className="w-full rounded-lg border-slate-300 text-sm focus:border-emerald-500 focus:ring-emerald-500 shadow-sm p-2.5 bg-white border outline-none">
                    <option>Current Pay Period (Oct 1 - 15)</option>
                    <option>Previous Pay Period (Sep 15 - 30)</option>
                    <option>Last 30 Days</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-900">Include Fields</label>
                  <div className="flex flex-col gap-2 p-3 border border-slate-200 rounded-lg bg-white h-24 overflow-y-auto">
                    <label className="flex items-center gap-2 text-sm text-slate-700">
                      <input type="checkbox" defaultChecked className="rounded border-slate-300 text-emerald-500 focus:ring-emerald-500 h-4 w-4" />
                      Employee ID
                    </label>
                    <label className="flex items-center gap-2 text-sm text-slate-700">
                      <input type="checkbox" defaultChecked className="rounded border-slate-300 text-emerald-500 focus:ring-emerald-500 h-4 w-4" />
                      Department Code
                    </label>
                    <label className="flex items-center gap-2 text-sm text-slate-700">
                      <input type="checkbox" className="rounded border-slate-300 text-emerald-500 focus:ring-emerald-500 h-4 w-4" />
                      Notes & Comments
                    </label>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-900">Notification Email</label>
                  <input type="email" defaultValue="admin@acmecorp.com" className="w-full rounded-lg border-slate-300 text-sm focus:border-emerald-500 focus:ring-emerald-500 shadow-sm p-2.5 border outline-none" />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 flex flex-col h-full">
            <h3 className="text-lg font-bold text-slate-900 mb-4">System Status</h3>
            <div className="flex-1 relative">
              <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-slate-100"></div>
              <div className="space-y-6">
                <div className="relative pl-8">
                  <div className="absolute left-0 top-1 h-6 w-6 rounded-full bg-emerald-100 border border-white shadow-sm flex items-center justify-center z-10">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  </div>
                  <p className="text-sm font-medium text-slate-900">Payroll Sync Successful</p>
                  <p className="text-xs text-slate-500 mt-0.5">Today, 9:00 AM • 42 Records</p>
                </div>
                <div className="relative pl-8">
                  <div className="absolute left-0 top-1 h-6 w-6 rounded-full bg-blue-100 border border-white shadow-sm flex items-center justify-center z-10">
                    <Clock className="w-3.5 h-3.5 text-blue-600" />
                  </div>
                  <p className="text-sm font-medium text-slate-900">Hours Verified</p>
                  <p className="text-xs text-slate-500 mt-0.5">Yesterday, 5:30 PM • By M. Manager</p>
                </div>
                <div className="relative pl-8">
                  <div className="absolute left-0 top-1 h-6 w-6 rounded-full bg-amber-100 border border-white shadow-sm flex items-center justify-center z-10">
                    <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
                  </div>
                  <p className="text-sm font-medium text-slate-900">Overtime Alert Triggered</p>
                  <p className="text-xs text-slate-500 mt-0.5">Oct 14, 2:15 PM • Sarah Connor</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 pt-4 border-t border-slate-100">
              <div className="bg-slate-900 rounded-lg p-4 text-white relative overflow-hidden">
                <div className="absolute right-0 top-0 h-full w-24 bg-white/5 skew-x-12 transform translate-x-4"></div>
                <div className="relative z-10">
                  <p className="text-xs font-medium text-white/60 mb-1">API Usage Limit</p>
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-2xl font-bold">84%</span>
                    <span className="text-xs text-emerald-400">Good</span>
                  </div>
                  <div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-emerald-500 h-full rounded-full" style={{ width: '84%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
