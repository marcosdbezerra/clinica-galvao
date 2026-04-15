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
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left Column - Photo (Desktop) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="order-2 lg:order-1 relative"
        >
          {/* Background decoration */}
          <div className="absolute -top-6 -left-6 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

          {/* Main photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1.15 }}
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
              className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-secondary font-medium mb-1">Liderança Experiente</p>
                  <p className="text-sm font-bold text-gray-900 truncate">
                    Dr. Pedro Henrique Galvão & Dra. Amanda Galvão
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
          className="order-1 lg:order-2 space-y-4"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold"
          >
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Nossa Liderança
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
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
            className="space-y-4"
          >
            <p className="text-lg text-secondary leading-relaxed">
              Sob a liderança do <strong className="text-gray-900">Dr. Pedro Henrique Galvão</strong>, especialista em Nutrologia e Geriatria com mais de 10 anos de experiência, e da <strong className="text-gray-900">Dra. Amanda Galvão</strong>, Farmacêutica Esteta renomada, a Clínica Galvão combina ciência de ponta com acolhimento genuíno.
            </p>
            <p className="text-lg text-secondary leading-relaxed">
              Juntos, eles transformam um espaço onde a medicina preventiva, o cuidado estético e o bem-estar se encontram para oferecer uma experiência de saúde verdadeiramente integral.
            </p>
          </motion.div>

          {/* Dr. Pedro Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-r from-primary/5 to-transparent p-6 rounded-2xl border-l-4 border-primary"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
              <Target className="w-5 h-5 text-primary" />
              Dr. Pedro Henrique Galvão
            </h3>
            <p className="text-secondary leading-relaxed mb-2">
              <strong className="text-gray-900">Nutrólogo | Geriatra</strong> • CRM/CE 14871
            </p>
            <p className="text-secondary leading-relaxed">
              Com vasta experiência em medicina preventiva e cuidado do idoso, o Dr. Pedro dedica sua carreira a promover longevidade saudável e qualidade de vida através de abordagens integrativas que tratam o paciente como um todo.
            </p>
          </motion.div>

          {/* Dra. Amanda Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="bg-gradient-to-r from-primary/5 to-transparent p-6 rounded-2xl border-l-4 border-primary"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
              <Award className="w-5 h-5 text-primary" />
              Dra. Amanda Galvão
            </h3>
            <p className="text-secondary leading-relaxed mb-2">
              <strong className="text-gray-900">Farmacêutica Esteta</strong> • CRF/CE 8134
            </p>
            <p className="text-secondary leading-relaxed">
              Especialista em procedimentos estéticos avançados, a Dra. Amanda combina conhecimento técnico com sensibilidade artística para realçar a beleza natural de cada paciente, sempre com foco em segurança e resultados naturais.
            </p>
          </motion.div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="text-center p-4 bg-gray-50 rounded-xl"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mx-auto mb-3">
                  {value.icon}
                </div>
                <h4 className="font-bold text-gray-900 text-sm mb-1">{value.title}</h4>
                <p className="text-xs text-secondary">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default AboutCEO;
