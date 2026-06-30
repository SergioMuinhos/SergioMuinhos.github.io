import { GraduationCap, Calendar, MapPin } from "lucide-react";

interface EducationItem {
  title: string;
  institution: string;
  period: string;
  location: string;
}

export default function Education() {
  const educationList: EducationItem[] = [
    {
      title: "Título de Desarrollador de Aplicaciones Web (DAW)",
      institution: "IES San Clemente",
      period: "2021 - 2023",
      location: "Santiago de Compostela, Galicia"
    },
    {
      title: "Título de Desarrollador de Aplicaciones Multiplataforma (DAM)",
      institution: "CIFP A Carballeira",
      period: "2016 - 2018",
      location: "Ourense, Galicia"
    },
    {
      title: "Educación Secundaria Obligatoria (ESO)",
      institution: "IES Santa Catalina",
      period: "2009 - 2013",
      location: "Las Palmas de Gran Canaria, Canarias"
    }
  ];

  return (
    <section id="education" className="py-20 px-6 bg-neutral-50 dark:bg-neutral-950 transition-colors">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-neutral-900 dark:text-white">
            EDUCACIÓN Y ESTUDIOS
          </h2>
          <div className="w-12 h-1 bg-[#C3E41D] mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {educationList.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-neutral-900/60 border border-neutral-200/50 dark:border-neutral-800/50 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-[#C3E41D]/35 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Degree icon */}
                <div className="w-12 h-12 rounded-lg bg-neutral-100 dark:bg-neutral-805 flex items-center justify-center text-[#C3E41D]">
                  <GraduationCap className="w-6 h-6" />
                </div>
                
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 font-semibold text-base">
                    {item.institution}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-100 dark:border-neutral-800 flex flex-col gap-2 text-sm text-neutral-500 dark:text-neutral-450 font-medium">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-neutral-400" />
                  {item.period}
                </span>
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-neutral-400" />
                  {item.location}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
