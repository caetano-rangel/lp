export default function FooterInfo() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-10 text-center md:text-left">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-800">
        
        {/* Atendimento */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Atendimento</h3>
          <p className="text-gray-600">Seg a Sex: 8h às 20h</p>
          <p className="text-gray-600">Sáb e Dom: 9h às 18h</p>
        </div>

        {/* WhatsApp */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">WhatsApp</h3>
          <p className="text-gray-600">Resposta rápida</p>
          <p className="text-gray-600">Todos os dias</p>
        </div>

        {/* Insta*/}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Instagram</h3>
          <p className="text-gray-600">@jaquelineaquinoremax</p>
          <p className="text-gray-600">Resposta em até 24h</p>
        </div>
      </div>
    </footer>
  );
}
