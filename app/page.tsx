'use client';

import { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    description: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Frontend suksessmelding - kan utvides med backend-integrasjon senere
    setIsSubmitted(true);
    // Reset form
    setFormData({ name: '', email: '', phone: '', description: '' });
    // Hide success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">
              Berntsen Multiservice
            </h1>
            <nav className="hidden md:flex space-x-8">
              <a href="#tjenester" className="text-gray-700 hover:text-gray-900 transition-colors">
                Tjenester
              </a>
              <a href="#priser" className="text-gray-700 hover:text-gray-900 transition-colors">
                Priser
              </a>
              <a href="#om-oss" className="text-gray-700 hover:text-gray-900 transition-colors">
                Om oss
              </a>
              <a href="#kontakt" className="text-gray-700 hover:text-gray-900 transition-colors">
                Kontakt
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 mb-8">
              <span className="text-sm font-medium text-blue-200">Din pålitelige partner siden dag én</span>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="block">Profesjonelle tjenester</span>
              <span className="block text-blue-400">for hjem og bedrift</span>
            </h1>
            
            {/* Subheading */}
            <p className="text-lg sm:text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
              Vi leverer kvalitet, pålitelighet og ekspertise i hvert prosjekt. Fra rørlegger og elektro til maling og renhold – vi er din komplette løsning.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <a
                href="#kontakt"
                className="group relative bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg shadow-blue-600/50 hover:shadow-xl hover:shadow-blue-600/60 hover:scale-105 transform"
              >
                <span className="relative z-10">Få gratis tilbud</span>
                <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </a>
              <a
                href="#tjenester"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold text-lg border-2 border-white/30 hover:border-white/50 transition-all duration-300 hover:scale-105 transform"
              >
                Se våre tjenester
              </a>
            </div>
            
            {/* Trust Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-1">15+</div>
                <div className="text-sm text-slate-400">Års erfaring</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-1">500+</div>
                <div className="text-sm text-slate-400">Fornøyde kunder</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-1">24/7</div>
                <div className="text-sm text-slate-400">Akutt hjelp</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-12 sm:h-16 lg:h-20 text-white" fill="currentColor" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section id="tjenester" className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Våre tjenester
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Vi tilbyr et bredt spekter av profesjonelle tjenester for å holde ditt hjem eller bedrift i topp stand
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Takvask */}
            <div className="group relative bg-gradient-to-br from-white to-slate-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-300 hover:-translate-y-1">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-xl mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                <svg className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                Takvask
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Profesjonell takvask med trykkspyling og spesialutstyr. Vi fjerner mose, alger og skitt fra alle typer tak, og gir ditt tak en ny og frisk utseende.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Trykkspyling og håndvask</li>
                <li>• Mose- og algefjerning</li>
                <li>• Alle taktyper</li>
              </ul>
            </div>

            {/* Fasadevask */}
            <div className="group relative bg-gradient-to-br from-white to-slate-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-300 hover:-translate-y-1">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-xl mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                <svg className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                Fasadevask
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Grunnleggende og dypvask av fasader på alle materialer. Vi bruker miljøvennlige produkter og moderne utstyr for å gi fasaden din en profesjonell finish.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Trykkspyling og softwash</li>
                <li>• Miljøvennlige produkter</li>
                <li>• Alle fasadematerialer</li>
              </ul>
            </div>

            {/* Maling */}
            <div className="group relative bg-gradient-to-br from-white to-slate-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-300 hover:-translate-y-1">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-xl mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                <svg className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                Maling
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Interiør og eksteriør maling med høy kvalitet. Vi bruker kun de beste malingene og teknikker for et varig og profesjonelt resultat.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Interiør og eksteriør</li>
                <li>• Forarbeid og etterbehandling</li>
                <li>• Kvalitetsprodukter</li>
              </ul>
            </div>

            {/* Rens/behandling */}
            <div className="group relative bg-gradient-to-br from-white to-slate-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-300 hover:-translate-y-1">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-xl mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                <svg className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                Rens og behandling
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Spesialbehandling og rense av treverk, stein og andre overflater. Vi tilbyr impregnering, oljebehandling og beskyttelse mot vær og slitasje.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Impregnering og oljebehandling</li>
                <li>• Beskyttelse mot vær</li>
                <li>• Alle materialtyper</li>
              </ul>
            </div>

            {/* Montering av beslag */}
            <div className="group relative bg-gradient-to-br from-white to-slate-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-300 hover:-translate-y-1">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-xl mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                <svg className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                Montering av beslag
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Profesjonell montering av dører, vinduer, hengsler, låser og annet beslag. Vi sikrer riktig justering og funksjonalitet for lang levetid.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Dører og vinduer</li>
                <li>• Låser og hengsler</li>
                <li>• Justering og reparasjon</li>
              </ul>
            </div>

            {/* Små snekkerjobber */}
            <div className="group relative bg-gradient-to-br from-white to-slate-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-300 hover:-translate-y-1">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-xl mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                <svg className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                Små snekkerjobber
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Vi tar på oss alle typer små snekkerjobber, fra hyller og opphenging til reparasjoner og tilpasninger. Raskt, effektivt og til en rettferdig pris.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Hyller og opphenging</li>
                <li>• Reparasjoner og tilpasninger</li>
                <li>• Rask og effektiv service</li>
              </ul>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-3">
                Trenger du hjelp med noe annet?
              </h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Vi er fleksible og tar på oss mange typer oppgaver. Kontakt oss for en uforpliktende prat om ditt behov.
              </p>
              <a
                href="#kontakt"
                className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-md hover:shadow-lg"
              >
                Kontakt oss i dag
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="priser" className="bg-gradient-to-br from-slate-50 to-blue-50 py-20 sm:py-24 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Våre priser
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Transparente priser uten skjulte kostnader. Vi tilbyr både fastpriser på typiske jobber og timepris for tilpassede oppgaver.
            </p>
          </div>

          {/* Pricing Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mb-12">
            {/* Fastpriser Card */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-6">
                <h3 className="text-2xl font-bold text-white mb-2">Fastpriser</h3>
                <p className="text-blue-100">Priser på typiske jobber</p>
              </div>
              <div className="p-8">
                <div className="space-y-6 mb-8">
                  {/* Takvask */}
                  <div className="flex items-start justify-between pb-6 border-b border-gray-200">
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Takvask</h4>
                      <p className="text-sm text-gray-600 mb-2">
                        Profesjonell takvask med trykkspyling og mosefjerning
                      </p>
                      <ul className="text-xs text-gray-500 space-y-1">
                        <li>• Inkluderer trykkspyling</li>
                        <li>• Mose- og algefjerning</li>
                        <li>• Alle taktyper</li>
                      </ul>
                    </div>
                    <div className="ml-4 text-right">
                      <div className="text-2xl font-bold text-blue-600">Fra 2 500 kr</div>
                      <div className="text-xs text-gray-500 mt-1">Standard tak</div>
                    </div>
                  </div>

                  {/* Fasadevask */}
                  <div className="flex items-start justify-between pb-6 border-b border-gray-200">
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Fasadevask</h4>
                      <p className="text-sm text-gray-600 mb-2">
                        Grunnleggende fasadevask med trykkspyling
                      </p>
                      <ul className="text-xs text-gray-500 space-y-1">
                        <li>• Trykkspyling</li>
                        <li>• Miljøvennlige produkter</li>
                        <li>• Alle fasadematerialer</li>
                      </ul>
                    </div>
                    <div className="ml-4 text-right">
                      <div className="text-2xl font-bold text-blue-600">Fra 1 800 kr</div>
                      <div className="text-xs text-gray-500 mt-1">Standard fasade</div>
                    </div>
                  </div>

                  {/* Montering av beslag */}
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Montering av beslag</h4>
                      <p className="text-sm text-gray-600 mb-2">
                        Montering og justering av dører, vinduer og beslag
                      </p>
                      <ul className="text-xs text-gray-500 space-y-1">
                        <li>• Dører og vinduer</li>
                        <li>• Låser og hengsler</li>
                        <li>• Justering inkludert</li>
                      </ul>
                    </div>
                    <div className="ml-4 text-right">
                      <div className="text-2xl font-bold text-blue-600">Fra 850 kr</div>
                      <div className="text-xs text-gray-500 mt-1">Per enhet</div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                  <p className="text-sm text-gray-700">
                    <strong className="text-gray-900">Merk:</strong> Fastpriser er veiledende og kan variere basert på størrelse, tilgjengelighet og spesifikke behov. Kontakt oss for nøyaktig tilbud.
                  </p>
                </div>

                <a
                  href="#kontakt"
                  className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center px-6 py-4 rounded-lg font-semibold transition-colors duration-300 shadow-md hover:shadow-lg"
                >
                  Få fastpris-tilbud
                </a>
              </div>
            </div>

            {/* Timepris Card */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 overflow-hidden">
              <div className="bg-gradient-to-r from-slate-700 to-slate-800 px-8 py-6">
                <h3 className="text-2xl font-bold text-white mb-2">Timepris</h3>
                <p className="text-slate-300">Fleksibel prising for tilpassede oppgaver</p>
              </div>
              <div className="p-8">
                <div className="mb-8">
                  {/* Main Price */}
                  <div className="text-center mb-8 pb-8 border-b border-gray-200">
                    <div className="text-5xl font-bold text-gray-900 mb-2">650 kr</div>
                    <div className="text-lg text-gray-600">per time</div>
                    <p className="text-sm text-gray-500 mt-3">
                      Minimum 2 timer. Faktureres per påbegynte 15 minutter.
                    </p>
                  </div>

                  {/* Additional Info */}
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <h4 className="text-sm font-semibold text-gray-900">Arbeid i høyden</h4>
                        <p className="text-sm text-gray-600 mt-1">
                          Tillegg på 150 kr/time for arbeid som krever stige eller heis over 3 meter.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <h4 className="text-sm font-semibold text-gray-900">Forskudd på større jobber</h4>
                        <p className="text-sm text-gray-600 mt-1">
                          30% forskudd ved oppdrag over 10 000 kr. Restbeløpet faktureres ved ferdigstillelse.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <h4 className="text-sm font-semibold text-gray-900">Materialer</h4>
                        <p className="text-sm text-gray-600 mt-1">
                          Materialer faktureres til innkjøpspris uten påslag. Alle materialer godkjennes med kunde før kjøp.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-lg p-4 mb-6">
                  <p className="text-sm text-gray-700">
                    <strong className="text-gray-900">Eksempler på timepris-jobber:</strong> Små reparasjoner, tilpasninger, montering av hyller, opphenging av bilder, diverse snekkerjobber og annet tilpasset arbeid.
                  </p>
                </div>

                <a
                  href="#kontakt"
                  className="block w-full bg-slate-700 hover:bg-slate-800 text-white text-center px-6 py-4 rounded-lg font-semibold transition-colors duration-300 shadow-md hover:shadow-lg"
                >
                  Kontakt for timepris
                </a>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="bg-white rounded-xl shadow-md p-8 border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Viktig informasjon</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Ingen skjulte kostnader</h4>
                <p className="text-sm text-gray-600">
                  Alle priser er inkludert MVA og kommuniseres tydelig før oppstart.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Forsikret og sertifisert</h4>
                <p className="text-sm text-gray-600">
                  Vi har full forsikring og følger alle relevante sertifiseringskrav.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Rask respons</h4>
                <p className="text-sm text-gray-600">
                  Vi svarer på henvendelser innen 24 timer og kan ofte starte samme uke.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="om-oss" className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Om Berntsen Multiservice
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Din pålitelige partner for alle typer vedlikehold og reparasjoner
            </p>
          </div>

          {/* Content Grid - Text first on mobile, side-by-side on desktop */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-12">
            {/* Text Content */}
            <div className="order-2 lg:order-1">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Profesjonelt håndverk med norske verdier
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Berntsen Multiservice er et lokalt, familieeid selskap med lang tradisjon for kvalitet og pålitelighet. Med Norman Berntsen i spissen leverer vi profesjonelle tjenester innen takvask, fasadevask, maling, rense/behandling, montering av beslag og små snekkerjobber.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Vi setter norsk håndverkstradisjon i fokus og sikrer at hvert prosjekt blir utført med omsorg, presisjon og respekt for ditt hjem eller bedrift. Vår erfaring og dedikasjon gjør oss til den naturlige valget når du trenger pålitelige fagfolk.
                  </p>
                </div>

                {/* Why Choose Us */}
                <div className="mt-8">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">
                    Hvorfor velge oss?
                  </h4>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <h5 className="font-semibold text-gray-900 mb-1">Kvalitet i hvert prosjekt</h5>
                        <p className="text-gray-600 text-sm">
                          Vi bruker kun de beste materialene og teknikker, og vi nøyer oss ikke med mindre enn perfeksjon.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <h5 className="font-semibold text-gray-900 mb-1">Rask respons og fleksibilitet</h5>
                        <p className="text-gray-600 text-sm">
                          Vi svarer raskt på henvendelser og tilpasser oss dine behov. Ofte kan vi starte samme uke.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <h5 className="font-semibold text-gray-900 mb-1">Trygghet og sertifisering</h5>
                        <p className="text-gray-600 text-sm">
                          Vi har full forsikring, følger alle sikkerhetsregler og er sertifisert for alle våre tjenester.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <h5 className="font-semibold text-gray-900 mb-1">Tydelig kommunikasjon</h5>
                        <p className="text-gray-600 text-sm">
                          Du får alltid tydelig informasjon om priser, tidsplan og fremdrift. Ingen overraskelser.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <h5 className="font-semibold text-gray-900 mb-1">Erfaring og ekspertise</h5>
                        <p className="text-gray-600 text-sm">
                          Med mange års erfaring kjenner vi alle utfordringene og løser dem effektivt og profesjonelt.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Placeholder */}
            <div className="order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-blue-100 to-slate-200 aspect-[4/3] flex items-center justify-center">
                {/* Placeholder content - kan byttes ut med ekte bilde */}
                <div className="text-center p-8">
                  <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <p className="text-gray-600 font-medium text-lg">Berntsen Multiservice</p>
                  <p className="text-gray-500 text-sm mt-2">Bilde kommer snart</p>
                </div>
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200/30 rounded-full -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-slate-300/30 rounded-full -ml-12 -mb-12"></div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-12">
            <div className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl px-8 py-6 shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-3">
                Klar til å starte ditt neste prosjekt?
              </h3>
              <p className="text-blue-100 mb-6 max-w-xl mx-auto">
                Ta kontakt med oss i dag for en uforpliktende prat om hvordan vi kan hjelpe deg.
              </p>
              <a
                href="#kontakt"
                className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-md hover:shadow-lg"
              >
                Kontakt oss i dag
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-20 sm:py-24 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Kontakt oss
            </h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              Ta kontakt med oss i dag for en uforpliktende prat om ditt prosjekt. Vi svarer raskt og gir deg et ærlig tilbud.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Kontaktinformasjon</h3>
              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-blue-200 mb-1">Telefon</h4>
                    <a 
                      href="tel:+4792939628" 
                      className="text-lg font-semibold text-white hover:text-blue-300 transition-colors"
                    >
                      +47 929 39 628
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-blue-200 mb-1">E-post</h4>
                    <a 
                      href="mailto:norman1584@protonmail.com" 
                      className="text-lg font-semibold text-white hover:text-blue-300 transition-colors break-all"
                    >
                      norman1584@protonmail.com
                    </a>
                  </div>
                </div>

                {/* Org Number */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-blue-200 mb-1">Organisasjonsnummer</h4>
                    <p className="text-lg font-semibold text-white">
                      926 553 526
                    </p>
                  </div>
                </div>
              </div>

              {/* Info Box */}
              <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h4 className="text-lg font-bold mb-4">Hvorfor velge oss?</h4>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-blue-400 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-blue-100 text-sm">
                      <strong className="text-white">Rask respons:</strong> Vi svarer på henvendelser innen 24 timer
                    </p>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-blue-400 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-blue-100 text-sm">
                      <strong className="text-white">Gratis befaring:</strong> Vi kommer ut og gir deg et ærlig tilbud uten kostnad
                    </p>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-blue-400 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-blue-100 text-sm">
                      <strong className="text-white">Lokalt firma:</strong> Vi kjenner området og kan ofte starte raskt
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Send oss en forespørsel</h3>
              
              {/* Success Message */}
              {isSubmitted && (
                <div className="mb-6 bg-green-500 text-white p-4 rounded-lg flex items-center">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-medium">Takk! Vi har mottatt din forespørsel og kontakter deg snart.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-blue-100 mb-2">
                    Navn *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm text-white border border-white/20 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/50 transition-all"
                    placeholder="Ditt fulle navn"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-blue-100 mb-2">
                    E-post *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm text-white border border-white/20 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/50 transition-all"
                    placeholder="din@epost.no"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-blue-100 mb-2">
                    Telefonnummer *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm text-white border border-white/20 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/50 transition-all"
                    placeholder="+47 XXX XX XXX"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-blue-100 mb-2">
                    Beskrivelse av jobben *
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm text-white border border-white/20 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/50 transition-all resize-none"
                    placeholder="Beskriv kort hva du trenger hjelp med..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                >
                  Send forespørsel
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white border-t-4 border-[#ff7a00]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-bold mb-4 text-white">
                Berntsen Multiservice
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Profesjonelle tjenester innen takvask, fasadevask, maling, rens, beslag og små snekkerjobber.
              </p>
            </div>

            {/* Navigation Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Navigasjon</h4>
              <nav className="space-y-3">
                <a 
                  href="#tjenester" 
                  className="block text-gray-400 hover:text-[#ff7a00] transition-colors text-sm"
                >
                  Tjenester
                </a>
                <a 
                  href="#priser" 
                  className="block text-gray-400 hover:text-[#ff7a00] transition-colors text-sm"
                >
                  Priser
                </a>
                <a 
                  href="#om-oss" 
                  className="block text-gray-400 hover:text-[#ff7a00] transition-colors text-sm"
                >
                  Om oss
                </a>
                <a 
                  href="#kontakt" 
                  className="block text-gray-400 hover:text-[#ff7a00] transition-colors text-sm"
                >
                  Kontakt
                </a>
              </nav>
            </div>

            {/* Contact Information */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Kontakt</h4>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-gray-400 mb-1">Telefon</p>
                  <a 
                    href="tel:+4792939628" 
                    className="text-white hover:text-[#ff7a00] transition-colors font-medium"
                  >
                    +47 929 39 628
                  </a>
                </div>
                <div>
                  <p className="text-gray-400 mb-1">E-post</p>
                  <a 
                    href="mailto:norman1584@protonmail.com" 
                    className="text-white hover:text-[#ff7a00] transition-colors font-medium break-all"
                  >
                    norman1584@protonmail.com
                  </a>
                </div>
                <div>
                  <p className="text-gray-400 mb-1">Org.nr</p>
                  <p className="text-white font-medium">
                    926 553 526
                  </p>
                </div>
              </div>
            </div>

            {/* Services Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Våre tjenester</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>Takvask</p>
                <p>Fasadevask</p>
                <p>Maling</p>
                <p>Rens og behandling</p>
                <p>Montering av beslag</p>
                <p>Små snekkerjobber</p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8 mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm text-center md:text-left">
                &copy; 2025 Berntsen Multiservice. Alle rettigheter reservert.
              </p>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>Forsikret og sertifisert</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

