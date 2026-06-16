import Image from "next/image";
import iconoGmail from "./iconoGmail.png";
import iconoInstagram from "./iconoInstagram.png";
import iconoWhatsapp from "./iconoWhatsapp.png";
import logoSariss from "./LogoSariss.png";
import imagenHero from "./Imagen3.png";
import imagenInstitucional from "./Imagen4.png";
import ProductCarousel from "./components/ProductCarousel";
import hoodie1 from "./hoodies/hoodie-1.png";
import hoodie2 from "./hoodies/hoodie-2.png";
import chaleco1 from "./chalecos/chaleco-1.png";
import chaleco2 from "./chalecos/chaleco-2.png";
import chaleco3 from "./chalecos/chaleco-3.png";
import chaleco4 from "./chalecos/chaleco-4.png";
import chaqueta1 from "./chaquetas/chaqueta-1.png";
import chaqueta2 from "./chaquetas/chaqueta-2.png";
import chaqueta3 from "./chaquetas/chaqueta-3.png";
import chaqueta4 from "./chaquetas/chaqueta-4.png";
import cobija1 from "./cobijas/cobija-1.png";
import vestido1 from "./vestidos/vestido-1.png";
import vestido2 from "./vestidos/vestido-2.png";
import vestido3 from "./vestidos/vestido-3.png";
import vestido4 from "./vestidos/vestido-4.png";
import vestido5 from "./vestidos/vestido-5.png";
import vestido6 from "./vestidos/vestido-6.png";

export default function Home() {
  const products = [
    {
      key: "hoodies",
      title: "Hoodies",
      description:
        "Hoodies personalizables para dotacion empresarial, con opciones de bordado o estampado y telas termicas que combinan comodidad y durabilidad.",
      gallery: [hoodie1, hoodie2],
    },
    {
      key: "chalecos",
      title: "Chalecos",
      description:
        "Chalecos livianos o acolchados para trabajo en campo, con materiales resistentes y opciones reflectivas para mayor seguridad.",
      gallery: [chaleco1, chaleco2, chaleco3, chaleco4],
    },
    {
      key: "chaquetas",
      title: "Chaquetas",
      description:
        "Chaquetas corporativas con proteccion al clima, forros confortables y acabados que proyectan una imagen profesional.",
      gallery: [chaqueta1, chaqueta2, chaqueta3, chaqueta4],
    },
    {
      key: "blusas",
      title: "Blusas",
      description:
        "Blusas empresariales con cortes modernos y textiles frescos, pensadas para jornadas largas y una presencia impecable.",
      gallery: [],
    },
    {
      key: "vestidos",
      title: "Vestidos",
      description:
        "Vestidos empresariales con diseños elegantes y telas de alta calidad, ideales para uniformes formales y presentaciones corporativas.",
      gallery: [vestido1, vestido2, vestido3, vestido4, vestido5, vestido6],
    },
    {
      key: "cobijas",
      title: "Cobijas",
      description:
        "Cobijas institucionales para kits corporativos o dotaciones especiales, suaves al tacto y faciles de personalizar.",
      gallery: [cobija1],
    },
  ];

  const aboutColumns = [
    {
      key: "mision",
      title: "Misión",
      content: "Ser una de las empresas con mayor reconocimiento a nivel nacional por su diseño, calidad y precios competitivos en el sector de dotación empresarial, contribuyendo al éxito de nuestros clientes a través de soluciones innovadoras y personalizadas.",
    },
    {
      key: "vision",
      title: "Visión",
      content: "Para el año 2030, Dotaciones Sariss se consolidará como una empresa reconocida en el diseño y confección de ropa para dotación empresarial en Colombia, reconocida por su innovación, calidad y compromiso con la satisfacción del cliente.",
    },
    {
      key: "valores",
      title: "Valores",
      content: [
        "Honestidad",
        "Respeto",
        "Responsabilidad con el medio ambiente",
        "Calidad",
        "Innovación",
      ],
    },
  ];

  const iconClassName = "h-6 w-6";
  const whatsappLink = "https://wa.me/+573164469747";
  const instagramLink = "https://www.instagram.com/sariss_confecciones?igsh=dzd2MDh5YXN4ZHR5";
  const emailLink = "mailto:sarissdotaciones@gmail.com";
  const navLinks = [
    { href: "#inicio", label: "Inicio" },
    { href: "#sobre-nosotros", label: "Sobre nosotros" },
    { href: "#productos", label: "Productos" },
    { href: "#servicios", label: "Servicios" },
    { href: "#contactenos", label: "Contactenos" },
  ];

  return (
    <div className="relative flex min-h-full flex-1 flex-col">

      <header className="relative z-10 border-b border-[var(--line)] bg-[rgba(247,246,242,0.9)] backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
          <div className="flex items-center">
            <Image
              src={logoSariss}
              alt="Logo Sariss"
              width={160}
              height={48}
              className="h-12 w-auto"
              priority
            />
          </div>
          <nav className="hidden items-center gap-6 text-[0.8rem] tracking-[0.16em] text-[var(--muted)] md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                className="transition hover:text-[var(--text)]"
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            className="inline-flex items-center justify-center rounded-full border border-[#29a71a] bg-[#29a71a] px-4 py-2 text-white"
            href={whatsappLink}
            rel="noreferrer"
            target="_blank"
          >
            <span className="sr-only">WhatsApp Business</span>
            <Image
              src={iconoWhatsapp}
              alt="WhatsApp"
              width={24}
              height={24}
              className={iconClassName}
            />
          </a>
        </div>
      </header>

      <main className="relative z-10 flex-1">
        <section
          id="inicio"
          className="px-6 py-20 sm:py-28"
          style={{ animationDelay: "60ms" }}
        >
          <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6 animate-[fade-up_0.8s_ease-out_both]">
              <div className="flex items-center gap-3 text-xs tracking-[0.22em] text-[var(--muted)]">
                <span className="h-1 w-8 bg-[var(--accent)]" />
                
              </div>
              <h1 className="text-4xl font-[var(--font-heading)] tracking-wide sm:text-5xl lg:text-6xl">
                Bienvenidos a Dotaciones Sariss
              </h1>
              <div className="placeholder-box rounded-2xl p-6">
                <div className="placeholder-label">Somos expertos en diseño y confección de ropa para dotación empresarial</div>
              </div>
              
            </div>
            <div className="overflow-hidden rounded-3xl border border-[var(--line)] bg-[var(--surface)] animate-[fade-up_0.8s_ease-out_both]">
              <Image
                src={imagenHero}
                alt="Imagen principal de Dotaciones Sariss"
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>
        </section>

        <section id="sobre-nosotros" className="px-6 py-16 sm:py-24">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
            <h2 className="text-3xl font-[var(--font-heading)] uppercase tracking-[0.2em]">
              Sobre Nosotros
            </h2>
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                {aboutColumns.map((item) => (
                  <div key={item.key} className="placeholder-box rounded-2xl p-6">
                    <div className="text-xs tracking-[0.2em] text-[var(--accent)]">
                      {item.title}
                    </div>
                    <div className="mt-3 placeholder-box rounded-xl p-4">
                      {Array.isArray(item.content) ? (
                        <ul className="placeholder-label list-disc space-y-1 pl-5">
                          {item.content.map((value) => (
                            <li key={value}>{value}</li>
                          ))}
                        </ul>
                      ) : (
                        <div className="placeholder-label">{item.content}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="overflow-hidden rounded-3xl border border-[var(--line)] bg-[var(--surface)]">
                <Image
                  src={imagenInstitucional}
                  alt="Imagen institucional de Dotaciones Sariss"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="productos" className="px-6 py-16 sm:py-24">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
            <div className="flex items-center justify-between gap-6">
              <h2 className="text-3xl font-[var(--font-heading)] uppercase tracking-[0.2em]">
                Productos
              </h2>
              <div className="placeholder-box hidden items-center justify-center rounded-full px-5 py-2 md:flex">
                <span className="placeholder-label">Catalogo pendiente</span>
              </div>
            </div>
            <div className="placeholder-box rounded-2xl p-5">
              <div className="placeholder-label">En Dotaciones Sariss ofrecemos una amplia gama de productos para satisfacer las necesidades de nuestros clientes. 
              <br />
              <br />
              Todos nuestros productos están diseñados y confeccionados con los más altos estándares de calidad, utilizando materiales duraderos y técnicas de fabricación avanzadas.
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => (
                <div key={product.key} className="placeholder-box flex flex-col gap-4 rounded-2xl p-5">
                  <ProductCarousel
                    productKey={product.key}
                    title={product.title}
                    gallery={product.gallery}
                  />
                  <div className="text-sm tracking-[0.18em] text-[var(--accent)]">
                    {product.title}
                  </div>
                  <div className="placeholder-box rounded-xl p-3">
                    <div className="placeholder-label">{product.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="servicios" className="px-6 py-16 sm:py-24">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
            <h2 className="text-3xl font-[var(--font-heading)] uppercase tracking-[0.2em]">
              Servicios
            </h2>
            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="placeholder-box rounded-2xl p-6">
                <div className="placeholder-label">
                  Ofrecemos asesoría integral para definir la dotación ideal, desde la selección de telas hasta el diseño de imagen corporativa. Acompañamos cada etapa de producción para garantizar calidad, cumplimiento y coherencia con tu marca.

                  
                </div>
              </div>
              <div className="placeholder-box flex min-h-[240px] items-center justify-center rounded-2xl p-6">
                <span className="placeholder-label">Imagen de servicios pendiente</span>
              </div>
            </div>
          </div>
        </section>

        <section id="contactenos" className="px-6 py-16 sm:py-24">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
            <h2 className="text-3xl font-[var(--font-heading)] uppercase tracking-[0.2em]">
              Contactenos
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              <a
                className="placeholder-box flex flex-col gap-4 rounded-2xl p-6 transition hover:border-[var(--accent)]"
                href={instagramLink}
                rel="noreferrer"
                target="_blank"
              >
                <div className="flex items-center gap-3 text-sm tracking-[0.18em] text-[var(--accent)]">
                  <Image
                    src={iconoInstagram}
                    alt="Instagram"
                    width={24}
                    height={24}
                    className={iconClassName}
                  />
                  Instagram
                </div>
              </a>
              <a
                className="placeholder-box flex flex-col gap-4 rounded-2xl p-6 transition hover:border-[var(--accent)]"
                href={whatsappLink}
                rel="noreferrer"
                target="_blank"
              >
                <div className="flex items-center gap-3 text-sm tracking-[0.18em] text-[var(--accent)]">
                  <Image
                    src={iconoWhatsapp}
                    alt="WhatsApp"
                    width={24}
                    height={24}
                    className={iconClassName}
                  />
                  WhatsApp Business
                </div>
              </a>
              <a
                className="placeholder-box flex flex-col gap-4 rounded-2xl p-6 transition hover:border-[var(--accent)]"
                href={emailLink}
                rel="noreferrer"
                target="_blank"
              >
                <div className="flex items-center gap-3 text-sm tracking-[0.18em] text-[var(--accent)]">
                  <Image
                    src={iconoGmail}
                    alt="Gmail"
                    width={24}
                    height={24}
                    className={iconClassName}
                  />
                  Gmail
                </div>
              </a>
            </div>
            <div className="placeholder-box rounded-2xl p-6">
              <div className="placeholder-label">Horario: Lunes a Viernes, 9:00 AM - 6:00 PM</div>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-[var(--line)] bg-[var(--bg-elev)] px-6 py-12">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex flex-col gap-4">
              <div className="flex items-center">
                <Image
                  src={logoSariss}
                  alt="Logo Sariss"
                  width={160}
                  height={48}
                  className="h-12 w-auto"
                />
              </div>
              <div className="text-sm text-[var(--muted)]">
                Uniformes corporativos diseñados para equipos que buscan calidad y presencia.
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="text-sm tracking-[0.18em] text-[var(--accent)]">Enlaces</div>
              <div className="flex flex-col gap-2 text-sm text-[var(--muted)]">
                {navLinks.map((link) => (
                  <a key={link.href} className="transition hover:text-[var(--text)]" href={link.href}>
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="text-sm tracking-[0.18em] text-[var(--accent)]">Contacto</div>
              <div className="flex flex-col gap-2 text-sm text-[var(--muted)]">
                <a className="transition hover:text-[var(--text)]" href={whatsappLink} rel="noreferrer" target="_blank">
                  WhatsApp Business
                </a>
                <a className="transition hover:text-[var(--text)]" href={instagramLink} rel="noreferrer" target="_blank">
                  Instagram
                </a>
                <a className="transition hover:text-[var(--text)]" href={emailLink} rel="noreferrer" target="_blank">
                  sarissdotaciones@gmail.com
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-[var(--line)] pt-6 text-sm text-[var(--muted)]">
            &copy; {new Date().getFullYear()} Dotaciones Sariss. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
