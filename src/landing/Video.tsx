import styled from "styled-components";

const VideoContainer = styled.div`
  width: 100%;
  height: 80vh;
  overflow: hidden;
  background-color: #FF0000;
  position: relative;
  @media (max-width: 768px) {
    height: 50vh;
  }
`;

const VideoElement = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

function Video() {
  return (
    <VideoContainer>
      <VideoElement src="/promo.mov" autoPlay muted loop playsInline>
        <track kind="captions" label="Video" />
      </VideoElement>
    </VideoContainer>
  );
}

export default Video;
