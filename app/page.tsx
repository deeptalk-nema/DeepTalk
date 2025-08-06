export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 text-white">
      <h1 className="text-5xl font-bold mb-4">DeepTalk</h1>
      <p className="text-lg mb-8 text-center max-w-xl">
       Poveži se kroz razgovor, ne kroz slike.

        DeepTalk je mesto za one koji žele smislen kontakt, ne beskonačno swipe-ovanje.
      
      </p>
      <button className="px-6 py-3 bg-white text-blue-700 rounded-lg font-semibold hover:bg-gray-200 transition">
        Pridruži se besplatno
      </button>


<section className="w-full py-20 bg-white text-gray-900">
  <div className="max-w-5xl mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-12">Zašto DeepTalk?</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
        <h3 className="text-xl font-semibold mb-2">🧠 Teme koje te pokreću</h3>
        <p className="text-gray-600">
          Pronađi ljude koji vole ista pitanja i teme kao ti.
        </p>
      </div>
      <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
        <h3 className="text-xl font-semibold mb-2">💬 Vođeni razgovori</h3>
        <p className="text-gray-600">
          AI ti pomaže da probiješ led i započneš zanimljive razgovore.
        </p>
      </div>
      <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
        <h3 className="text-xl font-semibold mb-2">🤝 Zajednica istomišljenika</h3>
        <p className="text-gray-600">
          Ovde su ljudi koji žele iskrenu povezanost i dublje teme.
        </p>
      </div>
    </div>
  </div>
</section>


<section className="w-full py-20 bg-gray-100 text-gray-900">
  <div className="max-w-4xl mx-auto px-4 text-center">
    <h2 className="text-3xl font-bold mb-12">Kako funkcioniše?</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
        <h3 className="text-xl font-semibold mb-2">1. Registruj se</h3>
        <p className="text-gray-600">
          Kreiraj nalog za manje od 1 minuta i pridruži se zajednici.
        </p>
      </div>
      <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
        <h3 className="text-xl font-semibold mb-2">2. Odaberi teme</h3>
        <p className="text-gray-600">
          Izaberi teme koje te inspirišu (psihologija, umetnost, život...).
        </p>
      </div>
      <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
        <h3 className="text-xl font-semibold mb-2">3. Počni razgovor</h3>
        <p className="text-gray-600">
          Nađi istomišljenike i započni razgovor koji traje.
        </p>
      </div>
    </div>
  </div>
</section>


<footer className="w-full py-6 bg-blue-900 text-white">
  <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
    <p className="text-sm">© {new Date().getFullYear()} DeepTalk. Sva prava zadržana.</p>
    <div className="flex space-x-4 mt-4 md:mt-0">
      <a href="#" className="hover:underline">O nama</a>
      <a href="#" className="hover:underline">Kontakt</a>
      <a href="#" className="hover:underline">Prijava za betu</a>
    </div>
  </div>
</footer>




    </main>
  );
}
