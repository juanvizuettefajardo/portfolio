export default function Home() {
  return (
    <>
      <div className="flex items-center justify-center w-screen h-screen bg-blue-200">
        <div className="flex flex-col items-center gap-3 bg-purple-100 w-[600px] h-[230px] p-4 rounded-lg">
          <h1 className="text-[hsl(var(--primary))] font-extrabold text-3xl">
            Mi Portfolio
          </h1>
          <h3 className="text-[hsl(var(--secondary))] font-black text-base">Juan Manuel Vizuette Fajardo</h3>
          <section className="flex flex-col items-center">
            <p className="text-[hsl(var(--accent))] font-extralight">
              :D
            </p>
            <h2 className="text-[hsl(var(--highlight))] font-light">aprendiendo!</h2>
          </section>
          <section className="flex flex-col items-center">
            <p className="text-[hsl(var(--contrast))] font-black text-sm">
              Estudiante de Ingeniería de Software
            </p>
            <footer className="text-[hsl(var(--primary))] font-black text-sm">
              Ucc - 2025
            </footer>
          </section>
        </div>
      </div>
    </>
  );
}