const brands = [
  // Asumiendo que tienes imágenes de las marcas en tu carpeta public o similar
  { id: 1, imageUrl: '', name: 'Brand 1' },
  { id: 2, imageUrl: '', name: 'Brand 2' },
  { id: 3, imageUrl: '', name: 'Brand 3' },
  { id: 4, imageUrl: '', name: 'Brand 4' },
  { id: 5, imageUrl: '', name: 'Brand 5' },
  // Agrega más marcas según sea necesario
];

const Customers = () => {
  return (
    <div className="brand-slider-container">
      <div className="brand-slider">
        {brands.map((brand) => (
          <div key={brand.id} className="brand-item">
            <img src={brand.imageUrl} alt={brand.name} />
          </div>
        ))}
      </div>
    </div>
  );
};


export default Customers