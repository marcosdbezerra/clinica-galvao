import React from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  Clock,
  Phone,
  Mail,
  Navigation,
  Clock as ClockIcon,
} from 'lucide-react';
import SectionWrapper from '../ui/SectionWrapper';

const Location = () => {
  const schedule = [
    { day: 'Segunda-feira', morning: '07:00 - 17:00', afternoon: '07:00 - 10:00' },
    { day: 'Terça-feira', morning: '07:00 - 17:00', afternoon: '07:00 - 10:00' },
    { day: 'Quarta-feira', morning: '07:00 - 17:00', afternoon: '07:00 - 10:00' },
    { day: 'Quinta-feira', morning: '07:00 - 17:00', afternoon: '07:00 - 10:00' },
    { day: 'Sexta-feira', morning: '07:00 - 17:00', afternoon: '07:00 - 10:00' },
    { day: 'Sábado', morning: '07:00 - 12:00', afternoon: '07:00 - 10:00' },
  ];

  const contactInfo = {
    address: 'Rua Manoel Teixeira, 215 - Centro',
    city: 'Trairi - CE',
    cep: 'CEP: 62690-000',
    phone: '(85) 99643-8060',
    whatsapp: '85996438060',
    email: 'clinicagalvao@hotmail.com',
  };

  const openGoogleMaps = () => {
    const address = encodeURIComponent(`${contactInfo.address}, ${contactInfo.city}`);
    window.open(`https://www.google.com/maps/search/?api=1&query=${address}`, '_blank');
  };

  const callPhone = (number) => {
    window.open(`tel:${number.replace(/\D/g, '')}`, '_self');
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent('Olá! Gostaria de agendar uma consulta.');
    window.open(`https://wa.me/55${contactInfo.whatsapp.replace(/\D/g, '')}?text=${message}`, '_blank');
  };

  return (
    <SectionWrapper id="location" bgColor="white">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          {/* WhatsApp CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-gradient-to-br md:w-[50%] from-[#25D366]/10 to-[#25D366]/5 rounded-2xl p-8 text-center mb-8"
          >
            <div className="w-16 h-16 bg-[#25D366] rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">
              Agende sua consulta pelo WhatsApp
            </h4>
            <p className="text-secondary mb-6">
              Nossa equipe está sempre pronta para atendê-lo com dedicação e profissionalismo. Entre em contato e conheça nosso atendimento diferenciado.
            </p>
            <button
              onClick={openWhatsApp}
              className="w-full px-8 py-4 bg-[#25D366] text-white font-semibold rounded-xl hover:bg-[#20bd5a] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              AGENDAR
            </button>
          </motion.div>
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4"
        >
          Localização e Horários
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
        >
          Venha nos visitar em nossa{' '}
          <span className="text-primary">unidade</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-secondary max-w-2xl mx-auto"
        >
          Localização privilegiada com fácil acesso, estacionamento próprio e
          estrutura completa para atender você e sua família.
        </motion.p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 items-stretch">
        {/* Left Column - Map and Contact */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col space-y-6"
        >
          {/* Map Card */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl group">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.293471036962!2d-39.2668672!3d-3.2772194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c1089cf1a2f267%3A0xb001b71b877cfc79!2zQ2zDrW5pY2EgR2FsdsOjbw!5e0!3m2!1spt-BR!2sbr!4v1772723885192!5m2!1spt-BR!2sbr"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
              title="Mapa da Clínica Galvão"
            />
            <button
              onClick={openGoogleMaps}
              className="absolute bottom-4 right-2 bg-primary text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:bg-primary-dark transition-all duration-300 flex items-center gap-2 hover:-translate-y-1"
            >
              <Navigation className="w-5 h-5" />
              Abrir no Google Maps
            </button>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-6 space-y-8 flex-1">
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Endereço</h4>
                <p className="text-secondary text-wrap leading-[1.2]">{contactInfo.address}, {contactInfo.city}</p>
                <p className="text-secondary text-sm">{contactInfo.cep}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-gray-900 mb-1">Telefone</h4>
                <button
                  onClick={() => callPhone(contactInfo.phone)}
                  className="text-secondary hover:text-primary transition-colors duration-300"
                >
                  {contactInfo.phone}
                </button>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-gray-900 mb-1">E-mail</h4>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-secondary hover:text-primary transition-colors duration-300"
                >
                  {contactInfo.email}
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column - Schedule and Accessibility */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col space-y-6"
        >
          {/* Schedule Table */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-primary to-primary-dark p-6">
              <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                <Clock className="w-7 h-7" />
                Horário de Atendimento
              </h3>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">
                      Dia
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">
                      Clínica
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">
                      Laboratório
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {schedule.map((row, index) => (
                    <motion.tr
                      key={row.day}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="hover:bg-primary/5 transition-colors duration-200"
                    >
                      <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                        {row.day}
                      </td>
                      <td className="px-6 py-4 text-sm text-secondary">
                        {row.morning}
                      </td>
                      <td className="px-6 py-4 text-sm text-secondary">
                        {row.afternoon}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-6 bg-gray-50 border-t border-gray-200">
              <p className="text-sm text-secondary text-center">
                <span className="font-semibold text-primary">Domingo:</span> Fechado
              </p>
            </div>
          </div>

          {/* Accessibility Info */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 flex-1">
            <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
              <ClockIcon className="w-5 h-5 text-primary" />
              Acessibilidade e Conforto
            </h4>
            <ul className="space-y-2 text-secondary text-sm">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                Acesso completo para cadeirantes
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                Estacionamento próprio gratuito
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                Atendimento prioritário
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                Ambiente climatizado
              </li>
            </ul>
          </div>

        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Location;
