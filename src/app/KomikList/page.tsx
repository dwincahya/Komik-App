import Image from "next/image";
import { getKomik, Komik } from "@/service/api";

export default async function KomikListPage() {
  const Data: Komik[] = await getKomik(1, 10);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Daftar Komik</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Data &&
          Data.map((item: Komik) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="relative w-full h-48">
                <Image
                  src={item.imgUrl}
                  alt={item.title}
                  fill
                  unoptimized
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-bold">{item.title}</h2>
                <p className="text-gray-600 italic">{item.alternative}</p>
                <p className="text-gray-700 mt-2">{item.description}</p>
                <div className="mt-4 flex flex-col space-y-1 text-sm text-gray-500">
                  <span>Type: {item.type}</span>
                  <span>Status: {item.status}</span>
                  <span>Release: {item.release}</span>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
