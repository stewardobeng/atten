import { Building, Lock, Bell, UserCircle, Shield, Globe, CreditCard } from 'lucide-react';

export default function Settings() {
    return (
        <div className="flex-1 flex flex-col h-full bg-[#f8fafc] overflow-y-auto">
            <header className="bg-white border-b border-slate-200 px-8 py-5 flex items-center sticky top-0 z-20 shadow-sm">
                <div>
                    <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Settings</h2>
                    <p className="text-slate-500 text-sm mt-1">Manage your enterprise account, preferences, and billing.</p>
                </div>
            </header>

            <div className="p-8 max-w-7xl mx-auto w-full flex gap-8">
                <aside className="w-64 flex-shrink-0">
                    <nav className="flex flex-col gap-1 sticky top-32">
                        {[
                            { id: 'general', name: 'General', icon: Building, active: true },
                            { id: 'security', name: 'Security', icon: Shield },
                            { id: 'notifications', name: 'Notifications', icon: Bell },
                            { id: 'billing', name: 'Billing & Plans', icon: CreditCard },
                            { id: 'team', name: 'Team Preferences', icon: UserCircle },
                            { id: 'integrations', name: 'Integrations', icon: Globe },
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors text-sm font-medium w-full text-left
                  ${tab.active
                                        ? 'bg-blue-50 text-blue-700 font-semibold'
                                        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'}`}
                            >
                                <tab.icon className={`w-4 h-4 ${tab.active ? 'text-blue-600' : 'text-slate-400'}`} />
                                {tab.name}
                            </button>
                        ))}
                    </nav>
                </aside>

                <div className="flex-1 space-y-8">
                    <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                        <div className="border-b border-slate-200 px-6 py-5">
                            <h3 className="text-lg font-bold text-slate-900">Company Information</h3>
                            <p className="text-sm text-slate-500 mt-1">Update your enterprise details and branding.</p>
                        </div>
                        <div className="p-6 space-y-6">
                            <div className="flex items-center gap-6">
                                <div className="w-20 h-20 rounded-xl bg-gradient-to-tr from-emerald-500 to-emerald-700 flex items-center justify-center text-white text-2xl font-black shadow-md border-4 border-white ring-1 ring-slate-100">
                                    AC
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-900 text-sm mb-1">Workspace Logo</h4>
                                    <p className="text-xs text-slate-500 mb-3">Recommended size: 256x256px</p>
                                    <div className="flex gap-2">
                                        <button className="px-3 py-1.5 bg-white border border-slate-200 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-50">Upload New</button>
                                        <button className="px-3 py-1.5 text-sm font-medium text-red-600 hover:bg-red-50 rounded-md">Remove</button>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-900">Company Name</label>
                                    <input type="text" defaultValue="Acme Corp" className="w-full rounded-lg border-slate-200 text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm p-2.5 border outline-none bg-slate-50 focus:bg-white transition-colors" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-900">Workspace URL</label>
                                    <div className="flex">
                                        <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-slate-200 bg-slate-50 text-slate-500 text-sm">
                                            atten.io/
                                        </span>
                                        <input type="text" defaultValue="acmecorp" className="flex-1 rounded-none rounded-r-lg border-slate-200 text-sm focus:border-blue-500 focus:ring-blue-500 p-2.5 border outline-none bg-slate-50 focus:bg-white transition-colors" />
                                    </div>
                                </div>
                                <div className="col-span-2 space-y-2">
                                    <label className="text-sm font-medium text-slate-900">Support Email</label>
                                    <input type="email" defaultValue="support@acmecorp.com" className="w-full rounded-lg border-slate-200 text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm p-2.5 border outline-none bg-slate-50 focus:bg-white transition-colors" />
                                </div>
                            </div>
                        </div>
                        <div className="bg-slate-50 border-t border-slate-200 px-6 py-4 flex justify-end">
                            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-semibold transition-all shadow-sm">
                                Save Changes
                            </button>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                        <div className="border-b border-slate-200 px-6 py-5 flex justify-between items-center">
                            <div>
                                <h3 className="text-lg font-bold text-slate-900">Two-Factor Authentication</h3>
                                <p className="text-sm text-slate-500 mt-1">Add an extra layer of security to your enterprise account.</p>
                            </div>
                            <span className="px-2.5 py-1 bg-red-100 text-red-700 rounded-full text-xs font-semibold">Disabled</span>
                        </div>
                        <div className="p-6">
                            <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                                When two-factor authentication is enabled, members of your workspace will be required to enter an additional code when logging in. We highly recommend keeping this enabled.
                            </p>
                            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition-all shadow-sm">
                                <Lock className="w-4 h-4 text-slate-500" />
                                Enable 2FA
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
