import { Box, Button, Stack, Typography, styled } from '@mui/material';
import { useRef, useState } from 'react';

const Video = styled('video')({
  width: '100%',
  height: 'auto',
});

const mockUrl = 'https://cdn.jsdelivr.net/npm/big-buck-bunny-1080p@0.0.6/video.mp4';

const Editor: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const url = mockUrl;

  const videoElRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoElRef.current) {
      if (videoElRef.current.paused) {
        videoElRef.current.play();
        setIsPlaying(true);
      } else {
        videoElRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <Box my={4}>
      <Stack spacing={5}>
        <Typography variant="h3">Gling video editor</Typography>
        <Stack spacing={2}>
          <Video ref={videoElRef} src={url} />
          <Stack direction="row" spacing={2}>
            <Button variant="contained" onClick={togglePlay}>
              {isPlaying ? 'Pause' : 'Play'}
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Editor;
