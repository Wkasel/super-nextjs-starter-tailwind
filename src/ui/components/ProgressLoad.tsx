/* eslint-disable no-void */
import { useState, useCallback, useEffect } from 'react';

import Router from 'next/router';
import NProgress from 'nprogress';

let timer = null;

export const ProgressLoad = () => {
  const [state] = useState({
    color: '#FD243D',
    startPosition: 0.3,
    stopDelayMs: 200,
    height: 3,
  });

  const routeChangeStart = useCallback(() => {
    NProgress.set(state.startPosition);
    NProgress.start();
  }, [state]);
  const routeChangeEnd = useCallback(() => {
    clearTimeout(timer);
    timer = setTimeout(() => void NProgress.done(true), state.stopDelayMs);
  }, [state]);

  useEffect(() => {
    NProgress.configure({ easing: 'ease', speed: 500 });

    Router.events.on('routeChangeStart', routeChangeStart);
    Router.events.on('routeChangeComplete', routeChangeEnd);
    Router.events.on('routeChangeError', routeChangeEnd);
  }, []);

  return (
    <style jsx global>{`
      #nprogress {
        pointer-events: none;
      }
      #nprogress .bar {
        background: ${state.color};
        position: fixed;
        z-index: 9999;
        top: 0;
        left: 0;
        width: 100%;
        height: ${state.height}px;
      }
      #nprogress .peg {
        display: block;
        position: absolute;
        right: 0px;
        width: 100px;
        height: 100%;
        box-shadow: 0 0 10px ${state.color}, 0 0 5px ${state.color};
        opacity: 1;
        -webkit-transform: rotate(3deg) translate(0px, -4px);
        -ms-transform: rotate(3deg) translate(0px, -4px);
        transform: rotate(3deg) translate(0px, -4px);
      }
      #nprogress .spinner {
        display: 'block';
        position: fixed;
        z-index: 1031;
        top: 15px;
        right: 15px;
      }
      #nprogress .spinner-icon {
        width: 18px;
        height: 18px;
        box-sizing: border-box;
        border: solid 2px transparent;
        border-top-color: ${state.color};
        border-left-color: ${state.color};
        border-radius: 50%;
        -webkit-animation: nprogresss-spinner 400ms linear infinite;
        animation: nprogress-spinner 400ms linear infinite;
      }
      .nprogress-custom-parent {
        overflow: hidden;
        position: relative;
      }
      .nprogress-custom-parent #nprogress .spinner,
      .nprogress-custom-parent #nprogress .bar {
        position: absolute;
      }
      @-webkit-keyframes nprogress-spinner {
        0% {
          -webkit-transform: rotate(0deg);
        }
        100% {
          -webkit-transform: rotate(360deg);
        }
      }
      @keyframes nprogress-spinner {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    `}</style>
  );
};
