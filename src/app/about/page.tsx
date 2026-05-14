import Image from "next/image";

const objetivos = [
  "Promocionar, participar, disenar y ejecutar estudios, programas y proyectos referidos a temas portuarios y logisticos, nacionales y regionales.",
  "Asesorar y asistir tecnicamente a instituciones nacionales, provinciales y en temas relacionados con la actividad portuaria y logistica.",
  "Promover la relacion y la coordinacion entre las distintas instituciones, publicas y privadas, nacionales o extranjeras, vinculadas a la planificacion y ejecucion de politicas portuarias y logisticas.",
  "Articular acciones intersectoriales mediante la firma de convenios de asistencia tecnica y/o cooperacion; a nivel nacional e internacional.",
  "Promocionar, participar, disenar y ejecutar proyectos de desarrollo y estimulo en las comunidades y el entorno portuario.",
  "Promover la capacitacion de los RRHH de las instituciones relacionadas con la actividad portuaria y logistica, nacionales, provinciales, publicas o privadas, a fin de potenciar sus capacidades de desarrollo.",
  "Brindar cursos, seminarios, congresos y otras actividades de capacitacion a fin de transferir herramientas de gestion, metodologias y conocimientos en materia portuaria y logistica en todo el pais y la region.",
];

export default function AboutPage() {
  return (
    <main>
      <section className="mp-subheader" style={{ backgroundImage: "url('/about/images/mp_img/slider_about.jpg')" }}>
        <div className="container">
          <h1 className="title">Sobre Nosotros</h1>
        </div>
      </section>

      <div className="entry-content">
        <section className="section mcb-section" style={{ paddingTop: "100px", paddingBottom: "60px" }}>
          <div className="section_wrapper mcb-section-inner">
            <div className="wrap mcb-wrap one-second valign-middle clearfix" style={{ padding: "0 1%" }}>
              <div className="mcb-wrap-inner">
                <div className="column mcb-column one column_image">
                  <div className="image_wrapper" style={{ textAlign: "center" }}>
                    <Image
                      className="scale-with-grid"
                      src="/about/images/mp_img/img_about_01.jpg"
                      alt="Fundacion Mundo Puerto"
                      width={560}
                      height={500}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="wrap mcb-wrap one-second valign-middle clearfix" style={{ padding: "0 0 0 5%" }}>
              <div className="mcb-wrap-inner">
                <div className="column mcb-column one column_column">
                  <div className="column_attr clearfix">
                    <h3>VISION</h3>
                    <p>
                      Surgimos de la necesidad de conectar Puertos con sus Comunidades. Conciliando el desarrollo
                      portuario y logistico sin perder el compromiso con su entorno. Promoviendo y desarrollando
                      proyectos sustentables que cuiden nuestra casa comun.
                    </p>

                    <h3>MISION</h3>
                    <p>
                      Promovemos el desarrollo tecnico y la formacion profesional como herramientas para el progreso
                      del sector portuario y logistico. Fomentamos la interrelacion de los actores que conforman el
                      sector portuario y logistico nacional e internacional para alcanzar sus potencialidades.
                    </p>

                    <h3>OBJETIVO GENERAL</h3>
                    <p>
                      La Fundacion tiene por objetivo la promocion, investigacion, ejecucion y desarrollo de proyectos
                      que permitan potenciar la actividad portuaria y logistica, fundamentalmente aquellas acciones
                      sustentables que beneficien nuestra casa comun.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section mcb-section" style={{ paddingTop: "30px", paddingBottom: "60px" }}>
          <div className="container">
            <h3 style={{ textAlign: "center", marginBottom: "30px" }}>OBJETIVOS</h3>
            <ul className="mp-objetivos-list">
              {objetivos.map((objetivo) => (
                <li key={objetivo}>{objetivo}</li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
