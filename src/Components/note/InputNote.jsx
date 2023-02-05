const InputNote = ({ inputTitle, onInputTitle, inputContent, onInputContent, onSubmit}) => {
  return (
    <div className="input-note">
      <div className="input-header">
        <h1>Add Note</h1>
        <label>maximum letters : {50 - inputTitle.length}</label>
      </div>
      <form>
        <input placeholder="Insert Note Title..." value={inputTitle} onChange={onInputTitle}></input>
        <textarea placeholder="Insert Note Content..." value={inputContent} onChange={onInputContent}></textarea>

        <button onClick={onSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default InputNote;
