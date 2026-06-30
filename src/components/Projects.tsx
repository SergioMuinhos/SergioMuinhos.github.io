import { ExternalLink } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tech: string[];
  githubUrl: string;
  type: string;
}

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Projects() {
  const projectsData: Project[] = [
    {
      title: "WindMillWeather",
      description: "Aplicación meteorológica especializada orientada al análisis de las condiciones climatológicas y de viento. Diseñada para monitorizar la velocidad, ráfagas y dirección del viento en tiempo real, facilitando la estimación y optimización de parques eólicos o aerogeneradores domésticos. Integra servicios de geolocalización y APIs de meteorología avanzadas.",
      tech: ["Java", "Android SDK", "OpenWeatherMap API", "Geolocalización", "Material Design"],
      githubUrl: "https://github.com/SergioMuinhos/WindMillWeather",
      type: "Aplicación Móvil / Android"
    },
    {
      title: "MedPils",
      description: "Gestor inteligente de medicación desarrollado para la administración y control de tomas de fármacos. Permite configurar alarmas personalizadas, controlar el inventario de medicamentos en casa y establecer rutinas de dosificación diaria. Ofrece un diseño intuitivo y accesible pensado para facilitar el seguimiento de tratamientos médicos.",
      tech: ["Kotlin", "Android Studio", "Room Database", "Android AlarmManager", "Notificaciones Locales"],
      githubUrl: "https://github.com/SergioMuinhos/MedPils",
      type: "Aplicación Móvil / Android"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-neutral-900 dark:text-white">
          PROYECTOS PERSONALES
        </h2>
        <div className="w-12 h-1 bg-[#C3E41D] mx-auto rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectsData.map((project, idx) => (
          <div
            key={idx}
            className="flex flex-col justify-between p-6 bg-white dark:bg-neutral-900/40 border border-neutral-200/50 dark:border-neutral-800/50 rounded-xl shadow-sm hover:shadow-md hover:border-[#C3E41D]/35 transition-all duration-300 group"
          >
            <div>
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-semibold text-[#C3E41D] tracking-wider uppercase font-mono">
                  {project.type}
                </span>
                
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-500 hover:text-black dark:hover:text-white transition-colors duration-300"
                  aria-label={`Ver código de ${project.title} en GitHub`}
                >
                  <GithubIcon className="w-6 h-6 transition-transform group-hover:scale-110" />
                </a>
              </div>

              <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-3">
                {project.title}
              </h3>
              
              <p className="text-neutral-600 dark:text-neutral-350 text-sm leading-relaxed mb-6">
                {project.description}
              </p>
            </div>

            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2 py-0.5 text-xs font-mono rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-650 dark:text-neutral-300 border border-neutral-200/50 dark:border-neutral-750"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-neutral-800 dark:text-neutral-200 hover:text-[#C3E41D] dark:hover:text-[#C3E41D] transition-colors duration-300"
              >
                Ver Repositorio
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
