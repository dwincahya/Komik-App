import Image from "next/image";

const Card = ({ komik }) => {
    return (
        <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Image
                src={komik.coverUrl}
                alt={komik.title}
                className="w-full h-48 object-cover"
            />
            <div className="p-4">
                <h3 className="font-bold text-lg mb-2">{komik.title}</h3>
                <p className="text-gray-700 text-sm">{komik.description}</p>
            </div>
        </div>
    );
};

export default Card;