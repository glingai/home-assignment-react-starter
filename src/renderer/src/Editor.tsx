import { Box, Button, Stack, Typography, styled } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import Timeline from './Timeline';

const Video = styled('video')({
  width: '100%',
  height: 'auto',
});

const mockUrl = 'https://cdn.jsdelivr.net/npm/big-buck-bunny-1080p@0.0.6/video.mp4';
const videoTime = 30;

const Editor: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  const url = mockUrl;

  const videoElRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (videoElRef.current) {
        setCurrentTime(videoElRef.current.currentTime);
      }
    }, 33);
    return () => {
      clearInterval(interval);
    };
  }, []);

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
          <Video preload="auto" ref={videoElRef} src={url} />
          <Stack direction="row" spacing={2}>
            <Button variant="contained" onClick={togglePlay}>
              {isPlaying ? 'Pause' : 'Play'}
            </Button>
          </Stack>
          <div>
            <Timeline currentTime={currentTime} duration={videoTime} />
          </div>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Editor;
