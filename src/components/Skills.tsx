import { Server, Layout, Database, Wrench, Compass, Cpu } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

export default function Skills() {
  const categories: SkillCategory[] = [
    {
      title: "Backend & Core",
      icon: <Server className="w-6 h-6 text-[#C3E41D]" />,
      skills: ["Java", "C#", "Spring Framework", "Spring Boot", "NodeJS", "ASP.NET", "Arquitectura Hexagonal", "TDD"]
    },
    {
      title: "Frontend & Web",
      icon: <Layout className="w-6 h-6 text-[#C3E41D]" />,
      skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "Angular", "TypeScript", "JQuery", "Bootstrap", "JSP", "Telerik"]
    },
    {
      title: "Automoción & Sistemas Embebidos",
      icon: <Cpu className="w-6 h-6 text-[#C3E41D]" />,
      skills: ["SocketCAN", "Qt", "Yoctocompiler", "Knoplerfish (OSGi)", "Wireshark", "CANAlyzer", "VectorCAN", "dbc", "Conectividad 5G"]
    },
    {
      title: "Bases de Datos",
      icon: <Database className="w-6 h-6 text-[#C3E41D]" />,
      skills: ["SQL Server", "Oracle DB", "MariaDB", "JPA / Hibernate"]
    },
    {
      title: "DevOps, Nube & Herramientas",
      icon: <Wrench className="w-6 h-6 text-[#C3E41D]" />,
      skills: [
        "Git", "GitHub Actions", "GitLab", "AWS", "Azure", "Docker", 
        "Maven", "CVS", "Subversion (SVN)", "SonarQube", "IntelliJ IDEA", 
        "SOAPUI", "Swagger / OpenAPI", "JUnit"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-neutral-900 dark:text-white">
          COMPETENCIAS TECNOLÓGICAS
        </h2>
        <div className="w-12 h-1 bg-[#C3E41D] mx-auto rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="p-6 bg-white dark:bg-neutral-900/40 border border-neutral-200/50 dark:border-neutral-800/50 rounded-xl shadow-xs flex flex-col justify-between hover:border-neutral-400 dark:hover:border-neutral-700 transition-all duration-300"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center">
                  {cat.icon}
                </div>
                <h3 className="font-bold text-lg text-neutral-900 dark:text-white">
                  {cat.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2.5 py-1 text-sm font-medium rounded-md bg-neutral-50 dark:bg-neutral-850/50 text-neutral-755 dark:text-neutral-300 border border-neutral-200/30 dark:border-neutral-800/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* Dedicated Drones certification card */}
        <div
          id="drones"
          className="p-6 bg-gradient-to-br from-neutral-900 to-black dark:from-[#C3E41D]/5 dark:to-neutral-900/60 border border-neutral-800 dark:border-[#C3E41D]/25 rounded-xl shadow-xl flex flex-col justify-between col-span-1 md:col-span-2 lg:col-span-3 hover:border-[#C3E41D]/50 transition-all duration-500 text-left relative overflow-hidden"
        >
          {/* Decorative faint grid lines or drone silhouette could go here */}
          <div className="absolute right-4 bottom-4 text-[#C3E41D]/5 pointer-events-none select-none font-bold text-8xl md:text-9xl">
            DRONE
          </div>
          
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-[#C3E41D]/10 flex items-center justify-center text-[#C3E41D]">
                  <Compass className="w-6 h-6 animate-pulse" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-white">
                    Piloto de Drones Certificado
                  </h3>
                  <p className="text-sm text-neutral-400">
                    Licencia oficial para operaciones con aeronaves no tripuladas (UAS)
                  </p>
                </div>
              </div>
              <p className="text-neutral-300 max-w-3xl text-base leading-relaxed">
                Adicionalmente a mi perfil de desarrollo de software, cuento con la certificación oficial de la Agencia Estatal de Seguridad Aérea (AESA) para operar drones en diversos escenarios operacionales de ámbito civil.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 lg:justify-end">
              <div className="px-4 py-2 rounded-lg bg-neutral-800 border border-neutral-700/50 text-center">
                <div className="text-xs text-neutral-400 font-mono">CATEGORÍA</div>
                <div className="text-lg font-bold text-[#C3E41D]">A1 / A3</div>
              </div>
              <div className="px-4 py-2 rounded-lg bg-neutral-800 border border-neutral-700/50 text-center">
                <div className="text-xs text-neutral-400 font-mono">CATEGORÍA</div>
                <div className="text-lg font-bold text-[#C3E41D]">A2</div>
              </div>
              <div className="px-4 py-2 rounded-lg bg-neutral-800 border border-neutral-700/50 text-center">
                <div className="text-xs text-neutral-400 font-mono">ESCENARIOS</div>
                <div className="text-lg font-bold text-[#C3E41D]">STS (Espana)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
