function Question({ question, options, selectedOption, onOptionSelect, onNext }) {
  return (
    <div className="question-container">
      <h2>{question}</h2>
      <div className="options-container">
        {options.map((option, index) => (
          <button
            key={index}
            className={`option ${selectedOption === index ? 'selected' : ''}`}
            onClick={() => onOptionSelect(index)}
          >
            {option}
          </button>
        ))}
      </div>
      {selectedOption !== null && (
        <button className="next-button" onClick={onNext}>
          Next
        </button>
      )}
    </div>
  );
}

export default Question;

