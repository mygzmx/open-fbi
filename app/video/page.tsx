'use client';
import React, { useEffect, useRef, useState } from "react";
import Hls from "hls.js";
import styles from "./page.module.scss";
import { reelShortDecrypt } from "@/utils/reelshort";

const VideoPlayer = () => {
  // // eslint-disable-next-line react-hooks/rules-of-hooks
  // useEffect(() => {
  //   // 执行
  //   const ssss = "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"
  //   console.log('reelShortDecrypt -------------->', reelShortDecrypt(ssss));
  // }, [])

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [count, setCount] = useState(0)
  const hlsRef = useRef<Hls | null>(null);



  // 处理HLS流媒体
  useEffect(() => {
    const liststr = `https://v-mps.crazymaplestudios.com/vod-112094/a095e52d03da71f0ba1d86c6360c0102/211b77360e0a45488533330daf863ebd-da609d7a82f35662197b03aff1e1985c-sd.m3u8`;
    const list = liststr.split(',');
    const playSrc = list[count];
    document.title = `ep${count}`;

    if (!playSrc) return;

    if (!videoRef.current) return;

    // hls加载失败，切换到MP4播放
    const switchToMp4 = (errorType: string) => {
      // 销毁HLS实例
      if (hlsRef.current) {
        hlsRef.current.destroy();
        hlsRef.current = null;
      }
    };


    // 清理之前的HLS实例
    if (hlsRef.current) {
      hlsRef.current.destroy();
      hlsRef.current = null;
    }
    // 对于不支持的浏览器，使用hls.js
    if (Hls.isSupported()) {
      const hls = new Hls({
        enableWorker: true, // 启用Web Worker来处理HLS流，提高性能
        lowLatencyMode: true, // 低延迟模式，适合实时流媒体应用
        backBufferLength: 90, // 设置回退缓冲区的长度，单位为秒
      });
      hlsRef.current = hls;

      hls.loadSource(playSrc);
      hls.attachMedia(videoRef.current);

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        if (videoRef.current && videoRef.current.paused) {
          videoRef.current.play().catch(err => {
            console.warn('视频自动播放失败:', err);
          });
        }
      });

      hls.on(Hls.Events.ERROR, (event, data) => {
        if (data.fatal) {
          switch (data.type) {
            case Hls.ErrorTypes.NETWORK_ERROR:
              console.warn('HLS网络错误，尝试恢复...');
              switchToMp4('NETWORK_ERROR')
              break;
            case Hls.ErrorTypes.MEDIA_ERROR:
              console.warn('HLS媒体错误，尝试恢复...');
              switchToMp4('MEDIA_ERROR')
              break;
            default:
              console.warn('无法恢复的HLS错误');
              switchToMp4('ONTHER_ERROR')
              break;
          }
        }
      });
    }

    return () => {
      if (hlsRef.current) {
        hlsRef.current.destroy();
        hlsRef.current = null;
      }
    };
  }, [count]); // eslint-disable-line





  return <div style={{ width: '400px', height: '400px' }}>
    <div>{count}

      <button onClick={() => {
        setCount(count + 1)
      }}>ADD
      </button>

      <button onClick={() => {
        setCount(count - 1)
      }}>DEL
      </button>
    </div>
    <div className={styles.videoBox}>
      <video
        id={'videoId'}
        ref={videoRef}
        muted={true}
        preload="auto"
        autoPlay={true}
        poster={''}
        tabIndex={-1}
        controls={true}
        // disablePictureInPicture={true}
        // disableRemotePlayback
        // x-webkit-airplay="deny"
        playsInline={true}
        // webkit-playsinline="true"
        // x5-playsinline="true"
        // x5-video-player-type="h5"
        // x5-video-orientation="portraint"
        // controlsList={"nodownload noremoteplayback noplaybackrate foobar"}
        // onLoadStart={handleLoadStart}
        // onWaiting={handleWaiting}
        // onCanPlay={handleCanPlay}
        // onCanPlayThrough={handleCanPlayThrough}
        // onPlaying={handlePlaying}
        // onEnded={handleEnded}
        // onSeeking={handleSeeking}
        // onSeeked={handleSeeked}
        // onPlay={handlePlay}
        // onPause={handlePause}
        // onTimeUpdate={handleTimeUpdate}
      >
      </video>
    </div>
  </div>
}

export default VideoPlayer;

// onLoadStart - 浏览器开始加载资源时触发。
// onWaiting - 播放下一帧而需要缓冲时触发
// onCanPlay - 准备开始播放
// onCanPlayThrough - 可以正常播放且无需停顿和缓冲时触发
// onPlaying - 暂停或者在缓冲后准备重新开始播放时触发
// onEnded - 结束
// onSeeking - 重新定位进度时
// onSeeked - 重新定位进度后
// onPlay - 开始播放
// onPause - 暂停
// onProgress - 下载进度
// onDurationChange - 时长发生变化时触发
// onError - 监听视频错误
// onSuspend - 事件在浏览器读取媒体数据中止时触发
// onAbort - 终止加载时触发
// onEmptied - 当媒体遇到致命错误或媒体文件不可用或媒体播放列表为空时触发
// onStalled - 在浏览器尝试获取媒体数据且数据不可用时执行
// onLoadedMetadata - 视频的元数据加载后执行
// onLoadedData - 媒体的首帧已加载完成。
// onTimeUpdate - 事件在视频/音频（audio/video)当前的播放位置发送改变时触发
// onRateChange - 视频的播放速度事件
// onVolumeChange - 音量事件

// tabindex = -1  - 表示元素是可聚焦的,但是不能通过键盘导航来访问到该元素；
