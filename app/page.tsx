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
    </main>
  );
}
