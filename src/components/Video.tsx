export const Video = () => {
  return (
    <div style={{
      borderRadius: "30px",
      overflow: 'hidden',
    }}>
      <video loop autoPlay muted src={"/src/assets/demos.mp4"}/>
    </div>
  );
};
