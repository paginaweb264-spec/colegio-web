"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, History, Briefcase, HelpCircle, BookOpen, Calculator, Monitor, Phone, MapPin } from "lucide-react"

export default function SchoolWebsite() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 py-12 text-center bg-gradient-to-b from-primary/5 to-background">
        {/* Barra superior con logo */}
<div className="w-full flex items-center justify-between px-6 py-4 absolute top-0 left-0">
  <img
    src="/logo.jpg"
    alt="Logo del colegio"
    className="h-20 w-auto"
  />
</div>
        <GraduationCap className="w-20 h-20 md:w-24 md:h-24 text-primary mb-6" />
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4 text-balance text-center">
          ¡Bienvenido a la web del colegio!
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl text-pretty">
          Explora nuestra historia, especialidades y más.
        </p>

        <nav className="flex flex-wrap gap-3 md:gap-4 justify-center max-w-4xl">
          <Button onClick={() => scrollToSection("inicio")} size="lg" className="min-h-[44px] px-6">
            Inicio
          </Button>
          <Button onClick={() => scrollToSection("historia")} variant="outline" size="lg" className="min-h-[44px] px-6">
            Historia
          </Button>
          <Button onClick={() => scrollToSection("Básica")} variant="outline" size="lg" className="min-h-[44px] px-6">
            Básica
          </Button>
          <Button
            onClick={() => scrollToSection("especialidades")}
            variant="outline"
            size="lg"
            className="min-h-[44px] px-6"
          >
            Especialidades
          </Button>
          <Button
            onClick={() => scrollToSection("preguntas")}
            variant="outline"
            size="lg"
            className="min-h-[44px] px-6"
          >
            Preguntas Frecuentes
          </Button>
          <Button onClick={() => scrollToSection("Contacto")} variant="outline" size="lg" className="min-h-[44px] px-6">
            Contacto
          </Button>
        </nav>
      </section>

      {/* Inicio Section */}
      <section id="inicio" className="min-h-screen flex items-center px-4 py-20 bg-background">
        <div className="max-w-4xl mx-auto">
          <Card className="border-2">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance text-center">
                Bienvenido a la web informativa
              </h2>
              <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                <p className="text-justify">
                  Esta web ha sido diseñada para proporcionar una experiencia clara, sencilla y organizada sobre la
                  Unidad Educativa Carmen Mora de Encalada. Aquí podrás encontrar información importante acerca de
                  nuestra historia, las especialidades que ofrecemos y una sección completa de preguntas frecuentes para
                  resolver tus dudas.
                </p>
                <p className="text-justify">
                  Desde este menú principal puedes navegar cómodamente entre las secciones, ya sea para conocer más
                  sobre el legado institucional, explorar en detalle las características de cada especialidad o
                  informarte sobre los horarios, materias y proyectos de grado.
                </p>
                <p className="text-justify">
                  Nuestro objetivo es brindarte una guía rápida y accesible que represente de manera fiel a nuestra
                  institución y te facilite el acceso a información relevante en cualquier momento. ¡Gracias por
                  utilizar esta web!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Historia Section */}
      <section id="historia" className="min-h-screen px-4 py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8 justify-center">
            <History className="w-10 h-10 text-primary" />
            <h2 className="text-3xl md:text-5xl font-bold text-foreground text-balance text-center">
              Historia de la institución
            </h2>
          </div>

          <div className="mb-8 rounded-lg overflow-hidden">
            <img
              src="/1.jpeg"
              alt="Fachada histórica de la institución"
              className="w-full h-64 md:h-96 object-cover"
            />
          </div>

          <Card>
            <CardContent className="p-6 md:p-10">
              <div className="prose prose-lg max-w-none space-y-4 text-foreground/90 leading-relaxed">
                <p className="text-justify">
                  Su primer rector fue el señor Profesor Juan Arévalo Ordoñez, habido y experimentado, quien edifico las
                  bases en donde se asentaría posteriormente el prestigio del plantel.
                </p>

                <p className="text-justify">
                  En el año lectivo de 1965-1966 se receptan las matriculas de 65 alumnos iniciando sus labores en el
                  mes de mayo.
                </p>

                <p className="text-justify">
                  El doctor César Jaramillo Pérez, Ministro de Educación Pública, con resolución número 1912 del 29 de
                  octubre de ese mismo año, autoriza el funcionamiento del Primer Curso Regular diurno, en la
                  especialización de Comercio y Administración.
                </p>

                <p className="text-justify">
                  Cuando el Colegio inicia su año lectivo 1967-1968, y al haber sido renovado el Consejo, es nombrado
                  como rector del Plantel, el señor Carlos Falquez Batallas, reemplazándolo al señor Juan Arévalo
                  Ordoñez, quien había llevado con certeza la conducción del Establecimiento. El 10 de octubre de 1969,
                  sucede un hecho de trascendencia histórica para el Plantel, cuando el entonces Presidente de la
                  República, Dr. José María Velasco Ibarra, suscribió el decreto No. 2009, nacionalizándolo a partir del
                  1ro. de Abril de 1970.
                </p>

                <p className="text-justify">
                  Su personal Docente, reuniendo los requisitos establecidos por la Ley de Escalafón y Sueldos del
                  Magisterio Nacional y de Defensa Profesional, continuó en el ejercicio de sus funciones.
                </p>

                <p className="text-justify">
                  La mística de trabajo del señor Carlos Falquez Batallas, de sus Consejos Directivos, de su personal
                  Docente, Administrativo y de Servicio, en el lapso de 13 años, lograr situarlo en una posición
                  envidiable.
                </p>

                <p className="text-justify">
                  En el año de 1971, y cuando el Colegio tenía en su Presupuesto la suma de S/ 1`020.00,oo inició una
                  actividad que dio resultados positivos, al recibir la generosa ayuda de S/ 50.000.oo del pueblo
                  pasajeño, para la adquisición del terreno, donde se construiría su edificio que vinieron a sumarse con
                  los S/. 100.000, oo asignados por el Ministerio de Educación. En el año 1972, y con el mismo fin la I.
                  Municipalidad de Pasaje, en su presupuesto, asignó la suma de S/. 70.000, oo. Con estos dineros y más
                  los saldos sobrantes que el Colegio venía acumulando en Colecturía, se efectuó la compra de 28 metros
                  cuadrados de terreno, ubicados en la margen izquierda del Canal de Riego del H. Concejo Provincial de
                  El Oro, frente a la calle José Ochoa León, que conduce hasta el sitio Loma de Franco. Para esta
                  adquisición, se contó con la buena predisposición del señor Luis Felipe Barriga Lavayen y de un lote
                  de la familia Lavanda. La compra venta se la celebro el 10 de agosto de 1972, a un costo de S/313.000,
                  oo.
                </p>

                <p className="text-justify">
                  En ese mismo año, se consideró la imperiosa necesidad de ampliar el área del terreno, por la densidad
                  arquitectónica del edificio, adquiriéndose la cantidad de 9.000 metros cuadrados celebrándose la
                  Escritura Pública con el señor Luis Felipe Barriga, en el año 1973. Las Autoridades del Colegio,
                  contratan los servicios del Arq. Gilberto Oramas González, para la elaboración de los planos del
                  edificio del Plantel. La concepción del edificio era monumental, calculada en S/. 14`000.000.oo, que
                  requería más amplitud de terreno, haciéndose la nueva compra en el año 1977. Se hizo realidad su
                  construcción en el año 1975, siendo el Arq. Gilberto Oramas, con la colaboración del Ing. Olmedo
                  Roldán Sandoval, ejecutando los trabajos el DECE, obra terminada en el año de 1978.
                </p>

                <p className="text-justify">
                  Entro en servicio en el año 1979, siendo considerado para ese entonces unos de los mejores del país,
                  con 1600 estudiantes, 80 profesores, 13 funcionarios administrativos y 7 en el Personal de Servicio.
                </p>

                <p className="text-justify">
                  Prof. Carlos Falquez Batallas, un hombre visionario, con sabiduría, coraje y dinamismo apoyado siempre
                  en la tenacidad y empuje del consejo directivo personal docente, padres de familia y estudiantes, que
                  en sus 13 años frente al rectorado cosecho frutos notables como los triunfos en el Campo Cultural,
                  Artístico, Social y Deportivo.
                </p>

                <p className="text-justify">
                  Al tener que asistir a la Cámara Nacional de Representantes, en representación de El Oro, el señor
                  Carlos Falquez Batalla, tuvo que renunciar del cargo de Rector, en el mes de junio de 1979,
                  sucediéndole en el cargo el licenciado Ángel Valarezo Concha, en calidad de Vicerrector Titular.
                </p>

                <p className="text-justify">
                  La Junta General de Directivos y Profesores, el 28 de septiembre de 1979 elige al profesor Jorge
                  Carmona Flores Rector del Colegio Nacional "Carmen Mora de Encalada", e inmediatamente solicitan su
                  nombramiento al señor Ministro de Educación Y Cultura, esto es después de la renuncia del profesor
                  Carlos Falquez Batallas, posesionándose el profesor Jorge Carmona Flores el 28 de Noviembre del año
                  1979, cumpliendo su función con dinamismo y calidad humana.
                </p>

                <p className="text-justify">
                  En 1983 la licenciada Elisabeth Beltrán de Guerrero como vicerrectora titular toma las riendas de la
                  institución en vista de que el señor Jorge Carmona fue electo Presidente del Consejo Pasajeño.
                </p>

                <p className="text-justify">
                  El 22 de junio de 1989 el Ministro de Educación, designa a la señorita Dra. Carmita Jaramillo Ramón
                  para ocupar el rectorado del colegio considerando su gran trayectoria de educadora y su afán de servir
                  a esta institución, la misma que aprovechando sus amistades con ciudadanos pudientes y de noble
                  corazón realizó gestiones para obtener su apoyo moral y económico a fin de cristalizar varias obras.
                  En 1998, el colegio atraviesa un mal momento el mismo que sirvió para reflexionar y llenarnos de
                  valor.
                </p>

                <p className="text-justify">
                  Pasaron entonces por el rectorado por muy poco tiempo los supervisores ingeniero José Idrovo,
                  ingeniero Alcides Espinoza y el Profesor Vicente Cordero, el ingeniero Carlos Idrovo como miembro del
                  Consejo Directivo y nuevamente como vicerrectora titular tenemos al frente del rectorado a la
                  licenciada Elisabeth Beltrán de Guerrero, la misma que luego de cumplir con la Ley de Educación, gano
                  el concurso de títulos, mérito y oposición para el cargo de rectora titular, posesionándose legalmente
                  el 8 de julio de 2003, ejerciéndose su liderazgo en este colegio que ha llegado a ser uno de los
                  grandes de la provincia, con desarrollo académico, científico, cultural, deportivo y social como
                  producto del edificante trabajo de maestros, personal administrativo, de servicio, de alumnos y de
                  padres de familia.
                </p>

                <p className="text-justify">
                  EL 8 de enero de 2009, la licenciada Elisabeth Beltrán de Guerrero, Mgs fue reemplazada en su función
                  por la ingeniera Irma Pazmiño García, Mgs que luego de participar en el concurso de méritos y
                  oposición resultó triunfadora, posesionándose del cargo legalmente el 12 de enero del presente año.
                </p>

                <p className="text-justify">
                  Continuando con el sendero del triunfo la ingeniera Irma Pazmiño García, Mgs, la institución ha
                  obtenido.
                </p>

                <p className="text-justify font-semibold">
                  En histórica sesión del 3 de febrero de 1965, el Ilustre Consejo Cantonal de Pasaje, presidido por el
                  señor Alberto Serrano Zambrano he integrado por los Concejales señores Jacinto De la Rosa, Galo García
                  Vallejo, Clemente Vaca Heredia, Agrecio Lomas Villacrés Héctor Encalada Sánchez, Julio Amaya Cabrera;
                  como Secretario el Bate Pasajeño, señor Alejandro Campoverde Andrade, surgió la idea de crear un
                  Instituto Municipal de Comercio y administración quedando resuelta esta inquietud, expidiéndose la
                  ordenanza respectiva, llevando el nombre de una distinguida matrona orense para rendir de esta manera
                  homenaje a la mujer de alto espíritu cívico y notables cualidades humanas señora Carmen Mora de
                  Encalada.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
{/* Educación General Básica Section */}
<section id="Básica" className="min-h-screen px-4 py-20 bg-muted/20">
  <div className="max-w-6xl mx-auto">
    <div className="flex items-center gap-3 mb-8 justify-center">
      <BookOpen className="w-10 h-10 text-primary" />
      <h2 className="text-3xl md:text-5xl font-bold text-foreground text-balance text-center">
        Educación General Básica
      </h2>
    </div>

    <Card>
      <CardContent className="p-6 md:p-10 space-y-8">
        <h3 className="text-xl md:text-2xl font-semibold text-foreground text-center">
          El subnivel Superior de la Educación General Básica incluye:
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <img
            src="/8.jpg"
            alt="Educación General Básica"
            className="w-full h-64 object-cover rounded-lg"
          />
          <img
            src="/9.jpg"
            alt="Básica Superior"
            className="w-full h-64 object-cover rounded-lg"
          />
        </div>

        <h4 className="text-lg md:text-xl font-semibold text-foreground text-center">
          OCTAVO AÑO DE EGB, NOVENO AÑO DE EGB Y DÉCIMO AÑO DE EGB
        </h4>

        <p className="text-muted-foreground text-justify leading-relaxed">
          La Educación General Básica (EGB) es una etapa esencial del sistema educativo que busca
          formar integralmente a los estudiantes, fortaleciendo sus habilidades cognitivas,
          sociales y emocionales. Durante esta fase, los alumnos desarrollan competencias en áreas
          fundamentales.
        </p>

        <p className="text-muted-foreground text-justify leading-relaxed">
          Su objetivo principal es brindar una educación equitativa y de calidad que promueva el
          pensamiento crítico, los valores ciudadanos y la convivencia armónica, preparando a los
          estudiantes para continuar con éxito hacia el nivel de Bachillerato.
        </p>

        <div>
          <h4 className="text-lg font-semibold text-foreground mb-3 text-center">
            Asignaturas principales en los tres grados:
          </h4>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
            <li>Lengua y Literatura</li>
            <li>Matemática</li>
            <li>Ciencias Naturales</li>
            <li>Estudios Sociales</li>
            <li>Inglés</li>
            <li>Educación Cultural y Artística</li>
            <li>Educación Física</li>
          </ul>
        </div>

        <p className="text-sm text-muted-foreground italic">
          📌 Nota: En los tres grados, las asignaturas principales son prácticamente las mismas; lo
          que cambia es la profundidad de los contenidos y el nivel de complejidad según el
          currículo nacional.
        </p>

        <div className="space-y-2 text-muted-foreground">
          <p>
            <span className="font-semibold text-foreground">Horario:</span> Entrada 07:00 a.m. –
            Salida 12:00 p.m.
          </p>
          <p>
            <span className="font-semibold text-foreground">
              Horario de atención a padres de familia:
            </span>{" "}
            miércoles de 13h00 a 15h00.
          </p>
        </div>
      </CardContent>
    </Card>
  </div>
</section>
      {/* Especialidades Section */}
      <section id="especialidades" className="min-h-screen px-4 py-20 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-6 justify-center">
            <Briefcase className="w-10 h-10 text-primary" />
            <h2 className="text-3xl md:text-5xl font-bold text-foreground text-balance text-center">Especialidades</h2>
          </div>

          <p className="text-center text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty">
            En la Unidad Educativa Carmen Mora de Encalada ofrecemos tres especialidades:
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Button
              onClick={() => scrollToSection("ciencias")}
              variant="outline"
              size="lg"
              className="min-h-[44px] px-6"
            >
              <BookOpen className="mr-2 h-5 w-5" />
              Ciencias
            </Button>
            <Button
              onClick={() => scrollToSection("contabilidad")}
              variant="outline"
              size="lg"
              className="min-h-[44px] px-6"
            >
              <Calculator className="mr-2 h-5 w-5" />
              Contabilidad
            </Button>
            <Button
              onClick={() => scrollToSection("informatica")}
              variant="outline"
              size="lg"
              className="min-h-[44px] px-6"
            >
              <Monitor className="mr-2 h-5 w-5" />
              Informática
            </Button>
          </div>

          {/* Ciencias */}
          <div id="ciencias" className="mb-16 scroll-mt-20">
            <Card className="overflow-hidden">
              <div className="h-64 md:h-80 overflow-hidden">
                <img
                  src="/2.jpeg"
                  alt="Laboratorio de Ciencias"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6 md:p-10">
                <div className="flex items-center gap-3 mb-4">
                  <BookOpen className="w-8 h-8 text-primary" />
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground text-center">Ciencias</h3>
                </div>

                <p className="text-base md:text-lg text-muted-foreground mb-6 leading-relaxed text-justify">
                  La especialidad de Ciencias fomenta el pensamiento crítico, la investigación y el método científico.
                  Los estudiantes desarrollan habilidades analíticas mediante prácticas de laboratorio y proyectos
                  experimentales.
                </p>

                <h4 className="text-xl font-semibold text-foreground mb-3 text-center">Asignaturas principales:</h4>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                  <li>Biología</li>
                  <li>Química</li>
                  <li>Física</li>
                  <li>Matemáticas avanzadas</li>
                  <li>Investigación científica</li>
                </ul>

                <p className="text-muted-foreground mb-2">
                  <span className="font-semibold text-foreground">Horario aproximado:</span> salida 12h45 - 12h50 según
                  el día.
                </p>

                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Proyecto de Grado:</span> investigación científica o
                  experimental con presentación final.
                </p>
              </CardContent>
              <div className="h-48 md:h-64 overflow-hidden">
                <img
                  src="3.jpeg"
                  alt="Estudiantes en clase de ciencias"
                  className="w-full h-full object-cover"
                />
              </div>
            </Card>
          </div>

          {/* Contabilidad */}
          <div id="contabilidad" className="mb-16 scroll-mt-20">
            <Card className="overflow-hidden">
              <div className="h-64 md:h-80 overflow-hidden">
                <img
                  src="/4.jpeg"
                  alt="Clase de Contabilidad"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6 md:p-10">
                <div className="flex items-center gap-3 mb-4">
                  <Calculator className="w-8 h-8 text-primary" />
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground text-center">Contabilidad</h3>
                </div>

                <p className="text-base md:text-lg text-muted-foreground mb-6 leading-relaxed text-justify">
                  La especialidad de Contabilidad forma estudiantes en procesos contables, financieros y
                  administrativos, con énfasis en la aplicación práctica y el emprendimiento.
                </p>

                <h4 className="text-xl font-semibold text-foreground mb-3 text-center">Asignaturas principales:</h4>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                  <li>Contabilidad General</li>
                  <li>Contabilidad de Costos</li>
                  <li>Administración</li>
                  <li>Emprendimiento</li>
                  <li>Tributación</li>
                </ul>

                <p className="text-muted-foreground mb-2">
                  <span className="font-semibold text-foreground">Horario aproximado:</span> salida 13h10 – 13h30 (según
                  turnos y prácticas).
                </p>

                <p className="text-muted-foreground mb-2">
                  <span className="font-semibold text-foreground">Pasantías:</span> en empresas locales, estudios
                  contables y oficinas administrativas.
                </p>

                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Proyecto de Grado:</span> implementación de sistemas
                  contables, análisis financiero o plan de negocio.
                </p>
              </CardContent>
              <div className="h-48 md:h-64 overflow-hidden">
                <img
                  src="/5.jpeg"
                  alt="Estudiantes trabajando en análisis financiero"
                  className="w-full h-full object-cover"
                />
              </div>
            </Card>
          </div>

          {/* Informática */}
          <div id="informatica" className="mb-16 scroll-mt-20">
            <Card className="overflow-hidden">
              <div className="h-64 md:h-80 overflow-hidden">
                <img
                  src="/6.jpeg"
                  alt="Laboratorio de Informática"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6 md:p-10">
                <div className="flex items-center gap-3 mb-4">
                  <Monitor className="w-8 h-8 text-primary" />
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground text-center">Informática</h3>
                </div>

                <p className="text-base md:text-lg text-muted-foreground mb-6 leading-relaxed text-justify">
                  La especialidad de Informática prepara a los estudiantes en tecnologías de la información, desarrollo
                  de software y gestión de sistemas tecnológicos, desarrollando competencias digitales avanzadas.
                </p>

                <h4 className="text-xl font-semibold text-foreground mb-3 text-center">Asignaturas principales:</h4>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                  <li>Programación</li>
                  <li>Base de Datos</li>
                  <li>Redes</li>
                  <li>Diseño Web</li>
                  <li>Ofimática avanzada</li>
                </ul>

                <p className="text-muted-foreground mb-2">
                  <span className="font-semibold text-foreground">Horario aproximado:</span> salida 13h10 – 13h30
                  (laboratorios pueden extender sesiones).
                </p>

                <p className="text-muted-foreground mb-2">
                  <span className="font-semibold text-foreground">Pasantías:</span> en empresas de tecnología, cabinas
                  de internet y dependencias públicas.
                </p>

                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Proyecto de Grado:</span> desarrollo de software,
                  aplicaciones o sitios web según el enfoque del estudiante.
                </p>
              </CardContent>
              <div className="h-48 md:h-64 overflow-hidden">
                <img
                  src="/7.jpeg"
                  alt="Estudiantes desarrollando software"
                  className="w-full h-full object-cover"
                />
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Preguntas Frecuentes Section */}
      <section id="preguntas" className="min-h-screen px-4 py-20 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8 justify-center">
            <HelpCircle className="w-10 h-10 text-primary" />
            <h2 className="text-3xl md:text-5xl font-bold text-foreground text-balance text-center">
              Preguntas Frecuentes
            </h2>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3 text-center">
                  ¿Cómo puedo inscribir o matricular a un estudiante?
                </h3>
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  Las inscripciones se realizan mediante el sistema del Ministerio de Educación, y las matrículas se
                  completan de forma presencial en las instalaciones del plantel durante el período asignado por el
                  régimen Costa.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3 text-center">
                  ¿Qué documentos se necesitan para la matrícula?
                </h3>
                <p className="text-muted-foreground mb-2">Generalmente se requiere:</p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Cédula del estudiante y representantes</li>
                  <li>Planilla de servicio básico</li>
                  <li>Libreta o certificado del año anterior</li>
                  <li>Documentos de traslado (si aplica)</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3 text-center">
                  ¿La institución cuenta con servicios de orientación estudiantil?
                </h3>
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  Sí. El Departamento de DECE ofrece apoyo psicológico, emocional y social a los estudiantes y sus
                  familias.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3 text-center">
                  ¿Cuál es el uniforme que deben usar los estudiantes?
                </h3>
                <div className="space-y-3 text-muted-foreground">
                  <p>La institución cuenta con dos tipos de uniforme:</p>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Uniforme diario:</p>
                    <p className="text-pretty">
                      Incluye camisa o blusa institucional, pantalón o falda según corresponda, zapatos negros, medias
                      blancas y su respectivo distintivo del colegio.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Uniforme de Educación Física:</p>
                    <p className="text-pretty">
                      Conformado por camiseta deportiva institucional, pantalón o calentador oficial, y zapatos
                      deportivos.
                    </p>
                  </div>
                  <p className="text-pretty">
                    Los estudiantes deben usar el uniforme que corresponda según el horario o día establecido por la
                    institución y mantener siempre una presentación adecuada.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3 text-center">¿Cuál es la nota mínima?</h3>
                <p className="text-muted-foreground">7/10.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3 text-center">
                  ¿Cuál es el horario de atención a padres de familia?
                </h3>
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  La Unidad Educativa Carmen Mora de Encalada realiza la atención a padres de familia los días
                  miércoles, en el horario de 13h00 a 15h00.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3 text-center">
                  ¿Es obligatorio jurar la bandera?
                </h3>
                <p className="text-muted-foreground">Sí.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3 text-center">¿Cómo recuperar un trimestre?</h3>
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  Presentar actividades pendientes o rendir evaluaciones de recuperación según el cronograma
                  institucional.
                </p>
              </CardContent>
            </Card>

            <Card id="Contacto" className="bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <h3 className="text-lg md:text-xl font-semibold text-foreground mb-4 text-center">Contacto</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary mt-1 shrink-0" />
                    <div>
                      <p className="text-foreground font-medium">Teléfono:</p>
                      <p className="text-muted-foreground">(07) 291-5254</p>
                      <p className="text-muted-foreground">Celular: 0987970349</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" />
                    <div>
                      <p className="text-foreground font-medium">Dirección:</p>
                      <p className="text-muted-foreground text-pretty">OCHOA LEÓN entre JUBONES y CARLOS REGALADO.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm md:text-base">
            ©️ 2025 Unidad Educativa Carmen Mora de Encalada. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}