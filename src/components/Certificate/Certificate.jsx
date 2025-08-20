import NPTEL_CERT from "../../assets/certificate_logo/NPTEL_CERT.png";
import cert2 from "../../assets/certificate_logo/Infosys.png";
import cert3 from "../../assets/certificate_logo/google.png";

const certificate = [
  {
    title: "Fundamental Of Operating System",
    issuer: "NPTEL SWAYAM",
    year: "2024",
    img: NPTEL_CERT,
  },
  {
    title: "Fundamental Of Cryptography",
    issuer: "Infosys",
    year: "2024",
    img: cert2,
  },
  {
    title: "Google Analytics",
    issuer: "Google",
    year: "2024",
    img: cert3,
  },
];

const Certificate = () => {
  return (
    <section id="certificate" className="bg-[#0f0f1a] py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-3">CERTIFICATES</h2>
        <p className="text-gray-400 mb-12">
          A showcase of my certifications and achievements
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {certificate.map((cert, index) => (
            <div
              key={index}
              className="bg-[#1a1a2e] rounded-xl shadow-lg hover:shadow-purple-500/40 transition duration-300 p-5 transform hover:-translate-y-2"
            >
              <img
                src={cert.img}
                alt={cert.title}
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-lg font-semibold text-white">
                {cert.title}
              </h3>
              <p className="text-gray-400 text-sm">
                {cert.issuer} - {cert.year}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificate;
