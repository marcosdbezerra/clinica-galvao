import { useRef, useState, useCallback, useEffect } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import SectionWrapper from '../ui/SectionWrapper';
import amandaGalvao from '../../assets/team/amanda-galvao.png';
import amandaSales from '../../assets/team/amanda-sales.png';
import arturGadelha from '../../assets/team/artur-gadelha.png';
import eduardoSoares from '../../assets/team/eduardo-soares.png';
import flavioStudart from '../../assets/team/flavio-studart.png';
import laylaMenezes from '../../assets/team/layla-menezes.png';
import liviaMota from '../../assets/team/livia-mota.png';
import mariliaDantas from '../../assets/team/marilia-dantas.png';
import moniqueChaves from '../../assets/team/monique-chaves.png';
import oliviaMagalhaes from '../../assets/team/olivia-magalhaes.png';
import phGalvao from '../../assets/team/pedro-henrique-galvao.png';
import renataBraga from '../../assets/team/renata-braga.png';
import romeniaOliveira from '../../assets/team/romenia-oliveira.png';
import sherlianeFurtado from '../../assets/team/sherliane-furtado.png';
import photoMock from '../../assets/team/photo-mock.jpg';

const Team = () => {
  const carouselRef = useRef(null);
  const containerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [currentX, setCurrentX] = useState(0);
  const x = useMotionValue(0);

  const specialists = [
    {
      name: 'Dra. Amanda Galvão',
      specialty: 'Farmácia Estética',
      crm: 'CRF/CE 8134',
      photo: amandaGalvao,
      bio: 'Especialista em procedimentos estéticos avançados, focada em saúde estética e bem-estar.',
    },
    {
      name: 'Dra. Amanda Sales',
      specialty: 'Nutrição',
      crm: 'CRN/CE 118782',
      photo: amandaSales,
      bio: 'Focada em reeducação alimentar e nutrição clínica, promovendo saúde e qualidade de vida.',
    },
    {
      name: 'Dr. Artur Gadelha',
      specialty: 'Clínica Médica',
      crm: 'CRM/CE 23594',
      photo: arturGadelha,
      bio: 'Atendimento médico integral e preventivo, para diagnóstico e acompanhamento geral da saúde.',
    },
    {
      name: 'Dr. Davi Candeira',
      specialty: 'Dermatologia',
      crm: 'CRM/CE 23691',
      photo: photoMock,
      bio: 'Especialista no diagnóstico e tratamento de doenças da pele, cabelos e unhas.',
    },
    {
      name: 'Dr. Eduardo Soares',
      specialty: 'Ultrassonografia',
      crm: 'CRM/CE 12578',
      photo: eduardoSoares,
      bio: 'Especialista em diagnóstico por imagem, realizando exames de ultrassonografia com precisão.',
    },
    {
      name: 'Dr. Flávio Studart',
      specialty: 'Cardiologia',
      crm: 'CRM/CE 11583',
      photo: flavioStudart,
      bio: 'Especialista em saúde do coração, com foco na prevenção, diagnóstico e tratamentos cardiovasculares.',
    },
    {
      name: 'Dr. Gilmar Rodrigues',
      specialty: 'Psiquiatria',
      crm: 'CRM/CE 27182',
      photo: photoMock,
      bio: 'Médico dedicado ao diagnóstico e tratamento de transtornos mentais, buscando o equilíbrio e bem-estar.',
    },
    {
      name: 'Dra. Jamille Morais',
      specialty: 'Nutrição Infantil',
      crm: 'CRN/CE 116593',
      photo: photoMock,
      bio: 'Nutricionista especializada no cuidado alimentar de crianças, introdução alimentar e hábitos saudáveis.',
    },
    {
      name: 'Dra. Layla Menezes',
      specialty: 'Psicologia',
      crm: 'CRP/CE 1118405',
      photo: laylaMenezes,
      bio: 'Cuidado da saúde mental e emocional através de psicoterapia personalizada, autoconhecimento e equilíbrio.',
    },
    {
      name: 'Dra. Letícia Facundo',
      specialty: '',
      crm: '',
      photo: photoMock,
      bio: '',
    },
    {
      name: 'Dra. Lívia Mota',
      specialty: 'Pediatria',
      crm: 'CRM/CE 19833',
      photo: liviaMota,
      bio: 'Atendimento especializado para bebês e crianças, focada no desenvolvimento infantil saudável.',
    },
    {
      name: 'Dra. Marília Dantas',
      specialty: 'Psicologia do Trânsito',
      crm: 'CRP/CE 1105603',
      photo: mariliaDantas,
      bio: 'Psicóloga perita especializada em avaliações psicológicas e análise do comportamento no trânsito.',
    },
    {
      name: 'Dra. Monique Chaves',
      specialty: 'Clínica Médica',
      crm: 'CRM/CE 30209',
      photo: moniqueChaves,
      bio: 'Atendimento médico integral e preventivo, para diagnóstico e acompanhamento geral da saúde.',
    },
    {
      name: 'Dra. Olívia Magalhães',
      specialty: 'Medicina do Trabalho | Medicina do Tráfego | Ginecologia',
      crm: 'CRM/CE 18114',
      photo: oliviaMagalhaes,
      bio: 'Atuação multidisciplinar em saúde ocupacional, medicina do tráfego e cuidados integrais à saúde da mulher.',
    },
    {
      name: 'Dr. Pedro Henrique Galvão',
      specialty: 'Nutrologia | Geriatria',
      crm: 'CRM/CE 14871',
      photo: phGalvao,
      bio: 'Focado em tratamentos relacionados à nutrição e no cuidado especializado para a saúde do idoso.',
    },
    {
      name: 'Dra. Renata Braga',
      specialty: 'Psicologia',
      crm: 'CRP/CE 1115683',
      photo: renataBraga,
      bio: 'Apoio psicológico e psicoterapia para o tratamentos emocionais, visando a saúde mental e qualidade de vida.',
    },
    {
      name: 'Dra. Romênia Oliveira',
      specialty: 'Fonoaudiologia',
      crm: 'CRFA 8-10.978-3',
      photo: romeniaOliveira,
      bio: 'Especialista em comunicação, fala, audição e aprimoramento das funções orofaciais.',
    },
    {
      name: 'Dra. Sherliane Furtado',
      specialty: 'Fisioterapia',
      crm: 'CREFITO 405612-F',
      photo: sherlianeFurtado,
      bio: 'Especialista em reabilitação física e tratamento de dores, focada na recuperação funcional e mobilidade.',
    }
  ];

  // Duplicate array for infinite scroll effect
  const duplicatedSpecialists = [...specialists, ...specialists];
  const cardWidth = 288 + 24; // card width + gap
  const totalWidth = cardWidth * specialists.length;

  // Auto-scroll animation using requestAnimationFrame
  useEffect(() => {
    let animationFrameId;
    let startTime;
    const speed = totalWidth / 60000; // pixels per millisecond (30 seconds for full cycle)

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;

      if (!isPaused && !isDragging) {
        setCurrentX((prevX) => {
          const newX = prevX - (16.67 * speed); // ~60fps, so ~16.67ms per frame
          // Wrap around for infinite scroll
          if (newX <= -totalWidth) {
            return newX + totalWidth;
          }
          return newX;
        });
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isPaused, isDragging, totalWidth]);

  // Update motion value when currentX changes
  useEffect(() => {
    x.set(currentX);
  }, [currentX, x]);

  const handleDragStart = useCallback(() => {
    setIsDragging(true);
  }, []);

  const handleDrag = useCallback((_, info) => {
    x.set(currentX + info.offset.x);
  }, [currentX, x]);

  const handleDragEnd = useCallback((_, info) => {
    setIsDragging(false);
    const dragDistance = info.offset.x;
    const newX = currentX + dragDistance;

    // Normalize to keep within bounds
    let normalizedX = newX;
    if (normalizedX < -totalWidth) {
      normalizedX += totalWidth;
    } else if (normalizedX > 0) {
      normalizedX -= totalWidth;
    }

    setCurrentX(normalizedX);
  }, [currentX, totalWidth]);

  const handleMouseEnter = useCallback(() => {
    if (!isDragging) {
      setIsPaused(true);
    }
  }, [isDragging]);

  const handleMouseLeave = useCallback(() => {
    if (!isDragging) {
      setIsPaused(false);
    }
  }, [isDragging]);

  return (
    <SectionWrapper id="team" bgColor="light">
      {/* Section Header */}
      <div className="text-center mb-12 md:mb-16">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4"
        >
          Nossa Equipe
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
        >
          Profissionais dedicados ao seu{' '}
          <span className="text-primary">cuidado</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-secondary max-w-2xl mx-auto"
        >
          Conheça nossa equipe de especialistas qualificados, todos comprometidos
          com sua saúde e bem-estar através de atendimento humanizado e personalizado.
        </motion.p>
      </div>

      {/* Specialists Section - Infinite Auto-Scroll Carousel */}
      <div className="mb-16">
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3"
        >
          <span className="w-12 h-1 bg-primary rounded-full" />
          Especialistas
        </motion.h3>

        {/* Carousel Container */}
        <div
          ref={containerRef}
          className="relative overflow-hidden -mx-[calc(50vw-50%)] md:-mx-[calc(50vw-50%-8px)]"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
        >
          {/* Scrollable Container with Infinite Animation */}
          <motion.div
            ref={carouselRef}
            className="flex gap-6 pb-6 pt-2 px-4 sm:px-6 lg:px-8"
            style={{
              x,
              width: 'max-content',
              cursor: 'inherit',
            }}
            drag="x"
            dragConstraints={{
              left: currentX - totalWidth / 3,
              right: currentX + totalWidth / 3
            }}
            dragElastic={0.1}
            dragMomentum={false}
            onDragStart={handleDragStart}
            onDrag={handleDrag}
            onDragEnd={handleDragEnd}
          >
            {duplicatedSpecialists.map((specialist, index) => (
              <div
                key={`${specialist.name}-${index}`}
                className="flex-shrink-0 w-72"
                style={{ cursor: 'inherit' }}
              >
                <div className="h-full text-center group bg-white rounded-2xl shadow-lg p-6 transition-shadow duration-300 hover:shadow-xl" style={{ cursor: 'inherit' }}>
                  <div className="relative mb-4 mx-auto w-28 h-28" style={{ cursor: 'inherit' }}>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full transform group-hover:scale-110 transition-transform duration-300" />
                    <img
                      src={specialist.photo}
                      alt={specialist.name}
                      className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-lg pointer-events-none"
                      draggable={false}
                    />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors duration-300 pointer-events-none">
                    {specialist.name}
                  </h4>
                  <p className="text-primary font-bold text-sm mb-2 pointer-events-none">
                    {specialist.specialty}
                  </p>
                  <p className="text-xs text-secondary mb-3 font-semibold pointer-events-none">{specialist.crm}</p>
                  <p className="text-sm text-secondary leading-relaxed line-clamp-3 pointer-events-none">
                    {specialist.bio}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Team;
