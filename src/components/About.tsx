import { User, Code, Compass } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 px-6 max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-neutral-900 dark:text-white">
          SOBRE MÍ
        </h2>
        <div className="w-12 h-1 bg-[#C3E41D] mx-auto rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        <div className="md:col-span-2 flex flex-col justify-center space-y-6 text-left">
          <h3 className="text-2xl font-bold text-neutral-850 dark:text-neutral-200">
            Hola, soy Sergio Muiños
          </h3>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
            Soy Técnico Superior en Desarrollo de Aplicaciones Multiplataforma (DAM) y Desarrollo de Aplicaciones Web (DAW). 
            Tengo un perfil técnico muy versátil enfocado tanto en el desarrollo de arquitecturas robustas de backend como en el frontend de aplicaciones web modernas.
          </p>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
            Me considero una persona trabajadora, con objetivos claros y con ganas de cumplir las metas que se me propongan. 
            Disfruto trabajando en equipo y me entusiasma desarrollarme personal y profesionalmente en empresas dinámicas que me desafíen a crecer de manera continua.
          </p>
        </div>

        <div className="flex flex-col justify-between gap-4">
          <div className="p-6 bg-neutral-50 dark:bg-neutral-900/50 rounded-xl border border-neutral-200/50 dark:border-neutral-800/50 hover:border-[#C3E41D] transition-colors duration-300">
            <div className="w-12 h-12 rounded-lg bg-[#C3E41D]/10 flex items-center justify-center mb-4 text-[#C3E41D]">
              <User className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-neutral-900 dark:text-white mb-2">Compromiso</h4>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              Orientado a cumplir metas y superar desafíos técnicos de forma eficiente.
            </p>
          </div>

          <div className="p-6 bg-neutral-50 dark:bg-neutral-900/50 rounded-xl border border-neutral-200/50 dark:border-neutral-800/50 hover:border-[#C3E41D] transition-colors duration-300">
            <div className="w-12 h-12 rounded-lg bg-[#C3E41D]/10 flex items-center justify-center mb-4 text-[#C3E41D]">
              <Code className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-neutral-900 dark:text-white mb-2">Desarrollo Dual</h4>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              Especializado tanto en software nativo/multiplataforma como en entornos web.
            </p>
          </div>

          <div className="p-6 bg-neutral-50 dark:bg-neutral-900/50 rounded-xl border border-neutral-200/50 dark:border-neutral-800/50 hover:border-[#C3E41D] transition-colors duration-300">
            <div className="w-12 h-12 rounded-lg bg-[#C3E41D]/10 flex items-center justify-center mb-4 text-[#C3E41D]">
              <Compass className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-neutral-900 dark:text-white mb-2">Vuelo Libre</h4>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              Piloto oficial de drones certificado por AESA para operaciones especializadas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
