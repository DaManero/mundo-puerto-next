const misionItems = [
  "Bregar por el cumplimiento de la mision de la Fundacion, promoviendo la conjuncion de esfuerzos de entidades sociales, empresariales, educativas, cientificas y de la administracion publica.",
  "Impulsar el desarrollo de la logistica y los puertos de la Republica Argentina, definiendo estandares de calidad y preservacion del ambiente.",
  "Promover la mejora continua de la logistica y los puertos existentes y fomentar mecanismos de cooperacion entre los mismos.",
  "Fomentar y proponer acciones a autoridades nacionales e internacionales para favorecer el crecimiento, mantenimiento y mejora continua del sector.",
  "Desarrollar una comunidad permanente de aprendizaje y cooperacion entre organismos encargados de la formacion profesional.",
];

const funcionesItems = [
  "Promover y fortalecer la cooperacion para el desarrollo institucional y la modernizacion de la formacion profesional.",
  "Contribuir al diseno y la gestion de politicas publicas de formacion profesional acordes con el programa de trabajo.",
  "Desarrollar una comunidad de aprendizaje y gestion del conocimiento en formacion profesional.",
  "Fomentar la investigacion relacionada con criterios de eficiencia, competitividad, productividad, calidad y equidad social.",
  "Difundir conocimientos, experiencias y buenas practicas en materia de capacitacion y desarrollo de recursos humanos.",
];

export default function ConsultivoPage() {
  return (
    <main>
      <section className="mp-subheader" style={{ backgroundImage: "url('/consultivo/images/mp_img/slider_consultivo.jpg')" }}>
        <div className="container">
          <h1 className="title">Consejo Consultivo</h1>
        </div>
      </section>

      <section className="section" style={{ padding: "80px 0 30px" }}>
        <div className="container">
          <h3>MISION</h3>
          <ul className="mp-objetivos-list">
            {misionItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" style={{ padding: "30px 0 80px" }}>
        <div className="container">
          <h3>FUNCIONES</h3>
          <ul className="mp-objetivos-list">
            {funcionesItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
