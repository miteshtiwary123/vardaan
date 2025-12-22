// "use client";
// import Image from "next/image";
// import Layout from "@/components/Layout";
// import dynamic from "next/dynamic";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import banner from "@/public/banner.jpg";
// import banner2 from "@/public/banner2.jpg";
// import banner3 from "@/public/banner3.jpg";
// import banner4 from "@/public/banner4.jpg";
// import diyas from "@/public/diyas.jpg";
// import penstand from "@/public/penstand.jpg";
// import compost from "@/public/compost.jpg";
// import honey from "@/public/honey.jpg";

// const Slider = dynamic(() => import("react-slick"), { ssr: false });

// export default function Home() {
//   const bannerImages = [banner, banner2, banner3, banner4];

//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 800,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 4000,
//     arrows: false,
//   };

//   return (
//     <Layout>
//       {/* Hero Slider */}
//       <section className="relative w-full h-[70vh]">
//         <Slider {...sliderSettings}>
//           {bannerImages.map((img, i) => (
//             <div key={i} className="relative w-full h-[70vh]">
//               <Image
//                 src={img}
//                 alt={`Banner ${i + 1}`}
//                 fill
//                 className="object-cover"
//                 priority
//               />
//               <div className="absolute inset-0 bg-black/40 flex items-center justify-center">

//               </div>
//             </div>
//           ))}
//         </Slider>
//       </section>

//       {/* Featured Categories */}
//       <section className="text-center py-12 px-4">
//         <h2 className="text-2xl font-semibold mb-8 font-lora">Featured Categories</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {[
//             { img: diyas, title: "🪔 Cow Dung Diyas" },
//             { img: penstand, title: "🖋️ Pen Stands & Crafts" },
//             { img: compost, title: "🌱 Organic Compost & Panchagavya" },
//             { img: honey, title: "🍯 Natural Food & Essentials" },
//           ].map((item, i) => (
//             <div key={i} className="bg-white rounded-xl shadow-md overflow-hidden">
//               <Image src={item.img} alt={item.title} className="h-48 w-full object-cover" />
//               <h3 className="py-4 font-semibold">{item.title}</h3>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* About Preview */}
//       <section className="text-center py-12 bg-earthy-light px-6">
//         <p className="text-lg mb-4 max-w-2xl mx-auto">
//           At Vardaan Enterprises, we bring back the essence of Bharat through 100% natural, handmade, and cow-based products.
//         </p>
//         <a href="/about" className="border-2 border-earthy-green text-earthy-green px-5 py-2 rounded-full font-semibold">Know More</a>
//       </section>

//       {/* CTA */}
//       <section className="text-center py-12">
//         <h2 className="text-2xl font-semibold mb-6 font-lora">Experience purity — Shop Now & Support Swadeshi!</h2>
//         <a href="/products" className="bg-earthy-green text-white px-6 py-3 rounded-full">Explore Products</a>
//       </section>
//     </Layout>
//   );
// }


export default function Home() {
  return (
    <main style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <img src="/logo.jpg" alt="Vardaan Enterprises Logo" style={styles.logo} />
      </header>

      {/* Main Content */}
      <section style={styles.content}>
        <h1 style={styles.heading}>🌿 Coming Soon</h1>
        <p style={styles.text}>
          "Where sustainability meets spirituality."
        </p>

        <p style={styles.contact}>For further query:<br />
          📞 Contact us: <strong>+91-7859007833</strong>
        </p>
      </section>
    </main>
  );
}

const styles = {
  container: {
    height: "100vh",
    background: "#f3e5d0", // light brown
    color: "#1f2937",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  header: {
    marginTop: "30px",
    textAlign: "center",
  },
  companyName: {
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  logo: {
    width: "320px",
    height: "220px",
    borderRadius: "10%",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginTop: "60px",
  },
  heading: {
    fontSize: "3rem",
    marginBottom: "1rem",
  },
  text: {
    fontSize: "1.2rem",
    marginBottom: "1rem",
  },
  contact: {
    fontSize: "1.4rem",
    color: "#7c4a1d",
  },
};
