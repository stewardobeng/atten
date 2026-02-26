import { BarChart3, PieChart, TrendingUp, Download, Printer, Filter, Calendar } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, Legend } from 'recharts';

const recruitmentData = [
    { name: 'Jan', applicants: 400, hired: 24, rejected: 376 },
    { name: 'Feb', applicants: 300, hired: 18, rejected: 282 },
    { name: 'Mar', applicants: 550, hired: 35, rejected: 515 },
    { name: 'Apr', applicants: 450, hired: 28, rejected: 422 },
    { name: 'May', applicants: 600, hired: 42, rejected: 558 },
    { name: 'Jun', applicants: 380, hired: 20, rejected: 360 },
];

export default function Reports() {
    return (
        <div className="flex-1 flex flex-col h-full bg-[#f8fafc] overflow-y-auto">
            <header className="bg-white border-b border-slate-200 px-8 py-5 flex justify-between items-center sticky top-0 z-20 shadow-sm">
                <div>
                    <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Reports & Analytics</h2>
                    <p className="text-slate-500 text-sm mt-1">Deep dive into organizational data and metric exports.</p>
                </div>
                <div className="flex gap-3">
                    <button className="flex items-center gap-2 px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition-all shadow-sm">
                        <Printer className="w-4 h-4" />
                        Print
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-semibold transition-all shadow-sm">
                        <Download className="w-4 h-4" />
                        Export Full Report
                    </button>
                </div>
            </header>

            <div className="p-8 max-w-7xl mx-auto w-full space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-2 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                        <div className="flex justify-between items-center mb-6">
                            <div>
                                <h3 className="text-lg font-bold text-slate-900">Recruitment Funnel</h3>
                                <p className="text-sm text-slate-500">Applicants vs Hired candidates over time</p>
                            </div>
                            <div className="flex gap-2">
                                <button className="p-2 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50">
                                    <Calendar className="w-4 h-4" />
                                </button>
                                <button className="p-2 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50">
                                    <Filter className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                        <div className="h-80 w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={recruitmentData} margin={{ top: 20, right: 30, left: -20, bottom: 5 }}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} dy={10} />
                                    <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                                    <RechartsTooltip cursor={{ fill: '#f1f5f9' }} contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                                    <Legend iconType="circle" wrapperStyle={{ paddingTop: '20px' }} />
                                    <Bar dataKey="applicants" name="Total Applicants" fill="#3b82f6" radius={[4, 4, 0, 0]} maxBarSize={40} />
                                    <Bar dataKey="hired" name="Successfully Hired" fill="#10b981" radius={[4, 4, 0, 0]} maxBarSize={40} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6">
                        <div className="bg-gradient-to-br from-indigo-500 to-blue-600 rounded-xl p-6 text-white shadow-md relative overflow-hidden">
                            <div className="absolute -right-6 -top-6 rounded-full w-24 h-24 bg-white/10 blur-xl"></div>
                            <TrendingUp className="w-8 h-8 mb-4 text-white/80" />
                            <h4 className="text-white/80 text-sm font-medium mb-1">Team Growth Rate</h4>
                            <p className="text-3xl font-black mb-2">+18.5%</p>
                            <p className="text-indigo-100 text-xs">Exceeds industry average by 4.2%</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex-1">
                            <h3 className="text-lg font-bold text-slate-900 mb-4">Quick Reports</h3>
                            <div className="space-y-3">
                                {[
                                    { title: 'Monthly Payroll Summary', date: 'Oct 01, 2023', icon: BarChart3, color: 'text-purple-600', bg: 'bg-purple-50' },
                                    { title: 'Department Diversity Matrix', date: 'Sep 28, 2023', icon: PieChart, color: 'text-amber-600', bg: 'bg-amber-50' },
                                    { title: 'Q3 Turnover Analysis', date: 'Sep 15, 2023', icon: TrendingUp, color: 'text-rose-600', bg: 'bg-rose-50' },
                                ].map((report, i) => (
                                    <div key={i} className="flex items-center p-3 rounded-lg hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-colors cursor-pointer group">
                                        <div className={`p-2 rounded-lg ${report.bg} mr-3 group-hover:scale-110 transition-transform`}>
                                            <report.icon className={`w-4 h-4 ${report.color}`} />
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-sm font-semibold text-slate-900">{report.title}</p>
                                            <p className="text-xs text-slate-500">{report.date}</p>
                                        </div>
                                        <Download className="w-4 h-4 text-slate-300 group-hover:text-blue-500" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
