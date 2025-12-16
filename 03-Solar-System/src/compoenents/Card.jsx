export default function Card({ title, image, description }) {
  return (
    <div className="w-105 rounded-2xl overflow-hidden bg-black/50 backdrop-blur-xl shadow-2xl">

      {/* IMAGE */}
      <div className="w-full h-72 bg-black flex items-center justify-center">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* TEXT PANEL (edge-to-edge) */}
      <div className="bg-gray-500/35 backdrop-blur-lg">

        {/* INNER CONTENT (THIS CONTROLS PADDING) */}
        <div className="px-6 py-5 text-white">

          <h2 className="text-3xl font-extrabold mb-3 title">
            {title}
          </h2>

          <div className="text-sm text-gray-200 leading-relaxed space-y-1 description">
            {description.map((point, index) => (
              <p  key={index}>{point}</p>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
