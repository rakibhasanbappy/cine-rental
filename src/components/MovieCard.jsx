import { useContext, useState } from "react";
import tag from "../assets/tag.svg";
import { MovieContext } from "../context";
import { getImageUrl } from "../utility/getImageUrl";
import MovieDetailsModal from "./MovieDetailsModal";
import Star from "./Star";

export default function MovieCard({ movie }) {
  const [showModal, setShowModal] = useState(false);
  const { cartData, setCartData } = useContext(MovieContext);

  function handleAddToCart(movie) {
    const found = cartData.find((item) => item.id === movie.id);

    if (!found) {
      setCartData([...cartData, movie]);
    } else {
      alert("Item already in cart");
    }
  }

  return (
    <>
      {showModal && (
        <MovieDetailsModal
          movie={movie}
          handleAddToCart={handleAddToCart}
          onClose={() => setShowModal(false)}
        />
      )}

      <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
        <img
          className="w-full object-cover"
          src={getImageUrl(movie.cover)}
          alt={movie.title}
          onClick={() => setShowModal(true)}
        />
        <figcaption className="pt-4">
          <h3 className="text-xl mb-1">{movie.title}</h3>
          <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
          <div className="flex items-center space-x-1 mb-5">
            <Star value={movie.rating} />
          </div>
          <a
            className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
            href="#"
            onClick={() => handleAddToCart(movie)}
          >
            <img src={tag} alt="" />
            <span>{movie.price} | Add to Cart</span>
          </a>
        </figcaption>
      </figure>
    </>
  );
}
