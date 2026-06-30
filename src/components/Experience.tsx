import { useState } from "react";
import { Briefcase, Calendar, MapPin, ChevronRight, ChevronDown } from "lucide-react";

interface ProjectDetails {
  client: string;
  roleDescription?: string;
  tasks: string[];
  tech: string[];
}

interface Job {
  company: string;
  role: string;
  period: string;
  location: string;
  projects: ProjectDetails[];
}

export default function Experience() {
  const [activeJob, setActiveJob] = useState<number | null>(null);

  const jobsData: Job[] = [
    {
      company: "Plexus Tech",
      role: "Programador Senior",
      period: "06/05/2023 – Actualmente",
      location: "Vigo",
      projects: [
        {
          client: "ZARA - SGA (Sistema de Gestión de Almacenes)",
          tasks: [
            "Creación de APIs REST utilizando Java y Node.js.",
            "Desarrollo e integración bajo el framework Spring (ecosistema AMIGA) y Spring Boot.",
            "Diseño de contratos de API utilizando OpenAPI y Swagger.",
            "Implementación de arquitectura limpia y hexagonal.",
            "Desarrollo guiado por pruebas (TDD) para asegurar robustez en el código.",
            "Despliegue y gestión en infraestructuras de nube AWS y Azure.",
            "Automatización e integración continua con GitHub Actions."
          ],
          tech: ["Java", "NodeJS", "Spring Boot", "OpenAPI", "Arq Hexagonal", "TDD", "AWS", "Azure", "GitHub Actions"]
        },
        {
          client: "Santander Seguros",
          tasks: [
            "Creación y optimización de APIs y algoritmos de cálculo de seguros.",
            "Desarrollo de lógica de negocio compleja en Java y Spring.",
            "Diseño de documentación técnica interactiva mediante Swagger.",
            "Garantía de calidad con alta cobertura de pruebas unitarias usando JUnit."
          ],
          tech: ["Java", "Spring", "Swagger", "JUnit"]
        }
      ]
    },
    {
      company: "Capgemini",
      role: "Programador Senior",
      period: "02/11/2022 – 02/05/2023",
      location: "Vigo",
      projects: [
        {
          client: "Consum",
          tasks: [
            "Desarrollo de software y APIs REST para gestión interna y de clientes.",
            "Implementación técnica usando Java, Spring Framework y Spring Boot.",
            "Documentación de endpoints y servicios web con Swagger."
          ],
          tech: ["Java", "Spring Framework", "Spring Boot", "Swagger"]
        }
      ]
    },
    {
      company: "Inetum",
      role: "Programador Senior",
      period: "30/10/2020 – 30/10/2022",
      location: "A Coruña",
      projects: [
        {
          client: "INDITEX (Arquitectura de Software)",
          tasks: [
            "Creación y mantenimiento de APIs REST corporativas sobre el ecosistema AMIGA.",
            "Desarrollo con tecnologías modernas en Java, Spring Boot, TypeScript y Python.",
            "Contenerización de microservicios mediante Docker."
          ],
          tech: ["Java", "Spring Boot (AMIGA)", "TypeScript", "Python", "Docker"]
        },
        {
          client: "ZARA - Couriers (Logística)",
          tasks: [
            "Integración y alta de nuevos transportistas y couriers globales en la plataforma logística TEC.",
            "Construcción de microservicios distribuidos con Spring Boot (AMIGA) en Java.",
            "Despliegues en contenedores Docker."
          ],
          tech: ["Java", "Spring Boot (AMIGA)", "Microservicios", "Docker"]
        },
        {
          client: "Repsol",
          tasks: [
            "Configuración y desarrollo de servicios de Gestión Documental integrando Documentum.",
            "Desarrollo de adaptadores y lógica en Java."
          ],
          tech: ["Java", "Documentum"]
        }
      ]
    },
    {
      company: "CTAG (Centro Tecnológico de Automoción de Galicia)",
      role: "Programador de Electrónica y Sistemas Inteligentes",
      period: "09/09/2019 – 08/09/2020",
      location: "O Porriño",
      projects: [
        {
          client: "División Electrónica y Sistemas Inteligentes de Transporte Conectividad y HMI",
          tasks: [
            "Desarrollo e integración de sistemas embebidos de automoción y servicios Cooperativos (V2X).",
            "Uso de protocolos específicos como SocketCAN para comunicaciones del bus CAN en vehículos.",
            "Desarrollo de interfaces de usuario avanzadas usando Qt y C++ / Java.",
            "Manejo de herramientas de compilación Yocto (Yoctocompiler) y contenedores OSGi con Knopflerfish.",
            "Análisis de red y diagnóstico de comunicaciones mediante Wireshark, CANAlyzer y VectorCAN.",
            "Investigación y desarrollo de aplicaciones piloto de conectividad bajo redes 5G."
          ],
          tech: ["Java", "SocketCAN", "Qt", "Yocto", "Knopflerfish", "Wireshark", "CANAlyzer", "VectorCAN", "GitLab", "5G"]
        }
      ]
    },
    {
      company: "Viewnext",
      role: "Programador Junior",
      period: "01/05/2018 – 01/07/2019",
      location: "Ourense",
      projects: [
        {
          client: "Caixabank (FCT)",
          tasks: [
            "Colaboración en el desarrollo de una aplicación interna empresarial.",
            "Uso de tecnologías backend y frontend: Java, Spring Framework, Maven, MariaDB y JavaScript."
          ],
          tech: ["Java", "Spring Framework", "Maven", "MariaDB", "JavaScript"]
        },
        {
          client: "Textilonia STL (E-Commerce)",
          tasks: [
            "Estructuración, desarrollo de páginas web del portal de comercio electrónico.",
            "Creación de pruebas de integración y testing de calidad.",
            "Stack tecnológico: Java, JPA, IBM WebSphere, análisis estático con SonarQube y SQuireL SQL."
          ],
          tech: ["Java", "JPA", "IBM WebSphere", "SonarQube", "SQuireL SQL"]
        },
        {
          client: "RSI Caja Rural (Banca)",
          tasks: [
            "Desarrollo y mantenimiento evolutivo en la aplicación móvil y web de Ruralvia.",
            "Creación de servicios Bus corporativos empleando el protocolo SOAP con SOAPUI.",
            "Creación de servicios y microservicios para la Hacienda Canaria y pasarela OTP.",
            "Desarrollo y maquetación de apartados web JSP.",
            "Tecnologías: Java, JavaScript, JQuery, Git, base de datos Oracle DB, Clarive, SQL Developer y WinSCP."
          ],
          tech: ["Java", "JavaScript", "JQuery", "Git", "Oracle DB", "SOAPUI", "Clarive", "JSP"]
        },
        {
          client: "CIDE (Industria Eléctrica)",
          tasks: [
            "Migración tecnológica y desarrollo Full Stack del backend y frontend de una aplicación interna.",
            "Desarrollo con tecnologías Microsoft: ASP.NET y C# en el backend.",
            "Maquetación y lógica frontend con JavaScript, JQuery, componentes Telerik y Bootstrap en Visual Studio.",
            "Control de versiones mediante CVS."
          ],
          tech: ["ASP.NET", "C#", "JavaScript", "SQL Server", "JQuery", "Telerik", "Bootstrap", "Visual Studio", "CVS"]
        }
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-neutral-50 dark:bg-neutral-950 transition-colors">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-neutral-900 dark:text-white">
            EXPERIENCIA LABORAL
          </h2>
          <div className="w-12 h-1 bg-[#C3E41D] mx-auto rounded-full" />
        </div>

        {/* Timeline container */}
        <div className="relative border-l-2 border-neutral-200 dark:border-neutral-800 ml-4 md:ml-10 pl-6 md:pl-10 space-y-12">
          {jobsData.map((job, idx) => {
            const isExpanded = activeJob === idx;
            return (
              <div key={idx} className="relative group">
                {/* Timeline node */}
                <div className="absolute -left-[35px] md:-left-[51px] top-1.5 w-6 h-6 rounded-full border-4 border-neutral-50 dark:border-neutral-950 bg-neutral-300 dark:bg-neutral-800 group-hover:bg-[#C3E41D] group-hover:border-[#C3E41D]/30 transition-all duration-300 flex items-center justify-center">
                  <Briefcase className="w-2.5 h-2.5 text-neutral-600 dark:text-neutral-400 group-hover:text-black transition-colors" />
                </div>

                {/* Job Card */}
                <div className="bg-white dark:bg-neutral-900/60 border border-neutral-200/50 dark:border-neutral-800/50 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <div>
                      <span className="text-sm font-semibold text-[#C3E41D] uppercase tracking-wider">
                        {job.role}
                      </span>
                      <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mt-1">
                        {job.company}
                      </h3>
                    </div>

                    <div className="flex flex-wrap gap-3 text-sm text-neutral-500 dark:text-neutral-400 font-medium">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        {job.period}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </span>
                    </div>
                  </div>

                  {/* Expand / Collapse Button */}
                  <button
                    onClick={() => setActiveJob(isExpanded ? null : idx)}
                    className="w-full mt-2 py-2 px-4 rounded-lg bg-neutral-100 dark:bg-neutral-850 hover:bg-[#C3E41D]/20 text-neutral-700 dark:text-neutral-300 font-semibold text-sm flex items-center justify-between transition-colors cursor-pointer"
                  >
                    <span>{isExpanded ? "Ocultar detalles de proyectos" : "Ver detalles y proyectos"}</span>
                    {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                  </button>

                  {/* Expandable Project Details */}
                  {isExpanded && (
                    <div className="mt-6 space-y-6 border-t border-neutral-200 dark:border-neutral-800 pt-6 animate-fadeIn">
                      {job.projects.map((proj, pIdx) => (
                        <div key={pIdx} className="space-y-3">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-neutral-100 dark:border-neutral-850 pb-2">
                            <h4 className="text-lg font-bold text-neutral-800 dark:text-neutral-100">
                              {proj.client.startsWith("Cliente") ? proj.client : `Proyecto: ${proj.client}`}
                            </h4>
                          </div>

                          <ul className="list-none space-y-2.5 text-neutral-600 dark:text-neutral-300 text-sm">
                            {proj.tasks.map((task, tIdx) => (
                              <li key={tIdx} className="flex gap-2 items-start pl-2">
                                <span className="text-[#C3E41D] mt-1 select-none">•</span>
                                <span>{task}</span>
                              </li>
                            ))}
                          </ul>

                          {/* Tech Badge Container */}
                          <div className="flex flex-wrap gap-2 pt-2">
                            {proj.tech.map((t, tIdx) => (
                              <span
                                key={tIdx}
                                className="px-2 py-1 text-xs font-mono rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-650 dark:text-neutral-300 border border-neutral-200/50 dark:border-neutral-750"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
