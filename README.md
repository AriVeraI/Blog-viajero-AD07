# ✈️ Viajero — El Sitio del Blog (Grupo 2)

Proyecto colaborativo desarrollado para el bootcamp de desarrollo full-stack, enfocado en la creación de un sitio web de blog multi-página moderno, responsivo y estructurado bajo los principios de desarrollo web moderno y metodologías ágiles Scrum.

---

## 🎯 El Problema que Resuelve
En la actualidad, las agencias de viajes independientes y los creadores de contenido de turismo necesitan una plataforma digital centralizada, ligera y visualmente atractiva para inspirar a futuros viajeros, compartir guías detalladas de destinos internacionales (como Italia, Francia y España) y facilitar un canal de comunicación directo y sencillo (contacto y cotizaciones) con los usuarios, sin depender de sistemas complejos o costosos gestores de contenido. Este proyecto resuelve dicha necesidad ofreciendo un sitio web modular, rápido y de fácil mantenimiento.

---

## 👥 Contribución del Equipo (Lo que hizo cada quien)
El proyecto se desarrolló de manera colaborativa organizando las tareas por sprints:

* **Ariadna Vera:** Liderazgo del equipo (Scrum Master), maquetación de la estructura base del archivo `index.html`, diseño visual de las tarjetas de destinos principales e integración de la hoja de estilos unificada (`style.css`).
* **Elios Martinez:** Desarrollo de la página `about.html` (Sobre Nosotros), definición de la misión, visión y valores de la marca, y estructuración semántica de los contenidos institucionales.
* **Essaw Cortez:** Implementación de la página `contact.html`, estructuración del formulario de soporte y desarrollo de la lógica en `script.js` para la validación interactiva del formulario.
* **Avril Ponce:** Selección, curaduría y optimización de recursos multimedia (fotografías de destinos europeos), además de la estandarización de las rutas de imágenes en el proyecto.
* **Adriana Contreras:** Diseño y estructuración del pie de página (`footer`) unificado para todas las vistas, revisión del cumplimiento del modelo de caja y pruebas de compatibilidad responsiva.

---

## 🛠️ Tecnologías Usadas
* **HTML5:** Marcado semántico para la estructuración de las vistas (`index.html`, `about.html`, `contact.html`).
* **CSS3:** Estilos centralizados en una única hoja global, diseño responsivo mediante **Flexbox**, manejo del modelo de caja y posicionamiento fijo (`position: fixed`).
* **JavaScript (ES6):** Manipulación del DOM y validación de formularios en el lado del cliente.
* **Git & GitHub:** Control de versiones y flujo de trabajo colaborativo en equipo.
* **Replit / VS Code:** Entornos de desarrollo utilizados para la codificación y pruebas en tiempo real.

---

## 🚀 Funcionalidades Principales
* **Navegación Fija y Fluida:** Una barra de navegación superior persistente (`navbar`) que se mantiene fija al desplazar la página, permitiendo cambiar ágilmente entre Inicio, Sobre Nosotros y Contacto.
* **Diseño Modular y Cohesivo:** Arquitectura basada en múltiples páginas conectadas entre sí, manteniendo la misma identidad visual gracias a un archivo CSS centralizado.
* **Tarjetas de Destinos Destocados:** Secciones con bordes personalizados y efectos visuales al pasar el cursor sobre las imágenes para mejorar la experiencia del usuario (UX).
* **Formulario de Contacto Interactivo:** Sistema de validación con JavaScript que verifica que los campos obligatorios no estén vacíos antes de simular el envío exitoso de un mensaje.
* **Pie de Página Informativo:** Sección inferior estandarizada que incluye la descripción del proyecto, la lista de autores y un enlace directo de correo de soporte.

---

## ⚙️ Cómo Ejecutarlo Localmente
Para clonar y visualizar este proyecto en tu computadora, sigue estos sencillos pasos:

1. **Clonar el repositorio:**
2.Abrir la carpeta del proyecto en tu editor de código favorito (por ejemplo, Visual Studio Code).
3. Ejecutar con Live Server:
   - Asegúrate de tener la extensión Live Server instalada en VS Code.
   - Haz clic derecho sobre el archivo index.html y selecciona "Open with Live Server".
   - El proyecto se abrirá automáticamente en tu navegador web predeterminado.

---

## 💡 Aprendizajes
**Importancia de la Cohesión CSS**: Comprendimos la gran ventaja de unificar los estilos en un solo archivo global en lugar de usar hojas separadas por página, evitando conflictos de selectores y duplicidad de código.

**Modelo de Caja y Posicionamiento**: Dominio práctico del comportamiento de elementos en bloque y en línea, así como el uso correcto de position: fixed para barras de navegación sin interferir con el contenido superior (padding-top).

**Trabajo en Equipo con Git**: Fortalecimos las habilidades de control de versiones, resolución de conflictos en ramas y distribución de tareas bajo un enfoque ágil.

**Validación Básica con JavaScript**: Entendimos cómo capturar eventos del DOM (submit, preventDefault) para mejorar la interacción del usuario sin necesidad de un backend complejo en esta fase inicial.

---

## 🔮 Mejoras Futuras
- Diseño 100% Responsivo para Móviles: Implementar Media Queries avanzadas y un menú desplegable tipo hamburguesa (hamburger menu) para optimizar la visualización en pantallas de teléfonos inteligentes.

- Conexión con Backend: Integrar un servicio real de envío de correos electrónicos (como Formspree o una API propia en Java Spring Boot) desde el formulario de contacto.

- Modo Oscuro (Dark Mode): Añadir un botón flotante que permita alternar entre un tema claro y un tema oscuro para mejorar la accesibilidad visual.

- Página de Detalle de Destinos: Crear subpáginas dinámicas para cada país (Italia, Francia, España) que muestren información detallada de hospedaje, clima y recomendaciones de viaje.