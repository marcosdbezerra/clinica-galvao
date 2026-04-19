import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Heart, Target } from 'lucide-react';
import SectionWrapper from '../ui/SectionWrapper';
import ceosPhoto from '../../assets/ceos.jpg';

const AboutCEO = () => {
  const values = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Cuidado Humanizado',
      description: 'Cada paciente é único e merece atenção personalizada',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Equipe Multidisciplinar',
      description: 'Profissionais integrados para cuidado completo',
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Excelência Clínica',
      description: 'Compromisso com os mais altos padrões de qualidade',
    },
  ];

  return (
    <SectionWrapper id="sobre" bgColor="white">
      <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">
        {/* Left Column - Photo (Desktop) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="order-2 lg:order-1 relative"
        >
          {/* Background decoration */}
          <div className="absolute -top-4 -left-4 w-48 h-48 md:w-64 md:h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-4 -right-4 w-48 h-48 md:w-64 md:h-64 bg-primary/5 rounded-full blur-3xl" />

          {/* Main photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative z-10 rounded-2xl overflow-hidden shadow-2xl"
          >
            <img
              src={ceosPhoto}
              alt="Dr. Pedro Henrique Galvão e Dra. Amanda Galvão - Diretores da Clínica Galvão"
              className="w-full h-auto object-cover"
            />

            {/* Credentials badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute bottom-3 left-3 right-3 md:bottom-6 md:left-6 md:right-6 bg-white/95 backdrop-blur-sm p-3 md:p-4 rounded-xl shadow-lg"
            >
              <div className="flex items-center gap-2 md:gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] md:text-xs text-secondary font-medium mb-0.5 md:mb-1">Liderança Experiente</p>
                  <p className="text-xs md:text-sm font-bold text-gray-900 truncate">
                    Dr. Pedro Henrique & Dra. Amanda
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right Column - Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="order-1 lg:order-2 space-y-3 md:space-y-4"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-semibold"
          >
            <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-primary rounded-full animate-pulse" />
            Nossa Liderança
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
          >
            Visão de transformar vidas através da{' '}
            <span className="text-primary">saúde integrativa</span>
          </motion.h2>

          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-3 md:space-y-4"
          >
            <p className="text-base md:text-lg text-secondary leading-relaxed">
              Sob a liderança do <strong className="text-gray-900">Dr. Pedro Henrique Galvão</strong>, especialista em Nutrologia e Geriatria com mais de 10 anos de experiência, e da <strong className="text-gray-900">Dra. Amanda Galvão</strong>, especialista em farmácia estética e botox, a Clínica Galvão combina ciência de ponta com acolhimento genuíno.
            </p>
            <p className="text-base md:text-lg text-secondary leading-relaxed">
              Juntos, eles transformam um espaço onde a medicina preventiva, o cuidado estético e o bem-estar se encontram para oferecer uma experiência de saúde verdadeiramente integral.
            </p>
          </motion.div>

          {/* Dr. Pedro Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-r from-primary/5 to-transparent p-4 md:p-6 rounded-2xl border-l-4 border-primary"
          >
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3 flex items-center gap-2">
              <Target className="w-4 h-4 md:w-5 md:h-5 text-primary" />
              Dr. Pedro Henrique Galvão
            </h3>
            <p className="text-sm md:text-base text-secondary leading-relaxed mb-1.5 md:mb-2">
              <strong className="text-gray-900">Nutrologia | Geriatria</strong> • CRM/CE 14871
            </p>
            <p className="text-sm md:text-base text-secondary leading-relaxed">
              Com vasta experiência em medicina preventiva e cuidado do idoso, o Dr. Pedro dedica sua carreira a promover longevidade saudável e qualidade de vida através de abordagens integrativas que tratam o paciente como um todo.
            </p>
          </motion.div>

          {/* Dra. Amanda Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="bg-gradient-to-r from-primary/5 to-transparent p-4 md:p-6 rounded-2xl border-l-4 border-primary"
          >
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3 flex items-center gap-2">
              <Award className="w-4 h-4 md:w-5 md:h-5 text-primary" />
              Dra. Amanda Galvão
            </h3>
            <p className="text-sm md:text-base text-secondary leading-relaxed mb-1.5 md:mb-2">
              <strong className="text-gray-900">Farmácia Estética | BOTOX</strong> • CRF/CE 8134
            </p>
            <p className="text-sm md:text-base text-secondary leading-relaxed">
              Especialista em procedimentos estéticos avançados, a Dra. Amanda combina conhecimento técnico com sensibilidade artística para realçar a beleza natural de cada paciente, sempre com foco em segurança e resultados naturais.
            </p>
          </motion.div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 pt-3 md:pt-4"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="text-center p-3 md:p-4 bg-gray-50 rounded-xl"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mx-auto mb-2 md:mb-3">
                  {value.icon}
                </div>
                <h4 className="font-bold text-gray-900 text-xs md:text-sm mb-1">{value.title}</h4>
                <p className="text-[10px] md:text-xs text-secondary leading-tight">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default AboutCEO;
