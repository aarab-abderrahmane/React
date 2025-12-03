import { InternForm } from "./components/InternFrom"
import { LayoutDashboard, Users, GraduationCap, Building2, Bell, Search, Filter, Plus } from 'lucide-react';
import { useState } from "react";
import { Button } from "./components/Button";

import { InterList } from "./components/InterList";

import './App.css'

function App() {
    const [showFilters, setShowFilters] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [editingIntern, setEditingIntern] = useState(null);

  return (

    <div className="min-h-screen bg-black pb-12 font-sans text-slate-900">

        <header className="sticky top-0 z-30 bg-gray-950  backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="bg-blue-600 p-2 rounded-lg shadow-sm shadow-primary-500/30 ">
                <LayoutDashboard className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold tracking-tight text-white">
                Intern<span className="text-primary-600">Flow</span>
              </h1>
            </div>
            
            <div className="flex items-center gap-4">
              <button className="relative p-2 text-slate-400 hover:text-slate-600 transition-colors">
                <Bell className="w-5 h-5" />
                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
              </button>
       
            </div>
          </div>
        </div>
      </header>



        {/* main content  */}

        <main  className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 ">

                {/* stats row  */}

                <div className=" grid grid-cols-1  md:grid-cols-3 gap-6 mb-8">
                      <p className="bg-red-500">score</p>
                      <p className="bg-red-500">score</p>
                      <p className="bg-red-500">score</p>
                </div>

                <div  className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                        
                        {/* Left Column: List & Filters */}
                    <div className="lg:col-span-8 space-y-6">
                      
                      {/* Toolbar */}
                      <div className="flex flex-col sm:flex-row gap-4 justify-between items-center bg-[var(--bg-secondary)] p-4 rounded-xl  shadow-sm">
                        <div className="relative w-full sm:w-96">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Search className="h-4 w-4 text-slate-400" />
                          </div>
                          <input
                            type="text"
                            className="block w-full pl-10 pr-3 py-2 border border-slate-200 rounded-lg leading-5 bg-slate-50 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent sm:text-sm transition-shadow"
                            placeholder="Search by name, city, or matricule..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                          />
                        </div>
                        
                        <div className="flex gap-2 w-full sm:w-auto">
                          <Button 
                            variant="secondary" 
                            className="flex-1 sm:flex-none justify-center"
                            icon={<Filter className="w-4 h-4" />}
                            onClick={() => setShowFilters(!showFilters)}
                          >
                            Filters
                          </Button>
                          {/* Mobile Add Button - Visible only on small screens if we wanted, but sticking to desktop layout primarily */}
                        </div>
                      </div>

                      {/* Filter Panel (Conditional) */}
                      {showFilters && (
                        <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-4 animate-in fade-in slide-in-from-top-2">
                          <div>
                              <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">Department</label>
                              <select className="w-full text-sm border-slate-200 rounded-md shadow-sm focus:border-primary-500 focus:ring-primary-500">
                                  <option>All Departments</option>
                                  <option>Development</option>
                                  <option>Design</option>
                              </select>
                          </div>
                          <div>
                              <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">City</label>
                              <select className="w-full text-sm border-slate-200 rounded-md shadow-sm focus:border-primary-500 focus:ring-primary-500">
                                  <option>All Cities</option>
                                  <option>Paris</option>
                                  <option>Lyon</option>
                              </select>
                          </div>
                          <div>
                              <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">Score Range</label>
                              <select className="w-full text-sm border-slate-200 rounded-md shadow-sm focus:border-primary-500 focus:ring-primary-500">
                                  <option>Any Score</option>
                                  <option>Top Performers (15)</option>
                                  <option>Needs Improvement (&lt;10)</option>
                              </select>
                          </div>
                        </div>
                      )}

                      {/* Table */}
                      <InterList 
                        // interns={filteredInterns} 
                        // onEdit={handleEdit} 
                        // onDelete={handleDelete}
                      />
                    </div>



                    {/* Right Column: Form */}
                      <div className="lg:col-span-4">
                        <InternForm 
                          // initialData={editingIntern} 
                          // onSubmit={handleAddIntern} 
                          // onCancel={() => setEditingIntern(null)}
                        />
                        
                        {/* Helper Text / Tips */}
                        <div className="mt-6 p-4 bg-yellow-500 rounded-3xl border border-dashed border-yellow-950">
                          <h4 className="text-sm font-semibold text-yellow-950 mb-2">Pro Tip</h4>
                          <p className="text-xs text-yellow-950 leading-relaxed">
                            ID STAGIAIRE are auto-generated based on the current year. Ensure all intern scores are validated by the supervisor before entry.
                          </p>
                        </div>
                      </div>

                </div>
        </main>

    </div>
  )
}

export default App
