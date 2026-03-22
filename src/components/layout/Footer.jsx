import React from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  Clock,
  Heart,
} from 'lucide-react';
import logo from '../../assets/logo-clinica-galvao.png';

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <a href='#' className="flex w-fit items-center justify-center gap-2 mb-4 cursor-pointer">
              <img
                src={logo}
                alt="Clínica Galvão"
                className="h-12 md:h-16 w-auto cursor-pointer"
              />
            </a>
            <p className="text-gray-400 leading-relaxed">
              Há mais de 10 anos oferecendo atendimento médico de excelência com
              humanização e tecnologia de ponta. Sua saúde é nossa prioridade.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-3">
              {[
                { name: 'Início', id: 'home' },
                { name: 'Especialidades', id: 'specialties' },
                { name: 'Ambiente', id: 'environment' },
                { name: 'Equipe', id: 'team' },
                { name: 'Agendar', id: 'location' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-bold mb-4">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-400 leading-[1.2]">Rua Manoel Teixeira, 215 - Centro |<br /> Trairi - CE</p>
                  <p className="text-gray-400"></p>
                  <p className="text-gray-400 text-sm">CEP: 62690-000</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="tel:+5585996438060"
                  className="text-gray-400 hover:text-primary transition-colors duration-300"
                >
                  (85) 99643-8060
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:clinicagalvao@hotmail.com"
                  className="text-gray-400 hover:text-primary transition-colors duration-300"
                >
                  clinicagalvao@hotmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-400">Seg - Sex: 7h - 17h</p>
                  <p className="text-gray-400">Sábado: 7h - 12h</p>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* Social Media & Medical Director */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Social Media */}
            <div>
              <h4 className="text-lg font-bold mb-4">Redes Sociais</h4>
              <div className="flex gap-3">
                {[
                  { icon: Facebook, href: 'https://www.facebook.com/clinicamedicagalvao/', label: 'Facebook' },
                  { icon: Instagram, href: 'https://www.instagram.com/clinicamedicagalvao/', label: 'Instagram' }
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label={social.label}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-5 h-5 pointer-events-none" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Medical Director Info */}
            <div className="bg-gray-800 rounded-xl p-4">
              <h5 className="text-sm font-semibold text-gray-400 mb-2">
                Diretor Clínico
              </h5>
              <p className="font-bold text-white">Dr. Pedro Henrique Galvão</p>
              <p className="text-sm text-gray-400">CRM/CE 14871</p>
              <p className="text-xs text-gray-500 mt-2">
                Diretor Clínico - Nutrólogo
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm text-center md:text-left"
            >
              © {currentYear} Clínica Galvão. Todos os direitos reservados.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 text-sm text-gray-400"
            >
              <a href="#" className="hover:text-primary transition-colors duration-300">
                Política de Privacidade
              </a>
              <span className="hidden md:inline">•</span>
              <a href="#" className="hover:text-primary transition-colors duration-300">
                Termos de Uso
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
