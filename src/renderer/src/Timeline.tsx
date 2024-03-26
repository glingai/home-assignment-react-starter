import styled from '@emotion/styled';
import { useEffect, useRef, useState } from 'react';

const Container = styled('div')({
  position: 'relative',
});

const Time = styled('div')({

});

const TimelineDiv = styled('div')({
  width: '100%',
  height: '50px',
  backgroundColor: 'lightgray',
  borderRadius: '5px',
});

const TimeIndicator = styled('div')<{ x: number }>((props) => ({
  position: 'absolute',
  top: 0,
  left: props.x,
  width: '2px',
  height: '100%',
  backgroundColor: 'red',
}));

interface Props {
  duration: number;
  currentTime: number;
}

const Timeline: React.FC<Props> = (props) => {
  const [timelineWidth, setTimelineWidth] = useState(0);

  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mutationObserver = new ResizeObserver(() => {
      if (timelineRef.current) {
        setTimelineWidth(timelineRef.current.offsetWidth);
      }
    });
    mutationObserver.observe(timelineRef.current!);
    return () => {
      mutationObserver.disconnect();
    };
  }, []);

  const secondWidth = () => props.duration / timelineWidth;

  const currentTimeX = props.currentTime / secondWidth();

  return (
    <Container>
      <Time>{props.currentTime}</Time>
      <TimelineDiv ref={timelineRef} />
      <TimeIndicator x={currentTimeX} />
    </Container>
  );
};

export default Timeline;
