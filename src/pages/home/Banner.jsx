export const Banner = () => {
  const imageBanner =
    "https://res.cloudinary.com/dlghxa2vl/image/upload/v1734234995/banner_old1me.jpg";
  return (
    <div className="flex flex-col md:flex-row-reverse py-16 justify-betwen items-center gap-12">
      <div className="md:w-1/2 w-full flex items-center md:justify-end">
        <img src={imageBanner} alt="" />
      </div>
      <div className="md:w-1/2 w-full">
        <h1 className="md:text-5xl text-2xl font-medium mb-7">Reusa Books</h1>
        <p className="mb-10">
          Reusa Books es una aplicación web diseñada para facilitar la compra y
          venta de libros usados. Su objetivo es promover la sostenibilidad y el
          acceso a la lectura de manera económica, permitiendo a los usuarios
          vender los libros que ya no necesitan y adquirir otros de segunda mano
          a precios más bajos.
        </p>
      </div>
    </div>
  );
};
