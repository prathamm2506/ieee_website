import React from 'react';
import EventDescription from '../../components/Event_description/EventDescription';
import melangeImage from '../../assets/sympo.webp';

const Melange = () => {
  return (
    <div className='mt-16'>
      <EventDescription 
        title="Melange"
        subtitle="A Farewell to Remember"
        date="7th April 2025"
        image={melangeImage}
        description="Melange is IEEE VESIT’s formal farewell event that honors the incredible journey and contribution of the outgoing council members. It’s a time of gratitude, reflection, and celebration as the council signs off after three years of dedication, hard work, and impact.

        The event also marks key launches — the annual IEEE VESIT Magazine featuring technical articles, creative work, and highlights from the year, along with the unveiling of the newly developed IEEE VESIT Website and Mobile App, a testament to the council's vision of enhancing digital engagement.

        Melange beautifully captures the spirit of transition, growth, and fresh beginnings — celebrating not just an end, but a new chapter for the IEEE community."
        linkform="https://forms.gle/WTSWd2hrnA526MXc8"
      />
    </div>
  );
};

export default Melange;
