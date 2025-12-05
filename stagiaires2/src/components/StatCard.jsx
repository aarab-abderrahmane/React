
export const StatCard = ({ label, value, icon, trend, trendUp }) => {
  return (
    <div className="bg-white card-noise p-5 rounded-2xl shadow-sm flex items-start justify-between transition-transform hover:-translate-y-1 duration-300">
      <div>
        <p className="text-white text-xs font-semibold uppercase tracking-wider mb-1">{label}</p>
        <h3 className="text-2xl font-bold text-slate-400">{value}</h3>
        {trend && (
          <p className={`text-xs mt-2 font-medium ${trendUp ? 'text-emerald-200' : 'text-rose-600'}`}>
            {trend}
          </p>
        )}
      </div>
      <div className="p-3 border border-dashed border-white/60 rounded-lg text-white/80">
        {icon}
      </div>
    </div>
  );
};