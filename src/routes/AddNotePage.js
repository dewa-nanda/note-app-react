import InputNote from '../Components/note/InputNote';

const AddNotePage = (props) => {
  return (
    <>
      <InputNote inputTitle={props.inputTitle} onSubmit={props.onSubmit} onInputTitle={props.onInputTitle} inputContent={props.inputContent} onInputContent={props.onInputContent} />
    </>
  );
};

export default AddNotePage;
