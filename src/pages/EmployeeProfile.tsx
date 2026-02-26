import { Mail, Phone, MapPin, Calendar as CalendarIcon, Clock, CheckCircle2, AlertCircle, Briefcase, Award, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function EmployeeProfile() {
  return (
    <div className="flex-1 flex flex-col h-full bg-[#f8fafc] overflow-y-auto">
      <header className="bg-white border-b border-slate-200 px-8 py-5 flex items-center gap-4 sticky top-0 z-20 shadow-sm">
        <Link to="/employee" className="p-2 hover:bg-slate-100 rounded-lg transition-colors text-slate-500">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <div>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Employee Profile</h2>
          <p className="text-slate-500 text-sm mt-1">View detailed information and attendance history.</p>
        </div>
      </header>

      <div className="p-8 max-w-5xl mx-auto w-full space-y-6">
        {/* Profile Header Card */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="h-32 bg-gradient-to-r from-blue-600 to-blue-400 w-full relative">
            <div className="absolute -bottom-12 left-8">
              <img 
                src="https://i.pravatar.cc/150?u=sarah" 
                alt="Sarah Jenkins" 
                className="w-24 h-24 rounded-full border-4 border-white shadow-md object-cover bg-white"
              />
            </div>
            <div className="absolute top-4 right-4 flex gap-2">
              <span className="px-3 py-1 bg-white/20 backdrop-blur-md text-white rounded-full text-xs font-medium border border-white/30 shadow-sm">
                Active
              </span>
              <span className="px-3 py-1 bg-white/20 backdrop-blur-md text-white rounded-full text-xs font-medium border border-white/30 shadow-sm">
                Full-Time
              </span>
            </div>
          </div>
          
          <div className="pt-16 pb-6 px-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Sarah Jenkins</h1>
              <p className="text-slate-500 font-medium flex items-center gap-2 mt-1">
                <Briefcase className="w-4 h-4" /> Senior Sales Executive
                <span className="text-slate-300">•</span>
                <span className="text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md text-xs font-semibold">EMP-001</span>
              </p>
            </div>
            
            <div className="flex gap-3">
              <button className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition-all shadow-sm">
                Edit Profile
              </button>
              <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-semibold transition-all shadow-sm">
                Message
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column: Contact & Details */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-slate-50 rounded-lg text-slate-400 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Email Address</p>
                    <p className="text-sm font-medium text-slate-900 mt-0.5">sarah.j@company.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-slate-50 rounded-lg text-slate-400 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Phone Number</p>
                    <p className="text-sm font-medium text-slate-900 mt-0.5">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-slate-50 rounded-lg text-slate-400 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Location</p>
                    <p className="text-sm font-medium text-slate-900 mt-0.5">San Francisco, CA<br/>HQ Office</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                Employment Details
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-slate-50 rounded-lg text-slate-400 mt-0.5">
                    <CalendarIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Join Date</p>
                    <p className="text-sm font-medium text-slate-900 mt-0.5">March 15, 2021</p>
                    <p className="text-xs text-slate-400 mt-0.5">2 years, 7 months</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-slate-50 rounded-lg text-slate-400 mt-0.5">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Manager</p>
                    <p className="text-sm font-medium text-slate-900 mt-0.5">Robert Fox</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Stats & Activity */}
          <div className="lg:col-span-2 space-y-6">
            {/* Attendance Stats */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-slate-900">Attendance Overview</h3>
                <select className="text-sm border border-slate-200 rounded-lg px-3 py-1.5 bg-white text-slate-700 outline-none">
                  <option>This Month</option>
                  <option>Last Month</option>
                  <option>This Year</option>
                </select>
              </div>
              
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="p-4 rounded-xl border border-slate-100 bg-slate-50 flex flex-col items-center justify-center text-center">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-2">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <span className="text-2xl font-bold text-slate-900">18</span>
                  <span className="text-xs font-medium text-slate-500 uppercase tracking-wider mt-1">Days Present</span>
                </div>
                <div className="p-4 rounded-xl border border-slate-100 bg-slate-50 flex flex-col items-center justify-center text-center">
                  <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center mb-2">
                    <Clock className="w-5 h-5" />
                  </div>
                  <span className="text-2xl font-bold text-slate-900">2</span>
                  <span className="text-xs font-medium text-slate-500 uppercase tracking-wider mt-1">Days Late</span>
                </div>
                <div className="p-4 rounded-xl border border-slate-100 bg-slate-50 flex flex-col items-center justify-center text-center">
                  <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center mb-2">
                    <AlertCircle className="w-5 h-5" />
                  </div>
                  <span className="text-2xl font-bold text-slate-900">1</span>
                  <span className="text-xs font-medium text-slate-500 uppercase tracking-wider mt-1">Days Absent</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-end mb-2">
                  <span className="text-sm font-medium text-slate-700">Punctuality Score</span>
                  <span className="text-lg font-bold text-emerald-600">94%</span>
                </div>
                <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                  <div className="bg-emerald-500 h-full rounded-full" style={{ width: '94%' }}></div>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-6">Recent Activity</h3>
              
              <div className="relative">
                <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-slate-100"></div>
                
                <div className="space-y-6">
                  <div className="relative pl-10">
                    <div className="absolute left-2.5 top-1.5 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white shadow-sm z-10"></div>
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-sm font-medium text-slate-900">Checked In</p>
                        <p className="text-xs text-slate-500 mt-0.5">HQ Office • Main Entrance</p>
                      </div>
                      <span className="text-xs font-medium text-slate-400">Today, 08:55 AM</span>
                    </div>
                  </div>
                  
                  <div className="relative pl-10">
                    <div className="absolute left-2.5 top-1.5 w-3.5 h-3.5 rounded-full bg-slate-300 border-2 border-white shadow-sm z-10"></div>
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-sm font-medium text-slate-900">Checked Out</p>
                        <p className="text-xs text-slate-500 mt-0.5">HQ Office • Main Entrance</p>
                      </div>
                      <span className="text-xs font-medium text-slate-400">Yesterday, 05:05 PM</span>
                    </div>
                  </div>
                  
                  <div className="relative pl-10">
                    <div className="absolute left-2.5 top-1.5 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white shadow-sm z-10"></div>
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-sm font-medium text-slate-900">Checked In</p>
                        <p className="text-xs text-slate-500 mt-0.5">HQ Office • Main Entrance</p>
                      </div>
                      <span className="text-xs font-medium text-slate-400">Yesterday, 08:50 AM</span>
                    </div>
                  </div>
                  
                  <div className="relative pl-10">
                    <div className="absolute left-2.5 top-1.5 w-3.5 h-3.5 rounded-full bg-amber-500 border-2 border-white shadow-sm z-10"></div>
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-sm font-medium text-slate-900">Late Check In</p>
                        <p className="text-xs text-slate-500 mt-0.5">HQ Office • Main Entrance</p>
                      </div>
                      <span className="text-xs font-medium text-slate-400">Oct 12, 09:15 AM</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <button className="w-full mt-6 py-2 border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors">
                View Full History
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
