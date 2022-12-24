// import imageHandler from '/Bibliophile-bro.svg';

const NotFound = () => {
  return (
    <div className="ImageWrapper">
      <img src="/Bibliophile-bro.svg" alt="error-empty" height={280}></img>
      <div className="image-body">
        <h1>Empty Notes</h1>
        <p>Please insert notes!</p>
      </div>
    </div>
  );
};

export default NotFound;
