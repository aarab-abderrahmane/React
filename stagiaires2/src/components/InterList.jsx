import { useSelector } from "react-redux";
import { Edit2, Trash2, MapPin, Award } from 'lucide-react';
import { Button } from "./Button";

const getScoreColor = (score) => {
  if (score >= 16) return 'bg-emerald-300 text-emerald-900 border-emerald-900';
  if (score >= 12) return 'bg-blue-300 text-blue-900 border-blue-900';
  if (score >= 10) return 'bg-amber-300 text-amber-900 border-amber-900';
  return 'bg-rose-300 text-rose-900 border-rose-900';
};

export const InterList = ()=>{

    const stagiairesData =   useSelector(state=> state.stagiaireReducer)

 return (
    <div className="bg-[var(--bg-secondary)] rounded-xl shadow-sm overflow-hidden ">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[var(--bg-secondary)] border-b border-white/50">
              <th className="px-6 py-4 text-xs font-semibold text-white/70 uppercase tracking-wider">stagiaire</th>
              <th className="px-6 py-4 text-xs font-semibold text-white/70 uppercase tracking-wider">Matricule</th>
              <th className="px-6 py-4 text-xs font-semibold text-white/70 uppercase tracking-wider">Location</th>
              <th className="px-6 py-4 text-xs font-semibold text-white/70 uppercase tracking-wider text-center">Score</th>
              <th className="px-6 py-4 text-xs font-semibold text-white/70 uppercase tracking-wider text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y  divide-white/30 divide-dashed overflow-y-scroll max-h-[400px]">
            {stagiairesData.map((stagiaire) => (
              <tr 
                key={stagiaire.id} 
                className="hover:bg-white/70  transition-colors group"
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#ff9b22] text-yellow-950 flex items-center justify-center font-bold text-xs">
                      {stagiaire.nom[0].toUpperCase()}{stagiaire.nom[stagiaire.nom.length-1].toUpperCase()}
                    </div>
                    <div>
                      <div className="font-medium text-[var(--text-color)] group-hover:text-black">{stagiaire.nom}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="font-mono text-xs text-slate-600 bg-slate-100 px-2 py-1 rounded">
                    {stagiaire.matricule}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-1.5 text-slate-300 group-hover:text-black">
                    <MapPin className="w-3.5 h-3.5 " />
                    <span className="text-sm">{stagiaire.ville}</span>
                    <span className="text-xs text-slate-400 group-hover:text-black/80">({stagiaire.codePostal})</span>
                  </div>
                </td>

                <td className="px-6 py-4 text-center">
                  <span className={`inline-flex items-center justify-center px-4 py-1 rounded-full text-xs font-bold border ${getScoreColor(stagiaire.moyenne)}`}> 
                    {stagiaire.moyenne}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-2 ">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                    //   onClick={() => onEdit(stagiaire)}
                      className="!p-2 text-blue-600 hover:text-blue-900 hover:bg-blue-400"
                    >
                      <Edit2 className="w-4 h-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                    //   onClick={() => onDelete(stagiaire.id)}
                      className="!p-2 text-blue-600 hover:text-red-900 hover:bg-red-400"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Pagination Placeholder for UI Completeness */}
      <div className="px-6 py-4 border-t border-slate-200 bg-white/70 flex items-center justify-between">
        <span className="text-xs text-black ">Showing {stagiairesData.length} entries</span>
        <div className="flex gap-1">
          <button className="px-3 py-1 text-xs text-black  border border-black rounded-3xl hover:bg-white disabled:opacity-50" disabled >Previous</button>
          <button className="px-3 py-1 text-xs  font-bold text-black border border-black rounded-3xl hover:bg-white disabled:opacity-50" >Next</button>
        </div>
      </div>
    </div>
  );


}