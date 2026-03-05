import React, { useRef, useState, useCallback, useEffect } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import Card from '../ui/Card';
import SectionWrapper from '../ui/SectionWrapper';

const Team = () => {
  const carouselRef = useRef(null);
  const containerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [currentX, setCurrentX] = useState(0);
  const x = useMotionValue(0);

  const specialists = [
    {
      name: 'Dr. Carlos Mendes',
      specialty: 'Cardiologista',
      crm: 'CRM/CE 12345',
      photo: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80',
      bio: 'Especialista em cardiologia com 15 anos de experiência, focado em prevenção e tratamento de doenças cardiovasculares.',
    },
    {
      name: 'Dra. Amanda Souza',
      specialty: 'Clínico Geral',
      crm: 'CRM/CE 23456',
      photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80',
      bio: 'Atendimento primário e preventivo para toda a família, com abordagem humanizada e integral.',
    },
    {
      name: 'Dr. Ricardo Lima',
      specialty: 'Dermatologista',
      crm: 'CRM/CE 34567',
      photo: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&q=80',
      bio: 'Especialista em dermatologia clínica e estética, com tratamento personalizado para cada paciente.',
    },
    {
      name: 'Dra. Juliana Costa',
      specialty: 'Especialista em Estética',
      crm: 'CRM/CE 45678',
      photo: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80',
      bio: 'Profissional especializada em tratamentos estéticos faciais e corporais com tecnologia avançada.',
    },
    {
      name: 'Dr. Pedro Alves',
      specialty: 'Fisioterapeuta',
      crm: 'CRM/CE 56789',
      photo: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&q=80',
      bio: 'Especialista em reabilitação física e tratamento de movimentos, focado em recuperação funcional.',
    },
    {
      name: 'Dra. Mariana Santos',
      specialty: 'Fonoaudióloga',
      crm: 'CRM/CE 67890',
      photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
      bio: 'Terapeuta da fala, linguagem e comunicação com atendimento especializado para todas as idades.',
    },
    {
      name: 'Dra. Carla Oliveira',
      specialty: 'Nutricionista',
      crm: 'CRM/CE 78901',
      photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80',
      bio: 'Orientação alimentar personalizada para promover saúde e qualidade de vida através da nutrição.',
    },
    {
      name: 'Dr. Fernando Costa',
      specialty: 'Nutrólogo',
      crm: 'CRM/CE 89012',
      photo: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80',
      bio: 'Especialista em tratamento de doenças relacionadas à nutrição e metabolismo.',
    },
    {
      name: 'Dra. Beatriz Rodrigues',
      specialty: 'Pediatra',
      crm: 'CRM/CE 90123',
      photo: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80',
      bio: 'Dedicada ao cuidado infantil, com abordagem humanizada e foco no desenvolvimento saudável.',
    },
    {
      name: 'Dr. Lucas Ferreira',
      specialty: 'Psicólogo',
      crm: 'CRM/CE 01234',
      photo: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&q=80',
      bio: 'Cuidado da saúde mental e emocional com terapia personalizada para cada paciente.',
    },
  ];

  // Duplicate array for infinite scroll effect
  const duplicatedSpecialists = [...specialists, ...specialists];
  const cardWidth = 288 + 24; // card width + gap
  const totalWidth = cardWidth * specialists.length;

  // Auto-scroll animation using requestAnimationFrame
  useEffect(() => {
    let animationFrameId;
    let startTime;
    const speed = totalWidth / 30000; // pixels per millisecond (30 seconds for full cycle)

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
          className="relative overflow-hidden"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
        >
          {/* Scrollable Container with Infinite Animation */}
          <motion.div
            ref={carouselRef}
            className="flex gap-6 pb-6 pt-2"
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

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-12 p-8 bg-white rounded-2xl shadow-lg text-center"
      >
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          Agende sua consulta
        </h3>
        <p className="text-secondary mb-6 max-w-2xl mx-auto">
          Nossa equipe está sempre pronta para atendê-lo com dedicação e
          profissionalismo. Entre em contato e conheça nosso atendimento
          diferenciado.
        </p>
        <button
          onClick={() => {
            const element = document.getElementById('location');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
        >
          Agendar Consulta
        </button>
      </motion.div>
    </SectionWrapper>
  );
};

export default Team;
