import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, X } from 'lucide-react';
import Card from '../ui/Card';
import SectionWrapper from '../ui/SectionWrapper';

const Environment = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  const galleryImages = [
    {
      url: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80',
      highResUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1920&q=90',
      title: 'Recepção Moderna',
      description: 'Ambiente acolhedor e confortável para sua chegada',
      category: 'Área Comum',
    },
    {
      url: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80',
      highResUrl: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1920&q=90',
      title: 'Consultórios Equipados',
      description: 'Espaços modernos com tecnologia de ponta',
      category: 'Consultório',
    },
    {
      url: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&q=80',
      highResUrl: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=1920&q=90',
      title: 'Sala de Espera',
      description: 'Conforto e tranquilidade enquanto você aguarda',
      category: 'Área de Espera',
    },
    {
      url: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&q=80',
      highResUrl: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1920&q=90',
      title: 'Equipamentos Modernos',
      description: 'Tecnologia avançada para diagnósticos precisos',
      category: 'Área Técnica',
    },
    {
      url: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=800&q=80',
      highResUrl: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=1920&q=90',
      title: 'Corredores Acessíveis',
      description: 'Facilidade de locomoção para todos os pacientes',
      category: 'Circulação',
    },
    {
      url: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&q=80',
      highResUrl: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=1920&q=90',
      title: 'Fachada',
      description: 'Localização privilegiada e fácil acesso',
      category: 'Externo',
    },
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setImageLoaded(false);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseLightbox = () => {
    setSelectedImage(null);
    setImageLoaded(false);
    document.body.style.overflow = 'unset';
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleCloseLightbox();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      handleCloseLightbox();
    }
  };

  return (
    <SectionWrapper id="environment" bgColor="white">
      <div className="text-center mb-12 md:mb-16">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4"
        >
          Nosso Ambiente
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
        >
          Um espaço pensado para seu{' '}
          <span className="text-primary">bem-estar</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-secondary max-w-2xl mx-auto"
        >
          Conheça nossa infraestrutura moderna e acessível, projetada para oferecer
          o máximo de conforto e segurança durante seu atendimento.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {galleryImages.map((image, index) => (
          <motion.div
            key={image.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            className="group relative overflow-hidden rounded-2xl shadow-lg cursor-zoom-in"
            onClick={() => handleImageClick(image)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleImageClick(image);
              }
            }}
          >
            {/* Image */}
            <div className="aspect-[4/3] overflow-hidden pointer-events-none">
              <motion.img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
                draggable={false}
              />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 pointer-events-none">
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                  {image.category}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-1">{image.title}</h3>
              <p className="text-sm text-gray-200">{image.description}</p>
            </div>

            {/* Category Badge - Always visible on hover */}
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <span className="text-sm font-bold text-primary text-center block">{image.category}</span>
            </div>

            {/* Zoom Icon on Hover */}
            <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <svg
                className="w-5 h-5 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <circle cx="11" cy="11" r="8" strokeWidth="2" />
                <path d="M21 21l-4.35-4.35" strokeWidth="2" strokeLinecap="round" />
                <path d="M11 8v6M8 11h6" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-sm"
            onClick={handleBackdropClick}
            onKeyDown={handleKeyDown}
            role="dialog"
            aria-modal="true"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-6xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={handleCloseLightbox}
                className="absolute -top-12 md:-top-16 right-0 p-2 text-white hover:text-primary transition-colors duration-300 z-10"
                aria-label="Fechar imagem"
              >
                <X className="w-8 h-8" />
              </button>

              {/* Image Container */}
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl">
                {/* Colored Border */}
                <div className="p-[3px] rounded-2xl bg-gradient-to-br from-primary to-primary/60">
                  <div className="relative w-full bg-gray-900 rounded-[14px] overflow-hidden">
                    {!imageLoaded && (
                      <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
                        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
                      </div>
                    )}
                    <img
                      src={selectedImage.highResUrl}
                      alt={selectedImage.title}
                      className="w-full h-auto max-h-[70vh] md:max-h-[80vh] object-contain"
                      draggable={false}
                      onLoad={() => setImageLoaded(true)}
                      onError={() => {
                        // Fallback to regular URL if high-res fails
                        setImageLoaded(true);
                      }}
                    />
                  </div>
                </div>

                {/* Image Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 via-black/80 to-transparent p-6 md:p-8">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                      {selectedImage.category}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {selectedImage.title}
                  </h3>
                  <p className="text-gray-200 text-sm md:text-base">
                    {selectedImage.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-12 p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Acessibilidade e Conforto
            </h3>
            <p className="text-secondary">
              Nossa estrutura foi projetada para atender todos os pacientes com
              comodidade, incluindo acessibilidade completa, estacionamento próprio
              e localização de fácil acesso.
            </p>
          </div>
          <button
            onClick={() => {
              const element = document.getElementById('location');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 whitespace-nowrap"
          >
            Ver Localização
          </button>
        </div>
      </motion.div>
    </SectionWrapper>
  );
};

export default Environment;
