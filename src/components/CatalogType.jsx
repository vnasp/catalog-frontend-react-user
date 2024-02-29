const TypeOptions = ({ selectedType, handleTypeClick }) => {
  return (
    <div id="typeOptions" className="py-3">
      <h4 className="font-bold uppercase pb-1">Select the type</h4>
      <div className="grid grid-cols-2 gap-4 lg:flex lg:flex-row">
        <button
          className={`size ${selectedType === 'Tank Top' ? 'selected' : ''}`}
          onClick={() => handleTypeClick('Tank Top')}
        > Tank Top (No Sleeve) </button>
        <button
          className={`size ${selectedType === 'Short Sleeve' ? 'selected' : ''}`}
          onClick={() => handleTypeClick('Short Sleeve')}
        > Short Sleeve </button>
        <button
          className={`size ${selectedType === 'Long Sleeve' ? 'selected' : ''}`}
          onClick={() => handleTypeClick('Long Sleeve')}
        > Long Sleeve </button>
        <button
          className={`size ${selectedType === 'Hoodie' ? 'selected' : ''}`}
          onClick={() => handleTypeClick('Hoodie')}
        > Hoodie / Daywalker </button>
      </div>
    </div>
  );
};

export default TypeOptions