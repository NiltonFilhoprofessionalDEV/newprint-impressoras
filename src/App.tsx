import { useState } from 'react';
import {
  Printer,
  ShoppingCart,
  Package,
  CheckCircle2,
  Clock,
  DollarSign,
  ChevronDown,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Linkedin,
  MessageCircle,
  ArrowRight,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

/* Barra de calibração CMYK - divide seções */
const CalibrationBar = () => (
  <div className="calibration-bar" aria-hidden>
    <span className="c" />
    <span className="m" />
    <span className="y" />
    <span className="k" />
  </div>
);

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    { label: 'Início', color: '#00AEEF' },
    { label: 'Serviços', color: '#EC008C' },
    { label: 'Sobre', color: '#FFF200' },
    { label: 'Dúvidas', color: '#00AEEF' },
    { label: 'Contato', color: '#EC008C' },
  ];

  return (
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* Logo */}
            <a href="#início" className="flex items-center">
              <img
                src="/logo-newprint.png"
                alt="New Print - Soluções em Impressão"
                className="h-32 sm:h-36 md:h-40 w-auto object-contain"
              />
            </a>

            {/* Links desktop */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map(({ label, color }) => (
                <a
                  key={label}
                  href={`#${label.toLowerCase().replace(' ', '-')}`}
                  className="relative px-4 py-2 text-sm font-semibold text-[#1a1a1a] transition-colors group"
                  style={{ '--link-color': color } as React.CSSProperties}
                  onMouseEnter={(e) => e.currentTarget.style.color = color}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#1a1a1a'}
                >
                  {label}
                  <span
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 group-hover:w-full transition-all duration-300 rounded-full"
                    style={{ backgroundColor: color }}
                  />
                </a>
              ))}
            </div>

            {/* Ações */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/newprintimpressoras/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:opacity-90 text-white px-5 py-2.5 rounded-full flex items-center gap-2 text-sm font-bold transition-all shadow-lg"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
                <span className="hidden sm:inline">Instagram</span>
              </a>
              <a
                href="https://wa.me/5562994685353"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#128C7E] text-white px-5 py-2.5 rounded-full flex items-center gap-2 text-sm font-bold transition-all shadow-lg shadow-[#25D366]/20"
              >
                <MessageCircle className="w-4 h-4" />
                <span className="hidden sm:inline">WhatsApp</span>
              </a>

              {/* Hamburger mobile */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden flex flex-col gap-1.5 p-2"
                aria-label="Menu"
              >
                <span className={`w-6 h-0.5 bg-[#1a1a1a] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`w-6 h-0.5 bg-[#1a1a1a] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
                <span className={`w-6 h-0.5 bg-[#1a1a1a] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </button>
            </div>
          </div>
        </div>

        {/* Menu mobile */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden bg-white border-t border-gray-100"
            >
              <div className="px-6 py-6 space-y-1">
                {navLinks.map(({ label, color }) => (
                  <a
                    key={label}
                    href={`#${label.toLowerCase().replace(' ', '-')}`}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#1a1a1a] font-semibold hover:bg-gray-50 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: color }} />
                    {label}
                  </a>
                ))}
                <div className="pt-4 border-t border-gray-100 mt-4">
                  <a
                    href="tel:+5562994685353"
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#1a1a1a] font-semibold hover:bg-gray-50 transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#00AEEF]" />
                    62 99468-5353
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
  );
};

const Hero = () => {
  return (
    <section id="início" className="relative overflow-hidden bg-[#1a1a1a] min-h-[90vh] flex items-center">
      {/* Elementos decorativos CMYK */}
      <div className="absolute top-0 left-0 w-full h-1 flex">
        <span className="flex-1 bg-[#00AEEF]" />
        <span className="flex-1 bg-[#EC008C]" />
        <span className="flex-1 bg-[#FFF200]" />
        <span className="flex-1 bg-[#1a1a1a]" />
      </div>
      <div className="absolute top-20 -left-20 w-72 h-72 bg-[#00AEEF]/15 rounded-full blur-3xl" />
      <div className="absolute bottom-20 -right-20 w-80 h-80 bg-[#EC008C]/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-[#FFF200]/8 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <div className="flex gap-2 mb-8">
              <span className="w-10 h-1 rounded-full bg-[#00AEEF]" />
              <span className="w-10 h-1 rounded-full bg-[#EC008C]" />
              <span className="w-10 h-1 rounded-full bg-[#FFF200]" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6">
              Excelência Técnica e{' '}
              <span className="text-[#FFF200]">Compromisso</span>{' '}
              com o Cliente
            </h1>
            <p className="text-lg text-gray-300 mb-10 leading-relaxed">
              Manutenção especializada em impressoras, toners originais e locação de equipamentos. Qualidade de impressão e atendimento humanizado para sua empresa ou residência.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/5562994685353"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#FFF200] hover:bg-[#e6d900] text-[#1a1a1a] px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-[#FFF200]/20"
              >
                Solicitar Orçamento
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#serviços"
                className="inline-flex items-center gap-2 border-2 border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-bold transition-all"
              >
                Ver Serviços
              </a>
            </div>
            <div className="mt-12 flex flex-wrap gap-8">
              {[
                { value: '15+', label: 'Anos', color: '#00AEEF' },
                { value: '5k+', label: 'Clientes', color: '#EC008C' },
                { value: '12k+', label: 'Impressoras', color: '#FFF200' },
              ].map((stat, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="w-1 h-10 rounded-full" style={{ backgroundColor: stat.color }} />
                  <div>
                    <p className="text-2xl font-black text-white">{stat.value}</p>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute -top-3 -left-3 w-full h-full rounded-2xl border-2 border-[#00AEEF]/30" />
              <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border-2 border-[#EC008C]/30" />
              <div className="w-full max-w-[300px] sm:max-w-[400px] lg:max-w-none lg:w-[500px] aspect-[3/4] rounded-2xl overflow-hidden relative z-10">
                <img
                  src="/hero-inicio.png"
                  alt="Técnico New Print - Soluções em Impressão"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full h-1 flex">
                  <span className="flex-1 bg-[#00AEEF]" />
                  <span className="flex-1 bg-[#EC008C]" />
                  <span className="flex-1 bg-[#FFF200]" />
                  <span className="flex-1 bg-[#1a1a1a]" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const MARCAS = [
  { slug: 'hp', nome: 'HP', url: 'https://www.hp.com/br-pt/home.html' },
  { slug: 'brother', nome: 'Brother', url: 'https://www.brother.com.br/impressoras-multifuncionais' },
  { slug: 'epson', nome: 'Epson', url: 'https://epson.com.br/' },
  { slug: 'canon', nome: 'Canon', url: 'https://www.canon.com.br/para-voce/impressoras-e-multifuncionais' },
];

const Brands = () => (
  <section className="py-14 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <p className="text-center text-xs uppercase tracking-widest font-bold text-gray-500 mb-10">
        Principais Marcas Atendidas
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
        {MARCAS.map(({ slug, nome, url }) => (
          <div
            key={slug}
            className="group h-24 sm:h-32 md:h-40 flex items-start justify-center grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300"
          >
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start justify-center h-full w-full"
              aria-label={`Site ${nome}`}
            >
              <img
                src={`/marcas/${slug}.png`}
                alt={`Logo ${nome}`}
                title={nome}
                className={`max-h-full max-w-full w-auto object-contain object-top ${slug === 'hp' ? '' : slug === 'canon' ? 'mt-[33px]' : slug === 'epson' ? 'mt-[18px]' : 'mt-[30px]'}`}
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="sobre" className="relative min-h-[85vh] flex flex-col justify-center py-12 sm:py-16 lg:py-20 overflow-hidden bg-[#1a1a1a]">
    {/* Elementos decorativos */}
    <div className="absolute top-0 right-0 w-96 h-96 bg-[#00AEEF]/8 rounded-full blur-3xl" />
    <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#EC008C]/6 rounded-full blur-3xl" />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
      {/* Cabeçalho da seção */}
      <div className="text-center mb-10 lg:mb-14">
        <div className="flex justify-center gap-2 mb-6">
          <span className="w-10 h-1 rounded-full bg-[#00AEEF]" />
          <span className="w-10 h-1 rounded-full bg-[#EC008C]" />
          <span className="w-10 h-1 rounded-full bg-[#FFF200]" />
        </div>
        <span className="text-[#00AEEF] font-bold uppercase tracking-widest text-xs mb-4 block">Sobre a New Print</span>
        <h2 className="text-3xl lg:text-5xl font-extrabold text-white leading-tight max-w-3xl mx-auto">
          Referência em <span className="text-[#FFF200]">soluções de impressão</span>
        </h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        {/* Imagem com moldura CMYK */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="absolute -top-3 -left-3 w-full h-full rounded-2xl border-2 border-[#00AEEF]/30" />
          <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border-2 border-[#EC008C]/30" />
          <div className="relative z-10 rounded-2xl overflow-hidden">
            <img
              src="/sobre-nos.png"
              alt="Sobre a New Print - Nossa estrutura"
              className="w-full aspect-[4/5] object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full h-1 flex">
              <span className="flex-1 bg-[#00AEEF]" />
              <span className="flex-1 bg-[#EC008C]" />
              <span className="flex-1 bg-[#FFF200]" />
              <span className="flex-1 bg-[#1a1a1a]" />
            </div>
          </div>
        </motion.div>

        {/* Conteúdo textual */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="space-y-5 text-gray-300 leading-relaxed text-base">
            <p>
              A New Print atua em Anápolis e região com foco em excelência técnica e atendimento próximo. Oferecemos manutenção preventiva e corretiva, venda de toners originais e compatíveis, e locação de equipamentos para empresas que buscam qualidade e agilidade.
            </p>
            <p>
              Nossa equipe é formada por técnicos capacitados e comprometidos com a durabilidade e a performance dos seus equipamentos. Trabalhamos para que sua impressão seja sempre confiável, com transparência nos orçamentos e garantia em todos os serviços.
            </p>
          </div>

          {/* Estatísticas com barras CMYK */}
          <div className="grid grid-cols-3 gap-4 mt-10">
            {[
              { value: '15+', label: 'Anos de Experiência', color: '#00AEEF' },
              { value: '5k+', label: 'Clientes Atendidos', color: '#EC008C' },
              { value: '12k+', label: 'Impressoras Consertadas', color: '#FFF200' },
            ].map((stat, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1" style={{ backgroundColor: stat.color }} />
                <p className="text-2xl font-black text-white">{stat.value}</p>
                <p className="text-xs font-semibold text-gray-400 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          <a
            href="https://wa.me/5562994685353"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-10 bg-[#FFF200] hover:bg-[#e6d900] text-[#1a1a1a] px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-[#FFF200]/20"
          >
            Fale com nossa equipe
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </div>
  </section>
);

const Services = () => {
  const services = [
    {
      title: "Manutenção de Impressoras",
      desc: "Técnicos especializados em todas as marcas. Consertos, limpeza técnica e ajustes de precisão para a melhor performance do seu equipamento.",
      icon: Printer,
      items: ["Limpeza profunda", "Troca de fusor e roletes", "Peças originais"],
      cta: "Saiba mais",
      color: '#00AEEF',
      number: '01',
    },
    {
      title: "Venda de Toners",
      desc: "Amplo estoque de toners originais e compatíveis de alta qualidade para laser e jato de tinta. Melhores preços do mercado.",
      icon: ShoppingCart,
      items: ["Toners novos lacrados", "Compatíveis premium", "Todas as marcas"],
      cta: "Ver Catálogo",
      color: '#EC008C',
      number: '02',
    },
    {
      title: "Locação de Impressoras",
      desc: "Soluções em locação de impressoras para sua empresa. Equipamentos em perfeito estado, com suporte técnico e manutenção inclusos.",
      icon: Package,
      items: ["Contratos flexíveis", "Suporte dedicado", "Manutenção inclusa"],
      cta: "Consultar",
      color: '#FFF200',
      number: '03',
    },
  ];

  return (
    <section id="serviços" className="py-24 lg:py-32 bg-[#f8f8f8] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 flex">
        <span className="flex-1 bg-[#00AEEF]" />
        <span className="flex-1 bg-[#EC008C]" />
        <span className="flex-1 bg-[#FFF200]" />
        <span className="flex-1 bg-[#1a1a1a]" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="flex justify-center gap-2 mb-6">
            <span className="w-10 h-1 rounded-full bg-[#00AEEF]" />
            <span className="w-10 h-1 rounded-full bg-[#EC008C]" />
            <span className="w-10 h-1 rounded-full bg-[#FFF200]" />
          </div>
          <span className="text-[#00AEEF] font-bold uppercase tracking-widest text-xs mb-4 block">O que fazemos</span>
          <h2 className="text-3xl lg:text-5xl font-extrabold text-[#1a1a1a] mb-4">Nossos Serviços</h2>
          <p className="text-gray-500 max-w-lg mx-auto">Soluções completas para manter sua impressão funcionando com qualidade e economia.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -8 }}
              className="group relative bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Barra CMYK no topo */}
              <div className="h-1.5 w-full" style={{ backgroundColor: service.color }} />

              <div className="p-8 lg:p-10 flex flex-col h-full">
                {/* Número + Ícone */}
                <div className="flex items-center justify-between mb-8">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center border border-white/10" style={{ backgroundColor: `${service.color}15` }}>
                    <service.icon className="w-8 h-8" style={{ color: service.color }} />
                  </div>
                  <span className="text-5xl font-black text-white/5 select-none">{service.number}</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-8">{service.desc}</p>

                {/* Lista com checks */}
                <ul className="space-y-3 mb-8 flex-1">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm font-medium text-gray-300">
                      <span className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 border border-white/10" style={{ backgroundColor: `${service.color}20` }}>
                        <CheckCircle2 className="w-3 h-3" style={{ color: service.color }} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={i === 2 ? "https://wa.me/5562994685353" : "#contato"}
                  target={i === 2 ? "_blank" : undefined}
                  rel={i === 2 ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-2 text-sm font-bold transition-all group-hover:gap-3 w-fit"
                  style={{ color: service.color }}
                >
                  {service.cta}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const reasons = [
    {
      title: 'Qualidade Superior',
      desc: 'Nossos processos de manutenção e recarga seguem rigorosos padrões de qualidade, com insumos certificados.',
      icon: CheckCircle2,
      color: '#00AEEF',
      number: '01',
    },
    {
      title: 'Agilidade no Atendimento',
      desc: 'Sabemos que sua empresa não pode parar. Oferecemos suporte rápido com prazos de 24 a 48 horas.',
      icon: Clock,
      color: '#EC008C',
      number: '02',
    },
    {
      title: 'Preço Justo',
      desc: 'Transparência total nos orçamentos e as melhores condições de pagamento do mercado.',
      icon: DollarSign,
      color: '#FFF200',
      number: '03',
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-[#f8f8f8] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 flex">
        <span className="flex-1 bg-[#00AEEF]" />
        <span className="flex-1 bg-[#EC008C]" />
        <span className="flex-1 bg-[#FFF200]" />
        <span className="flex-1 bg-[#1a1a1a]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center gap-2 mb-6">
            <span className="w-10 h-1 rounded-full bg-[#00AEEF]" />
            <span className="w-10 h-1 rounded-full bg-[#EC008C]" />
            <span className="w-10 h-1 rounded-full bg-[#FFF200]" />
          </div>
          <span className="text-[#00AEEF] font-bold uppercase tracking-widest text-xs mb-4 block">Diferenciais</span>
          <h2 className="text-3xl lg:text-5xl font-extrabold text-[#1a1a1a] mb-4">
            Por que escolher a <span className="text-[#EC008C]">New Print</span>?
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">Conheça os pilares que fazem da New Print a melhor escolha em soluções de impressão.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -6 }}
              className="group relative bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 p-8 lg:p-10"
            >
              <div className="h-1.5 w-full absolute top-0 left-0" style={{ backgroundColor: reason.color }} />
              <div className="flex items-center justify-between mb-8">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 border border-gray-100"
                  style={{ backgroundColor: `${reason.color}12` }}
                >
                  <reason.icon className="w-8 h-8" style={{ color: reason.color }} />
                </div>
                <span className="text-5xl font-black text-gray-100 select-none group-hover:text-gray-200 transition-colors">{reason.number}</span>
              </div>
              <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">{reason.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const cmykColors = ['#00AEEF', '#EC008C', '#FFF200', '#00AEEF'];

  const faqs = [
    {
      q: "A recarga de toner é segura para minha impressora?",
      a: "Sim, nossas recargas são feitas com insumos de alta qualidade e específicos para cada modelo, garantindo que não haja danos ao equipamento."
    },
    {
      q: "Quanto tempo demora um conserto de impressora?",
      a: "O prazo varia de acordo com o defeito, mas a maioria dos reparos é concluída em até 24-48 horas após a aprovação do orçamento."
    },
    {
      q: "Vocês fazem orçamento sem compromisso?",
      a: "Sim! Você pode trazer seu equipamento ou solicitar uma visita técnica para avaliação sem custo de orçamento."
    },
    {
      q: "Qual a garantia dos serviços e produtos?",
      a: "Oferecemos garantia total de 90 dias para serviços de manutenção e garantia contra defeitos de fabricação para toners."
    }
  ];

  return (
    <section id="dúvidas" className="py-24 lg:py-32 bg-[#1a1a1a] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#00AEEF]/8 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#EC008C]/6 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="flex justify-center gap-2 mb-6">
            <span className="w-10 h-1 rounded-full bg-[#00AEEF]" />
            <span className="w-10 h-1 rounded-full bg-[#EC008C]" />
            <span className="w-10 h-1 rounded-full bg-[#FFF200]" />
          </div>
          <span className="text-[#00AEEF] font-bold uppercase tracking-widest text-xs mb-4 block">Tire suas dúvidas</span>
          <h2 className="text-3xl lg:text-5xl font-extrabold text-white mb-4">Perguntas <span className="text-[#FFF200]">Frequentes</span></h2>
          <p className="text-gray-400 max-w-lg mx-auto">Confira as respostas para as dúvidas mais comuns sobre nossos serviços de impressão e manutenção.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            const accentColor = cmykColors[i % cmykColors.length];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="rounded-2xl overflow-hidden border border-white/10 transition-all duration-300"
                style={{
                  backgroundColor: isOpen ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.02)',
                  borderColor: isOpen ? `${accentColor}40` : 'rgba(255,255,255,0.1)',
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full px-8 py-6 flex items-center gap-5 text-left transition-colors"
                >
                  <span
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 text-sm font-black border border-white/10 transition-all duration-300"
                    style={{
                      backgroundColor: isOpen ? `${accentColor}20` : 'transparent',
                      color: isOpen ? accentColor : '#999',
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-bold text-white flex-1">{faq.q}</span>
                  <ChevronDown
                    className="w-5 h-5 shrink-0 transition-all duration-300"
                    style={{
                      color: isOpen ? accentColor : '#666',
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                  />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-6 pl-[5.75rem]">
                        <div className="w-8 h-0.5 rounded-full mb-4" style={{ backgroundColor: accentColor }} />
                        <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm mb-4">Ainda tem dúvidas?</p>
          <a
            href="https://wa.me/5562994685353"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#FFF200] hover:bg-[#e6d900] text-[#1a1a1a] px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-[#FFF200]/20"
          >
            <MessageCircle className="w-5 h-5" />
            Fale conosco pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({ nome: '', telefone: '', mensagem: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const texto = [
      `*NOVO CONTATO - SITE NEW PRINT*`,
      `━━━━━━━━━━━━━━━━━━━━`,
      `*Nome:* ${formData.nome}`,
      `*Telefone:* ${formData.telefone}`,
      `━━━━━━━━━━━━━━━━━━━━`,
      `*Mensagem:*`,
      formData.mensagem,
      `━━━━━━━━━━━━━━━━━━━━`,
      `_Enviado pelo site New Print_`,
    ].join('\n');
    const url = `https://wa.me/5562994685353?text=${encodeURIComponent(texto)}`;
    window.open(url, '_blank');
  };

  const contactInfo = [
    { icon: Mail, label: 'E-mail', value: 'newprintimpressorasanps@gmail.com', href: 'mailto:newprintimpressorasanps@gmail.com', color: '#00AEEF' },
    { icon: Phone, label: 'Telefone', value: '62 99468-5353', href: 'tel:+5562994685353', color: '#EC008C' },
    { icon: MapPin, label: 'Localização', value: 'Anápolis, GO - Atendemos toda região', href: '#', color: '#FFF200' },
  ];

  return (
    <section id="contato" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 flex">
        <span className="flex-1 bg-[#00AEEF]" />
        <span className="flex-1 bg-[#EC008C]" />
        <span className="flex-1 bg-[#FFF200]" />
        <span className="flex-1 bg-[#1a1a1a]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <div className="flex justify-center gap-2 mb-6">
            <span className="w-10 h-1 rounded-full bg-[#00AEEF]" />
            <span className="w-10 h-1 rounded-full bg-[#EC008C]" />
            <span className="w-10 h-1 rounded-full bg-[#FFF200]" />
          </div>
          <span className="text-[#00AEEF] font-bold uppercase tracking-widest text-xs mb-4 block">Entre em contato</span>
          <h2 className="text-3xl lg:text-5xl font-extrabold text-[#1a1a1a] mb-4">Fale <span className="text-[#EC008C]">Conosco</span></h2>
          <p className="text-gray-500 max-w-lg mx-auto">Tem alguma dúvida ou precisa de um orçamento? Nossa equipe está pronta para te atender.</p>
        </div>

        {/* Cards de contato */}
        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          {contactInfo.map((info, i) => (
            <motion.a
              key={i}
              href={info.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="group flex flex-col items-center text-center p-8 rounded-2xl border border-gray-200 hover:border-transparent hover:shadow-xl transition-all duration-300 bg-white"
              style={{ '--card-color': info.color } as React.CSSProperties}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = info.color + '40';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = '';
              }}
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                style={{ backgroundColor: info.color + '15' }}
              >
                <info.icon className="w-7 h-7" style={{ color: info.color }} />
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">{info.label}</p>
              <p className="text-sm font-semibold text-[#1a1a1a] break-all">{info.value}</p>
            </motion.a>
          ))}
        </div>

        {/* Formulário */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white p-8 md:p-12 rounded-2xl border border-gray-200 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 flex">
              <span className="flex-1 bg-[#00AEEF]" />
              <span className="flex-1 bg-[#EC008C]" />
              <span className="flex-1 bg-[#FFF200]" />
              <span className="flex-1 bg-[#1a1a1a]" />
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-2">Envie sua mensagem</h3>
              <p className="text-gray-500 text-sm mb-8">Preencha o formulário abaixo e retornaremos em breve.</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Nome Completo</label>
                    <input
                      type="text"
                      required
                      value={formData.nome}
                      onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                      placeholder="Como podemos te chamar?"
                      className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 text-[#1a1a1a] placeholder:text-gray-400 focus:border-[#00AEEF] focus:ring-0 focus:bg-white transition-all text-sm outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Telefone</label>
                    <input
                      type="tel"
                      required
                      value={formData.telefone}
                      onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                      placeholder="(62) 99999-9999"
                      className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 text-[#1a1a1a] placeholder:text-gray-400 focus:border-[#EC008C] focus:ring-0 focus:bg-white transition-all text-sm outline-none"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Mensagem</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.mensagem}
                    onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                    placeholder="Descreva sua necessidade (ex: Recarga de toner HP 105A)"
                    className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 text-[#1a1a1a] placeholder:text-gray-400 focus:border-[#FFF200] focus:ring-0 focus:bg-white transition-all text-sm resize-none outline-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#FFF200] hover:bg-[#e6d900] text-[#1a1a1a] py-4 rounded-xl font-bold shadow-lg shadow-[#FFF200]/20 transition-all flex items-center justify-center gap-2"
                >
                  Enviar Mensagem
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-[#1a1a1a] text-white pt-20 pb-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 items-start">
        <div className="space-y-6 flex flex-col items-start pt-1">
          <a href="#início" className="-ml-2">
            <img
              src="/logo-newprint.png"
              alt="New Print - Soluções em Impressão"
              className="h-36 w-auto object-contain brightness-0 invert"
            />
          </a>
          <p className="text-gray-400 text-sm leading-relaxed">
            Sua parceira ideal para manutenção de impressoras e suprimentos. Qualidade e compromisso em cada serviço.
          </p>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/newprintimpressoras/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#00AEEF] transition-colors" aria-label="Instagram">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#00AEEF] transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-8">Links Rápidos</h4>
          <ul className="space-y-4">
            {['Início', 'Serviços', 'Sobre', 'Contato'].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-[#FFF200] text-sm transition-colors">{item}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-8">Contato</h4>
          <ul className="space-y-6">
            <li className="flex items-center gap-4 text-sm text-gray-400">
              <Mail className="w-5 h-5 text-[#FFF200] shrink-0" />
              <a href="mailto:newprintimpressorasanps@gmail.com" className="hover:text-white transition-colors">newprintimpressorasanps@gmail.com</a>
            </li>
            <li className="flex items-center gap-4 text-sm text-gray-400">
              <Phone className="w-5 h-5 text-[#FFF200] shrink-0" />
              <a href="tel:+5562994685353" className="hover:text-white transition-colors">62 99468-5353</a>
            </li>
            <li className="flex items-center gap-4 text-sm text-gray-400">
              <MapPin className="w-5 h-5 text-[#FFF200] shrink-0" />
              Anápolis, GO
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-8">Horário</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex justify-between">
              <span className="text-gray-400">Seg - Sex:</span>
              <span className="font-bold">08:00 - 18:00</span>
            </li>
            <li className="flex justify-between">
              <span className="text-gray-400">Sábado:</span>
              <span className="font-bold">08:00 - 12:00</span>
            </li>
            <li className="flex justify-between">
              <span className="text-gray-400">Domingo:</span>
              <span className="text-[#FFF200] font-bold">Fechado</span>
            </li>
          </ul>
        </div>
      </div>
      <CalibrationBar />
      <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-xs uppercase tracking-widest font-bold text-gray-500">
        <p>© {new Date().getFullYear()} New Print - Soluções em Impressão. Todos os direitos reservados.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">Privacidade</a>
          <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <CalibrationBar />
      <Brands />
      <CalibrationBar />
      <About />
      <CalibrationBar />
      <Services />
      <CalibrationBar />
      <WhyChooseUs />
      
      <section className="relative py-24 lg:py-32 bg-[#1a1a1a] overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 flex">
          <span className="flex-1 bg-[#00AEEF]" />
          <span className="flex-1 bg-[#EC008C]" />
          <span className="flex-1 bg-[#FFF200]" />
          <span className="flex-1 bg-[#1a1a1a]" />
        </div>
        <div className="absolute top-20 -left-20 w-72 h-72 bg-[#00AEEF]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -right-20 w-80 h-80 bg-[#EC008C]/8 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#FFF200]/5 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="flex justify-center gap-2 mb-8">
            <span className="w-10 h-1 rounded-full bg-[#00AEEF]" />
            <span className="w-10 h-1 rounded-full bg-[#EC008C]" />
            <span className="w-10 h-1 rounded-full bg-[#FFF200]" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
            Pronto para imprimir com <span className="text-[#FFF200]">qualidade</span>?
          </h2>
          <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
            Solicite seu orçamento agora mesmo e descubra por que somos a escolha certa em soluções de impressão.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5562994685353"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#FFF200] hover:bg-[#e6d900] text-[#1a1a1a] px-10 py-5 rounded-2xl font-bold transition-all shadow-lg shadow-[#FFF200]/20"
            >
              <MessageCircle className="w-6 h-6" />
              Falar com um Especialista
            </a>
            <a
              href="#contato"
              className="inline-flex items-center justify-center gap-3 border-2 border-white/20 text-white hover:bg-white/10 px-10 py-5 rounded-2xl font-bold transition-all"
            >
              Enviar Mensagem
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
      
      <FAQ />
      <Contact />
      <Footer />
      
      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/5562994685353" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl shadow-green-500/40 hover:scale-110 transition-transform flex items-center justify-center"
      >
        <MessageCircle className="w-8 h-8" />
      </a>
    </div>
  );
}
