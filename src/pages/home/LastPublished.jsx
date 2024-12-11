import { useEffect, useState } from "react";
import { BookCard } from "../card/BookCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useFetchAllBooksQuery } from "../../redux/features/books/booksApi";

const categories = [
  "Todos",
  "Poemas",
  "Cuentos",
  "Matematicas",
  "Letras",
  "Arte",
  "Ingenieria",
  "Contabilidad",
  "Administracion",
  "Cientifico",
];

export const LastPublished = ({ book }) => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const { data: books = [] } = useFetchAllBooksQuery();
  console.log(books);

  const filteredBooks =
    selectedCategory === "Todos"
      ? books
      : books.filter(
          (book) =>
            book.category.toLowerCase() === selectedCategory.toLowerCase()
        );

  console.log(filteredBooks);

  return (
    <div className="py-10">
      <h2 className="text-3xl font-semibold mb-6">Últimos publicados</h2>
      {/*filtros */}
      <div className="mb-8 flex items-center">
        <select
          onChange={(e) => setSelectedCategory(e.target.value)}
          name="category"
          id="category"
          className="border bg-[#fafafa] border-orange-950 rounded-md px-4 py-2 focus:outline-none"
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1180: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {filteredBooks.length === 0 ? (
          <div>No hay ninguna publicación en este genero.</div>
        ) : (
          filteredBooks.map((book, index) => (
            <SwiperSlide key={index}>
              <BookCard book={book} />
            </SwiperSlide>
          ))
        )}
      </Swiper>
    </div>
  );
};
export default LastPublished;
