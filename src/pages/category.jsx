import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default function GalleryCategory() {
  const { category } = useParams();

  const galleryItems = [
    {
      category: "pakaian-pria",
      title: "The Executive Charcoal Three-Piece",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCwglI6IjWvyMZG7HjMXbQGdks0aIyb-GRYlogjFdMjQ4F80pzyAtUJB7QfMY17skKBsiJ6GOD1uGmOFAq9WUeegpajwNujL6m9OY3LYIvgHPuqRpII8toIVsrcgwQuT03-M0txbBzQrdfqN1VttOPZpm79j3lYoVLDlZEKckX-fQygts_ewBY9sxaPkDP-v6gasYg5vJ5fL1zyTUMwnUro1EidftVF0T--VCGjfd-8R9G-5BOEn_30wfsJ1Fww6ebMEiEnjUy1MGiV",
    },
    {
      category: "gaun-malam",
      title: "Emerald Silk Gala Gown",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBObUG5XrQ8BavNIK_WU5r8p6oj1f9PWWgK-U4WoVTBoam0wG_HrNPunbTsOF83mjux8q9COExcTSouA-avfpheT37p6cRf-du0u8wg7VZK7RK9cP2Xlw1qYBBzClcXpUptjC18MlZk1mXUUI1HN7wDGP2ZzCiJCx0LKAlV4sOAKHut8-_nKSdX_D7HWxOtgSJkOxdrpP1Aqub3eD684XaR96yhjoI2WZCNua9onTI1t5pK2xYLUoD01tWd7rM3hHrVRbGdHy7CQy0U",
    },
    {
      category: "detail-bordir",
      title: "Golden Thread Heritage Motif",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBcaCoLkfl92ywsIv1-qe4MDse5ggzT7Y1xr7yVe0IvsOivIoZXDcLELuNKW_sxADRtdyNKM9JvtHqKh_AqvXWrgEuuggQV0jdSKn2tSOEhDczFavX35ALZgNk8Y8iFlX7KtgisCabInwXVaBf91rX6uJUqUwvBCFNuGolOQidxSog2Cl_2OzCyjqIs1dMYq1914AILlrWX-tXIkIZxlrcHSTPFeiIIunTjchezs1xmnX14IhiSpppozgZill74jBGyyzVtAvVGKpTN",
    },
  ];

  const filteredProducts = galleryItems.filter(
    (item) => item.category === category,
  );

  return (
    <div className="bg-[#fcf9f8] min-h-screen">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-32">
        <h1 className="text-5xl font-bold mb-12 capitalize">
          {category.replace(/-/g, " ")}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredProducts.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-96 object-cover"
              />

              <div className="p-6">
                <h2 className="text-2xl font-semibold">{item.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
