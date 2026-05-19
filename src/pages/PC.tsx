import PCExplorer from '../components/PCExplorer';
export default function PC() {
  return (
    <>
      {/* inizio */}
      <section className="p-8">
        <div className="max-w-7xl mx-auto">
          <div className="p-6 rounded-lg mb-0 rounded-3xl border-2 border-[#242C3D] bg-[#161B26]">
            <h3 className="text-xl font-semibold mb-0">Scopri i dettagli cliccando su ogni componente!</h3>
            <div className="flex flex-col md:flex-row gap-6">
              
            </div>
          </div>
        </div>
      </section>

      {/* Sezione PC Explorer */}
      <section id="pc" className="mt-4 mb-6 pt-5">
        <PCExplorer />
      </section>


    </>
  );
}