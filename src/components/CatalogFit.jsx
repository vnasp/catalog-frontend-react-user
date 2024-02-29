const FitOptions = ({ selectedFit, handleFitClick }) => {
  return (
    <div id="fitOptions" className="py-3">
      <h4 className="font-bold uppercase pb-1">Select the fit</h4>
      <div className="flex flex-row gap-4">
        <button
          className={`size ${selectedFit === 'Men/Unisex' ? 'selected' : ''}`}
          onClick={() => handleFitClick('Men/Unisex')}
        > Men/Unisex </button>
        <button
          className={`size ${selectedFit === 'Women' ? 'selected' : ''}`}
          onClick={() => handleFitClick('Women')}
        > Women </button>
        <button
          className={`size ${selectedFit === 'Child' ? 'selected' : ''}`}
          onClick={() => handleFitClick('Child')}
        > Child </button>
      </div>
    </div>
  );
};

export default FitOptions