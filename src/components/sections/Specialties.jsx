import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Heart,
  Stethoscope,
  Baby,
  User,
  ChevronRight,
  ChevronDown,
  Apple,
  Smile,
  Dumbbell,
  Sparkles,
  Brain,
  Activity,
  Scan,
  Briefcase,
  Car,
} from 'lucide-react';
import Card from '../ui/Card';
import SectionWrapper from '../ui/SectionWrapper';

const Specialties = () => {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size for responsive behavior
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const specialties = [
    {
      icon: <Heart className="w-8 h-8" />,
      name: 'Cardiologia',
      description: 'Saúde do coração e sistema cardiovascular.',
      color: 'bg-red-100 text-red-600',
    },
    {
      icon: <User className="w-8 h-8" />,
      name: 'Clínico Geral',
      description: 'Atendimento primário e preventivo para toda família.',
      color: 'bg-teal-100 text-teal-600',
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      name: 'Dermatologia',
      description: 'Cuidados especializados da pele, cabelo e unhas.',
      color: 'bg-pink-100 text-pink-600',
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      name: 'Estética',
      description: 'Tratamentos estéticos faciais e corporais.',
      color: 'bg-fuchsia-100 text-fuchsia-600',
    },
    {
      icon: <Dumbbell className="w-8 h-8" />,
      name: 'Fisioterapia',
      description: 'Reabilitação física e tratamento de movimentos.',
      color: 'bg-orange-100 text-orange-600',
    },
    {
      icon: <Smile className="w-8 h-8" />,
      name: 'Fonoaudiologia',
      description: 'Terapia da fala, linguagem e comunicação.',
      color: 'bg-violet-100 text-violet-600',
    },
    {
      icon: <Apple className="w-8 h-8" />,
      name: 'Nutrição',
      description: 'Orientação alimentar personalizada para sua saúde.',
      color: 'bg-green-100 text-green-600',
    },
    {
      icon: <Stethoscope className="w-8 h-8" />,
      name: 'Nutrologia',
      description: 'Tratamento de doenças relacionadas à nutrição e metabolismo.',
      color: 'bg-emerald-100 text-emerald-600',
    },
    {
      icon: <Baby className="w-8 h-8" />,
      name: 'Pediatria',
      description: 'Atendimento completo para crianças e adolescentes.',
      color: 'bg-blue-100 text-blue-600',
    },
    {
      icon: <Brain className="w-8 h-8" />,
      name: 'Psicologia',
      description: 'Cuidado da saúde mental e emocional.',
      color: 'bg-indigo-100 text-indigo-600',
    },
    {
      icon: <Activity className="w-8 h-8" />,
      name: 'Psiquiatria',
      description: 'Diagnóstico e tratamento de transtornos mentais.',
      color: 'bg-purple-100 text-purple-600',
    },
    {
      icon: <Baby className="w-8 h-8" />,
      name: 'Geriatria',
      description: 'Cuidados especializados para a saúde do idoso.',
      color: 'bg-amber-100 text-amber-600',
    },
    {
      icon: <Stethoscope className="w-8 h-8" />,
      name: 'Ginecologia',
      description: 'Saúde integral da mulher em todas as fases da vida.',
      color: 'bg-rose-100 text-rose-600',
    },
    {
      icon: <Scan className="w-8 h-8" />,
      name: 'Ultrassonografia',
      description: 'Diagnóstico por imagem com tecnologia avançada.',
      color: 'bg-cyan-100 text-cyan-600',
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      name: 'Medicina do Trabalho',
      description: 'Saúde ocupacional e prevenção de doenças profissionais.',
      color: 'bg-slate-100 text-slate-600',
    },
    {
      icon: <Car className="w-8 h-8" />,
      name: 'Medicina do Tráfego',
      description: 'Avaliação de aptidão para condutores.',
      color: 'bg-lime-100 text-lime-600',
    },
  ];

  // Determine how many items to show based on screen size
  const itemsToShow = isMobile ? 4 : 8;
  const hasMore = specialties.length > itemsToShow;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <SectionWrapper id="specialties" bgColor="light">
      <div className="text-center mb-12 md:mb-16">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4"
        >
          Nossas Especialidades
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
        >
          Cuidados completos para sua{' '}
          <span className="text-primary">saúde integral</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-secondary max-w-2xl mx-auto"
        >
          Contamos com uma equipe multidisciplinar pronta para oferecer o melhor
          atendimento em diversas especialidades médicas.
        </motion.p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {specialties.map((specialty, index) => {
          const isVisible = showAll || index < itemsToShow;
          return (
            <motion.div
              key={specialty.name}
              variants={itemVariants}
              initial={isVisible ? "hidden" : false}
              animate={isVisible ? "visible" : "hidden"}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              style={{ display: isVisible ? 'block' : 'none' }}
            >
              <Card className="h-full group cursor-pointer">
                <div className="flex flex-col h-full">
                  <div className={`w-16 h-16 ${specialty.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {specialty.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">
                    {specialty.name}
                  </h3>
                  <p className="text-secondary text-sm leading-relaxed mb-4 flex-1">
                    {specialty.description}
                  </p>
                  <button
                    onClick={() => {
            const element = document.getElementById('location');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }}
                    className="flex items-center text-primary font-semibold text-sm group-hover:gap-2 transition-all duration-300"
                  >
                    Saiba mais
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Show More/Less Button */}
      {hasMore && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            {showAll ? 'Mostrar Menos' : 'Mostrar Mais'}
            <motion.div
              animate={{ rotate: showAll ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="w-5 h-5" />
            </motion.div>
          </button>
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-center mt-6"
      >
        <button
          onClick={() => {
            const element = document.getElementById('location');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-all duration-300 shadow-md hover:shadow-lg border-2 border-primary/20"
        >
          Agendar Consulta
          <ChevronRight className="w-5 h-5" />
        </button>
      </motion.div>
    </SectionWrapper>
  );
};

export default Specialties;
