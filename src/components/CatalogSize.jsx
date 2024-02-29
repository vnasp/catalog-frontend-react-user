const SizeOptions = ({ selectedFit, selectedSize, handleSizeClick }) => {
  return (
    <div id="sizeOptions" className="py-3">
              <h4 className="font-bold uppercase pb-1">Select the size</h4>
              {selectedFit !== 'Child' && (
                <div id="adultChart" className="grid grid-cols-2 gap-4 lg:flex">
                  <button
                    className={`size ${selectedSize === 'XS' ? 'selected' : ''}`}
                    onClick={() => handleSizeClick('XS')}
                  > XS </button>
                  <button
                    className={`size ${selectedSize === 'S' ? 'selected' : ''}`}
                    onClick={() => handleSizeClick('S')}
                  > S </button>
                  <button
                    className={`size ${selectedSize === 'M' ? 'selected' : ''}`}
                    onClick={() => handleSizeClick('M')}
                  > M </button>
                  <button
                    className={`size ${selectedSize === 'L' ? 'selected' : ''}`}
                    onClick={() => handleSizeClick('L')}
                  > L </button>
                  <button
                    className={`size ${selectedSize === 'XL' ? 'selected' : ''}`}
                    onClick={() => handleSizeClick('XL')}
                  > XL </button>
                  <button
                    className={`size ${selectedSize === '2XL' ? 'selected' : ''}`}
                    onClick={() => handleSizeClick('2XL')}
                  > 2XL </button>
                  <button
                    className={`size ${selectedSize === '3XL' ? 'selected' : ''}`}
                    onClick={() => handleSizeClick('3XL')}
                  > 3XL </button>
                </div>
              )}
              {selectedFit === 'Child' && (<div id="childChart" className="grid grid-cols-2 gap-4 lg:flex">
                <button
                  className={`size ${selectedSize === '4' ? 'selected' : ''}`}
                  onClick={() => handleSizeClick('4')}
                > 4 </button>
                <button
                  className={`size ${selectedSize === '6' ? 'selected' : ''}`}
                  onClick={() => handleSizeClick('6')}
                > 6 </button>
                <button
                  className={`size ${selectedSize === '8' ? 'selected' : ''}`}
                  onClick={() => handleSizeClick('8')}
                > 8 </button>
                <button
                  className={`size ${selectedSize === '10' ? 'selected' : ''}`}
                  onClick={() => handleSizeClick('10')}
                > 10 </button>
                <button
                  className={`size ${selectedSize === '12' ? 'selected' : ''}`}
                  onClick={() => handleSizeClick('12')}
                > 12 </button>
                <button
                  className={`size ${selectedSize === '14' ? 'selected' : ''}`}
                  onClick={() => handleSizeClick('14')}
                > 14 </button>
              </div>
              )}
            </div>
  );
};

export default SizeOptions