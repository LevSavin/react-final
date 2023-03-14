export default function IconsWrapper({Icon, width = 18, height = 18, viewBox = "0 0 18 18", id = "icon", src = ""}: any) {
  return (
    <div className="wrapper" style={{width: width + "px", height: height + "px"}}>
      {src === ""
        ? <svg
            className="image"
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox={viewBox}
            id={id}
          >
            <Icon></Icon>
          </svg>
        : <img className="image" src={src} alt="icon" />
      } 
    </div>
  );
}
