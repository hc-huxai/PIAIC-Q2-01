type EmbeddedYTVideoProps = {
  videoSlug: string;
  width: string;
  height: string;
  className?: string;
};

const EmbeddedYTVideo = ({
  videoSlug,
  width,
  height,
  className
}: EmbeddedYTVideoProps) => {
  return (
    <iframe
    className={className}
      src={`https://www.youtube.com/embed/${videoSlug}?rel=0&showinfo=1&autoplay=0`}
      width={width}
      height={height}
      frameBorder="0"
      allowFullScreen={true}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    ></iframe>
  );
};

export default EmbeddedYTVideo