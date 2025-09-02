export default function StatItem() {
    const StatItem = ({ number, label }: { number: string; label: string }) => (
        <div className="text-left leading-[1] animate-fade-in hover-scale">
          <p
            className="text-white font-anton pl-1 text-6xl font-extrabold animate-pulse-slow"
            style={{ fontFamily: 'Anton, sans-serif' }}
          >
            {number}
          </p>
          <p className="text-gray-400 mt-[10px] text-sm uppercase tracking-wider">{label}</p>
        </div>
      );

    return (
       <>
           <StatItem number="30+" label="Projects completed" />
            <StatItem number="20+" label="Rework customers" />
            <StatItem number="5+" label="Years experience" />
       </>
      );
}